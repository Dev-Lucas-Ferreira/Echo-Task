import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('echoTaskUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('echoTaskUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('echoTaskUser');
    }
  }, [user]);

  // Login function
  const login = (userData) => {
    // Add default gamification data
    const userWithGamification = {
      ...userData,
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
    setUser(userWithGamification);
  };

  // Register function
  const register = (userData) => {
    // Add default gamification data for new users
    const userWithGamification = {
      ...userData,
      points: 0,
      level: 1,
      streak: 0,
      totalTasksCompleted: 0,
      xp: 0,
      lastLoginDate: new Date().toISOString().split('T')[0],
      badges: [
        { id: 1, name: 'Iniciante Ecológico', icon: '🌱', earned: false, description: 'Complete sua primeira tarefa ecológica' },
        { id: 2, name: 'Salvador do Planeta', icon: '🌍', earned: false, description: 'Complete 10 tarefas ecológicas' },
        { id: 3, name: 'Mestre das Tarefas', icon: '🏆', earned: false, description: 'Complete 50 tarefas ecológicas' },
        { id: 4, name: 'Sequência de Ouro', icon: '🔥', earned: false, description: 'Mantenha uma sequência de 7 dias' },
        { id: 5, name: 'Pontuação Prata', icon: '🥈', earned: false, description: 'Alcance 1000 pontos' },
        { id: 6, name: 'Pontuação Ouro', icon: '🥇', earned: false, description: 'Alcance 5000 pontos' },
        { id: 7, name: 'Herói da Reciclagem', icon: '♻️', earned: false, description: 'Complete 5 tarefas de reciclagem' },
        { id: 8, name: 'Economista de Energia', icon: '💡', earned: false, description: 'Complete 5 tarefas de economia de energia' },
      ]
    };
    setUser(userWithGamification);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Update user points and XP, and check for level ups and badge unlocks
  const updateUserPoints = (points, xp = 0) => {
    if (user) {
      const newPoints = (user.points || 0) + points;
      const newXP = (user.xp || 0) + xp;
      const newLevel = calculateLevel(newPoints);
      const isNewLevel = newLevel > user.level;
      
      // Update streak if this is a daily task
      const today = new Date().toISOString().split('T')[0];
      let newStreak = user.streak || 0;
      let newTotalTasks = user.totalTasksCompleted || 0;
      
      if (today !== user.lastLoginDate) {
        newStreak = (today === getNextDay(user.lastLoginDate)) ? newStreak + 1 : 1;
        newTotalTasks += 1;
      }
      
      // Check for badge unlocks
      const updatedBadges = checkBadgeUnlocks(user.badges, newPoints, newTotalTasks, newStreak);
      
      const updatedUser = {
        ...user,
        points: newPoints,
        xp: newXP,
        level: newLevel,
        streak: newStreak,
        totalTasksCompleted: newTotalTasks,
        lastLoginDate: today,
        badges: updatedBadges
      };
      
      setUser(updatedUser);
      
      // Return information about rewards
      return {
        levelUp: isNewLevel,
        newLevel: newLevel,
        badgesUnlocked: updatedBadges.filter(b => b.earned && !user.badges.find(ub => ub.id === b.id && ub.earned))
      };
    }
  };
  
  // Calculate level based on points
  const calculateLevel = (points) => {
    // Level progression: 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500, ...
    // Formula: Level = floor((sqrt(1 + 8 * points / 100) - 1) / 2) + 1
    return Math.max(1, Math.floor((Math.sqrt(1 + 8 * points / 100) - 1) / 2) + 1);
  };
  
  // Check for badge unlocks based on achievements
  const checkBadgeUnlocks = (currentBadges, points, totalTasks, streak) => {
    return currentBadges.map(badge => {
      // Don't re-earn badges that are already earned
      if (badge.earned) return badge;
      
      switch (badge.id) {
        case 1: // Iniciante Ecológico - Complete first task
          return totalTasks >= 1 ? {...badge, earned: true} : badge;
        case 2: // Salvador do Planeta - Complete 10 tasks
          return totalTasks >= 10 ? {...badge, earned: true} : badge;
        case 3: // Mestre das Tarefas - Complete 50 tasks
          return totalTasks >= 50 ? {...badge, earned: true} : badge;
        case 4: // Sequência de Ouro - 7 day streak
          return streak >= 7 ? {...badge, earned: true} : badge;
        case 5: // Pontuação Prata - 1000 points
          return points >= 1000 ? {...badge, earned: true} : badge;
        case 6: // Pontuação Ouro - 5000 points
          return points >= 5000 ? {...badge, earned: true} : badge;
        case 7: // Herói da Reciclagem - Placeholder for specific task types
          return totalTasks >= 5 ? {...badge, earned: true} : badge;
        case 8: // Economista de Energia - Placeholder for specific task types
          return totalTasks >= 5 ? {...badge, earned: true} : badge;
        default:
          return badge;
      }
    });
  };
  
  // Helper function to get next day
  const getNextDay = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  };

  // Context value
  const value = {
    user,
    login,
    register,
    logout,
    updateUserPoints
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

export default AuthContext;