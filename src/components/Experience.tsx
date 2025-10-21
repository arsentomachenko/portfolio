'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Experience.module.css'

const experiences = [
  {
    id: 1,
    period: '07/2022 – 04/2025',
    company: 'Copilot LLC',
    position: 'Lead Engineer (Streaming)',
    responsibilities: [
      'Modernized the back-end servers using .Net, C#, and WebSockets.',
      'Rewrote the website from scratch in Vue.js with ASP.NET as a back-end API interfacing with a SQL Server database hosted on Azure.',
      'Added Copilot Meetings using JavaScript and WebRTC, leveraging Twilio APIs.',
      'Managed a team of freelance consultants to augment my skills, specifically in QA, copywriting, marketing, and graphic design.',
    ],
  },
  {
    id: 2,
    period: '05/2018 – 05/2022',
    company: 'Yaraku',
    position: 'Sr Fullstack Engineer (WebRTC)',
    responsibilities: [
      'Headed a technical team to deliver a successful beta for a video conferencing project with real-time WebRTC and AI translations, gaining continued interest from 82% of around 100 participating companies.',
      'Built a custom media server and client from scratch, supporting thousands of concurrent participants.',
      'Customized and deployed ML models for real-time processing, improving inference throughput by over 10,000%.',
      'Trained multiple engineers to progress from beginners to production-level proficiency in Rust.',
      'Wrote and deployed a custom Kubernetes controller to services needing publicly addressable sockets.',
    ],
  },
  {
    id: 3,
    period: '06/2015 – 04/2017',
    company: 'Solaborate',
    position: 'Software Developer',
    responsibilities: [
      'Integrated Kurento Media Server, which is used for streaming live video to users using WebRTC.',
      'Implemented a feature for video calls that transferred from P2P to Kurento without dropping the call.',
      'Transitioned the current monolith app to a microservice architecture by using a WebRTC microservice.',
      'Formulated and implemented transfer strategy for microservice architecture throughout the entire application.',
      'Mentored and trained new and existing employees in WebRTC and real-time systems.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className={styles.experienceSectionContainer} id="experience" ref={ref}>
      <div className={styles.experienceSectionDiv}>
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionHeadingArticle} tabIndex={0} aria-label="Professional Experience">
            &#60;/Professional Experience&#62;
          </h2>
          <p className={styles.sectionHeadingP}></p>
        </motion.div>

        <div className={styles.experienceTimeline}>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={styles.experienceCard}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className={styles.experienceHeader}>
                <div className={styles.periodBadge}>{experience.period}</div>
                <h3 className={styles.companyName}>{experience.company}</h3>
                <h4 className={styles.position}>{experience.position}</h4>
              </div>
              <ul className={styles.responsibilities}>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} tabIndex={0}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


