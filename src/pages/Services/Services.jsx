import React from 'react'
import { useParams } from 'react-router-dom'
import { SERVICES_CONFIG } from '../../data/servicesConfig'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const Services = () => {
  const { serviceId } = useParams()
  const service = SERVICES_CONFIG[serviceId]

  if (!service) {
    return (
      <section className={styles.servicePage}>
        <div className="container">
          <p className={styles.notFound}>Service not found.</p>
        </div>
      </section>
    )
  }

  const { heroTitle, heroSubtitle, sections, cta } = service

  return (
    <section className={styles.servicePage}>
      <div className={styles.heroWrapper}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.breadcrumb}> <Link to="/"> Home</Link><span>/ </span> {heroTitle}</p>
            <h1 className={styles.heroTitle}>{heroTitle}</h1>
            <p className={styles.heroSubtitle}>{heroSubtitle}</p>
          </div>
        </div>
      </div>
      <div className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {sections.map(section => (
              <article key={section.id} className={styles.serviceCard}>
                <h2 className={styles.cardTitle}>{section.title}</h2>
                {section.kicker && (
                  <p className={styles.cardKicker}>{section.kicker}</p>
                )}
                <ul className={styles.cardList}>
                  {section.bullets.map(item => (
                    <li key={item}><strong>{item.heading}</strong>{item.points}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
