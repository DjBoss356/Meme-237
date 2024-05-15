import React, { useState, useEffect, createContext} from 'react'
import style from "./Login.module.css";


export const DonneesContexte = createContext();

import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { signInWithEmailAndPassword,sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { FirebaseError} from 'firebase/app';
import { Home } from '../Home/Home';



export const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser,setCurrentUser]= useState(null);
    const[occur,setOccur] = useState(0);
    const[timeLaps,setTimeLaps]=useState(true);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const user = auth.currentUser;

    const myUser = () =>{
        return user;
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    //const currentUserr = firebase.auth().currentUser;

    const handleLogin =(e)=>{
        e.preventDefault();

        //connexion sans le lien envoyé par e-mail
        {occur < 4 ?
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user.email);
            setCurrentUser(user);
            dispatch({ type: 'SET_USER', payload: user });
            nav("/");
            // ...
        })
        .catch(() => {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1700);
            setOccur((occur) => occur+1);
         })
       :
        
        //connexion sans le lien envoyé par e-mail pour nouveau mdp
        setTimeout(() => {
            setTimeLaps(false);
        }, 300000);
         if (timeLaps) {
            sendPasswordResetEmail(auth, email);
          }
        }}

  return (

    <div className={style.container}>
        <h1 className={style.textH}>
            Connecte-toi !
        </h1>

        <h3 className={style.texth}>
            on dit quoi mbom ?
        </h3>

        <form className={style.form} onSubmit={handleLogin}>
            <div className={style.boxInput}>
                <label htmlFor="email" className={style.label}>Ton adresse e-mail</label>
                <input className={style.boxForm} type="email" name="email" id="email" placeholder="Adresse e-mail" 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            
            <div className={style.boxInput}>
                <label htmlFor="password" className={style.label}>Ton mot de passe</label>
                <input className={style.boxForm} type="password" name="password" id="password" placeholder="Mot de passe" 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            

            <button className={style.btnSubmit} type="submit">Connexion</button>
            
        </form>
        {error && occur<4 && <h5>Mauvaise combinaision de l'e-mail et du mot de passe !</h5>}
        { occur>=4 && <h5>Un email a été envoyé pour modifier votre mot de passe !</h5>}

        <h3 className={style.textquestion}>Vous n’avez pas de compte?</h3>
        <a href=""><Link to="/SignUp">
            <p className={style.textcreate}>Crééz-le votre !</p>
            </Link>
        </a>


    </div>
  );
};