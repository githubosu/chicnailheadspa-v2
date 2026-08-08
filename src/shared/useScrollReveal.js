import React from 'react';

/* Shared scroll-reveal hook — attach the ref to a grid/list/row container and
   its direct children rise into place as they reach the viewport.

   Lives here rather than in a page component so every bundle (home, category,
   services, book) can share one implementation.

   Design notes:
   - The hidden state is applied imperatively, never in the markup, so
     prerendered and no-JS visitors always see fully visible content.
   - Children are observed individually rather than the container, so the
     reveal tracks the scroll instead of firing all at once while the section
     is still below the fold.
   - --evo-reveal-i staggers each row left-to-right.
   - Pass `key` when the children are swapped out by a control (e.g. a tab bar)
     so the incoming set re-reveals instead of appearing unannounced.

   `columns` should match the container's column count so the stagger resets
   per row; a 1-column list wants 1 so every item shares the same delay. */
export function useScrollReveal(key, columns = 3) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = Array.from(el.children);
    if (!targets.length) return;
    targets.forEach((t, i) => {
      // React reuses DOM nodes across tab switches — clear the finished state
      // so the animation can play again for the new content.
      t.classList.remove('evo-reveal-in');
      t.classList.add('evo-reveal');
      t.style.setProperty('--evo-reveal-i', String(columns > 1 ? i % columns : 0));
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('evo-reveal-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -12% 0px' });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [key, columns]);
  return ref;
}
