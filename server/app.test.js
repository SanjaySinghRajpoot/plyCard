const request = require('supertest');
const assert = require('assert');
const express = require('express');
const supertest = require('supertest');
const { response } = require('express');

const app = express();

// complete these test cases
describe('Content API', () => {
    it('GET /', async () => {
        await request(app)
            .get('/')
            .expect(200)
            .expect('Content-type', /json/)
            .then((response) => {
                expect((response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name: expect.any(String),
                            message: expect.any(String),
                        })
                    ])
                ))
            })
    });

    it('GET /:id --> specific post', async () => {
        await request(app)
            .get('/1')
            .expect(200)
            .expect('Content-type', /json/)
            .then((response) => {
                expect((response.body).toEqual(
                    expect.objectContaining({
                        name: expect.any(String),
                        message: expect.any(String),
                    })
                ))
            })
    });

    it('POST / --> create post', async () => {
        await request(app)
            .post('/')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: "test",
                message: "test",
                tags: "test",
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        title: "test",
                        message: "test",
                        tags: "test",
                    })
                )
            })
    });

    it('GET /creator', () => {
        await request(app)
            .get('/creator')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .expect('Content-type', /json/)
            .then((response) => {
                expect((response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name: expect.any(String),
                        })
                    ])
                ))
            })
    });

    it('delete post', (done) => {
        await request(app)
         .delete(`/${post.id}`)
         .set('Authorization', `Bearer ${token}`)
         .expect('Content-Type', /json/)
         .expect((res) => {
          expect(res.body.message).toEqual('Your post successfully deleted.');
         })
         .expect(200, done);
       });

    // it('GET /posts/:id ----> 404 for not found', () => { });

})

