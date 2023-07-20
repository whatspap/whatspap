import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Whatspap from './components/Whatspap';
import ContextManager from './components/user-context/UserLoginState';
function App() {
  return (


    <GoogleOAuthProvider clientId="2073746106-hi8uuv9iir5585bnsn2qpdvjq5p6gqjj.apps.googleusercontent.com">

    <ContextManager>
    {/* Whatspap is a prop(child) of ContextManager */}
      <Whatspap/>
    
    </ContextManager>
  
    </GoogleOAuthProvider>

  );
}

export default App;
