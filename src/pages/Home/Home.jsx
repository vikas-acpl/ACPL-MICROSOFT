import React from 'react'
import styles from './Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BarIcon1 from '../../assets/BarIcon1.svg'
import BarIcon2 from '../../assets/BarIcon2.svg'
import BarIcon3 from '../../assets/BarIcon3.svg'
import BarIcon4 from '../../assets/BarIcon4.svg'
import ApartIcon1 from '../../assets/ApartIcon1.svg'
import ApartIcon2 from '../../assets/ApartIcon2.svg'
import ApartIcon3 from '../../assets/ApartIcon3.svg'
import ApartIcon4 from '../../assets/ApartIcon4.svg'
import DeliveryApproch from '../../assets/DeliveryApproch1.svg'
import AcplWhiteLogo from '../../assets/acpl-logo-white.svg'
import ServiceIcon1 from '../../assets/ServiceIcon1.svg'
import ServiceIcon2 from '../../assets/ServiceIcon2.svg'
import ServiceIcon3 from '../../assets/ServiceIcon3.svg'
import ServiceIcon4 from '../../assets/ServiceIcon4.svg'
import ServiceIcon5 from '../../assets/ServiceIcon5.svg'
import ServiceIcon6 from '../../assets/ServiceIcon6.svg'
import ServiceIconClr1 from '../../assets/ServiceIconClr1.svg'
import ServiceIconClr2 from '../../assets/ServiceIconClr2.svg'
import ServiceIconClr3 from '../../assets/ServiceIconClr3.svg'
import ServiceIconClr4 from '../../assets/ServiceIconClr4.svg'
import ServiceIconClr5 from '../../assets/ServiceIconClr5.svg'
import ServiceIconClr6 from '../../assets/ServiceIconClr6.svg'
import { motion } from "framer-motion";
import Squares from '../../components/Squares/Squares';

