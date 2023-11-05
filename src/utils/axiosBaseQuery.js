import axios from 'axios';
import { API_URL } from 'constant/Varible';

import { getStoragedItem } from './helper';

const axiosParameterBuilder = (config) => {
  const { method = 'GET', headers = {}, data = {} } = config;

  // #region HEADERS
  const headerParameters = {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': origin,
    'Content-Type': 'application/json',
    ...headers,
  };

  const token = getStoragedItem('clientToken');

  if (token) {
    headerParameters.Authorization = `Bearer ${token}`;
  }
  // #endregion HEADERS

  // #region DATA
  let requestData = data;

  if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(method)) {
    requestData = JSON.stringify(data);
  }
  // #endregion DATA

  return {
    data: requestData,
    headers: headerParameters,
    method,
  };
};

const apiURLBuilder = (params) => {
  const { baseUrl = API_URL, path = '' } = params;
  return `${baseUrl}/${path}`;
};

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: API_URL }) =>
  async (queryParams) => {
    try {
      const { path, ...rest } = queryParams;

      const params = axiosParameterBuilder(rest);
      const requestUrl = apiURLBuilder({ baseUrl, path });

      const parameters = {
        ...params,
        responseType: rest.download ? 'blob' : null,
      };

      const { data } = await axios(requestUrl, parameters);
      if (rest.download) {
        const date = new Date();
        const outputFilename = rest.fileName
          ? `${rest.fileName}.${rest.extension}`
          : `MyReport${date.toISOString().substring(0, 10)}.${rest.extension}`;
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', outputFilename);
        document.body.appendChild(link);
        link.click();
      }
      return { data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const apiResHandler = (promise, callback = () => {}, failCallback = () => {}) => {
  promise
    .then((res) => {
      const { data, error } = res;
      if (!data && error) throw new Error(error?.data?.Message || 'Something went wrong!');
      const { data: resData, message, status = true } = data;
      if (!status) {
        failCallback?.({ message });
        return;
      }
      callback?.(resData);
    })
    .catch((err) => {
      const { message } = err;
      failCallback?.({ message });
    });
};
