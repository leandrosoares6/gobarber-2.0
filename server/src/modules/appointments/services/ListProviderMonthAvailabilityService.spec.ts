import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list days of month availability from provider', async () => {
    const hourStart = 8;

    const schedule = Array.from({ length: 10 }, (_, i) => i + hourStart);

    Promise.all(
      schedule.map(hour =>
        fakeAppointmentsRepository.create({
          user_id: 'user-id',
          provider_id: 'provider-id',
          date: new Date(2020, 4, 20, hour, 0, 0),
        }),
      ),
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'provider-id',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
