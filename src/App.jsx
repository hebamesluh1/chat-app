
import Chat from './components/Chat';
import { ContainerStyle } from './components/Container/index';

import { auth } from './Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './Pages/SignIn';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <ContainerStyle>
      {user ? <Chat /> : <SignIn />}
    </ContainerStyle>
  )
}

export default App
