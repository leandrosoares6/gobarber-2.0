import request from 'supertest';
import { isUuid } from 'uuidv4';
import app from '../app';

describe('Appointment', () => {
  it('should be able to create a new appointment', async () => {
    const date = new Date();
    const response = await request(app).post('/appointments').send({
      provider: 'Leandro',
      date: date.toISOString(),
    });

    expect(isUuid(response.body.id)).toBe(true);

    expect(response.body).toMatchObject({
      provider: 'Leandro',
      date: date.toISOString(),
    });
  });
});
