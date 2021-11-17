import { axiosMockAdapterInstance } from '../App/Utils/axios'

axiosMockAdapterInstance.onAny('https://randomuser.me/api/')
    .reply(200, { results: [{ id: 1, name: "Chen Panker", email: 'chen@test.com' }] });