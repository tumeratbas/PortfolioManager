import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
chai.should();

describe('Auth', () => {
    describe('POST /auth/register', () => {
        it('should register a new user', (done) => {
            chai.request(app)
                .post('/auth/register')
                .send({ name: 'Test User', email: 'test@tumer.com', password: '123456' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('token');
                    done();
                });
        });
    });

    describe('POST /auth/login', () => {
        it('should login a user', (done) => {
            chai.request(app)
                .post('/auth/login')
                .send({ email: 'test@tumer.com', password: '123456' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('token');
                    done();
                });
        });
    });
});
