import { auth } from '../../../Firebase/firebase';
import { Button } from './style';
const Logout = () => {
  const SignOut = () => {
    auth.signOut();
  }
  return (
    <Button onClick={SignOut}>Logout</Button>
  )
}

export default Logout