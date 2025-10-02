import { useEffect, useState } from "react";
import Item from "./Item";
import Loader from "./Loader";
import DetailedItem from "./DetailedItem";
import styles from "../styles/Shop.module.css";


const useFetchItems = () => {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((items) => setItems(items))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { items, error, loading }
}


function Shop() {

    const { items, error, loading } = useFetchItems();
    const [itemDetail, setItemDetail] = useState(null);

    if (error) {
        return (
            <div className={styles.error}>
                <div className={styles.errorHeader}>OOPS!</div>
                <div className={styles.errorMessage}>A Network Error was Encountered.</div>
            </div>
        );
    }

    return (
        <>
            <section className={styles.shop}>
                <div className={styles.heading}>Shop:</div>
                <div className={styles.items}>
                    {loading ? (
                        <Loader />
                    ) : (
                        items.map((item)=> <Item key={item["id"]} details={item} setItemDetail={setItemDetail}/>)
                    )}
                </div>
            </section>

            {itemDetail&&(
                <DetailedItem details={itemDetail} setItemDetail={setItemDetail}/>
            )}
        </>
    );
}

export default Shop;
