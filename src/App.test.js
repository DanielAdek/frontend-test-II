import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { mount , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Home from '../src/layouts/Home';
import Gif from '../src/layouts/Gif';
import Spotify from '../src/layouts/Spotify';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  describe('Home Page', () => {
    test('should exist', () => {
      const wrapper = mount(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(wrapper.exists()).toEqual(true);
    });
  });

  describe('Home Page', () => {
    test('should exist', () => {
      const wrapper = shallow(
          <Home />
      );
      expect(wrapper.exists()).toEqual(true);
      expect(wrapper.find('header').exists()).toEqual(true);
      expect(wrapper.find('a').exists()).toEqual(true);
    });
  });

  describe('Gif Page', () => {
    test('should exist', () => {
      const wrapper = mount(
        <BrowserRouter>
          <Gif />
        </BrowserRouter>
      );
      expect(wrapper.exists()).toEqual(true);
      expect(wrapper.find('input').exists()).toEqual(true);
    });
  });

  describe('Spotify Page', () => {
    test('should exist', () => {
      const wrapper = mount(
        <BrowserRouter>
          <Spotify />
        </BrowserRouter>
      );
      expect(wrapper.exists()).toEqual(true);
      expect(wrapper.find('a').exists()).toEqual(true);
    });
  });
});