const services = [
  {
    title: 'Cloud Security and Firewall',
    badge: 'Azure · Defender for Cloud',
    description:
      'Secure your cloud workloads with automated threat protection and CSPM across Azure and multicloud.',
    path: '/services/cloud-security',
    icon: ServiceIcon1,
    iconHover: ServiceIconClr1,
    cta: 'Explore More',
  },
  {
    title: 'Endpoint Security & Management',
    badge: 'Defender for Endpoint · Intune',
    description:
      'Protect and manage every device with AI-powered prevention and detection across Windows, macOS, iOS, and Android.',
    path: '/services/endpoint-security',
    icon: ServiceIcon2,
    iconHover: ServiceIconClr2,
    cta: 'Explore More',
  },
  {
    title: 'Zero Trust & Identity',
    badge: 'Microsoft Entra ID',
    description:
      'Implement Zero Trust with secure access, adaptive authentication, and lifecycle governance.',
    path: '/services/zero-trust',
    icon: ServiceIcon3,
    iconHover: ServiceIconClr3,
    cta: 'Explore More',
  },
  {
    title: 'SIEM & XDR',
    badge: 'Sentinel · Defender XDR',
    description:
      'Unify detection, investigation, and response across endpoints, identities, email, apps, and networks.',
    path: '/services/siem-xdr',
    icon: ServiceIcon4,
    iconHover: ServiceIconClr4,
    cta: 'Explore More',
  },
  {
    title: 'Data Security & Governance',
    badge: 'Microsoft Purview',
    description:
      'Discover, classify, monitor, and protect sensitive business data across clouds, endpoints, and apps.',
    path: '/services/data-security',
    icon: ServiceIcon5,
    iconHover: ServiceIconClr5,
    cta: 'Explore More',
  },
  {
    title: 'Compliance Management',
    badge: 'Compliance Manager',
    description:
      'Simplify compliance, manage risk, and accelerate regulatory readiness with built-in governance.',
    path: '/services/compliance',
    icon: ServiceIcon6,
    iconHover: ServiceIconClr6,
    cta: 'Explore More',
  },
];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const stats = [
    {
      value: '35+',
      label: 'Years Experience',
      description:
        'Three decades of focused cybersecurity leadership in India and globally.',
    },
    {
      value: '100%',
      label: 'Cyber Focused',
      description:
        "We don't do general IT. We specialize exclusively in securing your digital estate.",
    },
    {
      value: 'Top 100',
      label: 'MSSP India',
      description:
        'Recognized globally for excellence in Managed Security Services.',
    },
    {
      value: '350+',
      label: 'Certified Engineers',
      description:
        'Certified Solutions Engineers for Security, Identity, and Compliance.',
    },
  ];

  const apartContainer = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.12 },
    },
  };

  const apartItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const apartCards = [
    {
      icon: ApartIcon1,
      text:
        'Over 3 decades of expertise securing critical industries with trusted cybersecurity solutions.',
    },
    {
      icon: ApartIcon2,
      text:
        '24/7 managed support and deep Microsoft-certified technical bench.',
    },
    {
      icon: ApartIcon3,
      text:
        'Holistic approach covering user access, data protection, threat prevention, and compliance.',
    },
    {
      icon: ApartIcon4,
      text:
        'Successful deployments in BFSI, pharma, critical infrastructure, and IT/ITES sectors.',
    },
  ];

  return (
    <>
      <section className={styles.heroSection}>
        <Squares
            speed={0.4}
            squareSize={70}
            direction='up'
            borderColor='#F1FAFF'
            hoverFillColor='#fff'
          />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.background}></div>
          <div className={styles.pageContent}>
            {/* <span className={styles.partnerBadge}>Powered by ACPL & Microsoft</span> */}
            <h1>Secure Your Cloud. <br className='responsive-br' />Strengthen Your Enterprise.</h1>
            <p>End-to-end cloud, identity, endpoint, data, and threat protection <br className='responsive-br' />
              designed for modern enterprises across hybrid and multicloud environments.</p>
            <div className={styles.actions}>
              <Link to="/contact" className="btn btn--primary">Get a Security Consultation</Link>
              <a href="#services" className="btn btn--secondary">Explore Services</a>
            </div>
            <div className={styles.uspBar}>
              <div className={styles.uspItem}>
                <img src={BarIcon1} />
                Microsoft-Certified Expertise
              </div>
              <div className={styles.uspItem}>
                <img src={BarIcon2} />
                Zero Trust Security
              </div>
              <div className={styles.uspItem}>
                <img src={BarIcon3} />
                Multicloud & Hybrid Protection
              </div>
              <div className={styles.uspItem}>
                <img src={BarIcon4} />
                24/7 Managed Support
              </div>
            </div>
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
        <section className={styles.acplAdvantage}>
          <div className={`container ${styles.advantageContainer}`}>
            <div className={styles.advantageGrid}>
              {/* Left content */}
              <motion.div
                className={styles.advantageContent}
                variants={containerVariants}
              >
                <motion.p
                  variants={itemVariants}
                  className={styles.advantageTag}
                >
                  The ACPL Advantage
                </motion.p>

                <motion.h2
                  variants={itemVariants}
                  className={styles.advantageTitle}
                >
                  A Legacy of Trust.<br />
                  Future-Ready Security.
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className={styles.advantageBody}
                >
                  ACPL Systems is a premier Information Security Service Provider
                  with a legacy of over three decades. As a dedicated partner to
                  global enterprises, we do not just deploy software; we architect
                  resilient security postures using deep technical expertise.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className={styles.advantageBody}
                >
                  Through our strategic alliance with Microsoft, we deliver
                  integrated, cloud-native capabilities that protect your identities,
                  data, and infrastructure—powered by AI-driven platforms and ACPL&apos;s
                  award-winning managed services.
                </motion.p>
              </motion.div>

              {/* Right stats grid */}
              <motion.div
                className={styles.statsGrid}
                variants={containerVariants}
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className={styles.statCard}
                    variants={itemVariants}
                  >
                    <div className={styles.statHighlight}></div>
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                    <p className={styles.statDescription}>
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </motion.section>
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
        <section className={styles.setUsApart}>
          <div className={`container ${styles.apartContainer}`}>
            <motion.h2
              className={styles.apartTitle}
              variants={apartItem}
            >
              What Sets Us Apart
            </motion.h2>

            <motion.div
              className={styles.apartGrid}
              variants={apartContainer}
            >
              {apartCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={styles.apartCard}
                  variants={apartItem}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    boxShadow: '0 18px 45px rgba(15,23,42,0.15)',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div className={styles.iconCircle}>
                    <img src={card.icon} alt="" />
                  </div>
                  <p className={styles.apartText}>{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.section>
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
        <section id="services" className={styles.services}>
          <div className={`container ${styles.serviceContainer}`}>
            <div className={styles.servicesHeading}>
              <h2>A Complete Security Ecosystem</h2>
              <p>Built on the robust Microsoft Security portfolio, managed by ACPL.</p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={service.title}
                    className={styles.serviceCard}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={styles.serviceCardIcon}>
                      <img
                        src={isHovered ? service.iconHover : service.icon}
                        alt={service.title}
                      />
                    </div>

                    <span className={styles.partnerBadge}>{service.badge}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link to={service.path} className={styles.btnText}>
                      {service.cta}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </motion.section>
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
        <section className={styles.serviceDelivery}>
          <div className={`container ${styles.serviceDeliveryContainer}`}>
            <h2>Service Delivery Approach</h2>
            <div className={styles.deliveryFrame}>
              <img src={DeliveryApproch} className={styles.deliveryApprochImg} />
              <img src={AcplWhiteLogo} className={styles.whiteLogo} />
            </div>
          </div>
        </section>
      </motion.section>
    </>
  )
}

export default Home
