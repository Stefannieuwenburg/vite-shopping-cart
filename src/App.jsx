import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import style from "./App.module.css";




function App() {
  
  return (
      <>
          <div className={style.App_text_center}>
              <Header />
          </div>
          <div className={style.flex_box}>
              <Main />
              <Basket />
          </div>
      </>
  );
}

export default App
