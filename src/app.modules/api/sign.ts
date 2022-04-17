import { Info } from 'app.modules/types/loginType'
import { AppDispatch } from 'app.store/config/configureStore'
import { loginUser, logoutUser } from 'app.store/loginApp/loginUser'
import { useDispatch } from 'react-redux'

const useSign = () => {
  const dispatch = useDispatch<AppDispatch>()

  const signIn = async (info: Info) => {
    try {
      dispatch(loginUser(info))
    } catch (error) {
      throw new Error()
    }
  }

  const sessionOut = async () => {
    try {
      dispatch(logoutUser())
    } catch (error) {
      throw new Error()
    }
  }

  return { signIn, sessionOut }
}

export default useSign
