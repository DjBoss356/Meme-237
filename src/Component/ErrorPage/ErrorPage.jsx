import { useRouteError } from "react-router-dom";
import style from "../ErrorPage/ErrorPage.module.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={style.container}>
      <h1 className={style.textH}>Oops!</h1>
      <p className={style.texth}>Nous n'avons pas pu trouver la page en question.
      <br /><i>Sorry mbom</i></p>
      <br />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}