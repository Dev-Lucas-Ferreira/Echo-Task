import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();
  const { register } = useAuth();

  // Create floating particles for background effect
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 4,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.2,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      register({ name, email });
      navigate('/tarefas');
    } catch (err) {
      console.error('Registration error:', err);
      setError('Falha no registro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                boxShadow: `0 0 10px ${particle.color}`,
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
        </div>
      </header>
      
      {/* Main Content */}
      <main className="eco-main">
        <div className="eco-content-wrapper" style={{maxWidth: '40rem'}}>
          {/* Hero Badge */}
          <div className="eco-hero-badge">
            <span>🚀</span>
            <span className="eco-badge-text">CRIAÇÃO DE PERSONAGEM</span>
          </div>
          
          {/* Headline */}
          <h1 className="eco-headline">
            Inicie sua
            <span className="eco-headline-highlight">
              <span className="eco-headline-text"> jornada ecológica</span>
              <div className="eco-headline-glow"></div>
            </span>
          </h1>
          
          {/* Description Card */}
          <div className="game-card">
            <p className="game-text">
              Crie sua conta e comece a acumular pontos, subir de nível e desbloquear conquistas únicas.
            </p>
          </div>
          
          {/* Registration Form */}
          <div className="game-card" style={{padding: '2rem', marginTop: '1rem'}}>
            {error && (
              <div style={{backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: '1rem'}}>
                <label htmlFor="name" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#cbd5e1', marginBottom: '0.5rem', textAlign: 'left'}}>
                  Nome completo
                </label>
                <div style={{position: 'relative'}}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{width: '100%', paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'white', fontSize: '1rem', backdropFilter: 'blur(4px)'}}
                    placeholder="Seu nome"
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)'}
                  />
                  <div style={{position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '1.25rem'}}>
                    👤
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <label htmlFor="email" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#cbd5e1', marginBottom: '0.5rem', textAlign: 'left'}}>
                  Email
                </label>
                <div style={{position: 'relative'}}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{width: '100%', paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'white', fontSize: '1rem', backdropFilter: 'blur(4px)'}}
                    placeholder="seu@email.com"
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)'}
                  />
                  <div style={{position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '1.25rem'}}>
                    📧
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <label htmlFor="password" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#cbd5e1', marginBottom: '0.5rem', textAlign: 'left'}}>
                  Senha
                </label>
                <div style={{position: 'relative'}}>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{width: '100%', paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'white', fontSize: '1rem', backdropFilter: 'blur(4px)'}}
                    placeholder="••••••••"
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)'}
                  />
                  <div style={{position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '1.25rem'}}>
                    🔐
                  </div>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.25rem'}}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <label htmlFor="confirmPassword" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#cbd5e1', marginBottom: '0.5rem', textAlign: 'left'}}>
                  Confirmar senha
                </label>
                <div style={{position: 'relative'}}>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{width: '100%', paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'white', fontSize: '1rem', backdropFilter: 'blur(4px)'}}
                    placeholder="••••••••"
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)'}
                  />
                  <div style={{position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '1.25rem'}}>
                    🔐
                  </div>
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    style={{position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.25rem'}}
                  >
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <button
                  type="submit"
                  disabled={loading}
                  className="game-button"
                  style={{width: '100%'}}
                >
                  {loading ? (
                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                      <span style={{display: 'inline-block', width: '1rem', height: '1rem', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></span>
                      <span>Criando conta...</span>
                    </span>
                  ) : (
                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                      <span>🚀</span>
                      <span>Iniciar Jornada Ecológica</span>
                    </span>
                  )}
                </button>
              </div>
            </form>
            
            <div style={{marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8'}}>
              <p>
                Já tem uma conta? <Link to="/login" style={{color: '#10b981', textDecoration: 'none', fontWeight: '500'}}>Entrar</Link>
              </p>
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
    </div>
  );
};

export default RegisterPage;