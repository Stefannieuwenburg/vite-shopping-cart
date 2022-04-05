import style from "./css/Main.module.css";
import Product from "./Product";



export default function Main(props) {

    const { products,onAdd,onRemove} = props;

    return (
        <main className={style.block_col_2}>
            <h1>Products</h1>
            <div className={style.flex_box}>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}/>
                ))}
            </div>
        </main>
    );
}
