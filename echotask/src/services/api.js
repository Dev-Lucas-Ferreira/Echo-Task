// API service for communication with the backend
const API_BASE_URL = 'https://api.meuapp.com';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Auth API
export const authAPI = {
  login: async (email, password) => {
    // Simulate API call
    await delay(1000);
    
    // In a real app, you would make an actual API call:
    // const response = await fetch(`${API_BASE_URL}/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Login failed');
    // }
    // 
    // return response.json();
    
    // For demo purposes, we'll simulate a successful response
    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      user: {
        id: '1234567890',
        name: 'Eco Warrior',
        email: email,
      }
    };
  },
  
  register: async (name, email, password) => {
    // Simulate API call
    await delay(1000);
    
    // In a real app, you would make an actual API call:
    // const response = await fetch(`${API_BASE_URL}/register`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, password }),
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Registration failed');
    // }
    // 
    // return response.json();
    
    // For demo purposes, we'll simulate a successful response
    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      user: {
        id: '1234567890',
        name: name,
        email: email,
      }
    };
  }
};

// Tasks API
export const tasksAPI = {
  getTasks: async () => {
    // Simulate API call
    await delay(500);
    
    // In a real app, you would make an actual API call:
    // const response = await fetch(`${API_BASE_URL}/tasks`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Failed to fetch tasks');
    // }
    // 
    // return response.json();
    
    // For demo purposes, we'll return the same tasks as in the TasksPage
    return [
      {
        id: 1,
        title: "Economize Água",
        description: "Tome um banho de 5 minutos ou menos",
        points: 150,
        icon: "Droplets",
        color: "from-blue-500 to-blue-600",
        difficulty: "Fácil"
      },
      {
        id: 2,
        title: "Recicle Materiais",
        description: "Separe e recicle 5 itens diferentes",
        points: 250,
        icon: "Recycle",
        color: "from-green-500 to-green-600",
        difficulty: "Médio"
      },
      {
        id: 3,
        title: "Energia Solar",
        description: "Use luz natural por 3 horas seguidas",
        points: 200,
        icon: "Sun",
        color: "from-yellow-500 to-orange-500",
        difficulty: "Fácil"
      },
      {
        id: 4,
        title: "Transporte Verde",
        description: "Ande de bicicleta ou a pé por 30 min",
        points: 300,
        icon: "Wind",
        color: "from-cyan-500 to-teal-600",
        difficulty: "Médio"
      },
      {
        id: 5,
        title: "Zero Desperdício",
        description: "Complete um dia sem produzir lixo",
        points: 500,
        icon: "Target",
        color: "from-purple-500 to-pink-600",
        difficulty: "Difícil"
      },
      {
        id: 6,
        title: "Limpeza Urbana",
        description: "Colete 10 lixos na rua ou parque",
        points: 350,
        icon: "Trash2",
        color: "from-red-500 to-pink-500",
        difficulty: "Médio"
      },
      {
        id: 7,
        title: "Plante uma Árvore",
        description: "Plante ou cuide de uma planta",
        points: 400,
        icon: "TreePine",
        color: "from-emerald-500 to-green-600",
        difficulty: "Médio"
      },
      {
        id: 8,
        title: "Energia Limpa",
        description: "Desconecte aparelhos por 4 horas",
        points: 180,
        icon: "Zap",
        color: "from-amber-500 to-yellow-600",
        difficulty: "Fácil"
      },
      {
        id: 9,
        title: "Educação Ambiental",
        description: "Ensine 3 pessoas sobre sustentabilidade",
        points: 600,
        icon: "Award",
        color: "from-indigo-500 to-purple-600",
        difficulty: "Difícil"
      }
    ];
  },
  
  completeTask: async (taskId) => {
    // Simulate API call
    await delay(500);
    
    // In a real app, you would make an actual API call:
    // const response = await fetch(`${API_BASE_URL}/tasks/${taskId}/complete`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Failed to complete task');
    // }
    // 
    // return response.json();
    
    // For demo purposes, we'll simulate a successful response
    return {
      success: true,
      message: 'Task completed successfully',
      points: 150 // This would be based on the actual task
    };
  }
};

// User API
export const userAPI = {
  getProfile: async () => {
    // Simulate API call
    await delay(500);
    
    // In a real app, you would make an actual API call:
    // const response = await fetch(`${API_BASE_URL}/profile`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Failed to fetch profile');
    // }
    // 
    // return response.json();
    
    // For demo purposes, we'll simulate a successful response
    return {
      id: '1234567890',
      name: 'Eco Warrior',
      email: 'eco.warrior@example.com',
      totalPoints: 1250,
      completedTasks: 5,
      joinDate: '2025-01-15'
    };
  },
  
  updateProfile: async (profileData) => {
    // Simulate API call
    await delay(500);
    
    // In a real app, you would make an actual API call:
    // const response = await fetch(`${API_BASE_URL}/profile`, {
    //   method: 'PUT',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(profileData),
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Failed to update profile');
    // }
    // 
    // return response.json();
    
    // For demo purposes, we'll simulate a successful response
    return {
      ...profileData,
      id: '1234567890'
    };
  }
};

export default {
  authAPI,
  tasksAPI,
  userAPI
};