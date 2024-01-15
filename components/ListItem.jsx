import styles from '../styles/Job.module.css'

export default function ListItem({ item }) {
    return (
        <div className={styles.jobGroup}>
            <img className={styles.jobGroupIcon} src="/avatar-job.png" />
            <div className={styles.jobContentGroup}>
                <div className={styles.jobTitleGroup}>
                    <div className={styles.jobTitle}>Looking for front end Engineer</div>
                    <div className={styles.jobInfoGroup}>
                        <img className={styles.jobInfoIcon} src="/ic_coins.png" />
                        <div className={styles.jobInfo}>
                            {/* <div className="text-white text-xs font-normal font-['Rubik'] text-[1px]">{`fixed ${item ? item.salaryAmount: 0}$`}</div> */}
                            <div className={styles.jobInfoLabel}>{`fixed ${item ? item.salaryAmount : 0}$`}</div>

                        </div>
                    </div>
                </div>
                <div className={styles.jobContent}>
                    <img className={styles.jobDescriptionIcon} src="/ic_document.png" />
                    <div className={styles.jobDescription}>
                        {item ? `@${item.companyName}, ${item.hiringManagerName}: ${item.email}_${item.address}, ${item.city}, ${item.state} ${item.zip}` : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}