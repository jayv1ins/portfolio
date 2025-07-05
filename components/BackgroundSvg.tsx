const BackgroundSvg = () => (
  <svg
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 -z-10 w-full h-full"
  >
    <defs>
      {/* Red to black gradient */}
      <radialGradient id="maroonToBlack" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#800000" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>

      {/* Soft fog/mist */}
      <radialGradient id="mist" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>

      {/* Fog noise filter */}
      <filter id="fogNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.004" numOctaves="3" result="turbulence" />
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="60" xChannelSelector="R" yChannelSelector="G" />
      </filter>

      {/* Leaf shape */}
      <path id="leaf" d="M0 0 C2 -2, 4 2, 0 6 C-4 2, -2 -2, 0 0Z" fill="#888888" />
    </defs>

    {/* Background base */}
    <rect width="100%" height="100%" fill="url(#maroonToBlack)" />

    {/* Fog */}
    <rect width="100%" height="100%" fill="url(#mist)" />
    <rect width="100%" height="100%" fill="url(#maroonToBlack)" filter="url(#fogNoise)" opacity="0.08" />

    {/* White sun */}
    <circle cx="960" cy="540" r="300" fill="#ffffff" opacity="0.9" />

    {/* Distant sakura silhouette */}
    <g opacity="0.08" transform="translate(100, 720) scale(2)">
  <path
    d="M60 60 
       C40 20, 120 10, 100 60 
       C160 40, 180 100, 140 120 
       C180 160, 100 180, 80 140 
       C40 180, 20 120, 60 100 
       C10 80, 30 40, 60 60 Z"
    fill="#cccccc"
  />
  </g>

    {/* Falling grey leaves (multiple animated copies) */}
   
  </svg>
)

export default BackgroundSvg
