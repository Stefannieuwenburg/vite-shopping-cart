import style from "./css/Cart.module.css";

export default function Cart(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemPrice * 0.19;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice


    return (
        <aside className={style.block_col_1}>
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className={style.flex_box}>
                    <div className={style.col_2}>{item.name}</div>
                    <div className={style.col_2}>
                        <button
                            onClick={() => onAdd(item)}
                            className={style.button_add}
                        >
                            +
                        </button>
                        <button
                            onClick={() => onRemove(item)}
                            className={style.button_remove}
                        >
                            -
                        </button>
                    </div>
                    <div className={style.col_2_text_right}>
                        {item.qty} x €{item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className={style.flex_box}>
                        <div className={style.col_2}>Item Price</div>
                        <div className={style.col_1_text_right}>
                            €{itemPrice.toFixed(2)}
                        </div>
                    </div>
                    <div className={style.flex_box}>
                        <div className={style.col_2}>Tax Price</div>
                        <div className={style.col_1_text_right}>
                            €{taxPrice.toFixed(2)}
                        </div>
                    </div>
                    <div className={style.flex_box}>
                        <div className={style.col_2}>Schipping Price</div>
                        <div className={style.col_1_text_right}>
                            €{shippingPrice.toFixed(2)}
                        </div>
                    </div>
                    <div className={style.flex_box}>
                        <div className={style.col_2}>
                            <strong>Total Price</strong>
                        </div>
                        <div className={style.col_1_text_right}>
                            €{totalPrice.toFixed(2)}
                        </div>
                    </div>
                    <hr />
                    <div className={style.flex_box}>
                        <button
                            className={style.button}
                            onClick={() => alert("implement Checkout")}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}
