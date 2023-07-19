import logo from './logo.svg';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="2073746106-hi8uuv9iir5585bnsn2qpdvjq5p6gqjj.apps.googleusercontent.com">


    <div className="App">
      <LoginPage/>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
