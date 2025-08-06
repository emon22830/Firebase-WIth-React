import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.init';


const Login = () => {
    const [user, setUser] = useState(null);

    
    const provider = new GoogleAuthProvider();

 const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) =>{
        console.log(result)
    })
    .catch(error =>{
        console.log('ERROR', error)
        setUser(null);
    })
 }



 const handleSignOut = ()=>{
    signOut(auth)
    .then(()=>
    {
        console.log('sign out done');
        setUser(null)
    })
    .catch(error => console.log(error))
 }





    return (
      <div>
         */}

        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleGoogleSignIn}>Login with Google</button>
        )}

        {user && (
          <div>
            <h4>{user.displayName}</h4>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    );
};

export default Login;