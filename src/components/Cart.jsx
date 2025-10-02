import { useState } from "react";
import { useOutletContext } from "react-router";
import Item from "./Item";
import DetailedItem from "./DetailedItem";
import shopStyles from "../styles/Shop.module.css";


function Cart() {

    const [cart, setCart] = useOutletContext();
    const [itemOverlay, setItemOverlay] = useState(null);

    let itemCount = null;
    if (itemOverlay) {
        for (let key in cart) {
            if (itemOverlay["id"] == key) {
                itemCount = cart[key]["count"];
            } 
        }
    }

    const cartItems = [];
    for (const key in cart) {
        cartItems.push(<Item key={key} details={cart[key]["details"]} setItemDetail={setItemOverlay} counts={cart[key]["counts"]} />);
    }

    return (
        <>
            <section className={shopStyles.shop}>
                <div className={shopStyles.heading}>Cart:</div>
                <div className={shopStyles.items}>

                    {cartItems}

                </div>
            </section>

            {itemOverlay && (
                <DetailedItem details={itemOverlay} setItemDetail={setItemOverlay} counts={itemCount} addButton={false} />
            )}
        </>
    );
}

export default Cart;