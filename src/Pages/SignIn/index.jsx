import GoogleButton from "react-google-button";
import { Wrapper } from './style'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const SignIn = () => {
  const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  }
  return (
    <Wrapper>
        <h1>Sign in to chat</h1>
      <GoogleButton onClick={googleSignIn}/>
    </Wrapper>
  )
}

export default SignIn