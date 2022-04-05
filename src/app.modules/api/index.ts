import axios from 'axios';
import { notification } from 'antd';
import { qs } from 'app.modules/util';

axios.defaults.withCredentials = true;

class API {
  private readonly apiUrl: string;
  private readonly ver: string;

  constructor() {}

  async CALL({ headers = {}, url = '', method, data = null }) {
    try {
      const getSession = await axios.post('/api/sign/session');

      const response: any = await axios({
        method,
        data,
        url: this.apiUrl + url,
        headers: {
          ...headers,
          Authorization: `Bearer ${getSession.data.token}`,
        },
      });

      if (response.data?.status === 301 || response.data?.status === 401) {
        notification.error({
          message: response.data.erro,
          description: response.data.error.message || 'error',
        });
      }

      return response;
    } catch (error) {
      notification.error({
        message: 'error',
        description: error.toString(),
      });
      throw new Error(error);
    } finally {
      // createTopLoadingDom('end');
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
