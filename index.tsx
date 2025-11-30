/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const initSmoothScrollAndReveals = async () => {
  try {
    const { default: Lenis } = await import('https://esm.sh/@studio-freight/lenis@1.0.27');
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.1,
    });
    (window as any).__lenis = lenis;
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  } catch {}

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('is-revealed');
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );

  const observeNode = (node: Element) => {
    if (node.classList.contains('reveal')) observer.observe(node);
    node.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  };

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((n) => {
        if (n instanceof Element) observeNode(n);
      });
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
};

initSmoothScrollAndReveals();
