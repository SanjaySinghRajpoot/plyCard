const request = require('supertest');
const assert = require('assert');
const express = require('express');
const supertest = require('supertest');

const app = express();

describe('Content API', () => {
    it('GET /', async() => {
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

    it('GET /posts/:id ----> post with id', () => {});

    it('GET /posts/:id ----> 404 for not found', () => {});

})

