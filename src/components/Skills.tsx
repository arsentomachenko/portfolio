'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Skills.module.css'

const techStack = [
  { name: 'C', img: '/src/png/clogo.png' },
  { name: 'C++', img: '/src/png/cpplogo.png' },
  { name: 'JS', img: '/src/png/jslogo.png' },
  { name: 'Golang', img: '/src/png/golang.png' },
  { name: 'Python', img: '/src/png/python.png' },
  { name: 'gstreamer', img: '/src/png/gstreamer.png' },
  { name: 'ffmpeg', img: '/src/png/ffmpeg.png' },
  { name: 'wowza', img: '/src/png/wowza.png' },
  { name: 'webrtc', img: '/src/png/webrtc.png' },
  { name: 'aws', img: '/src/png/aws.png' },
  { name: 'azure', img: '/src/png/azure.png' },
  { name: 'gcp', img: '/src/png/gcp.png' },
  { name: 'docker', img: '/src/png/docker.png' },
  { name: 'kubernetes', img: '/src/png/kubernetes.png' },
  { name: 'terraform', img: '/src/png/terraform.png' },
  { name: 'ansible', img: '/src/png/ansible.png' },
  { name: 'jenkins', img: '/src/png/jenkins.png' },
  { name: 'TAILWIND', img: '/src/png/tailwind.png' },
  { name: 'REACTJS', img: '/src/png/reactlogo.png' },
  { name: 'NEXTJS', img: '/src/png/nextlogo.png' },
  { name: 'NODEJS', img: '/src/png/node.png' },
  { name: 'kotlin', img: '/src/png/kotlin.png' },
  { name: 'flutter', img: '/src/png/flutter.png' },
  { name: 'dart', img: '/src/png/dart.png' },
  { name: 'swift', img: '/src/png/swift.png' },
  { name: 'firebase', img: '/src/png/firebase.png' },
  { name: 'supabase', img: '/src/png/supabase.png' },
  { name: 'postgres', img: '/src/png/postgresql.png' },
  { name: 'mongodb', img: '/src/png/mongodb.png' },
  { name: 'GITHUB', img: '/src/png/githublogo.png', needInvert: true },
  { name: 'GIT', img: '/src/png/gitlogo.png' },
  { name: 'tailwind', img: '/src/png/tailwind.png' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className={styles.skillsSectionContainer} id="skills" ref={ref}>
      <div className={styles.skillsSection}>
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionHeadingArticle} tabIndex={0} aria-label="skills heading">
            &#60;/Skills&#62;
          </h2>
          <p className={styles.sectionHeadingP}></p>
        </motion.div>

        <div className={styles.frontendDevSection}>
          <motion.h3
            className={styles.frontendDevHeading}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            tabIndex={0}
            aria-label="As a frontend a developer these are the skills i have"
          >
            Tech Stack
          </motion.h3>

          <ul className={styles.techStackWrapper}>
            {techStack.map((tech, index) => (
              <motion.li
                key={tech.name}
                className={styles.techStackBox}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <img
                  src={tech.img}
                  alt={`${tech.name} skill`}
                  className={`${styles.techStackLogo} ${tech.needInvert ? styles.needInvert : ''}`}
                />
                <span className={styles.tooltip}>{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

