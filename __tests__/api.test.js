import app from '../app.js';
import request from 'supertest';

describe('POST /sleep', () => {
  describe("given a userId , hours and timestamp" , () => {
    
    test('should respond with a 201 status code', async () => { 
      const res = await request(app)
        .post('/sleep/')
        .send({ userId : 'user_01', hours: 8 , timestamp : '02:00:00' });

      expect(res.statusCode).toBe(201);
    })

    test("should specify json in the content type header" , async () => {
      const res = await request(app)
        .post("/sleep/")
        .send({ userId : 'user_01', hours: 8 , timestamp : '02:00:00' });

      expect(res.headers['content-type']).toEqual(expect.stringContaining("json"));
    })

  })

  describe("when the userId , hours and hours is missing" , () => {

    test("should respond with a status code of 400" ,  async () => {
      const bodyData = [
        { userId : 'user_01', hours: 8 },
        { userId : 'user_01' , timestamp : '02:00:00' },
        { hours: 8 , timestamp : '02:00:00' },
        {}
      ];

      for(const body of bodyData){
        const res = await request(app)
          .post('/sleep/')
          .send(body);
  
          expect(res.statusCode).toBe(400);
      }
    })

  })
});