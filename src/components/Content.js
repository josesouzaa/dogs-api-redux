import { useSelector } from 'react-redux'
import Loading from './helper/Loading'
import Login from './Login'
import Photos from './Photos'

export default function Content() {
  const { user, token } = useSelector((state) => state.login)

  if (user.loading || token.loading) return <Loading />
  if (user.data) return <Photos />
  else return <Login />
}
