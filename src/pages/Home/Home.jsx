import React, {useContext}from 'react'
import { User } from '../User/User'
import { Login } from '../Login/Login'
import { DonneesContexte } from '../Login/Login'



export const Home = () => {

  const name = "Joan"

  const donnees = useContext(DonneesContexte); // Accédez aux données exportées via le contexte
  return (
    <div>PAGE D'ACCUEIL {Login.myUser}</div>
  )
}
