import React from 'react'
import styles from './ServicePackages.module.css'
import { PROFESSIONAL_SERVICES } from '../../data/professionalServices'
import MicrosoftOffering from '../../assets/MicrosoftOffering.svg'
import ACPLServicesOffering from '../../assets/ACPLServicesOffering.svg'

const ServicePackages = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.background}></div>
                    <div className={styles.pageContent}>
                        <span className={styles.partnerBadge}>SERVICE PACKAGES</span>
                        <h1>Structured Microsoft Security Services.<br />
                            Predictable Outcomes.</h1>
                        <p>Explore ACPL’s predefined Microsoft security service packages designed with clear scope, delivery<br />
                            timelines, and outcome-driven execution across cloud, identity, data, and threat protection.</p>
                    </div>
                </div>
            </section>
            <section className={styles.solutions}>
                <div className={`container ${styles.solutionContainer}`}>
                    <div className={styles.card}>
                        <div className={styles.headerRow}>
                            <h2 className={styles.heading}>
                                Professional Services for{' '}
                                <span>Microsoft Security Solutions (Upto 300 Users)</span>
                            </h2>
                        </div>

                        <div className={styles.tableWrapper}>
                            {PROFESSIONAL_SERVICES.map(group => (
                                <div key={group.category} className={styles.group}>
                                    <div className={styles.groupHeader}>
                                        {group.category}
                                    </div>
                                    <table className={styles.table}>
                                        <tbody>
                                            {group.rows.map(row => (
                                                <tr key={row.title} className={styles.row}>
                                                    <td className={styles.colTitle}>{row.title}</td>
                                                    <td className={styles.colDays}>{row.days}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.offering}>
                <div className={`container ${styles.offeringContainer}`}>
                    <div className={styles.offeringContent}>
                        <img src={MicrosoftOffering} />
                        <img src={ACPLServicesOffering} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePackages
