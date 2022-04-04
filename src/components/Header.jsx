import style from "./css/Header.module.css";

export default function Header(props) {
    return (
        <>
            <header className={style.flex_block_center}>
                <div>
                    <a href="#/">
                        <h1>Schopping cart</h1>
                    </a>
                </div>
                <div>
                    <a href="#/Cart">Cart</a> <a href="#/Lognin">Login</a>
                </div>
            </header>
        </>
    );
}
