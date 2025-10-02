import styles from '../styles/Item.module.css'

function Item({details, setItemDetail, counts = null}) {

    const HandleItemClick = () => {
        if (counts) {
            setItemDetail({"details": details, "counts": counts});
        }
        setItemDetail(details);
    }

    return (
        <div className={styles.item} onClick={HandleItemClick}>
            <div className={styles.imgCont}>
                <img className={styles.itemImage} src={details["image"]} alt={details["title"]} loading="lazy" />
            </div>
            <div className={styles.title}>{details.title}</div>
            <div className={styles.price}><span>$</span> {details.price}</div>
        </div>
    );
}

export default Item;