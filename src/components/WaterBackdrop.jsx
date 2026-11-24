import { useId } from 'react'

const BUBBLES = [
  { x: '8%', size: 14, duration: 13, delay: 0 },
  { x: '19%', size: 22, duration: 17, delay: -6 },
  { x: '33%', size: 10, duration: 12, delay: -3 },
  { x: '62%', size: 16, duration: 15, delay: -9 },
  { x: '76%', size: 26, duration: 19, delay: -4 },
  { x: '88%', size: 12, duration: 14, delay: -11 },
]

const WAVES = [
  { x: 48, y: 0, fill: 'rgba(255, 255, 255, 0.10)' },
  { x: 48, y: 3, fill: 'rgba(32, 185, 176, 0.30)' },
  { x: 48, y: 5, fill: 'rgba(255, 255, 255, 0.12)' },
  { x: 48, y: 7, fill: 'rgba(255, 255, 255, 0.16)' },
]

// Decorative animated water background shared by the hero card and the final call to action.
export default function WaterBackdrop() {
  const waveId = useId()

  return (
    <div className="backdrop" aria-hidden="true">
      <span className="backdrop__glow backdrop__glow--teal" />
      <span className="backdrop__glow backdrop__glow--light" />

      <svg className="backdrop__rings" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="90" />
        <circle cx="300" cy="300" r="160" />
        <circle cx="300" cy="300" r="230" />
        <circle cx="300" cy="300" r="298" />
      </svg>

      {BUBBLES.map((bubble) => (
        <span
          key={bubble.x}
          className="backdrop__bubble"
          style={{
            '--x': bubble.x,
            '--size': `${bubble.size}px`,
            '--duration': `${bubble.duration}s`,
            '--delay': `${bubble.delay}s`,
          }}
        />
      ))}

      <svg className="backdrop__waves" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path
            id={waveId}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        {WAVES.map((wave) => (
          <use key={wave.y} href={`#${waveId}`} x={wave.x} y={wave.y} fill={wave.fill} />
        ))}
      </svg>
    </div>
  )
}
