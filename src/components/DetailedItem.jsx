import { useState } from 'react';
import { useOutletContext } from "react-router";
import styles from '../styles/DetailedItem.module.css';

function DetailedItem({ details, setItemDetail, counts=null, addButton = true }) {

    const [itemForCart, setItemForCart] = useState({ "id": (details["id"])&&details["id"], "details": details, "count": 0 });
    const [cart, setCart] = useOutletContext();

    const addToCart = () => {
        if (itemForCart["count"] === 0) return;

        setCart(prev => {
            let newCart = { ...prev };
            if (details["id"] in newCart) {
                let item = newCart[details["id"]];
                newCart[details["id"]] = { "details": details, "count": item["count"] + itemForCart["count"] };
            }
            else {
                newCart[details["id"]] = { "details": details, "count": itemForCart["count"] };
            }

            return newCart;
        });

        setItemDetail(null);
    }

    const removeFromCart = ()=> {
        setCart(prev => {
            let newCart = {...prev};
            delete newCart[details["id"]];
            return newCart;
        });
        setItemDetail(null);
    }

    const HandleOverlayClick = () => {
        setItemDetail(null);
    }

    const HandleIncrement = () => {
        setItemForCart(prev => ({ ...prev, "count": prev["count"] + 1 }));
    }

    const HandleDecrement = () => {
        setItemForCart(prev => {
            if (prev["count"] <= 0) {
                return prev;
            }
            return { ...prev, "count": prev["count"] - 1 };
        });
    }


    return (
        <div className={styles.overlay} onClick={HandleOverlayClick}>
            <div className={styles.item} onClick={(e) => e.stopPropagation()}>
                <div className={styles.imgCont}>
                    <img src={details['image']} alt={details['title']} />
                </div>
                <div className={styles.itemDetails}>
                    <div>
                        <div className={styles.title}>{details['title']}</div>
                        <div className={styles.desc}>{details['description']}</div>
                        <div className={styles.price}>$ {details['price']}</div>
                    </div>
                    <div>
                        {(counts)&&(<div className={styles.totalPrice}>$ {details["price"]*counts}</div>)}
                        <div className={styles.countItem}>
                            <button className={styles.operationBtn} onClick={HandleDecrement}>-</button>
                            <input type="text" className={styles.countInput} value={(counts)?(counts):(itemForCart["count"])} />
                            <button className={styles.operationBtn} onClick={HandleIncrement}>+</button>
                        </div>
                        {(addButton)?(
                            <button className={styles.submitBtn} onClick={addToCart}>Add to Cart</button>
                        ):
                        (
                            <button className={styles.removeBtn} onClick={removeFromCart}>Remove from Cart</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedItem;