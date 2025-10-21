'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import styles from './Navbar.module.css'

const navItems = [
  { id: 'home', label: '</Home>' },
  { id: 'about', label: '</AboutMe>' },
  { id: 'skills', label: '</Skills>' },
  { id: 'experience', label: '</Experience>' },
  { id: 'projects', label: '</Projects>' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHey, setShowHey] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false)
    document.body.classList.remove('overflow-hidden')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.toggle('overflow-hidden')
  }

  return (
    <>
      <header className={styles.header}>
        <motion.nav
          className={styles.navbar}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className={`${styles.hey} ${showHey ? styles.popup : ''}`}
            onAnimationEnd={() => setShowHey(false)}
          >
            Hey!
          </div>

          <div
            className={styles.logo}
            tabIndex={0}
            aria-label="arsen tomachenko logo"
            onMouseEnter={() => setShowHey(true)}
          >
            <div className={styles.logoTop}>
              <img src="/src/png/nav-avatar.png" alt="animation-head" />
            </div>
          </div>

          <div className={styles.navbarTabs}>
            <ul className={styles.navbarTabsUl}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={`${styles.navbarTabsLi} ${activeSection === item.id ? styles.activeThistab : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={`#${item.id}`} aria-label={`${item.id} menu button`}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className={styles.settingContainer}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <div className={styles.hamburger}>
          <div className={styles.hamburgerbase}>
            <button
              onClick={toggleMenu}
              className={styles.hamburgerButton}
              aria-label="Menu Button"
            >
              <span className={`${styles.burgerBar} ${isMenuOpen ? styles.hamburgerAnimation1 : ''}`} />
              <span className={`${styles.burgerBar} ${isMenuOpen ? styles.hamburgerAnimation2 : ''}`} />
              <span className={`${styles.burgerBar} ${isMenuOpen ? styles.hamburgerAnimation3 : ''}`} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobiletogglemenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            >
              <ul className={styles.mobileNavbarTabsUl}>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={`${styles.mobileNavbarTabsLi} ${activeSection === item.id ? styles.activeThismobiletab : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <a href={`#${item.id}`} aria-label={`${item.id} menu button`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}


