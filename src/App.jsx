
import { ContainerStyle } from './components/Container/index';

import { auth } from './Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './Pages/SignIn';
import Chats from './Pages/Chats';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <ContainerStyle>
      {user ? <Chats /> : <SignIn />}
    </ContainerStyle>
  )
}

export default App
