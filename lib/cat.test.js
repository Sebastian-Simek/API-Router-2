import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('GETs', async () => {
  const { text } = await request(app).get('/api/cats')
  expect(JSON.parse(text)).toEqual([{name: 'Marshal', Cuteness: 11}])
});

it('POST', async () => {
  const res = await request(app).post('/api/cats').send({name: 'Snickers', taste: 9});
  expect(res.status).toBe(200);
  expect(res.text).toBe('success! Good job you are good at this!')
});
it('DELETE', async () => {
  const res = await request(app).delete('/api/cats');
  expect(res.status).toBe(200)
  expect(res.text).toBe('no deleting for you!')
});
it('PUT', async () => {
  const res = await request(app).put('/api/cats').send({name: 'Marshal', Cuteness: 11, newName: 'Starburst'});
  expect(JSON.parse(res.text)).toEqual(expect.arrayContaining([{name: 'Starburst', Cuteness: 11}]))
});
it('fake', async () => {
  await request(app).patch('/api/cats').expect(404)
});
