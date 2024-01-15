import styles from '../styles/Job.module.css'

export default function

    Pagination({ total, pageNum, setPageNum }) {
    const data = [];
    for (let index = 1; index <= total / 5 + 1; index++) {
        data.push(index);
    }

    return (
        <div className={styles.paginationGroup}>
            <div className={styles.paginationButtonGroup}>
                <img
                    className={styles.paginationButton}
                    src="/ic_nav-arrow-left.png"
                    onClick={() => {
                        if (pageNum > 1) {
                            setPageNum(pageNum - 1);
                        }
                    }} />
                {
                    data.map((item) => (
                        <div className={item == pageNum ? styles.paginationLabelClicked : styles.paginationLabel} onClick={() => setPageNum(item)}>
                            <div className={styles.paginationState}>{item}</div>
                        </div>
                    ))
                }
                <img
                    className={styles.paginationButton}
                    src="/ic_nav-arrow-right.png"
                    onClick={() => {
                        if (pageNum < data.length) {
                            setPageNum(pageNum + 1);
                        }
                    }} />
            </div>
        </div>
    )
}