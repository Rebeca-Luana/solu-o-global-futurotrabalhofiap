'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Skip to main content link - sr-only for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-primary-foreground px-4 py-2 rounded"
        >
          Ir para conteúdo principal
        </a>

        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-primary">
            FuturoTrabalho
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" aria-label="Navegação principal">
          <a href="#solucoes" className="text-sm font-medium hover:text-primary transition-colors">
            Soluções
          </a>
          <a href="#cursos" className="text-sm font-medium hover:text-primary transition-colors">
            Cursos
          </a>
          <a href="#depoimentos" className="text-sm font-medium hover:text-primary transition-colors">
            Depoimentos
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-expanded={isMenuOpen}
          aria-label="Menu de navegação"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-accent px-4 py-4 flex flex-col gap-4" aria-label="Menu móvel">
          <a href="#solucoes" className="text-sm font-medium hover:text-primary transition-colors">
            Soluções
          </a>
          <a href="#cursos" className="text-sm font-medium hover:text-primary transition-colors">
            Cursos
          </a>
          <a href="#depoimentos" className="text-sm font-medium hover:text-primary transition-colors">
            Depoimentos
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
