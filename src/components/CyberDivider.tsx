import React from 'react'

interface CyberDividerProps {
  color?: string
}

const CyberDivider: React.FC<CyberDividerProps> = ({ color = '#00d4ff' }) => {
  return (
    <div className="flex items-center w-full my-8" aria-hidden="true">
      <svg
        width="100%"
        height="20"
        viewBox="0 0 800 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Left dashed line */}
        <line
          x1="0"
          y1="10"
          x2="370"
          y2="10"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="6,4"
          filter="url(#glow)"
          opacity="0.7"
        />
        {/* Diamond center */}
        <polygon
          points="390,3 400,10 390,17 380,10"
          fill={color}
          filter="url(#glow)"
          opacity="0.9"
        />
        {/* Right dashed line */}
        <line
          x1="410"
          y1="10"
          x2="800"
          y2="10"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="6,4"
          filter="url(#glow)"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}

export default CyberDivider
