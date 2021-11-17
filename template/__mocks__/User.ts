import { axiosMockAdapterInstance } from '../App/Utils/axios'

axiosMockAdapterInstance.onAny('')
    .reply(200, { results: [{ id: 1, name: "Chen Panker", email: 'chen@test.com' }] });