export default function Hero() {
  // Bottom-left notch (button-sized) — carves the image around the CTA.
  // MUST track the button's real size: the gap the notch leaves on the RIGHT
  // is (btnNotchW − button width) and ABOVE is (btnNotchH − button height), so
  // if they diverge the button looks like it has a white strip beside it.
  // Matches the InAction CTA's carve (245×68 around a ~220px button) so both
  // buttons sit the same distance from their image edge.
  const btnNotchW = 245
  const btnNotchH = 68
  const btnEntryR = 24
  const btnInsideR = 38
  const btnSvgW = btnNotchW + btnEntryR
  const btnSvgH = btnNotchH + btnEntryR

  const btnNotchPath = `
    M 0 ${btnSvgH}
    L 0 0
    Q 0 ${btnEntryR} ${btnEntryR} ${btnEntryR}
    L ${btnNotchW - btnInsideR} ${btnEntryR}
    Q ${btnNotchW} ${btnEntryR} ${btnNotchW} ${btnEntryR + btnInsideR}
    L ${btnNotchW} ${btnSvgH - btnEntryR}
    Q ${btnNotchW} ${btnSvgH} ${btnNotchW + btnEntryR} ${btnSvgH}
    Z
  `

  // Top-right notch (annotation-sized) — same idea as the button notch but
  // on the opposite corner and sized for the annotation's two arms. The
  // notch carves the image with an L-shape so the image's TOP edge curves
  // down around the horizontal arm AND the image's RIGHT edge curves left
  // around the vertical arm — the "img avoid" curve pattern, just like the
  // button has at the bottom-left.
  const annoNotchW = 270 // matches horizontal arm length inside image
  const annoNotchH = 280 // matches vertical arm length inside image
  const annoEntryR = 20
  const annoInsideR = 28
  const annoSvgW = annoNotchW + annoEntryR
  const annoSvgH = annoNotchH + annoEntryR

  const annoNotchPath = `
    M 0 ${annoSvgH}
    L 0 0
    Q 0 ${annoEntryR} ${annoEntryR} ${annoEntryR}
    L ${annoNotchW - annoInsideR} ${annoEntryR}
    Q ${annoNotchW} ${annoEntryR} ${annoNotchW} ${annoEntryR + annoInsideR}
    L ${annoNotchW} ${annoSvgH - annoEntryR}
    Q ${annoNotchW} ${annoSvgH} ${annoNotchW + annoEntryR} ${annoSvgH}
    Z
  `

  return (
    <section className="bg-white pt-24 pb-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
        <div className="relative h-[calc(100svh-152px)] min-h-[460px] max-h-[760px]">
          {/* Image card */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=60"
              alt="Team collaborating in a glass-walled office"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative h-full px-8 sm:px-14 lg:px-20 pt-10 sm:pt-12 lg:pt-14">
              <div className="max-w-xl">
                <h1 className="font-sans font-bold text-white leading-[0.95] tracking-[-0.02em] text-[clamp(48px,8vh,96px)]">
                  <span className="block">Pharmacy</span>
                  <span className="block">operations,</span>
                  <span className="sr-only">intelligent.</span>
                </h1>
                <p className="mt-6 text-white font-semibold text-[15px] lg:text-[16px] leading-[1.5] max-w-[420px]">
                  nyronX is the operating system independent pharmacies run on.
                  Sales, inventory, and fiscal compliance — unified in one
                  platform.
                </p>

                {/* Editorial statement — designer move, replaces the obvious stats row */}
                <div className="mt-8 lg:mt-10 max-w-[440px] hidden sm:block">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-white/60" />
                    <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-white/70">
                      A note from the team
                    </span>
                  </div>
                  <p className="mt-3 font-serif italic text-white/90 text-[15px] lg:text-[17px] leading-snug">
                    “A pharmacy is won or lost in the seconds between the scan
                    and the receipt. We built nyronX to live in those seconds.”
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-left notch — carves out space for the "Learn about Nyronx" CTA */}
            <svg
              className="absolute pointer-events-none"
              style={{ bottom: -1, left: -1 }}
              width={btnSvgW}
              height={btnSvgH}
              viewBox={`0 0 ${btnSvgW} ${btnSvgH}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d={btnNotchPath} fill="white" />
            </svg>

            {/* Top-right notch — mirrors the container's L clip-path EXACTLY so
                the image carves along the SAME shape as the annotation arms
                (no rectangular cavity in the middle). Positioned at top:-10,
                right:-10 so it aligns 1:1 with the outer container; the image
                card's overflow:hidden clips the bleed. The L's outer outline
                (semicircle at the horizontal arm's left end, elongated curve
                at the vertical arm's bottom end, top-right rounded corner,
                inner concave fillet) is what the image carves along. */}
            <svg
              className="absolute pointer-events-none"
              style={{ top: -10, right: -10 }}
              width={256}
              height={300}
              viewBox="0 0 256 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 10 0 L 238 0 Q 256 0 256 18 L 256 290 Q 256 300 246 300 Q 236 300 236 290 L 236 45 Q 236 20 211 20 L 10 20 Q 0 20 0 10 Q 0 0 10 0 Z"
                fill="white"
              />
            </svg>

            {/* Audience stats — 4 mini editorial blocks across the bottom band,
                tucked between the CTA button (bottom-left) and "intelligent."
                bleed (bottom-right). Same typographic pattern as the
                "Independent pharmacy · FL" pin at the top-right: hairline +
                mono-uppercase category, then a big number, then a small
                description. Hidden on small screens — only fits at lg+. */}
            <div
              className="absolute bottom-5 hidden lg:flex items-center gap-3.5 xl:gap-4 pointer-events-none z-[3]"
              style={{ left: 320, right: 'clamp(440px, 38vw, 600px)' }}
            >
              {/* `show` reveals the extra facts only where the band is wide
                  enough — the row must never run into the "intelligent." bleed
                  on the right, and it can't wrap (each item is shrink-0). */}
              {[
                { category: 'Catalog', value: '56,000+' },
                { category: 'Fiscal', value: 'Built-in' },
                { category: 'Offline', value: 'Always on' },
                { category: 'Markirovka', value: 'Per box', show: 'hidden min-[1400px]:flex' },
                { category: 'Didox', value: 'Connected', show: 'hidden min-[1750px]:flex' },
              ].map((s) => (
                <div key={s.category} className={`items-center gap-1.5 shrink-0 ${s.show ?? 'flex'}`}>
                  <span className="font-mono text-[8px] tracking-[0.16em] uppercase text-white/55 whitespace-nowrap">
                    {s.category}
                  </span>
                  <span className="h-px w-2.5 bg-white/35 shrink-0" />
                  <span className="font-sans font-light text-white text-[12px] xl:text-[13px] leading-none tracking-tight whitespace-nowrap">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Editorial annotation — ONE L-shaped container with clip-path so
              ALL outer corners are rounded (convex) AND the inner corner where
              horizontal and vertical arms meet is rounded too (concave fillet).
              Two rectangles can't do the concave inner corner — needs a single
              clipped shape. Bounding box is 260×220, the clip-path carves out
              the L (20px top arm × 20px right arm) with radius 6 on every corner. */}
          <div
            className="absolute pointer-events-none z-[4] hidden md:block"
            style={{ top: -10, right: -10, width: 256, height: 300 }}
          >
            {/* L-shaped white — arms 290×300, inner fillet 25, top-right outer
                corner 18, BOTH arm ends now use a radius-10 semicircle so they
                match each other (horizontal arm's left end + vertical arm's
                bottom end have the same curve). */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath:
                  'path("M 10 0 L 238 0 Q 256 0 256 18 L 256 290 Q 256 300 246 300 Q 236 300 236 290 L 236 45 Q 236 20 211 20 L 10 20 Q 0 20 0 10 Q 0 0 10 0 Z")',
              }}
            />


            {/* Horizontal arm content — (1) circle pinned right. pl-5 keeps the
                label off the arm's rounded left end, so the text never sits
                flush against the carved image edge. */}
            <div className="absolute top-0 left-0 right-0 h-5 flex items-center justify-end gap-2 pl-5">
              <span className="font-mono text-[10px] lg:text-[11px] text-brand-ink/75 tracking-[0.2em] uppercase whitespace-nowrap">
                Independent pharmacy
              </span>
              <span className="h-px w-8 bg-brand-ink/30" />
              <span className="w-5 h-5 shrink-0 rounded-full border border-brand-ink/70 flex items-center justify-center text-brand-ink text-[10px] font-mono leading-none">
                1
              </span>
            </div>

            {/* Vertical arm content — drops below the (1) circle along the right arm */}
            <div className="absolute top-5 right-0 w-5 bottom-0 flex flex-col items-center pt-2 gap-2">
              <span className="w-px h-6 bg-brand-ink/30" />
              <span
                className="font-mono text-[10px] tracking-[0.42em] uppercase text-brand-ink/65 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl' }}
              >
                01 / Pharmacy operations
              </span>
            </div>
          </div>

          {/* Title overflow bleed — type crosses the image's bottom edge.
              translateY(40%) shifts the word UP so 60% of the text sits on the photo (white)
              and only 40% bleeds below into the page-white (dark green). Gradient stops track
              the translate so the color change still lines up with the image edge.
              leading-[1.15] gives the "g" descender room inside the element so background-clip:text
              fills the entire glyph. */}
          <div
            aria-hidden="true"
            className="absolute right-2 sm:right-4 lg:right-8 pointer-events-none z-[3] select-none font-sans font-bold leading-[1.15] tracking-[-0.035em] whitespace-nowrap"
            style={{
              bottom: 0,
              fontSize: 'clamp(56px,9vh,108px)',
              transform: 'translateY(42%)',
              backgroundImage:
                'linear-gradient(to bottom, #ffffff 0%, #ffffff 58%, #0F3D2E 58%, #0F3D2E 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            intelligent.
          </div>

          {/* Button flush with image's bottom-left corner */}
          <a
            href="#solutions"
            className="absolute left-0 bottom-0 inline-flex items-center rounded-full bg-brand-primary text-white px-7 py-3.5 text-[15px] font-medium hover:bg-brand-deep transition-colors z-10"
          >
            See how nyronX works
          </a>
        </div>
      </div>
    </section>
  )
}
