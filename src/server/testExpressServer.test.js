//https://zellwk.com/blog/endpoint-testing/
import  { app } from './server';
//const app = require('./server.js') // Link to your server file
const supertest = require('supertest');
const { response } = require('express');
const request = supertest(app)
 it('Testing /picture endpoint', async done => {
   const response = await request.get('./picture')
   expect(response.status).toBe(200) // check if request was successfull
   expect(response.body).toBeDefined(); 
   done()
 })