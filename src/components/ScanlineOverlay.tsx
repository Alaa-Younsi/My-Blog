import React from 'react'

const ScanlineOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
        animation: 'scanPulse 3s ease-in-out infinite',
      }}
      aria-hidden="true"
    />
  )
}

export default ScanlineOverlay
