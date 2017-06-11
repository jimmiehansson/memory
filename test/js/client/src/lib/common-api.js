'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: memory
 * Filename: common-api.js by jimmie
 * Created: 2017-05-31 @ 14:54
 * Product of: memory
 * // -------------------------------------------------
 * Make sure this file is part of its proper namespace
 * and project before moving on.
 * // -------------------------------------------------
 * Code-tags conventionally should be used (See below) :
 * TODO - Something that someone need to do.
 * DOING - Self remind for what you are doing.
 * CONSIDER - Reminder to consider a change or addition.
 * BUG - The below section of a code cause a bug.
 * FIXME - The below section of code need to be fixed.
 * HACK - The below section of code is a workaround.
 * XXX - Any notation important enough to consider implementing.
 * CLARIFY - Very incomprehensible section of code below.
 *
 * Created by jimmie on (2017-05-31).
 *
 * Repository link: https://github.com/jimmiehansson/memory.git
 */


/**
 * DOING: Import test associated libraries
 * here to separate from the rest of the code.
 */
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
let request = chai.request('http://tretton37.com');



mocha.describe('Testing file: /js/client/src/lib/common-api.js', () => {


    /**
     * DOING: Should test response for request of
     * generic url and return.
     */
    mocha.describe('Behaviors @request->uri::generic', () =>{

        mocha.describe('Assert normal', () => {

            mocha.it('should GET an object from url with 200 response and no errors from tretton37.com', (done) => {
                request
                    .get('/assets/js/meet-ninjas.js')
                    .end((err, res) => {
                        chai.expect(res.status).to.equal(200);
                        chai.expect(err).to.equal(null);
                        chai.expect(res.body).to.be.a('object');
                        done();
                });
            });
        });

        mocha.describe('Assert error', () => {

            mocha.it('should GET a 200 response on erroneous request from tretton37.com', (done) => {
                request
                    .get('/assets/js')
                    .end((err, res) => {
                        chai.expect(res.status).to.equal(200);
                        chai.expect(err).to.equal(null);
                        chai.expect(res.body).to.be.a('object');
                        done();
                });
            });
        });

    });


    /**
     * DOING: Should test response for request of
     * generic url and return.
     */
    mocha.describe('Behaviors @request->uri::generic', () =>{

        mocha.describe('Assert normal', () => {

            mocha.it('should GET an object from url with 200 response and no errors from tretton37.com', (done) => {
                request
                    .get('/assets/js/meet-ninjas.js')
                    .end((err, res) => {
                        chai.expect(res.status).to.equal(200);
                        chai.expect(err).to.equal(null);
                        chai.expect(res.body).to.be.a('object');
                        done();
                    });
            });
        });

        mocha.describe('Assert error', () => {

            mocha.it('should GET a 200 response on error from tretton37.com', (done) => {
                request
                    .get('/assets/js')
                    .end((err, res) => {
                        chai.expect(res.status).to.equal(200);
                        chai.expect(err).to.equal(null);
                        chai.expect(res.body).to.be.a('object');
                        done();
                    });
            });
        });

    });












});

