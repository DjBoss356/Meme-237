import React from 'react'
import style from "./SignUp.module.css"
import { Link } from 'react-router-dom'
import {auth} from "../../firebase"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            nav("/LogIn");
            // ...
        })
        .catch((error) => {
            
  });}

  return (
    <div className={style.container}>
    <h1 className={style.textH}>
        Crée ton compte
    </h1>

    <h3 className={style.texth}>
        viens yamo !
    </h3>

    <form className={style.form} onSubmit={handleAdd}>
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
        

        <button className={style.btnSubmit} type="submit">Soumission</button>
    </form>

    <h3 className={style.textquestion}>Vous avez déjà un compte??</h3>
    <a href=""> <Link to="/Login">
        <p className={style.textcreate}>Connectez-vous !</p>
        </Link>
    </a>
    
</div>
  )
}
