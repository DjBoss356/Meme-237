import React,{useState} from 'react' 
import Popup from '../../Component/Popup/Popup';
import style from "./User.module.css";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from '../../firebase';

import { useSelector } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const User = () => {

const [isPopupOpen, setPopupOpen] = useState(false);
const[name,setName] = useState("");
const[subname,setSubName] = useState("");
const[pseudo,setPseudo] = useState("");
const[gender,setGender] = useState("");

const user = useSelector((state) => state);

const openPopup = () => {
  setPopupOpen(true);
};

const closePopup = () => {
  setPopupOpen(false);
};

const handleAdd = async (e) =>{
    e.preventDefault();

    const res = await createUserWithEmailAndPassword(auth,user.email,user.password);


    await setDoc(doc(db, "users", res.user.uid), {
        name: name,
        subname: subname,
        pseudo :pseudo,
        gender : gender,
        timeStamp:serverTimestamp(),
      });
}
  return (
    <div className={style.container}>
        <h1 className={style.textH}>
        Bienvenue sur ton espace personnel
        </h1>

        <h3 className={style.texth}>
        Ici tu pourras enregister tes informations personnelles et ajouter tes propres mêmes* à la banque d’images. 
        </h3>

        <h3 className={style.texth2}>Mets à jours tes informations</h3>
        <form className={style.form} onSubmit={handleAdd}>

            <div className={style.rowForm}>
                <input className={style.boxForm} type="name" name="name" id="name" placeholder="Ton nom" 
                onChange={(e) => setName(e.target.value)}/>

                <input className={style.boxForm} type="name" name="subname" id="subname" placeholder="Ton prénom" 
                onChange={(e) => setSubName(e.target.value)}/>
            </div>
            
            <div className={style.rowForm}>
                <input className={style.boxForm} type="name" name="pseudo" id="pseudo" placeholder="Ton pseudo" 
                onChange={(e) => setPseudo(e.target.value)}/>

    
                <div>
                    <select className={style.boxForm} onChange={(e) => setGender(e.target.value)} name="gender" id="gender">
                    <option value="">--Choisis ton genre--</option>
                    <option value="men">Homme</option>
                    <option value="women">Femme</option>
                    </select>
                </div>
                
            </div>
            

            <button className={style.btnSubmit} type="submit">Enregistre tes informations</button>
            
        </form>
        <p className={style.textquestion}>Tu veux partager tes propres mêmes ? (Photos)</p>
        <a className={style.textcreate} onClick={openPopup}>Clique-ici</a>
        <Popup isOpen={isPopupOpen} onClose={closePopup} > 
            <h2>Partage ce que tu trouves marrant</h2>
            <button type="submit">Partager</button>
        </Popup>
    </div>
  )
}
