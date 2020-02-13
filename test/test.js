const assert = require('chai').assert;
const app = require('../index');

describe('TDD test Demo', () => {
  it('It should return welcome', () => {
    assert.equal(app(4, 8), 'welcome');
  });
});
