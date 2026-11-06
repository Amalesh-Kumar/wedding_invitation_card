
export default function PalaceIllustration() {
  return (
    <svg
      className="palace-artwork"
      viewBox="0 0 900 430"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decorative Indian palace with a golden arch and flowers"
    >
      <defs>
        <linearGradient id="palaceGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c987" />
          <stop offset="50%" stopColor="#b99558" />
          <stop offset="100%" stopColor="#80602f" />
        </linearGradient>

        <linearGradient id="palaceSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#edddc1" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="900" height="430" fill="url(#palaceSky)" />

      {/* Main palace arch */}
      <path
        d="M95 430 V190 Q95 35 450 25 Q805 35 805 190 V430"
        fill="none"
        stroke="url(#palaceGold)"
        strokeWidth="12"
      />

      <path
        d="M120 430 V190 Q120 55 450 48 Q780 55 780 190 V430"
        fill="none"
        stroke="#d4b77d"
        strokeWidth="2"
      />

      {/* Arch decorative pillars */}
      <g fill="#d9bd8c" stroke="#a77d43" strokeWidth="2">
        <path d="M90 180 H155 V430 H90 Z" />
        <path d="M745 180 H810 V430 H745 Z" />
        <path d="M78 175 H167 V188 H78 Z" />
        <path d="M733 175 H822 V188 H733 Z" />
      </g>

      {/* Palace silhouette */}
      <g fill="#d5b989" stroke="#aa8753" strokeWidth="2">
        <path d="M270 345 V260 H315 V230 H350 V345 Z" />
        <path d="M550 345 V260 H585 V230 H630 V345 Z" />

        <path d="M220 350 V300 H270 V260 H300 V350 Z" />
        <path d="M600 350 V300 H630 V260 H680 V350 Z" />

        <path d="M355 350 V265 Q450 160 545 265 V350 Z" />
        <path d="M385 350 V275 Q450 210 515 275 V350 Z" fill="#f7eddd" />

        <path d="M355 265 L450 190 L545 265" fill="none" />
        <path d="M430 205 V165 H470 V205 Z" />
        <path d="M420 165 Q450 120 480 165 Z" />
        <path d="M442 120 H458 V95 H442 Z" />
        <path d="M450 90 V72" />
      </g>

      {/* Palace windows */}
      <g fill="#9b7142">
        <path d="M285 280 Q295 260 305 280 V310 H285 Z" />
        <path d="M330 245 Q340 225 350 245 V280 H330 Z" />
        <path d="M550 245 Q560 225 570 245 V280 H550 Z" />
        <path d="M595 280 Q605 260 615 280 V310 H595 Z" />
        <path d="M435 285 Q450 255 465 285 V330 H435 Z" />
      </g>

      {/* Garden */}
      <path
        d="M0 380 Q200 340 450 380 Q700 340 900 380 V430 H0 Z"
        fill="#c8b18a"
        opacity=".45"
      />

      {/* Flowers */}
      {[
        [65, 90], [105, 125], [145, 78], [835, 90],
        [795, 130], [755, 75], [45, 300], [855, 300]
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle cx="0" cy="-9" r="8" fill="#c56e80" />
          <circle cx="9" cy="0" r="8" fill="#dc8b98" />
          <circle cx="0" cy="9" r="8" fill="#c56e80" />
          <circle cx="-9" cy="0" r="8" fill="#e4a1a7" />
          <circle cx="0" cy="0" r="5" fill="#d7ac62" />
        </g>
      ))}

      {/* Hanging lanterns */}
      <g stroke="#aa8046" fill="#e3c68e" strokeWidth="2">
        <path d="M190 50 V100" />
        <path d="M175 100 H205 L200 145 H180 Z" />
        <path d="M695 50 V100" />
        <path d="M680 100 H710 L705 145 H685 Z" />
      </g>

      <g fill="#fff3c9" opacity=".9">
        <circle cx="190" cy="120" r="7" />
        <circle cx="695" cy="120" r="7" />
      </g>
    </svg>
  );
}
