import { expect } from 'chai';
import { pool } from '../src/database';

describe('Database Configuration', () => {
  it('should have a valid database configuration', () => {
    expect(pool).to.exist;
    expect(pool).to.be.an('object');

    const dbConfig = (pool as any).options;
    expect(dbConfig).to.be.an('object');

    expect(dbConfig).to.have.property('user').that.is.a('string');
    expect(dbConfig).to.have.property('host').that.is.a('string');
    expect(dbConfig).to.have.property('password').that.is.a('string');
    expect(dbConfig).to.have.property('database').that.is.a('string');
    expect(dbConfig).to.have.property('port').that.is.a('number');
  });
});
