'use client'

import { useRef, useState } from 'react'
import styles from './AudioPlayer.module.css'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop style={{ display: 'none' }}>
        <source src="/src/mp3/preloader.mp3" type="audio/mp3" />
      </audio>
      <button
        className={styles.audioToggle}
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute audio' : 'Play audio'}
        title={isPlaying ? 'Mute' : 'Unmute'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  )
}


