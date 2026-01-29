import React from 'react';

// Simple particles using canvas
class ParticlesBackground extends React.Component {
  componentDidMount() {
    this.drawParticles();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
  }

  drawParticles = () => {
    const canvas = this.canvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Generate particles
    if (!this.particles) {
      this.particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 2 + Math.random() * 2,
        dx: -0.5 + Math.random(),
        dy: -0.5 + Math.random(),
        color: `rgba(25, 118, 210, ${0.15 + Math.random() * 0.25})`
      }));
    }

    ctx.clearRect(0, 0, w, h);
    for (let p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      // Move
      p.x += p.dx;
      p.y += p.dy;
      // Bounce
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
    this.rafId = requestAnimationFrame(this.drawParticles);
  };

  render() {
    return (
      <canvas
        ref={el => (this.canvas = el)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    );
  }
}

export default ParticlesBackground;
