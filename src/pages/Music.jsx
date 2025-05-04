import { useRef } from 'react'
import song1 from '../assets/audio/song1.mp3'
import song2 from '../assets/audio/song2.mp3'

export default function Music() {
  const audioRef = useRef(null)

  const tracks = [
    { title: 'Circuit Sermons', file: song1 },
    { title: 'Neon Ritual', file: song2 }
  ]

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.title}>
          <h3>{track.title}</h3>
          <audio
            ref={audioRef}
            src={track.file}
            controls
          />
        </div>
      ))}
    </div>
  )
}