import React, { useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

import { AppContext } from '../../common/AppContext';
import Form from './style';
import SubmitButton from '../SubmitButton';
import Confirmation from '../Confirmation/Confirmation';

const CreateInvoice = () => {
  const initialState = {
    nombre: '',
    cedula: '',
    direccion: '',
    telefono: '',
    paciente_id: '',
    consultas: [''],
    observacion: '',
    metodo_pago: '',
    moneda: '',
    fecha: '',
    monto: '',
    iva: 0,
    total: 0,
    pacient_consults: [''],
    isLoading: false,
    hasError: false,
    successful: false,
    isPacientExist: false,
    currencies: [],
    price_converter: 1,
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA': {
        return {
          ...state,
          [action.input_name]: action.input_value,
        };
      }
      case 'ADD_CONSULT': {
        return {
          ...state,
          consultas: action.consultas,
        };
      }
      case 'UPDATE_CONSULT': {
        const consultas = [...state.consultas];
        consultas[action.index] = action.consult;
        return {
          ...state,
          consultas,
        };
      }
      case 'DELETE_CONSULT': {
        const consultas = [...state.consultas];
        consultas.splice(action.index - 1, 1);
        return {
          ...state,
          consultas,
        };
      }
      case 'VALIDATE_PACIENT': {
        return {
          ...state,
          isPacientExist: action.value,
        };
      }
      case 'SET_PACIENT_CONSULTS': {
        return {
          ...state,
          pacient_consults: action.pacient_consults,
        };
      }
      case 'SET_CURRENCIES': {
        return {
          ...state,
          currencies: action.currencies,
        };
      }
      case 'SET_PRICE_CONVERTER': {
        const valor_usd = state.currencies.filter(item => item.moneda == action.currency)[0]
          .valor_usd;
        return {
          ...state,
          moneda: action.currency,
          price_converter: valor_usd,
        };
      }
      case 'CALC_SUB_TOTAL': {
        let monto = 0;
        state.consultas.map(item => (monto += parseInt(item.price)));

        return {
          ...state,
          monto: monto ? monto : 0,
        };
      }
      case 'CALC_TOTAL': {
        return {
          ...state,
          total: state.monto * state.price_converter,
        };
      }
      case 'CREATE_INVOICE': {
        return {};
      }
      case 'LOADING': {
        return {
          ...state,
          isLoading: action.value,
        };
      }
      case 'ERROR': {
        return {
          ...state,
          hasError: action.value,
        };
      }
      case 'SUCCESS': {
        return {
          ...state,
          successful: action.value,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { user } = useContext(AppContext);
  // Consultas del paciente
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3000/consultas?full_data=true&pacient=${state.paciente_id}&state=unpaid`,
        {
          headers: { token: user.token },
        }
      );
      if (response.data.length !== 0) {
        dispatch({
          type: 'SET_PACIENT_CONSULTS',
          pacient_consults: response.data,
        });
        dispatch({
          type: 'VALIDATE_PACIENT',
          value: true,
        });
      } else {
        dispatch({
          type: 'VALIDATE_PACIENT',
          value: false,
        });
      }
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [state.paciente_id]);

  // Cotizaciones
  useEffect(() => {
    async function fetchCurrency() {
      const response = await axios.get(`http://localhost:3000/cotizaciones`, {
        headers: { token: user.token },
      });
      if (response.data) {
        dispatch({
          type: 'SET_CURRENCIES',
          currencies: response.data,
        });
      }
    }
    fetchCurrency();
  }, []);

  // Totales
  useEffect(() => {
    dispatch({ type: 'CALC_SUB_TOTAL' });
  }, [state.consultas]);

  useEffect(() => {
    dispatch({ type: 'CALC_TOTAL' });
  }, [state.moneda, state.price_converter, state.consultas]);

  // handlers
  const inputHandler = e => {
    dispatch({
      type: 'SET_DATA',
      input_name: e.target.name,
      input_value: e.target.value,
    });
  };

  const addConsult = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CONSULT',
      consultas: [...state.consultas, { id: null, price: 0.0 }],
    });
  };

  const deleteConsult = (e, index) => {
    e.preventDefault();

    dispatch({
      type: 'DELETE_CONSULT',
      index,
    });
  };

  const consultHandler = (e, index) => {
    const value = e.target.value;
    const price = state.pacient_consults.filter(item => item.id == value)[0].examen.precio;

    dispatch({
      type: 'UPDATE_CONSULT',
      index,
      consult: {
        id: value,
        price,
      },
    });
  };

  const currencyHandler = e => {
    dispatch({
      type: 'SET_PRICE_CONVERTER',
      currency: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch({ type: 'LOADING', value: true });

    async function submitForm() {
      const response = await axios.post(
        `http://localhost:3000/comprobantes`,
        {
          nombre: state.nombre,
          cedula: state.cedula,
          direccion: state.direccion,
          telefono: state.telefono,
          paciente_id: state.paciente_id,
          consultas: state.consultas,
          observacion: state.observacion,
          metodo_pago: state.metodo_pago,
          moneda: state.moneda,
          fecha: state.fecha,
          monto: state.monto,
          iva: state.iva,
          total: state.total,
        },
        {
          headers: { token: user.token },
        }
      );

      dispatch({ type: 'LOADING', value: false });

      response.status === 201
        ? dispatch({ type: 'SUCCESS', value: true })
        : dispatch({ type: 'ERROR', value: true });
    }
    submitForm();
  };

  if (state.successful) {
    return (
      <Form>
        <Confirmation message="Pago registrado exitosamente" success={true} />
      </Form>
    );
  }

  return !state.isLoading ? (
    <Form className="wrap" onSubmit={submitHandler}>
      <div className="payment_info wrap">
        <input
          onChange={inputHandler}
          value={state.nombre}
          type="text"
          name="nombre"
          placeholder="Nombre/Razón social"
        />
        <input
          onChange={inputHandler}
          value={state.cedula}
          type="text"
          name="cedula"
          placeholder="CI/RIF"
        />
        <input
          onChange={inputHandler}
          value={state.direccion}
          type="text"
          name="direccion"
          placeholder="Dirección fiscal"
        />
        <input
          onChange={inputHandler}
          value={state.telefono}
          type="text"
          name="telefono"
          placeholder="Teléfono"
        />
      </div>
      {state.pacient_id != '' && !state.isPacientExist && (
        <p>El paciente no existe o no posee consultas</p>
      )}
      <input
        onChange={inputHandler}
        value={state.paciente_id}
        type="text"
        name="paciente_id"
        placeholder="Cédula del paciente"
      />
      {state.pacient_id != '' && state.isPacientExist ? (
        <button className="add_pacient">
          <i className="fas fa-user-check"></i>
        </button>
      ) : (
        <button className="add_pacient false">
          <i className="fas fa-user-times"></i>
        </button>
      )}
      {state.consultas.map((item, i) => (
        <div className="consult wrap" key={i}>
          <select
            name="consulta"
            onChange={e => {
              consultHandler(e, i);
            }}
          >
            <option value="">Consulta</option>
            {state.pacient_consults.map(item => {
              if (item.examen && state.isPacientExist) {
                return (
                  <option key={item.id + item.paciente.nombre} value={item.id}>
                    {`${item.examen.nombre} ${item.fecha}`}
                  </option>
                );
              }
              return '';
            })}
          </select>
          <span id="amount">{item.price || '00.00'}</span>
          <button onClick={addConsult}>
            <i className="fas fa-plus-circle"></i>
          </button>
          {state.consultas.length > 1 && (
            <button onClick={e => deleteConsult(e, i)}>
              <i className="fas fa-minus-circle delete"></i>
            </button>
          )}
        </div>
      ))}
      <input type="text" name="observacion" onChange={inputHandler} placeholder="Observación" />
      <div className="invoice_info wrap">
        <select name="metodo_pago" onChange={inputHandler}>
          <option value="">Método de pago</option>
          <option value="Débito">Tarjeta de débito</option>
          <option value="Crédito">Tarjeta de crédito</option>
          <option value="Efectivo">Efectivo</option>
        </select>
        <select name="moneda" onChange={currencyHandler}>
          <option value="">Moneda</option>
          {state.currencies.map(item => (
            <option key={item.id} value={item.moneda}>
              {item.moneda}
            </option>
          ))}
        </select>
        <input
          onChange={inputHandler}
          value={state.fecha}
          type="date"
          name="fecha"
          placeholder="Fecha"
        />
        <input value={state.monto} type="text" name="monto" placeholder="Monto" disabled />
        <input value={state.iva} type="text" name="iva" placeholder="IVA" disabled />
        <input
          value={new Intl.NumberFormat(['de-DE']).format(state.total)}
          type="text"
          name="total"
          placeholder="Total"
          disabled
        />
      </div>
      <SubmitButton name="Guardar" loading="false" />
    </Form>
  ) : (
    <Confirmation message="Cargando" loading={true} />
  );
};

export default CreateInvoice;
