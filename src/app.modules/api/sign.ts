import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

class Sign {
  private id = 'admin';
  private pw = '1234';
  async signin(info) {
    try {
      const { id, pw } = info;
      if (this.id !== id || this.pw !== pw) throw new Error();
      const response = await axios.post(
        '/api/sign/signin',
        {
          id,
          pw,
        },
        config
      );
      return response;
    } catch (error) {
      throw new Error();
    }
  }

  async sessionOut() {
    const { data } = await axios.post('/api/sign/signout');
    if (data) location.href = '/sign';
  }
}

export default new Sign();
