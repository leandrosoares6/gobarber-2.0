import request from 'supertest';
import { Connection, getRepository, getConnection } from 'typeorm';
import createTypeormConnection from '../database';

import Appointment from '../models/Appointment';

import app from '../app';

let connection: Connection;
const date = new Date();

describe('Appointment', () => {
  beforeAll(async () => {
    await createTypeormConnection();
    connection = getConnection();
    await connection.runMigrations();
  });

  beforeEach(async () => {
    await connection.query('DELETE FROM appointments');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to create new appointment', async () => {
    const appointmentsRepository = getRepository(Appointment);

    const response = await request(app).post('/appointments').send({
      provider: 'Leandro Neves',
      date: date.toISOString(),
    });

    const appointment = await appointmentsRepository.findOne({
      where: {
        provider: 'Leandro Neves',
      },
    });

    expect(appointment).toBeTruthy();

    expect(response.body).toMatchObject(
      expect.objectContaining({
        id: expect.any(String),
      }),
    );
  });

  it('should be able to list appointments', async () => {
    await request(app).post('/appointments').send({
      provider: 'Leandro Neves',
      date: date.toISOString(),
    });

    const response = await request(app).get('/appointments');

    expect(response.body).toEqual([
      expect.objectContaining({
        id: expect.any(String),
      }),
    ]);
  });
});
