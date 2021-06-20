import styles from "./HomeLayout.module.css"

const HomeLayout = ({ children }) => {
    return (
        <>
            <h1 className={styles.mainTitle}>TREND.</h1>
            {children}
        </>
    );
}

export default HomeLayout;