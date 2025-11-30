import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BannerHero from './components/BannerHero';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <BannerHero />
                <section className="container mx-auto px-6 md:px-12 py-16">
                    <h2 className="text-3xl font-bold text-center uppercase mb-8">Nossos Diferenciais</h2>
                    <p className="text-center text-zinc-400">Conteúdo sobre estrutura, cardápio, etc. virá aqui.</p>
                </section>
              </>
            } />
            <Route path="/reservas" element={<div className="p-20 text-center">Página de Reservas</div>} />
            <Route path="/estrutura" element={<div className="p-20 text-center">Página de Estrutura</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;