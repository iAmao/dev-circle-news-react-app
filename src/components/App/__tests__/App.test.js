import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import store from '../../../store';

import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App ', () => {
  describe('Snapshot', () => {
    it('should render app component with children', () => {
      const component = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>
      ).toJSON()
      expect(component).toMatchSnapshot();
    });
  });

  describe('Unit', () => {
    it('should display 2 news', () => {
      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(component.find('.news')).toHaveLength(2);
    });
  });
});

