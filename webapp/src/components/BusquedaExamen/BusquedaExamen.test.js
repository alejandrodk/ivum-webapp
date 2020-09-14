import React from 'react';
import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BusquedaExamen from './BusquedaExamen';
import {AppContext} from '../../common/AppContext';
import {act} from 'react-dom/test-utils';

configure({
  adapter: new Adapter(),
});

describe('Test component <BusquedaExamen>', () => {
  const context = {
    user: {
      id: 1,
      tipo: 'admin',
      cedula: 999999,
      token: 'token',
    },
  };
  const Components = () => {
    return (
      <AppContext.Provider value={context}>
        <BusquedaExamen />
      </AppContext.Provider>
    );
  };

  test('Testing search input', () => {
    const wrapper = mount(<Components />);
    act(() => {
      // wrapper.find('SearchBar').props().stateHandler('tiro');
      // const event = new Event('click');
      // wrapper.find('button').getDOMNode().dispatchEvent(event);
      wrapper.find('SearchBar').props().stateHandler('tiro');
    });
    wrapper.update();
    console.log(wrapper.find('input').text());
  });
});
