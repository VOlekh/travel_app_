import {app} from '../src/server/server';
const supertest = require('supertest');
const request = supertest(app)

it('Testing default endpoint', async done => {
    const response = await request.get('/')
    expect(response.status).toBe(200) // check if request was successfull
    expect(response.body).toBeDefined(); 
    done()
})