import React from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`glitch-wrapper select-none ${className}`}
      data-text={text}
    >
      {text}
    </span>
  )
}

export default GlitchText
