import { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import appointmentRouter from '@modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
