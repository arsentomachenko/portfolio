'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const openResume = () => {
    window.open("/src/pdf/resume.pdf", '_blank')
  }

  return (
    <section className={styles.aboutSectionContainer} id="about" ref={ref}>
      <motion.div
        className={styles.aboutSection}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionHeadingArticle} tabIndex={0} aria-label="About me heading">
            &#60;/AboutMe&#62;
          </h2>
          <p className={styles.sectionHeadingP}></p>
        </div>

        <div className={styles.infoDpSection}>
          <div className={styles.aboutInfo}>
            <p tabIndex={0}>
              I am a Senior Software Engineer with over 11 years of professional experience in software development. My expertise spans web, mobile, and interactive application development, with strong hands-on experience in C# and Unity for building real-time and immersive applications. I have a deep background in video streaming and processing technologies and extensive experience handling client requirements end to end—from system architecture and development to production deployment and maintenance. Recently, I have developed a strong interest in AI-driven image and video processing, where I have already made notable progress. I approach every project with a beginner's mindset, continuously learning and striving to deliver intelligent, reliable, and high-quality solutions.
            </p>

            <button className={styles.resumeBtn} onClick={openResume}>
              <div className={styles.sign}>
                <svg viewBox="0 0 640 512">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
              </div>
              <div className={styles.text}>Resume</div>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


