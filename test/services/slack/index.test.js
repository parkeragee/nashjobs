'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('slack service', () => {
  it('registered the slacks service', () => {
    assert.ok(app.service('slacks'));
  });
});
