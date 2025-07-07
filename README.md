# Todo App

Todo-App built with React, TypeScript, and Redux Toolkit. This project demonstrates modern React development practices, state management, and TypeScript best practices.

## Features

- **Add, toggle, and delete todos**
- **Search functionality** - Filter todos by text content
- **Status filtering** - View all, active, or completed todos
- **Persistent storage** - Todos are automatically saved to localStorage
- **Modern UI** - Clean, responsive design with CSS Modules
- **Real-time updates** - Instant UI updates with Redux

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **State Management**: Redux Toolkit 2.8.2
- **Build Tool**: Vite 7.0.0
- **Styling**: CSS Modules
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint 9.29.0 with TypeScript support

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Key Features Explained

### State Management with Redux Toolkit

- **Centralized State**: All todo data managed in Redux store
- **Immutable Updates**: Using Immer for clean state mutations
- **Memoized Selectors**: Optimized data filtering and selection
- **Type Safety**: Full TypeScript integration with Redux

### Persistent Storage

- **Automatic Saving**: Todos persist across browser sessions
- **Error Handling**: Graceful fallbacks for storage failures
- **Real-time Sync**: Store subscription for automatic persistence

### Search and Filtering

- **Text Search**: Real-time filtering by todo content
- **Status Filters**: Filter by all, active, or completed todos
- **Combined Filters**: Search and status filters work together

## 🧪 Development

### TypeScript Configuration

The project uses strict TypeScript configuration with:

- Strict type checking enabled
- Unused variable detection
- No implicit any types

### Code Quality

- ESLint with TypeScript support
- React Hooks rules enforcement
- Consistent code formatting
- Type-safe development

## Acknowledgments

- Built with [React](https://reactjs.org/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Build tool powered by [Vite](https://vitejs.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
