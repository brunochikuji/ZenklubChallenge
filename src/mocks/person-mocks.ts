import {IPerson, IAvailability} from "../app/interfaces/person";

export const AVAILABILITY_MOCK: IAvailability = {
  date: '2021-08-19',
  times: [
    {available: true, time: "08:00"},
    {available: false, time: "08:30"}
  ]
}

export const PERSON_MOCK: IPerson = {
  id: '123456789',
  description: "Loem ipsum",
  location: "São Paulo",
  fullName: "Joseph Stark",
  price: {
    oneHour: 45,
    halfHour: 80
  },
  imageUrl: 'https://zenklub.com.br/static/professionals/60509a974348777ea8442949/e3b7316b7a7a37d5fba7bfa38a89c7a323452963-180x180.jpeg',
  rating: {
    value: 3.5,
    total: 28
  },
  availabilities: [
    Object.create(AVAILABILITY_MOCK), AVAILABILITY_MOCK,
    AVAILABILITY_MOCK, AVAILABILITY_MOCK,
    AVAILABILITY_MOCK, AVAILABILITY_MOCK,
    AVAILABILITY_MOCK, AVAILABILITY_MOCK,
    AVAILABILITY_MOCK
  ],
  specialty: "Psychologist"
}
