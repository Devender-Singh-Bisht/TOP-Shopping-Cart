import styles from '../styles/Loader.module.css';

function Loader() {

    return (
        <>
            <div className={styles.loading}>
                <span className={styles.loader}></span>
            </div>
        </>
    );
}

export default Loader;