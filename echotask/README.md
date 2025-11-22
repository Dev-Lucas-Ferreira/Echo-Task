# Echo Task - Aplicativo de Tarefas Ecológicas

Um aplicativo frontend React para ajudar os usuários a completar tarefas ecológicas e salvar o planeta.

## Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
├── contexts/          # Contextos do React (autenticação, etc.)
├── pages/             # Páginas da aplicação
├── services/          # Serviços de API
├── App.jsx            # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## Tecnologias Utilizadas

- React 18
- React Router v6
- Tailwind CSS
- Lucide React (ícones)
- Vite (build tool)

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra http://localhost:5173 no seu navegador

## Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## Estrutura de Rotas

- `/` - Página inicial
- `/login` - Página de login
- `/cadastro` - Página de registro
- `/tarefas` - Página de tarefas

## Funcionalidades

- Interface responsiva e moderna
- Sistema de autenticação (login/registro)
- Lista de tarefas ecológicas
- Sistema de pontuação
- Efeitos visuais e animações

## Personalização

Para personalizar o aplicativo:

1. Substitua a imagem de fundo em `public/sua-imagem-de-fundo.jpg`
2. Modifique as cores em `tailwind.config.cjs`
3. Atualize o conteúdo das páginas em `src/pages/`

## API Integration

O aplicativo está configurado para se comunicar com uma API backend. 
Os endpoints atuais estão configurados para:

- Autenticação: `https://api.meuapp.com/login` e `https://api.meuapp.com/register`
- Tarefas: `https://api.meuapp.com/tasks`

Você pode modificar a URL base em `src/services/api.js`.