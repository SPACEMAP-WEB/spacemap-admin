import axios from 'axios';
import { notification } from 'antd';
import { qs } from 'app.modules/util';
import {
  API_GET_ACCESSTOKEN,
  API_GET_TOKENS,
  API_LOGIN,
} from 'app.modules/keyFactory';

axios.defaults.withCredentials = true;

class API {
  private readonly apiUrl: string;
  private readonly ver: string;

  constructor() {
    this.apiUrl = process.env.SPACEMAP_ADMIN_API_URI;
    this.ver = '';
  }

  async CALL({ headers = {}, url = '', method, data = null }) {
    try {
      const response: any = await axios({
        method,
        data,
        url: this.apiUrl + url,
        headers: {
          ...headers,
        },
      });

      return response;
    } catch (error) {
      const { message, status } = error.response.data;

      if (
        url !== API_LOGIN &&
        url !== API_GET_TOKENS &&
        message !== 'TokenExpiredError'
      ) {
        notification.error({
          message: 'error',
          description: message.length > 0 ? message : error.toString(),
        });
      }

      if (status === 401 && message === 'TokenExpiredError') {
        await axios({
          method: 'GET',
          url: this.apiUrl + API_GET_ACCESSTOKEN,
          headers: {
            ...headers,
          },
        });

        const response: any = await axios({
          method,
          data,
          url: this.apiUrl + url,
          headers: {
            ...headers,
          },
        });
        return response;
      }
      throw error;
    }
  }

  GET(urlData) {
    if (typeof urlData === 'object') {
      urlData = urlData.url + qs.stringURL(urlData.data);
    }
    return this.CALL({
      method: 'GET',
      url: this.ver + urlData,
    });
  }

  POST(params) {
    return this.CALL({
      ...params,
      method: 'POST',
      url: this.ver + params.url,
    });
  }

  PUT(params) {
    return this.CALL({
      ...params,
      method: 'PUT',
      url: this.ver + params.url,
    });
  }

  DELETE(params) {
    return this.CALL({
      ...params,
      method: 'DELETE',
      url: this.ver + params.url,
    });
  }
}

export default new API();
