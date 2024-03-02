'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const chai_1 = require('chai');
const database_1 = require('../src/database');
describe('Database Configuration', () => {
  it('should have a valid database configuration', () => {
    (0, chai_1.expect)(database_1.pool).to.exist;
    (0, chai_1.expect)(database_1.pool).to.be.an('object');
    const dbConfig = database_1.pool.options;
    (0, chai_1.expect)(dbConfig).to.be.an('object');
    (0, chai_1.expect)(dbConfig).to.have.property('user').that.is.a('string');
    (0, chai_1.expect)(dbConfig).to.have.property('host').that.is.a('string');
    (0, chai_1.expect)(dbConfig).to.have.property('password').that.is.a('string');
    (0, chai_1.expect)(dbConfig).to.have.property('database').that.is.a('string');
    (0, chai_1.expect)(dbConfig).to.have.property('port').that.is.a('number');
  });
});
