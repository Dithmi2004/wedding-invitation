import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isUnavailable, setIsUnavailable] = useState(false)

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio || isUnavailable) {
      return
    }

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch {
      setIsUnavailable(true)
      setIsPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-30">
      <audio
        ref={audioRef}
        src={weddingDetails.musicPath}
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsUnavailable(true)}
      />
      <button type="button" className="music-button" onClick={togglePlayback} disabled={isUnavailable}>
        {isPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
        {isUnavailable ? 'Music unavailable' : isPlaying ? 'Pause music' : 'Play music'}
      </button>
    </div>
  )
}
