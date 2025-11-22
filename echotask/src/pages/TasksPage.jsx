import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const TasksPage = () => {
  const navigate = useNavigate();
  const { user, logout: authLogout, updateUserPoints } = useAuth();
  
  // Enhanced tasks data with more gamification elements
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Usar copo reutilizável', 
      description: 'Leve seu próprio copo para café ou água', 
      points: 10, 
      completed: true, 
      difficulty: 'Fácil', 
      category: 'Redução de Resíduos',
      xp: 15,
      timeEstimate: '1 min',
      impact: 'Baixo'
    },
    { 
      id: 2, 
      title: 'Desligar luzes', 
      description: 'Desligue as luzes quando sair do cômodo', 
      points: 5, 
      completed: false, 
      difficulty: 'Fácil', 
      category: 'Economia de Energia',
      xp: 8,
      timeEstimate: '1 min',
      impact: 'Baixo'
    },
    { 
      id: 3, 
      title: 'Separar lixo reciclável', 
      description: 'Separe plástico, papel e vidro para reciclagem', 
      points: 15, 
      completed: false, 
      difficulty: 'Média', 
      category: 'Reciclagem',
      xp: 20,
      timeEstimate: '5 min',
      impact: 'Médio'
    },
    { 
      id: 4, 
      title: 'Usar transporte público', 
      description: 'Prefira ônibus, metrô ou bicicleta', 
      points: 20, 
      completed: false, 
      difficulty: 'Difícil', 
      category: 'Mobilidade Sustentável',
      xp: 30,
      timeEstimate: '30 min',
      impact: 'Alto'
    },
    { 
      id: 5, 
      title: 'Reduzir consumo de carne', 
      description: 'Opte por refeições vegetarianas', 
      points: 25, 
      completed: false, 
      difficulty: 'Difícil', 
      category: 'Alimentação Sustentável',
      xp: 35,
      timeEstimate: '1 dia',
      impact: 'Alto'
    },
    { 
      id: 6, 
      title: 'Plantar uma árvore', 
      description: 'Plante uma árvore em sua casa ou comunidade', 
      points: 50, 
      completed: false, 
      difficulty: 'Difícil', 
      category: 'Reflorestamento',
      xp: 75,
      timeEstimate: '2 horas',
      impact: 'Muito Alto'
    },
    { 
      id: 7, 
      title: 'Comprar produtos locais', 
      description: 'Prefira produtos cultivados localmente', 
      points: 15, 
      completed: false, 
      difficulty: 'Média', 
      category: 'Consumo Consciente',
      xp: 20,
      timeEstimate: '10 min',
      impact: 'Médio'
    },
    { 
      id: 8, 
      title: 'Tomar banho mais curto', 
      description: 'Reduza o tempo do banho para economizar água', 
      points: 5, 
      completed: false, 
      difficulty: 'Fácil', 
      category: 'Economia de Água',
      xp: 8,
      timeEstimate: '5 min',
      impact: 'Baixo'
    },
    { 
      id: 9, 
      title: 'Descongelar alimentos naturalmente', 
      description: 'Evite usar micro-ondas para descongelar', 
      points: 10, 
      completed: false, 
      difficulty: 'Fácil', 
      category: 'Economia de Energia',
      xp: 15,
      timeEstimate: '1 dia',
      impact: 'Baixo'
    },
    { 
      id: 10, 
      title: 'Comprar produtos orgânicos', 
      description: 'Prefira alimentos orgânicos e livres de agrotóxicos', 
      points: 20, 
      completed: false, 
      difficulty: 'Média', 
      category: 'Alimentação Sustentável',
      xp: 25,
      timeEstimate: '10 min',
      impact: 'Médio'
    }
  ]);
  
  const [showReward, setShowReward] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(0);
  const [rewardXP, setRewardXP] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newLevel, setNewLevel] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [showBadges, setShowBadges] = useState(false);
  const [dailyBonus, setDailyBonus] = useState(false);
  const [streakBonus, setStreakBonus] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const [particles, setParticles] = useState([]);

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

  // We don't need this useEffect anymore since we're using effectiveUser

  // Create confetti effect
  const createConfetti = () => {
    const newConfetti = [];
    for (let i = 0; i < 150; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * 10 + 5,
        speed: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
      });
    }
    setConfetti(newConfetti);
    
    // Clear confetti after animation
    setTimeout(() => {
      setConfetti([]);
    }, 3000);
  };

  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task && !task.completed) {
      // Calculate rewards
      const pointsReward = task.points;
      const xpReward = task.xp;
      
      // Check for daily bonus (first task of the day)
      const firstTaskToday = effectiveUser.totalTasksCompleted === 0;
      const dailyBonusPoints = firstTaskToday ? 10 : 0;
      
      // Check for streak bonus
      const streakBonusPoints = Math.min(effectiveUser.streak * 2, 20); // Max 20 points from streak
      
      // Total rewards
      const totalPoints = pointsReward + dailyBonusPoints + streakBonusPoints;
      
      // Update user points and check for rewards
      const rewardInfo = updateUserPoints ? updateUserPoints(totalPoints) : null;
      
      // Show reward animation
      setRewardPoints(totalPoints);
      setRewardXP(xpReward);
      setShowReward(true);
      
      // Create confetti effect
      createConfetti();
      
      // Set bonuses for display
      setDailyBonus(dailyBonusPoints > 0);
      setStreakBonus(streakBonusPoints);
      
      // Hide reward after animation
      setTimeout(() => {
        setShowReward(false);
        setDailyBonus(false);
        setStreakBonus(0);
      }, 3000);
      
      // Show level up notification if applicable
      if (rewardInfo && rewardInfo.levelUp) {
        setNewLevel(rewardInfo.newLevel);
        setShowLevelUp(true);
        setTimeout(() => {
          setShowLevelUp(false);
        }, 3000);
      }
      
      // Show badge unlock notifications if applicable
      if (rewardInfo && rewardInfo.badgesUnlocked && rewardInfo.badgesUnlocked.length > 0) {
        setUnlockedBadges(rewardInfo.badgesUnlocked);
        setShowBadges(true);
        setTimeout(() => {
          setShowBadges(false);
        }, 4000);
      }
    }
    
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Create a default user if none exists (for developer mode)
  const effectiveUser = user || {
    name: 'Dev User',
    email: 'dev@example.com',
    points: 1250,
    level: 5,
    streak: 7,
    totalTasksCompleted: 23,
    xp: 450,
    lastLoginDate: new Date().toISOString().split('T')[0],
    badges: [
      { id: 1, name: 'Iniciante Ecológico', icon: '🌱', earned: true, description: 'Complete sua primeira tarefa ecológica' },
      { id: 2, name: 'Salvador do Planeta', icon: '🌍', earned: true, description: 'Complete 10 tarefas ecológicas' },
      { id: 3, name: 'Mestre das Tarefas', icon: '🏆', earned: false, description: 'Complete 50 tarefas ecológicas' },
      { id: 4, name: 'Sequência de Ouro', icon: '🔥', earned: true, description: 'Mantenha uma sequência de 7 dias' },
      { id: 5, name: 'Pontuação Prata', icon: '🥈', earned: false, description: 'Alcance 1000 pontos' },
      { id: 6, name: 'Pontuação Ouro', icon: '🥇', earned: false, description: 'Alcance 5000 pontos' },
      { id: 7, name: 'Herói da Reciclagem', icon: '♻️', earned: false, description: 'Complete 5 tarefas de reciclagem' },
      { id: 8, name: 'Economista de Energia', icon: '💡', earned: false, description: 'Complete 5 tarefas de economia de energia' },
    ]
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  
  // Calculate progress to next level
  const pointsToNextLevel = Math.ceil((effectiveUser.level || 1) * (effectiveUser.level || 1) * 50);
  const currentLevelPoints = Math.floor(((effectiveUser.level || 1) - 1) * ((effectiveUser.level || 1) - 1) * 50);
  const progressToNextLevel = Math.min(100, ((effectiveUser.points || 0) - currentLevelPoints) / (pointsToNextLevel - currentLevelPoints) * 100);
  
  // Get user title based on level
  const getUserTitle = (level) => {
    if (level < 3) return 'Aventureiro Verde';
    if (level < 6) return 'Guardião da Terra';
    if (level < 10) return 'Mestre Ecológico';
    return 'Lenda Ambiental';
  };

  // Get impact color
  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Baixo': return '#4ade80'; // green
      case 'Médio': return '#facc15'; // yellow
      case 'Alto': return '#f97316'; // orange
      case 'Muito Alto': return '#ef4444'; // red
      default: return '#94a3b8'; // gray
    }
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Redução de Resíduos': return '♻️';
      case 'Economia de Energia': return '💡';
      case 'Reciclagem': return '🗑️';
      case 'Mobilidade Sustentável': return '🚲';
      case 'Alimentação Sustentável': return '🥗';
      case 'Reflorestamento': return '🌳';
      case 'Consumo Consciente': return '🛒';
      case 'Economia de Água': return '💧';
      default: return '🌍';
    }
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return '#4ade80'; // green
      case 'Média': return '#facc15'; // yellow
      case 'Difícil': return '#ef4444'; // red
      default: return '#94a3b8'; // gray
    }
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
      
      {/* Confetti Effect */}
      {confetti.length > 0 && (
        <div style={{position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1000}}>
          {confetti.map(particle => (
            <div
              key={particle.id}
              style={{
                position: 'absolute',
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                borderRadius: '50%',
                transform: `rotate(${particle.rotation}deg)`,
                opacity: 0.8,
                boxShadow: `0 0 8px ${particle.color}`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Reward Animation */}
      {showReward && (
        <div className="game-reward-popup">
          <span style={{fontSize: '2rem'}}>🎉</span>
          <div>
            <div style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem'}}>Missão Completa!</div>
            <div style={{fontSize: '1rem'}}>Você ganhou:</div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div className="game-points-display">
                <span>+{rewardPoints} pts</span>
              </div>
              <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 1rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', fontSize: '0.875rem', fontWeight: '700', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                <span>+{rewardXP} XP</span>
              </div>
            </div>
            {dailyBonus && (
              <div style={{marginTop: '0.5rem', background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#1f2937', padding: '0.25rem 1rem', borderRadius: '9999px', fontWeight: '700', fontSize: '0.875rem'}}>
                🎁 Bônus Diário: +10 pts
              </div>
            )}
            {streakBonus > 0 && (
              <div style={{marginTop: '0.25rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: 'white', padding: '0.25rem 1rem', borderRadius: '9999px', fontWeight: '700', fontSize: '0.875rem'}}>
                🔥 Sequência: +{streakBonus} pts
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Level Up Notification */}
      {showLevelUp && (
        <div className="game-level-up-popup">
          <span style={{fontSize: '2rem'}}>🏆</span>
          <div>
            <div style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem'}}>Level Up!</div>
            <div style={{fontSize: '1rem'}}>Agora você é nível {newLevel}</div>
            <div style={{marginTop: '0.5rem', background: 'rgba(255, 255, 255, 0.2)', padding: '0.25rem 1rem', borderRadius: '9999px', fontWeight: '600', fontSize: '0.875rem'}}>
              {getUserTitle(newLevel)}
            </div>
          </div>
        </div>
      )}
      
      {/* Badge Unlock Notification */}
      {showBadges && (
        <div className="game-badge-unlock-popup">
          <span style={{fontSize: '2rem'}}>🎖️</span>
          <div>
            <div style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem'}}>Nova Conquista!</div>
            <div style={{fontSize: '1rem'}}>Você desbloqueou:</div>
            <div style={{display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              {unlockedBadges.map(badge => (
                <div key={badge.id} style={{display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(255, 255, 255, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: '600', fontSize: '0.875rem'}}>
                  <span>{badge.icon}</span>
                  <span>{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Header */}
      <header className="eco-header">
        <div className="eco-logo-container">
          <div className="eco-logo-icon">
            <span style={{fontSize: '1.5rem'}}>🌱</span>
          </div>
          <div className="eco-logo-text">Echo Task RPG</div>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div className="game-points-display">
            <span>⭐</span>
            <span>{effectiveUser.points || 0} pts</span>
          </div>
          
          <button 
            onClick={() => navigate('/loja')}
            className="eco-btn-login"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              height: 'fit-content',
              transition: 'all 0.2s ease',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #059669, #047857)';
              e.target.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.4)';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #10b981, #059669)';
              e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            🛍️ LOJA
          </button>
          
          <button 
            onClick={() => {
              if (authLogout) {
                authLogout();
              }
              navigate('/');
            }}
            className="eco-btn-login"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="eco-main" style={{paddingTop: '2rem', marginTop: '0'}}>
        <div className="eco-content-wrapper" style={{maxWidth: '1200px', width: '100%'}}>
          {/* User Profile and Level Section */}
          <div className="game-card">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
              <div style={{position: 'relative'}}>
                <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold', border: '3px solid white', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)'}}>
                  {effectiveUser.name?.charAt(0) || 'U'}
                </div>
                <div className="game-level-indicator" style={{position: 'absolute', top: '-10px', right: '-10px'}}>
                  Lvl {effectiveUser.level || 1}
                </div>
              </div>
              
              <div>
                <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: 'white'}}>{effectiveUser.name || 'Aventureiro'}</h2>
                <p style={{fontSize: '1.125rem', opacity: '0.9', margin: '0.25rem 0', color: '#94a3b8'}}>{getUserTitle(effectiveUser.level || 1)}</p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap'}}>
                  <div className="game-streak-counter">
                    <span>🔥</span>
                    <span>{effectiveUser.streak || 0} dias</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(30, 41, 59, 0.8)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                    <span>✅</span>
                    <span>{effectiveUser.totalTasksCompleted || 0} missões</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(30, 41, 59, 0.8)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                    <span>🔮</span>
                    <span>{effectiveUser.xp || 0} XP</span>
                  </div>
                </div>
              </div>
              
              <div style={{width: '100%', maxWidth: '500px', marginTop: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.875rem', fontWeight: '500', color: '#cbd5e1'}}>Nível {effectiveUser.level || 1} → {effectiveUser.level + 1 || 2}</span>
                  <span style={{fontSize: '0.875rem', fontWeight: '500', color: '#cbd5e1'}}>{effectiveUser.points || 0} / {pointsToNextLevel} pts</span>
                </div>
                <div className="game-progress-bar">
                  <div 
                    className="game-progress-fill"
                    style={{width: `${progressToNextLevel}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="eco-stats-grid" style={{marginTop: '2rem'}}>
            <div className="game-card">
              <div className="eco-stat-icon green">
                <span>🏆</span>
              </div>
              <div className="eco-stat-number">{effectiveUser.points || 0}</div>
              <div className="eco-stat-label">PONTUAÇÃO TOTAL</div>
            </div>
            
            <div className="game-card">
              <div className="eco-stat-icon yellow">
                <span>🔥</span>
              </div>
              <div className="eco-stat-number">{effectiveUser.streak || 0}</div>
              <div className="eco-stat-label">DIAS DE SEQUÊNCIA</div>
            </div>
            
            <div className="game-card">
              <div className="eco-stat-icon blue">
                <span>✅</span>
              </div>
              <div className="eco-stat-number">{effectiveUser.totalTasksCompleted || 0}</div>
              <div className="eco-stat-label">MISSÕES COMPLETAS</div>
            </div>
          </div>

          {/* Badges Section */}
          <div className="game-card" style={{marginTop: '2rem'}}>
            <h2 className="game-title">
              <span>🎖️</span>
              <span>Suas Conquistas</span>
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
              {effectiveUser.badges?.map((badge) => (
                <div 
                  key={badge.id}
                  className={`game-badge ${badge.earned ? 'earned' : ''}`}
                  style={{
                    backgroundColor: badge.earned ? 'rgba(16, 185, 129, 0.1)' : 'rgba(30, 41, 59, 0.8)', 
                    border: `1px solid ${badge.earned ? 'rgba(16, 185, 129, 0.5)' : 'rgba(148, 163, 184, 0.3)'}`,
                    borderRadius: '12px',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    minHeight: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>
                    {badge.earned ? badge.icon : '🔒'}
                  </div>
                  <h3 style={{
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    color: badge.earned ? '#10b981' : '#94a3b8', 
                    marginBottom: '0.5rem',
                    lineHeight: '1.2'
                  }}>
                    {badge.name}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem', 
                    color: badge.earned ? '#cbd5e1' : 'rgba(148, 163, 184, 0.7)', 
                    lineHeight: '1.4',
                    marginBottom: '0.75rem'
                  }}>
                    {badge.description}
                  </p>
                  {!badge.earned && (
                    <span style={{
                      fontSize: '0.875rem', 
                      color: 'rgba(148, 163, 184, 0.7)', 
                      fontWeight: '500',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(148, 163, 184, 0.1)',
                      border: '1px solid rgba(148, 163, 184, 0.2)'
                    }}>
                      Bloqueado
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div className="game-card" style={{marginTop: '2rem'}}>
            <div style={{borderBottom: '1px solid rgba(148, 163, 184, 0.2)', padding: '1rem 0', marginBottom: '1rem'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'}}>
                <h2 className="game-title">
                  <span>📋</span>
                  <span>Missões Diárias</span>
                </h2>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                  <button className="game-button" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)'}}>
                    <span>🔥</span>
                    <span>Desafio do Dia</span>
                  </button>
                  <button className="game-button" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem'}}>
                    <span>+</span>
                    <span>Nova Missão</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tasks Stats */}
            <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap'}}>
              <div style={{background: 'rgba(30, 41, 59, 0.8)', padding: '0.75rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                <span style={{color: '#cbd5e1'}}>Completadas: <strong>{completedTasks}</strong></span>
              </div>
              <div style={{background: 'rgba(30, 41, 59, 0.8)', padding: '0.75rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                <span style={{color: '#cbd5e1'}}>Restantes: <strong>{totalTasks - completedTasks}</strong></span>
              </div>
              <div style={{background: 'rgba(30, 41, 59, 0.8)', padding: '0.75rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                <span style={{color: '#cbd5e1'}}>Progresso: <strong>{Math.round((completedTasks / totalTasks) * 100)}%</strong></span>
              </div>
            </div>

            {/* Tasks Cards Grid */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem'}}>
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  className={`game-task-card ${task.completed ? 'completed' : ''}`}
                >
                  <div style={{padding: '1.5rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                      <div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem'}}>
                          <span style={{fontSize: '1.5rem'}}>{getCategoryIcon(task.category)}</span>
                          <span style={{fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(30, 41, 59, 0.8)', color: '#94a3b8', fontWeight: '500', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                            {task.category}
                          </span>
                        </div>
                        <h3 style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.75rem', ...(task.completed ? {color: 'rgba(148, 163, 184, 0.7)', textDecoration: 'line-through'} : {color: 'white'})}}>
                          {task.title}
                        </h3>
                        <p style={{fontSize: '0.875rem', marginBottom: '1.25rem', ...(task.completed ? {color: 'rgba(148, 163, 184, 0.5)'} : {color: '#cbd5e1'})}}>
                          {task.description}
                        </p>
                      </div>
                      <button 
                        onClick={() => toggleTask(task.id)}
                        style={{flexShrink: '0', marginLeft: '0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease', fontSize: '1.75rem'}}
                      >
                        {task.completed ? (
                          <span style={{color: '#10b981'}}>✅</span>
                        ) : (
                          <span style={{color: 'rgba(148, 163, 184, 0.5)'}}>⭕</span>
                        )}
                      </button>
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem'}}>
                      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(30, 41, 59, 0.8)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                          <span style={{color: getImpactColor(task.impact)}}>●</span>
                          <span style={{fontSize: '0.75rem', color: '#94a3b8'}}>{task.impact}</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(30, 41, 59, 0.8)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                          <span>⏱️</span>
                          <span style={{fontSize: '0.75rem', color: '#94a3b8'}}>{task.timeEstimate}</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(30, 41, 59, 0.8)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(148, 163, 184, 0.3)'}}>
                          <span style={{color: getDifficultyColor(task.difficulty)}}>●</span>
                          <span style={{fontSize: '0.75rem', color: '#94a3b8'}}>{task.difficulty}</span>
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        <div className="game-points-display">
                          <span>+{task.points} pts</span>
                        </div>
                        <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', fontSize: '0.75rem', fontWeight: '700'}}>
                          <span>+{task.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    
                    {task.completed && (
                      <div style={{marginTop: '0.75rem', display: 'flex', alignItems: 'center', color: '#1f2937', padding: '0.5rem', background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', borderRadius: '8px'}}>
                        <span style={{fontSize: '1.5rem', marginRight: '0.5rem'}}>⭐</span>
                        <span style={{fontSize: '0.875rem', fontWeight: '700'}}>Missão Concluída! +{task.points} pts +{task.xp} XP</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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

export default TasksPage;