import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import BarIcon1 from '../../assets/BarIcon1.svg'
import BarIcon2 from '../../assets/BarIcon2.svg'
import BarIcon3 from '../../assets/BarIcon3.svg'
import BarIcon4 from '../../assets/BarIcon4.svg'
import ApartIcon1 from '../../assets/ApartIcon1.svg'
import ApartIcon2 from '../../assets/ApartIcon2.svg'
import ApartIcon3 from '../../assets/ApartIcon3.svg'
import ApartIcon4 from '../../assets/ApartIcon4.svg'
import ServiceIcon1 from '../../assets/ServiceIcon1.svg'
import ServiceIcon2 from '../../assets/ServiceIcon2.svg'
import ServiceIcon3 from '../../assets/ServiceIcon3.svg'
import ServiceIcon4 from '../../assets/ServiceIcon4.svg'
import ServiceIcon5 from '../../assets/ServiceIcon5.svg'
import ServiceIcon6 from '../../assets/ServiceIcon6.svg'
import DeliveryApproch from '../../assets/DeliveryApproch1.svg'
import AcplWhiteLogo from '../../assets/acpl-logo-white.svg'

const Home = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.background}></div>
          <div className={styles.pageContent}>
            <span className={styles.partnerBadge}>Powered by ACPL & Microsoft</span>
            <h1>Secure Your Cloud.<br />
              Strengthen Your Enterprise.</h1>
            <p>End-to-end cloud, identity, endpoint, data, and threat protection <br />
              designed for modern enterprises across hybrid and multicloud environments.</p>
            <div className={styles.actions}>
              <a href="#" className="btn btn--primary">Get a Security Consultation</a>
              <a href="#" className="btn btn--secondary">Explore Services</a>
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
      <section className={styles.acplAdvantage}>
        <div className={`container ${styles.advantageContainer}`}>
          <div className={styles.advantageGrid}>
            <div>
              <p className={styles.advantageTag}>The ACPL Advantage</p>
              <h2 className={styles.advantageTitle}>
                A Legacy of Trust.<br />Future-Ready Security.
              </h2>
              <p className={styles.advantageBody}>
                ACPL Systems is a premier Information Security Service Provider with a legacy of over three decades. As a dedicated partner to global enterprises, we don't just deploy software; we architect resilient security postures using deep technical expertise.
              </p>
              <p className={styles.advantageBody}>
                Through our strategic alliance with Microsoft, we deliver integrated, cloud-native capabilities that protect your identities, data, and infrastructure—powered by AI-driven platforms and ACPL's award-winning managed services.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statHighlight}></div>
                <p className={styles.statValue}>35+</p>
                <p className={styles.statLabel}>Years Experience</p>
                <p className={styles.statDescription}>
                  Three decades of focused cybersecurity leadership in India and globally.
                </p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statHighlight}></div>
                <p className={styles.statValue}>100%</p>
                <p className={styles.statLabel}>Cyber Focused</p>
                <p className={styles.statDescription}>
                  We don't do general IT. We specialize exclusively in securing your digital estate.
                </p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statHighlight}></div>
                <p className={styles.statValue}>Top 100</p>
                <p className={styles.statLabel}>MSSP India</p>
                <p className={styles.statDescription}>
                  Recognized globally for excellence in Managed Security Services.
                </p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statHighlight}></div>
                <p className={styles.statValue}>350+</p>
                <p className={styles.statLabel}>Certified Engineers</p>
                <p className={styles.statDescription}>
                  Certified Solutions Engineers for Security, Identity, andCompliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.setUsApart}>
        <div className={`container ${styles.apartContainer}`}>
          <h2 className={styles.apartTitle}>What Sets Us Apart</h2>
          <div className={styles.apartGrid}>
            <div className={styles.apartCard}>
              <div className={styles.iconCircle}>
                <img src={ApartIcon1} />
              </div>
              <p className={styles.apartText}>
                Over 3 decades of expertise securing critical industries with trusted cybersecurity solutions.
              </p>
            </div>

            <div className={styles.apartCard}>
              <div className={styles.iconCircle}>
                <img src={ApartIcon2} />
              </div>
              <p className={styles.apartText}>
                24/7 managed support and deep Zscaler-certified technical bench.
              </p>
            </div>

            <div className={styles.apartCard}>
              <div className={styles.iconCircle}>
                <img src={ApartIcon3} />
              </div>
              <p className={styles.apartText}>
                Holistic approach covering user access, data protection, threat prevention, and compliance.
              </p>
            </div>

            <div className={styles.apartCard}>
              <div className={styles.iconCircle}>
                <img src={ApartIcon4} />
              </div>
              <p className={styles.apartText}>
                Successful deployments in BFSI, pharma, critical infrastructure, and IT/ITES sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className={`container ${styles.serviceContainer}`}>
          <div className={styles.servicesHeading}>
            <h2>A Complete Security Ecosystem</h2>
            <p>Built on the robust Microsoft Security portfolio, managed by ACPL.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div><img src={ServiceIcon1} /></div>
              <span className={styles.partnerBadge}>Azure · Defender for Cloud</span>
              <h3>Cloud Security</h3>
              <p>Secure your cloud workloads with automated threat protection and CSPM across Azure and multicloud.</p>
              <Link to="/services/cloud-security" className={styles.btnText}>Explore Cloud</Link>
            </div>

            <div className={styles.serviceCard}>
              <div><img src={ServiceIcon2} /></div>
              <span className={styles.partnerBadge}>Defender for Endpoint · Intune</span>
              <h3>Endpoint Security</h3>
              <p>Protect and manage every device with AI-powered prevention and detection across Windows, macOS, iOS, and Android.</p>
              <Link to="/services/endpoint-security" className={styles.btnText}>Explore Endpoint</Link>
            </div>

            <div className={styles.serviceCard}>
              <div><img src={ServiceIcon3} /></div>
              <span className={styles.partnerBadge}>Microsoft Entra ID</span>
              <h3>Identity & Access</h3>
              <p>Implement Zero Trust with secure access, adaptive authentication, and lifecycle governance.</p>
              <Link to="/services/zero-trust" className={styles.btnText}>Explore Identity</Link>
            </div>

            <div className={styles.serviceCard}>
              <div><img src={ServiceIcon4} /></div>
              <span className={styles.partnerBadge}>Sentinel · Defender XDR</span>
              <h3>SIEM & XDR</h3>
              <p>Unify detection, investigation, and response across endpoints, identities, email, apps, and networks.</p>
              <Link to="/services/siem-xdr" className={styles.btnText}>Explore SIEM</Link>
            </div>

            <div className={styles.serviceCard}>
              <div><img src={ServiceIcon5} /></div>
              <span className={styles.partnerBadge}>Microsoft Purview</span>
              <h3>Data Security</h3>
              <p>Discover, classify, monitor, and protect sensitive business data across clouds, endpoints, and apps.</p>
              <Link to="/services/data-security" className={styles.btnText}>Explore Data</Link>
            </div>

            <div className={styles.serviceCard}>
              <div><img src={ServiceIcon6} /></div>
              <span className={styles.partnerBadge}>Compliance Manager</span>
              <h3>Compliance</h3>
              <p>Simplify compliance, manage risk, and accelerate regulatory readiness with built-in governance.</p>
              <Link to="/services/compliance" className={styles.btnText}>Explore Compliance</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.serviceDelivery}>
        <div className={`container ${styles.serviceDeliveryContainer}`}>
          <h2>Service Delivery Approach</h2>
          <div className={styles.deliveryFrame}>
            <img src={DeliveryApproch} className={styles.deliveryApprochImg} />
            <img src={AcplWhiteLogo} className={styles.whiteLogo} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
