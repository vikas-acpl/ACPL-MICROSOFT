import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../assets/acpl-logo.svg'
import Stack from '../../assets/stack.svg'
import ServiceIcon1 from '../../assets/ServiceIcon1.svg'
import ServiceIcon2 from '../../assets/ServiceIcon2.svg'
import ServiceIcon3 from '../../assets/ServiceIcon3.svg'
import ServiceIcon4 from '../../assets/ServiceIcon4.svg'
import ServiceIcon5 from '../../assets/ServiceIcon5.svg'
import ServiceIcon6 from '../../assets/ServiceIcon6.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMenus = () => {
    setIsServicesOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className='container'>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logo} onClick={closeMenus}>
              <img src={Logo} alt="ACPL Logo" className={styles.logoImage} />
            </Link>
            <div className={styles.dividerVertical}></div>
            <span className={styles.partnerBadge}><img src={Stack} alt="stack-icon" /> MICROSOFT MANAGED CSP PARTNER</span>
          </div>

          {/* Desktop Navigation */}
          <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <ul className={styles.navList}>
              {/* <li className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${styles.dropdownToggle} ${isServicesOpen ? styles.active : ''}`}
                  onClick={toggleServicesDropdown}
                >
                  Services
                  <svg className={styles.chevronIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={`container ${styles.dropdownInner}`}>
                      <div className={styles.dropdownContent}>
                        <div className={styles.dropdownSection}>
                          <h4 className={styles.dropdownTitle}>Cloud Services</h4>
                          <ul className={styles.dropdownList}>
                            <li><Link to="/services/cloud-security" onClick={closeMenus}>Cloud Security & Firewall</Link></li>
                            <li><Link to="/services/endpoint-security" onClick={closeMenus}>Endpoint Security & Management</Link></li>
                            <li><Link to="/services/data-security" onClick={closeMenus}>Data Security & Governance</Link></li>
                          </ul>
                        </div>
                        <div className={styles.dropdownSection}>
                          <h4 className={styles.dropdownTitle}>Security Solutions</h4>
                          <ul className={styles.dropdownList}>
                            <li><Link to="/services/zero-trust" onClick={closeMenus}>Zero Trust & Identity</Link></li>
                            <li><Link to="/services/siem-xdr" onClick={closeMenus}>SIEM & XDR</Link></li>
                            <li><Link to="/services/compliance" onClick={closeMenus}>Compliance Management</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li> */}
              <li className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${styles.dropdownToggle} ${isServicesOpen ? styles.active : ''
                    }`}
                  onClick={toggleServicesDropdown}
                >
                  Services
                  <svg
                    className={styles.chevronIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownContent}>
                      <div className={styles.dropdownSection}>
                        <ul className={styles.dropdownList}>
                          <li>
                            <Link to="/services/cloud-security" className={styles.serviceItem} onClick={closeMenus}>
                              <div><img src={ServiceIcon1} /></div>
                              <div>
                                <h3>Cloud Security and Firewall</h3>
                                <p>Secure your cloud workloads with automated threat protection and CSPM across Azure and multicloud.</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/siem-xdr" className={styles.serviceItem} onClick={closeMenus}>
                              <div><img src={ServiceIcon4} /></div>
                              <div>
                                <h3>SIEM and XDR</h3>
                                <p>Unify detection, investigation, and response across endpoints, identities, email, apps, and networks.</p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.dropdownSection}>
                        <ul className={styles.dropdownList}>
                          <li>
                            <Link to="/services/endpoint-security" className={styles.serviceItem} onClick={closeMenus}>
                              <div><img src={ServiceIcon2} /></div>
                              <div>
                                <h3>Endpoint Security and Management</h3>
                                <p>Protect and manage every device with AI-powered prevention and detection across Windows, macOS, iOS, and Android.</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/data-security" className={styles.serviceItem} onClick={closeMenus}>
                              <div><img src={ServiceIcon3} /></div>
                              <div>
                                <h3>Data Security and Governance</h3>
                                <p>Discover, classify, monitor, and protect sensitive business data across clouds, endpoints, and apps.</p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.dropdownSection}>
                        <ul className={styles.dropdownList}>
                          <li>
                            <Link to="/services/zero-trust"  className={styles.serviceItem} onClick={closeMenus}>
                            <div><img src={ServiceIcon4} /></div>
                              <div>
                                <h3>Zero Trust and Identity</h3>
                                <p>Implement Zero Trust with secure access, adaptive authentication, and lifecycle governance.</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/compliance" className={styles.serviceItem} onClick={closeMenus}>
                              <div><img src={ServiceIcon4} /></div>
                              <div>
                                <h3>Compliance Management</h3>
                                <p>Simplify compliance, manage risk, and accelerate regulatory readiness with built-in governance.</p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.dropdownSubsection}>
                      <div className={styles.subsectionContent}>
                        <h4>Still Confused?</h4>
                        <p>
                          Choose a Microsoft security service package and accelerate your implementation journey.
                        </p>
                      </div>
                      <div>
                        <button className='btn btn--primary'>Explore Our Service Packages</button>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className={styles.navItem}>
                <Link to="/managed-services" className={styles.navLink} onClick={closeMenus}>
                  Managed Services
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link to="/about" className={styles.navLink} onClick={closeMenus}>
                  About Us
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link to="/contact" className={`btn btn--primary ${styles.contactBtn}`} onClick={closeMenus}>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMenus}></div>
      )}
    </nav>
  )
}

export default Navbar
