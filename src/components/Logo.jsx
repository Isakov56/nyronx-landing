/**
 * Nyronx Logo — locked-in canonical version.
 *
 * Combines the rounded-green app icon (from /public/nyronx-icon.jpg, zoomed to crop the JPG's
 * surrounding whitespace) with the "Nyronx" wordmark set in Azonix (self-hosted via
 * @font-face in src/index.css; drop the font file at /public/fonts/Azonix.woff2 — see
 * src/index.css for the @font-face rule).
 *
 * Usage:
 *   import Logo from './components/Logo.jsx'
 *
 *   <Logo />                  // default h-8 (32px tall, navbar size)
 *   <Logo className="h-12" /> // bigger
 *   <Logo className="h-16" /> // even bigger
 *
 * The icon's box scales with the parent's height (h-full + aspect-square), so changing
 * className="h-N" changes everything proportionally.
 *
 * Locked tuning values — don't change without re-checking centering / clipping:
 *   - backgroundSize    400%   (zoom into the JPG to crop whitespace around the icon)
 *   - backgroundPosition 49% 50% (tiny shift right + dead-center vertically)
 *   - rounded-[22%]    matches the JPG's own app-icon corner radius
 *   - tracking-[0.06em]  Azonix already has wide letters; this gives them a touch more air
 */

const ICON_STYLE = {
  backgroundImage: 'url(/nyronx-icon.jpg)',
  backgroundSize: '400%',
  backgroundPosition: '49% 50%',
}

const WORDMARK_STYLE = {
  fontFamily: '"Mars", "Azonix", Inter, system-ui, sans-serif',
  lineHeight: 1,
}

export default function Logo({ className = 'h-8' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Nyronx"
    >
      {/* Icon — rounded green N-with-leaf */}
      <span
        role="img"
        aria-hidden="true"
        className="h-full aspect-square rounded-[22%] bg-no-repeat shrink-0"
        style={ICON_STYLE}
      />
      {/* Wordmark — Azonix, uppercase, brand-ink */}
      <span
        className="text-[20px] uppercase tracking-[0.06em] text-brand-ink"
        style={WORDMARK_STYLE}
      >
        Nyronx
      </span>
    </span>
  )
}

/** Named export too, in case someone prefers `import { Logo } from ...` */
export { Logo }
