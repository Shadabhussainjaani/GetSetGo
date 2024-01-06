import queryString from 'query-string';
import request from '../../utils/fetch';

export const getAllFlightsDetailsApi = async () => {
  var data = await request.get(`4829d4ab0e96bfab50e7`);
  return data;
};
