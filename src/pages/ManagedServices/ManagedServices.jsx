import React from 'react'
import styles from './ManagedServices.module.css'
import Tick from '../../assets/tick.svg'
import ServiceIcon1 from '../../assets/ServiceIcon1.svg'
import ServiceIcon2 from '../../assets/ServiceIcon2.svg'
import ServiceIcon3 from '../../assets/ServiceIcon3.svg'
import ServiceIcon4 from '../../assets/ServiceIcon4.svg'
import ServiceIcon5 from '../../assets/ServiceIcon5.svg'
import ServiceIcon6 from '../../assets/ServiceIcon6.svg'
import { motion } from "framer-motion";

const Services = [
  {
    id: 'cloud-security',
    title: 'Cloud Security and Firewall',
    icon: ServiceIcon1,
    tiers: [
      {
        type: 'fix',
        label: 'Break & Fix',
        items: ['Defender for Cloud (CSPM + CWPP)'],
      },
      {
        type: 'manage',
        label: 'Managed Services',
        items: ['Multicloud Posture Monitoring'],
      },
      {
        type: 'check',
        label: 'Health Check',
        items: ['Data Security & Compliance Assessment'],
      },
    ],
  },
  {
    id: 'endpoint',
    title: 'Endpoint Security & Management',
    icon: ServiceIcon2,
    tiers: [
      {
        type: 'fix',
        label: 'Break & Fix',
        items: ['24/7 Break & Fix Support'],
      },
      {
        type: 'manage',
        label: 'Managed Services',
        items: ['Intune Device Management'],
      },
      {
        type: 'check',
        label: 'Health Check',
        items: ['Identity & Access Health Check', 'Compliance Monitoring'],
      },
    ],
  },
  {
    id: 'zero-trust',
    title: 'Zero Trust and Identity',
    icon: ServiceIcon3,
    tiers: [
      {
        type: 'fix',
        label: 'Break & Fix',
        items: ['L3 Break & Fix Support'],
      },
      {
        type: 'manage',
        label: 'Managed Services',
        items: ['Hybrid Managed Services'],
      },
      {
        type: 'check',
        label: 'Health Check',
        items: [
          'Identity & Access Health Check',
          'Microsoft Entra ID: Conditional Access',
        ],
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security & Governance',
    icon: ServiceIcon4,
    tiers: [
      {
        type: 'fix',
        label: 'Break & Fix',
        items: ['Purview DLP/QP', 'Information Protection'],
      },
      {
        type: 'manage',
        label: 'Managed Services',
        items: ['Insider Risk Management'],
      },
      {
        type: 'check',
        label: 'Health Check',
        items: ['Compliance Manager Monitoring'],
      },
    ],
  },
  {
    id: 'siem-xdr',
    title: 'SIEM & XDR',
    icon: ServiceIcon5,
    tiers: [
      {
        type: 'fix',
        label: 'Break & Fix',
        items: ['Microsoft Sentinel & Defender XDR'],
      },
      {
        type: 'manage',
        label: 'Managed Services',
        items: ['24/7 SOC Monitoring'],
      },
      {
        type: 'check',
        label: 'Health Check',
        items: ['Incident Response & Playbook Automation'],
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance Management',
    icon: ServiceIcon6,
    tiers: [
      {
        type: 'fix',
        label: 'Break & Fix',
        items: ['Purview eDiscovery Support'],
      },
      {
        type: 'manage',
        label: 'Managed Services',
        items: ['Hybrid Managed Services'],
      },
      {
        type: 'check',
        label: 'Health Check',
        items: [
          'Regulatory Assessment (GDPR/ISO)',
          'Communication Compliance Review',
        ],
      },
    ],
  },
]


const ManagedServices = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.background}></div>
          <div className={styles.pageContent}>
            <span className={styles.partnerBadge}>MANAGED SERVICES</span>
            <h1>Continuous Protection<br />
              Powered by Microsoft. Delivered by ACPL.</h1>
            <p>From identity and endpoint security to cloud, data, and threat defense, ACPL’s managed services<br />
              ensure round-the-clock monitoring, optimization, and compliance across your Microsoft security stack.</p>
            <a href="#service-portfolio" className="btn btn--primary">View Security Matrix</a>
          </div>
        </div>
      </section>
      <section className={styles.whyAcpl}>
        <div className={`container ${styles.whyAcplContainer}`}>
          <div className={styles.whyCard}>
            <div className={styles.whyText}>
              <h2 className={styles.whyTitle}>
                Why Managed Services with ACPL?
              </h2>
              <p className={styles.whyBody}>
                Managing a modern security stack requires more than just keeping the lights on.
                ACPL’s Managed Services provide a holistic lifecycle of protection for your Microsoft
                ecosystem. We move beyond reactive support to offer proactive architectural assessments,
                continuous posture monitoring, and rapid incident response.
              </p>
              <p className={styles.whyBody}>
                Our certified experts act as an extension of your team, ensuring that your Identity,
                Cloud, Data, and Endpoint defenses evolve faster than the threat landscape—maximizing
                the ROI of your Microsoft licenses.
              </p>
            </div>
            <aside className={styles.differenceCard}>
              <h3 className={styles.differenceTitle}>The ACPL Difference:</h3>
              <ul className={styles.differenceList}>
                <li><img src={Tick} />Maximize ROI on E5 Licenses</li>
                <li><img src={Tick} />24/7 Certified SOC Experts</li>
                <li><img src={Tick} />Proactive Threat Hunting</li>
                <li><img src={Tick} />Engineering-Led Microsoft Expertise</li>
                <li><img src={Tick} />Fast, Zero Trust Deployments</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.6,
          ease: 'easeOut',
        }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <section id="service-portfolio" className={styles.services}>
          <div className={`container ${styles.serviceContainer}`}>
            <div className={styles.servicesHeading}>
              <h2>Service Portfolio</h2>
              <p>Explore our tiered support and management capabilities.</p>
            </div>
            <div className={styles.servicesGrid}>
              {Services.map(service => (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceCardIcon}>
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3>{service.title}</h3>
                  </div>

                  <div className={styles.serviceCardBody}>
                    {service.tiers.map(tier => (
                      <div
                        key={tier.type}
                        className={styles.serviceCardRow}
                      >
                        <span
                          className={
                            `tierBadge ${tier.type === 'fix'
                              ? styles.badgeFix
                              : tier.type === 'manage'
                                ? styles.badgeManage
                                : styles.badgeCheck
                            }`
                          }
                        >
                          {tier.label}
                        </span>

                        <ul className={styles.serviceList}>
                          {tier.items.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.section>
    </>
  )
}

export default ManagedServices
