import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const StorePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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

  // Sample store items
  const storeItems = [
    {
      id: 1,
      name: 'Semente de Árvore Nativa',
      description: 'Receba uma semente de árvore nativa da sua região para plantar e contribuir com o reflorestamento local',
      price: 100,
      icon: '🌳',
      category: 'Reflorestamento',
      rarity: 'comum'
    },
    {
      id: 2,
      name: 'Copo Reutilizável Ecológico',
      description: 'Copo de bambu com tampa e canudo reutilizável - evite o uso de copos descartáveis',
      price: 250,
      icon: '🥤',
      category: 'Redução de Resíduos',
      rarity: 'comum'
    },
    {
      id: 3,
      name: 'Kit de Reciclagem Doméstico',
      description: 'Conjunto de 3 recipientes coloridos para separação de plástico, papel e vidro',
      price: 300,
      icon: '🗑️',
      category: 'Reciclagem',
      rarity: 'incomum'
    },
    {
      id: 4,
      name: 'Lâmpada LED Econômica',
      description: 'Lâmpada LED de 9W com vida útil de 25.000 horas - economize energia e dinheiro',
      price: 150,
      icon: '💡',
      category: 'Economia de Energia',
      rarity: 'comum'
    },
    {
      id: 5,
      name: 'Saco Reutilizável de Algodão Orgânico',
      description: 'Saco ecológico resistente para compras no supermercado - substitua os plásticos',
      price: 80,
      icon: '🛍️',
      category: 'Consumo Consciente',
      rarity: 'comum'
    },
    {
      id: 6,
      name: 'Chaveiro de Madeira Reflorestada',
      description: 'Chaveiro artesanal feito de madeira de reflorestamento com pingente ecológico',
      price: 50,
      icon: '🔑',
      category: 'Produtos Sustentáveis',
      rarity: 'comum'
    },
    {
      id: 7,
      name: 'Desconto em Produtos Ecológicos',
      description: 'Cupom de 20% de desconto para usar em nossa loja parceira de produtos sustentáveis',
      price: 400,
      icon: '🏷️',
      category: 'Recompensas Digitais',
      rarity: 'incomum'
    },
    {
      id: 8,
      name: 'Ebook: Guia Completo da Sustentabilidade',
      description: 'Ebook com 50 dicas práticas para viver de forma mais sustentável no dia a dia',
      price: 350,
      icon: '📚',
      category: 'Educação',
      rarity: 'incomum'
    },
    {
      id: 9,
      name: 'Muda de Planta Indoor',
      description: 'Muda de planta medicinal ou decorativa para purificar o ar da sua casa',
      price: 200,
      icon: '🌿',
      category: 'Reflorestamento',
      rarity: 'incomum'
    },
    {
      id: 10,
      name: 'Garrafa Térmica Ecológica',
      description: 'Garrafa de aço inoxidável que mantém líquidos gelados por 24h ou quentes por 12h',
      price: 500,
      icon: '🧃',
      category: 'Redução de Resíduos',
      rarity: 'raro'
    },
    {
      id: 11,
      name: 'Bicicleta Elétrica Compartilhada',
      description: '1 mês gratuito no serviço de bicicletas elétricas compartilhadas da cidade',
      price: 1000,
      icon: '🚲',
      category: 'Mobilidade Sustentável',
      rarity: 'raro'
    },
    {
      id: 12,
      name: 'Painel Solar Portátil',
      description: 'Painel solar portátil de 20W para carregar dispositivos eletrônicos durante viagens',
      price: 1500,
      icon: '☀️',
      category: 'Energia Renovável',
      rarity: 'épico'
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'comum': return '#94a3b8';
      case 'incomum': return '#3b82f6';
      case 'raro': return '#8b5cf6';
      case 'épico': return '#f59e0b';
      default: return '#94a3b8';
    }
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case 'comum': return '1px solid rgba(148, 163, 184, 0.3)';
      case 'incomum': return '1px solid rgba(59, 130, 246, 0.5)';
      case 'raro': return '1px solid rgba(139, 92, 246, 0.7)';
      case 'épico': return '2px solid rgba(245, 158, 11, 0.8)';
      default: return '1px solid rgba(148, 163, 184, 0.3)';
    }
  };

  const getRarityBackground = (rarity) => {
    switch (rarity) {
      case 'comum': return 'rgba(30, 41, 59, 0.8)';
      case 'incomum': return 'rgba(30, 41, 59, 0.8)';
      case 'raro': return 'rgba(88, 28, 135, 0.2)';
      case 'épico': return 'rgba(120, 53, 15, 0.3)';
      default: return 'rgba(30, 41, 59, 0.8)';
    }
  };

  const purchaseItem = (item) => {
    if (effectiveUser.points >= item.price) {
      alert(`Parabéns! Você comprou "${item.name}" por ${item.price} pontos!`);
      // In a real app, we would update the user's points here
      // and possibly add the item to their inventory
    } else {
      alert(`Você precisa de ${item.price - effectiveUser.points} pontos adicionais para comprar este item.`);
    }
  };

  return (
    <div className="eco-landing">
      {/* Background */}
      <div className="eco-background">
        <div className="eco-background-overlay"></div>
      </div>
      
      {/* Ambient light effect */}
      <div className="eco-ambient-light"></div>
      
      {/* Header */}
      <header className="eco-header">
        <div className="eco-logo-container">
          <div className="eco-logo-icon">
            <span style={{fontSize: '1.5rem'}}>🌱</span>
          </div>
          <div className="eco-logo-text">Echo Task RPG - Loja</div>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div className="game-points-display">
            <span>⭐</span>
            <span>{effectiveUser.points || 0} pts</span>
          </div>
          
          <button 
            onClick={() => navigate('/tarefas')}
            className="eco-btn-login"
          >
            Voltar às Tarefas
          </button>
        </div>
      </header>

      <main className="eco-main" style={{paddingTop: '2rem', marginTop: '0'}}>
        <div className="eco-content-wrapper" style={{maxWidth: '1200px', width: '100%'}}>
          {/* Store Header */}
          <div className="game-card">
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <h1 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white'}}>
                🛍️ Loja de Recompensas Ecológicas
              </h1>
              <p style={{fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto'}}>
                Troque seus pontos por itens sustentáveis e recompensas que contribuem para um planeta mais verde!
              </p>
            </div>
          </div>

          {/* Store Items Grid */}
          <div className="game-card" style={{marginTop: '2rem'}}>
            <h2 className="game-title">
              <span>🎁</span>
              <span>Itens Disponíveis</span>
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
              {storeItems.map((item) => (
                <div 
                  key={item.id} 
                  className="game-task-card"
                  style={{
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    border: getRarityBorder(item.rarity),
                    background: getRarityBackground(item.rarity),
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  {/* Rarity indicator */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    backgroundColor: getRarityColor(item.rarity) === '#f59e0b' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(0, 0, 0, 0.3)',
                    color: getRarityColor(item.rarity),
                    border: `1px solid ${getRarityColor(item.rarity)}`
                  }}>
                    {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                  </div>
                  
                  <div style={{padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{textAlign: 'center', marginBottom: '1rem'}}>
                      <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                      <span style={{
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '9999px', 
                        backgroundColor: 'rgba(30, 41, 59, 0.8)', 
                        color: '#94a3b8', 
                        fontWeight: '500', 
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}>
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 style={{
                      fontWeight: 'bold', 
                      fontSize: '1.25rem', 
                      marginBottom: '0.75rem', 
                      color: 'white', 
                      textAlign: 'center',
                      minHeight: '3rem'
                    }}>
                      {item.name}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.875rem', 
                      marginBottom: '1.5rem', 
                      color: '#cbd5e1', 
                      flexGrow: 1, 
                      textAlign: 'center',
                      minHeight: '3rem'
                    }}>
                      {item.description}
                    </p>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto'}}>
                      <div className="game-points-display">
                        <span>{item.price} pts</span>
                      </div>
                      
                      <button 
                        className="game-button"
                        onClick={() => purchaseItem(item)}
                        disabled={effectiveUser.points < item.price}
                        style={{
                          padding: '0.5rem 1rem',
                          background: effectiveUser.points >= item.price 
                            ? (item.rarity === 'épico' 
                                ? 'linear-gradient(135deg, #f59e0b, #d97706)' 
                                : item.rarity === 'raro' 
                                  ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' 
                                  : item.rarity === 'incomum' 
                                    ? 'linear-gradient(135deg, #3b82f6, #2563eb)' 
                                    : 'linear-gradient(135deg, #10b981, #059669)')
                            : 'linear-gradient(135deg, #64748b, #475569)',
                          cursor: effectiveUser.points >= item.price ? 'pointer' : 'not-allowed',
                          opacity: effectiveUser.points >= item.price ? 1 : 0.7
                        }}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works section */}
          <div className="game-card" style={{marginTop: '2rem'}}>
            <h2 className="game-title">
              <span>❓</span>
              <span>Como Funciona?</span>
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <div style={{fontSize: '1.5rem'}}>1️⃣</div>
                <div>
                  <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'white'}}>Ganhe Pontos</h3>
                  <p style={{color: '#cbd5e1', fontSize: '0.875rem'}}>
                    Complete tarefas ecológicas diárias para acumular pontos sustentáveis.
                  </p>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <div style={{fontSize: '1.5rem'}}>2️⃣</div>
                <div>
                  <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'white'}}>Escolha Recompensas</h3>
                  <p style={{color: '#cbd5e1', fontSize: '0.875rem'}}>
                    Navegue pela nossa loja e selecione itens sustentáveis que deseja adquirir.
                  </p>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <div style={{fontSize: '1.5rem'}}>3️⃣</div>
                <div>
                  <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'white'}}>Troque & Receba</h3>
                  <p style={{color: '#cbd5e1', fontSize: '0.875rem'}}>
                    Troque seus pontos pelas recompensas e contribua para um futuro mais verde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StorePage;