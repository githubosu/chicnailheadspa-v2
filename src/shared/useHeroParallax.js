import React from 'react';

/* Hero scroll response — the background drifts at a fraction of the scroll
   speed while the copy lifts and fades as the hero leaves the viewport.

   Attach `bgRef` to a WRAPPER around the hero image, never to the image
   itself: .evo-hero-image carries the Ken Burns keyframes, and a running
   animation's transform wins over inline style in the cascade, so a transform
   written here would be silently dropped. Nesting lets both run.

   The wrapper must also overscan upward (see OVERSCAN below) — parallax pushes
   the image down the page, which would otherwise expose a gap at its top edge.

   Reads are cheap (offsetHeight/scrollY) and writes are batched into a single
   rAF, so this stays off the scroll handler's critical path. */

/* Extra height the wrapper needs above the section, in px. Must exceed the
   largest translate we can produce: depth x tallest hero. */
export const HERO_OVERSCAN = 160;

export function useHeroParallax({ depth = 0.25, copyDrift = 0.18, fade = true } = {}) {
  const sectionRef = React.useRef(null);
  const bgRef = React.useRef(null);
  const copyRef = React.useRef(null);

  React.useEffect(() => {
    const sec = sectionRef.current;
    if (!sec || typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    const update = () => {
      raf = null;
      const h = sec.offsetHeight || 1;
      // Clamp to the hero's own height: past that the hero is gone, and an
      // unclamped translate would eventually outrun the overscan.
      const y = Math.min(Math.max(window.scrollY || window.pageYOffset || 0, 0), h);
      const p = y / h;

      if (bgRef.current) {
        bgRef.current.style.transform = 'translate3d(0,' + (y * depth).toFixed(1) + 'px,0)';
      }
      if (copyRef.current) {
        copyRef.current.style.transform = 'translate3d(0,' + (y * -copyDrift).toFixed(1) + 'px,0)';
        // Gone a little before the hero fully clears, so it doesn't linger.
        if (fade) copyRef.current.style.opacity = String(Math.max(0, 1 - p * 1.35));
      }
    };

    const onScroll = () => { if (raf == null) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [depth, copyDrift, fade]);

  return { sectionRef, bgRef, copyRef };
}
