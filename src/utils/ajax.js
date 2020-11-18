import axios from 'axios';
import _ from 'lodash';
import { config } from '../config/index';
import debugLog from "./debugLog";
axios.interceptors.request.use((request) => {
  debugLog('Starting Request', request);
  return request;
});

axios.interceptors.response.use((response) => {
  debugLog('Response:', response);
  return response;
});
let call;
export default (function () {
  // var ua = window.navigator.userAgent;
  const ajax = (method, url, option, isCancelable, baseUrl) => {
    const options = _.isUndefined(option) ? {} : option;
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data' 
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (_.has(options, 'headers')) {
      Object.keys(options.headers).forEach((item) => {
        headers[item] = options.headers[item];
      });
    }
    // console.log("url",method, url, option, isCancelable, baseUrl);
    if (call && isCancelable) {
      
      call.cancel("Only one request allowed at a time.");
    }
    call = axios.CancelToken.source();
    options.cancelToken = call.token;
    options.headers = headers;
    options.method = method;
    options.timeout = 30000;
    options.url = url;
    if(baseUrl)
      options.baseURL = baseUrl;
    else
      options.baseURL = config.backend_api_base_url;
    return axios(options)
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return error.response;
        },
      )
      .catch((error) => {
        
        return error.response;
      });
  };

  ['get', 'put', 'post', 'delete', 'patch'].forEach((method) => {
    ajax[method] = function (url, options,isCancelable, baseUrl) {
      return ajax(method, url, options, isCancelable, baseUrl);
    };
  });

  return ajax;
}());
