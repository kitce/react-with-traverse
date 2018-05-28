import {expect} from 'chai';
import {mount} from 'enzyme';
import {describe, it} from 'mocha';
import React from 'react';
import Highlight from './Highlight';

const debug = require('debug')('test:highlight');

describe('Highlight', function () {
  it('should highlight "Hello" and "World"', () => {
    const keywords = ['Hello', 'World'];
    const component = (
      <Highlight keywords={keywords}>
        <span>Hello</span>
        World, the following will not be highlighted
      </Highlight>
    );
    const wrapper = mount(component);
    debug('wrapper', wrapper.debug());
    const highlighted = wrapper.find('.highlight');
    expect(highlighted).to.have.length(2);
    expect(highlighted.at(0).text()).equal('Hello');
    expect(highlighted.at(1).text()).equal('World');
  });

  it('should highlight "Hello" and "world"', () => {
    const keywords = ['Hello', 'World'];
    const component = (
      // lowercase "world"
      <Highlight caseInsensitive keywords={keywords}>
        <span>Hello</span>
        world, the following will not be highlighted
      </Highlight>
    );
    const wrapper = mount(component);
    debug('wrapper', wrapper.debug());
    const highlighted = wrapper.find('.highlight');
    expect(highlighted).to.have.length(2);
    expect(highlighted.at(0).text()).equal('Hello');
    expect(highlighted.at(1).text()).equal('world');
  });

  it('should highlight "Hello" only', () => {
    const keywords = ['Hello', 'World'];
    const component = (
      // lowercase "world"
      <Highlight keywords={keywords}>
        <span>Hello</span>
        world, the following will not be highlighted
      </Highlight>
    );
    const wrapper = mount(component);
    debug('wrapper', wrapper.debug());
    const highlighted = wrapper.find('.highlight');
    expect(highlighted).to.have.length(1);
    expect(highlighted.at(0).text()).equal('Hello');
  });

  it('should highlight nothing', () => {
    const keywords = ['Hello', 'World'];
    const component = (
      <Highlight disabled keywords={keywords}>
        <span>Hello</span>
        World, the following will not be highlighted
      </Highlight>
    );
    const wrapper = mount(component);
    debug('wrapper', wrapper.debug());
    const highlighted = wrapper.find('.highlight');
    expect(highlighted).to.have.length(0);
  });
});
