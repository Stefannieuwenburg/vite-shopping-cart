import style from "./css/Header.module.css";

export default function Header(props) {
    const {countCartItems} = props;
    return (
        <>
            <header className={style.flex_block_center}>
                <div>
                    <a href="#/">
                        <h1>Schopping cart</h1>
                    </a>
                </div>
                <div>
                    <a href="#/Cart">
                        Cart{" "}
                        {countCartItems ? (
                            <button className={style.button_badge}>
                                {countCartItems}
                            </button>
                        ) : (
                            ""
                        )}
                    </a>{" "}
                    <a href="#/Lognin">Login</a>
                </div>
            </header>
        </>
    );
}
