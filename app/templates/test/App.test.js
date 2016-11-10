import React from 'react';
  
import { shallow } from 'enzyme';

import App from '../src/App';

describe('Hello world', () => {

    it('says Hello world', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.text()).toBe('Hello world');
    });

});
