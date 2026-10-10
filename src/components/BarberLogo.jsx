export default function BarberLogo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Barber Shop Logo"
    >
      {/* Barber pole cylinder */}
      <rect x="26" y="6" width="12" height="52" rx="6" fill="#f1f5f9" />
      <rect x="26" y="6" width="12" height="52" rx="6" fill="url(#stripes)" />

      {/* Pole caps */}
      <rect x="24" y="6" width="16" height="5" rx="2.5" fill="#94a3b8" />
      <rect x="24" y="53" width="16" height="5" rx="2.5" fill="#94a3b8" />

      {/* Scissors — left blade */}
      <g transform="rotate(-20, 32, 32)">
        <ellipse cx="20" cy="26" rx="4" ry="4" fill="#2563eb" stroke="#1e40af" strokeWidth="1" />
        <rect x="23" y="24" width="18" height="3" rx="1.5" fill="#2563eb" />
      </g>
      {/* Scissors — right blade */}
      <g transform="rotate(20, 32, 32)">
        <ellipse cx="20" cy="38" rx="4" ry="4" fill="#2563eb" stroke="#1e40af" strokeWidth="1" />
        <rect x="23" y="36" width="18" height="3" rx="1.5" fill="#2563eb" />
      </g>

      {/* Scissors pivot */}
      <circle cx="32" cy="32" r="2.5" fill="#1e3a8a" />

      <defs>
        <pattern id="stripes" patternUnits="userSpaceOnUse" width="12" height="10" patternTransform="rotate(45)">
          <rect width="6" height="10" fill="#ef4444" />
          <rect x="6" width="6" height="10" fill="#f1f5f9" />
        </pattern>
      </defs>
    </svg>
  );
}
