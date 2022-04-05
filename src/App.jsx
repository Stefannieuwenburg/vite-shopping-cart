import style from "./App.module.css";
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Data from "./Data";
import {useState} from 'react'


function App() {
    const { products } = Data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
           setCartItems([...cartItems, {...product, qty: 1 }]) 
        }
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(
                cartItems.filter((x) =>
                    x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
        

    }
  
  return (
      <>
          <div className={style.App_text_center}>
              <Header countCartItems={cartItems.length} />
          </div>
          <div className={style.flex_box}>
              <Main onAdd={onAdd}  products={products} />
              <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
          </div>
      </>
  );
}

export default App
