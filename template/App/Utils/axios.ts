import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

let isAxioMock = true;

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });

export default isAxioMock ? axiosMockInstance : axiosLiveInstance;