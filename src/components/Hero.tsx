'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const text = {
  hello: "Hello; I'm".split(''),
  name: "Arsen Tomachenko.".split(''),
  work: ["I", "develop", "&", "deploy", "for", "mobile", "web", "applications."]
}

export default function Hero() {
  const handleLetsTalk = () => {
    window.location.href = 'mailto:arsentomachenko@gmail.com'
  }

  return (
    <section className={styles.landingPageContainer} id="home">
      <div className={styles.blob}></div>

      <div className={styles.textContent}>
        <motion.article
          className={styles.helloFriend}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {text.hello.map((char, index) => (
            <motion.p
              key={index}
              className={styles.jello}
              whileHover={{
                scale: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
                transition: { duration: 0.9 }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.p>
          ))}
        </motion.article>

        <motion.article
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {text.name.map((char, index) => (
            <motion.p
              key={index}
              className={styles.jello}
              whileHover={{
                scale: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
                transition: { duration: 0.9 }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.p>
          ))}
        </motion.article>

        <motion.article
          className={styles.work}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {text.work.map((word, index) => (
            <div key={index}>
              {word.split('').map((char, charIndex) => (
                <motion.p
                  key={charIndex}
                  className={styles.jello}
                  whileHover={{
                    scale: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
                    transition: { duration: 0.9 }
                  }}
                >
                  {char}
                </motion.p>
              ))}
            </div>
          ))}
        </motion.article>

        <motion.p
          className={styles.infoPara}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Video streaming and on-demand video platform developer with experience of building scalable and efficient video streaming and on-demand video platform.
        </motion.p>

        <motion.div
          className={styles.contactBtnDiv}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className={styles.letsTalkBtn} onClick={handleLetsTalk}>
            <p className={styles.letsTalkBtnText}>Let&apos;s Talk!</p>
            <span className={styles.letsTalkBtnBG}></span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}


