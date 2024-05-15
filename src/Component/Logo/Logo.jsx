import style from "../Logo/Logo.module.css"

export const Logo = () => {
  return (
    <div className={style.container}>
        <h1 className={style.text}>
            Meme 237
            <svg xmlns="http://www.w3.org/2000/svg" width="67" height="57" viewBox="0 0 67 57" fill="none" className={style.star}>
              <path d="M33.5 0L41.2457 21.4205H66.3114L46.0329 34.6591L53.7786 56.0795L33.5 42.8409L13.2214 56.0795L20.9671 34.6591L0.688549 21.4205H25.7543L33.5 0Z" fill="#FFE973" fillOpacity="0.2"/>
          </svg>
        </h1>
        
    </div>
  )
}
