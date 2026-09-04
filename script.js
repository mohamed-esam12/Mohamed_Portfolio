(function () {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, stars;
  const STAR_COUNT_PER_PX = 0.00022;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.floor(w * h * STAR_COUNT_PER_PX);
    stars = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.1 + 0.2,
      baseAlpha: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.4 + 0.15, // twinkle speed
      drift: Math.random() * 0.02 + 0.005 // slow downward drift
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const twinkle = reduceMotion ? 1 : Math.sin(t * 0.001 * s.speed + s.phase) * 0.35 + 0.65;
      ctx.globalAlpha = Math.max(0, Math.min(1, s.baseAlpha * twinkle));
      ctx.fillStyle = "#e7ebf5";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      if (!reduceMotion) {
        s.y += s.drift;
        if (s.y > h) {
          s.y = 0;
          s.x = Math.random() * w;
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw(0);
  if (reduceMotion) draw(0); // paint once, static field
})();