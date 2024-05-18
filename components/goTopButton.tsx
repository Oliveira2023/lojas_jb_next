import { useEffect } from 'react';

// Função para verificar se estamos no navegador
const isBrowser = () => typeof window !== 'undefined';

// Função para rolar para o topo
function scrollToTop() {
  // Verifica se estamos no navegador
  if (!isBrowser()) return;

  // Rola para o topo da página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function GoTopButton() {
  // Adiciona um ouvinte de eventos para o scroll
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      const button = document.getElementById('goTopBtn');
      if (button) button.style.display = show ? 'flex' : 'none';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="goTopBtn"
      onClick={scrollToTop}
      style={{ display: 'none', position: 'fixed', bottom: '20px', right: '30px', background: 'rgb(59 130 246)', width: '60px', height: '60px', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
      <p>Topo</p>
    </button>
  );
}
