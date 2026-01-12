'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'Ether Legends',
    description: 'A collectible trading card game powered by Enjin, featuring blockchain-backed NFTs, real-time battles, and a play-to-earn ecosystem on Polygon.',
    preview: '/src/webp/EtherLegend.webp',
    liveLink: 'https://tcg.etherlegends.com/',
    githubLink: null,
  },
  {
    id: 2,
    title: 'Animal Debt Disaster',
    description: 'A quirky puzzle-maze game where you rescue unusual animals with absurd tools. Navigate chaotic rooms, solve wacky dilemmas, and save your bank account in this zany adventure.',
    preview: '/src/webp/AnimalDebtDisaster.webp',
    liveLink: 'https://play.google.com/store/apps/details?id=com.GSPmobilegames.asdd&hl=en',
    githubLink: null,
  },
  {
    id: 3,
    title: 'Broadcast Live Video',
    description: 'Live stream HTML5 WebRTC/HLS browser compatible, from WebRTC (web pc/mobile) / RTMP (OBS/Larix) / RTSP (IP cameras)',
    preview: '/src/webp/broadcastlivevideo.webp',
    liveLink: 'https://BroadcastLiveVideo.com',
    githubLink: null,
  },
  {
    id: 4,
    title: 'FansPaysite',
    description: 'Deploy the FansPaysitecom digital monetization & live video streaming platform, in matter of days, for a fraction of development costs, without profit sharing or approval from app stores.',
    preview: '/src/webp/fanspaysite.webp',
    liveLink: 'https://fanspaysite.com',
    githubLink: null,
  },
  {
    id: 5,
    title: 'Aps Smart Hub',
    description: 'A beautiful, user-friendly, display and mobile application fully integrated with our alerting controller to get you on the scene faster.',
    preview: '/src/webp/apssmarthub.webp',
    liveLink: 'https://apssmarthub.com',
    githubLink: null,
  },
  {
    id: 6,
    title: 'Red5 Pro',
    description: 'Video streaming platform for live video streaming, recording, and playback.',
    preview: '/src/webp/red5.webp',
    liveLink: 'https://red5.net',
    githubLink: null,
  },
  {
    id: 7,
    title: 'Mind.com',
    description: 'Video meetings reimagined — now at mind.com',
    preview: '/src/webp/imind.webp',
    liveLink: 'https://imind.com',
    githubLink: null,
  },
  {
    id: 8,
    title: 'Netcam',
    description: 'Deploy the FansPaysitecom digital monetization & live video streaming platform, in matter of days, for a fraction of development costs, without profit sharing or approval from app stores.',
    preview: '/src/webp/netcam.webp',
    liveLink: 'https://netcamstudio.com/',
    githubLink: null,
  },
  {
    id: 9,
    title: 'PushDoctor',
    description: 'Contributed to the development and optimization of Push Doctor, a leading UK telemedicine platform enabling patients to consult with licensed doctors via secure video calls. Worked on iOS and Android app enhancements using Swift and Kotlin, improving video stability, in-app chat, and appointment booking workflows. Integrated WebRTC for real-time consultations and FHIR-compliant APIs for medical data exchange. Enhanced backend performance and scalability using Node.js, RESTful APIs, and AWS services to handle large volumes of concurrent sessions. Collaborated with product, QA, and compliance teams to ensure GDPR, HIPAA, and NHS Digital security standards were met.',
    preview: '/src/webp/pushdocter.webp',
    liveLink: 'https://www.pushdoctor.co.uk/',
    githubLink: null,
  },
  {
    id: 10,
    title: 'himynameisapp',
    description: 'Pexelicons: A world of personalized file folder icons to transform your PC into a reflection of your style.',
    preview: '/src/webp/himynameisapp.webp',
    liveLink: 'https://himynameisapp.com',
    githubLink: null,
  },
  
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className={styles.projectsSectionContainer} id="projects" ref={ref}>
      <div className={styles.projectsSectionDiv}>
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionHeadingArticle} tabIndex={0} aria-label="My projects starts from here">
            &#60;/Projects&#62;
          </h2>
          <p className={styles.sectionHeadingP}></p>
        </motion.div>

        <div className={styles.projectBoxesDiv}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectBoxWrapper}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className={styles.projectBox}>
                <div className={styles.infoDiv}>
                  <article className={styles.ProjectHeading}>{project.title}</article>
                  <p className={styles.ProjectDescription}>{project.description}</p>
                  <div className={styles.projectButtons}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubRedirect} aria-label={`Visit ${project.title} on GitHub`}>
                        <img src="/src/svg/github.svg" alt="github redirect button" />
                      </a>
                    )}
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.cta} aria-label={`Visit ${project.title} Live`}>
                      <span>Live view</span>
                      <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className={styles.imageDiv}>
                  <img src={project.preview} alt={`${project.title} preview`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

