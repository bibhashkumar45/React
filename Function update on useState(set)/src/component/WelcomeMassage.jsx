import style from "./WelcomeMassage.module.css";
const WelcomeMassage = () => {
  return (
    <>
       <div className="row">
       <div className={`alert alert-success col-8  offset-2 ${style.welcomeMassage}`} role="alert">
      <p className={style.para}>Enjoy your day!</p>
      </div>
       </div>
     
    </>
  );
};
export default WelcomeMassage;
