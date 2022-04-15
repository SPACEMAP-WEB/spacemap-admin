import { loginUser, logoutUser } from 'app.store/loginApp/loginUser'

// FIXME: value is never read
// const config = {
//   headers: {
//     'content-type': 'application/json',
//   },
// }

class Sign {
  async signin(info, dispatch) {
    try {
      dispatch(loginUser(info))
    } catch (error) {
      throw new Error()
    }
  }

  async sessionOut(dispatch) {
    try {
      dispatch(logoutUser())
    } catch (error) {
      throw new Error()
    }
  }
}

export default new Sign()
