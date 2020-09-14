import React from 'react';
import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({
  adapter: new Adapter(),
});
/*
shallow: renderizado superficial, cada componente se renderiza de
forma separada, ideal para componentes unicos.
Los componentes tienen contexto propio.
airbnb.io/enzyme/docs/api/shallow.html

mount: Apis, HOC, Enzyme intenta emular el entorno de un navegador,
Las modificaciones del DOM afectan el contexto de todos los test.

render: Transforma nuestros componentes en marcado HTML,
tal cual como lo hace react.

*/
describe('Test component <App>', () => {
  test('Testing component rendering', () => {
   /*  const wrapper = shallow(<App />);
    console.log(wrapper.html()); */
  });
});
