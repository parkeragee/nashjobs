'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('job service', () => {
  it('registered the jobs service', () => {
    assert.ok(app.service('jobs'));
  });
});
