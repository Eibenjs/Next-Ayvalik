import store from '../store'
import { setUser } from '../store/auth'

export const userHandler = (data) => {
  store.dispatch(setUser(data))
}
