import {expect} from 'chai';
import {mount} from 'enzyme';
import {describe, it} from 'mocha';
import React from 'react';
import Censor from './Censor';

const debug = require('debug')('test:censor');

describe('Censor', function () {
  it('should censor "Fuck" with "*"', () => {
    const keywords = ['Fuck'];
    const component = (
      <Censor keywords={keywords}>
        Fuck you
      </Censor>
    );
    const wrapper = mount(<div>{component}</div>);
    debug('wrapper', wrapper.debug());
    expect(wrapper.text()).equal('F**k you');
  });

  it('should censor "Fuck" with "?"', () => {
    const keywords = ['Fuck'];
    const component = (
      <Censor keywords={keywords} replacement="?">
        Fuck you
      </Censor>
    );
    const wrapper = mount(<div>{component}</div>);
    debug('wrapper', wrapper.debug());
    expect(wrapper.text()).equal('F??k you');
  });

  it('should censor nothing', () => {
    const keywords = ['Fuck'];
    const component = (
      <Censor disabled keywords={keywords}>
        Fuck you
      </Censor>
    );
    const wrapper = mount(<div>{component}</div>);
    debug('wrapper', wrapper.debug());
    expect(wrapper.text()).equal('Fuck you');
  });
});
