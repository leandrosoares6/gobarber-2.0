import request from 'supertest';
import { isUuid } from 'uuidv4';
import { startOfHour } from 'date-fns';
import app from '../app';

describe('Appointment', () => {
  it('should be able to create a new appointment', async () => {
    const date = new Date();
    const parsedDate = startOfHour(date);

    const response = await request(app).post('/appointments').send({
      provider: 'Leandro',
      date: date.toISOString(),
    });

    expect(isUuid(response.body.id)).toBe(true);

    expect(response.body).toMatchObject({
      provider: 'Leandro',
      date: parsedDate.toISOString(),
    });
  });

  it('should not permitted create appointments at the same time', async () => {
    const date = new Date();
    const parsedDate = startOfHour(date);

    const response = await request(app).post('/appointments').send({
      provider: 'Leandro',
      date: parsedDate.toISOString(),
    });

    expect(response.status).toBe(400);
  });

  it('should return a appointment list', async () => {
    const response = await request(app).get('/appointments');

    expect(response.status).toBe(200);

    const responseParsed = JSON.parse(response.text);
    expect(responseParsed).toEqual(
      expect.arrayContaining([
        /* expect.objectContaining({
          provider: expect.any(String),
        }), */
      ]),
    );
  });
});
