import React from 'react'
import styles from './ServicePackages.module.css'
import { PROFESSIONAL_SERVICES } from '../../data/professionalServices'
import MicrosoftOffering from '../../assets/MicrosoftOffering.svg'
import MicrosoftOfferingMob from '../../assets/MicrosoftOfferingMob.svg'
import ACPLServicesOffering from '../../assets/ACPLServicesOffering.svg'
import ACPLServicesOfferingMob from '../../assets/ACPLServicesOfferingMob.svg'

const ServicePackages = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.background}></div>
                    <div className={styles.pageContent}>
                        <span className={styles.partnerBadge}>SERVICE PACKAGES</span>
                        <h1>Structured Microsoft Security Services.<br className='responsive-br' />
                            Predictable Outcomes.</h1>
                        <p>Explore ACPL’s predefined Microsoft security service packages designed with clear scope, delivery<br className='responsive-br' />
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
                        <img className='mobileView' src={MicrosoftOffering} />
                        <img className='desktopView' src={MicrosoftOfferingMob} />
                        <img className='mobileView' src={ACPLServicesOffering} />
                        <img className='desktopView' src={ACPLServicesOfferingMob} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePackages
