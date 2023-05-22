import { Nav } from './style';
import { auth } from '../../Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './../../Pages/SignIn';
import Logout from './Logout';
const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <Nav>
            <h2>Chat App</h2>
            {user ? <Logout /> : <SignIn />}


        </Nav>
    )
}

export default Navbar