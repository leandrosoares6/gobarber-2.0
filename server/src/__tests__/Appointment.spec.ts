import request from 'supertest';
import { isUuid } from 'uuidv4';
import { startOfHour, isEqual } from 'date-fns';
import app from '../app';
import appointmentsRouter from '../routes/appointments.routes';

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
});
