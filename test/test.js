const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET testing APIs ', () => {

    // sign up api test
    it('it should GET signup', () => {
        chai.request(app)
            .get('/signup')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            });
    });

    // login api test
    it('/GET should get Login', () => {
        chai.request(app)
        .get('/login')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
        });
    });

    // test for dashboard api
    it('/GET should get dashboard', () => {
        chai.request(app)
        .get('/dashboard')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
    
});