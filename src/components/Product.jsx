import style from "./css/Product.module.css";

export default function Product(props) {

    const { product,onAdd} = props;

    return (
        <div>
            <img
                className={style.img_small}
                src={product.image}
                alt={product.name}
            ></img>
            <h3>{product.name}</h3>
            <div>€{product.price}</div>
            <div>
                <button className={style.button} onClick={() => onAdd(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
