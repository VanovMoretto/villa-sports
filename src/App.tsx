import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        {/* Área de conteúdo das páginas */}
        <main style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<h2>Bem-vindo ao Villa Sports</h2>} />
            {/* Outras rotas serão adicionadas aqui depois */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;