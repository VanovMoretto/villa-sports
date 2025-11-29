import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<h2 className="text-3xl font-bold text-center mt-10">Bem-vindo ao Villa Sports</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;