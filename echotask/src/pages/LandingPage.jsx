import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);

  // Create floating particles for background effect
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#3b82f6' : '#fbbf24'
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles in a continuous loop
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Wrap around edges
        if (newX > 100) newX = 0;
        if (newX < 0) newX = 100;
        if (newY > 100) newY = 0;
        if (newY < 0) newY = 100;
        
        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="eco-landing">
      {/* Background */}
      <div className="eco-background">
        <div className="eco-background-overlay"></div>
        {/* Floating particles container */}
        <div className="background-particles">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                boxShadow: `0 0 15px ${particle.color}`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Ambient light effect */}
      <div className="eco-ambient-light"></div>
      
      {/* Header */}
      <header className="eco-header">
        <div className="eco-logo-container">
          <div className="eco-logo-icon">
            <span style={{fontSize: '1.5rem'}}>🌱</span>
          </div>
          <div className="eco-logo-text">Echo Task RPG</div>
        </div>
        
        <div className="eco-nav-buttons">
          <button className="eco-btn-login" onClick={() => navigate('/login')}>
            Entrar
          </button>
          <button className="eco-btn-signup" onClick={() => navigate('/cadastro')}>
            Criar Personagem
          </button>
          <button className="eco-btn-login" onClick={() => navigate('/tarefas')}>
            Acesso Dev
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="eco-main">
        <div className="eco-content-wrapper">
          {/* Hero Badge */}
          <div className="eco-hero-badge">
            <span>🏆</span>
            <span className="eco-badge-text">SISTEMA DE RPG ECOLÓGICO</span>
          </div>
          
          {/* Headline */}
          <h1 className="eco-headline">
            Transforme ações ecológicas em uma
            <span className="eco-headline-highlight">
              <span className="eco-headline-text"> jornada épica</span>
              <div className="eco-headline-glow"></div>
            </span>
          </h1>
          
          {/* Description Card */}
          <div className="game-card">
            <p className="game-text">
              Junte-se a milhares de jogadores que já estão transformando o mundo através de pequenas ações diárias.
            </p>
            <p className="game-text" style={{color: '#94a3b8'}}>
              Complete missões ecológicas, ganhe XP, suba de nível e desbloqueie conquistas únicas.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="eco-cta-container">
            <button className="game-button" onClick={() => navigate('/cadastro')}>
              <span>🚀</span>
              <span>Começar Aventura</span>
            </button>
            <button className="game-button" onClick={() => navigate('/login')} style={{background: 'rgba(30, 41, 59, 0.8)', color: '#cbd5e1'}}>
              <span>🎮</span>
              <span>Continuar Jornada</span>
            </button>
          </div>
          
          {/* Stats Grid */}
          <div className="eco-stats-grid">
            <div className="game-card">
              <div className="eco-stat-icon green">
                <span>🌍</span>
              </div>
              <div className="eco-stat-number">1000+</div>
              <div className="eco-stat-label">MISSÕES COMPLETADAS</div>
            </div>
            
            <div className="game-card">
              <div className="eco-stat-icon yellow">
                <span>⭐</span>
              </div>
              <div className="eco-stat-number">50K+</div>
              <div className="eco-stat-label">PONTOS DISTRIBUÍDOS</div>
            </div>
            
            <div className="game-card">
              <div className="eco-stat-icon blue">
                <span>🔥</span>
              </div>
              <div className="eco-stat-number">30+</div>
              <div className="eco-stat-label">DIAS DE SEQUÊNCIA</div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Help and Support Button */}
      <button 
        className="eco-help-button"
        onClick={() => alert('Suporte técnico: suporte@echotask.com\nDocumentação: docs.echotask.com')}
      >
        ❓
      </button>
      
      {/* Scroll Indicator */}
      <div className="eco-scroll-indicator" onClick={scrollToContent}>
        <div className="eco-scroll-content">
          <span>👇</span>
          <span className="eco-scroll-text">Role para explorar</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;