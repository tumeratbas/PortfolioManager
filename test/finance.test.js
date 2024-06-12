import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
const should = chai.should();

describe('Finance', () => {
  it('should search for company data', (done) => {
    chai.request(app)
      .get('/finance/search/AA')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
