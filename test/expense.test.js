import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
chai.should();

let token;

before((done) => {
    chai.request(app)
        .post('/auth/login')
        .send({ email: 'test@tumer.com', password: '123456' })
        .end((err, res) => {
            token = res.body.token;
            done();
        });
});

describe('Expenses', () => {
    describe('GET /expenses', () => {
        it('should get all expenses', (done) => {
            chai.request(app)
                .get('/expenses')
                .set('x-auth-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

});
