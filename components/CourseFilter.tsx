'use client';

import { useState, useMemo } from 'react';

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
}

export default function CourseFilter() {
  const courses: Course[] = [
    {
      id: '1',
      title: 'Introdução a Python para Análise de Dados',
      category: 'tech',
      description: 'Aprenda Python desde o básico focado em manipulação de dados.',
      duration: '8 semanas',
      level: 'Iniciante',
    },
    {
      id: '2',
      title: 'Desenvolvedor Web Full Stack',
      category: 'tech',
      description: 'Domine React, Node.js e bases de dados para criar aplicações modernas.',
      duration: '12 semanas',
      level: 'Intermediário',
    },
    {
      id: '3',
      title: 'Cloud Computing com AWS',
      category: 'tech',
      description: 'Infraestrutura em nuvem, escalabilidade e segurança com AWS.',
      duration: '10 semanas',
      level: 'Intermediário',
    },
    {
      id: '4',
      title: 'Liderança na Era Digital',
      category: 'leadership',
      description: 'Desenvolva habilidades de liderança para gerenciar equipes remotas e diversas.',
      duration: '6 semanas',
      level: 'Intermediário',
    },
    {
      id: '5',
      title: 'Comunicação Executiva e Apresentações',
      category: 'leadership',
      description: 'Domine a arte de comunicar com impacto em diferentes contextos.',
      duration: '4 semanas',
      level: 'Iniciante',
    },
    {
      id: '6',
      title: 'Gestão Ágil de Projetos (Scrum)',
      category: 'management',
      description: 'Certificação Scrum Master e práticas ágeis para gerenciar projetos.',
      duration: '8 semanas',
      level: 'Intermediário',
    },
    {
      id: '7',
      title: 'Inteligência Emocional para Profissionais',
      category: 'soft-skills',
      description: 'Desenvolva autoconsciência, empatia e resiliência no ambiente corporativo.',
      duration: '5 semanas',
      level: 'Iniciante',
    },
    {
      id: '8',
      title: 'Pensamento Criativo e Inovação',
      category: 'soft-skills',
      description: 'Técnicas e ferramentas para impulsionar a criatividade e inovação.',
      duration: '6 semanas',
      level: 'Iniciante',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { value: '', label: 'Todas as categorias' },
    { value: 'tech', label: 'Tecnologia' },
    { value: 'leadership', label: 'Liderança' },
    { value: 'management', label: 'Gestão' },
    { value: 'soft-skills', label: 'Soft Skills' },
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="cursos" className="py-16 md:py-24 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Cursos Recomendados para o Futuro do Trabalho
        </h2>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar cursos por palavra-chave"
              className="w-full px-5 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <span className="absolute right-4 top-3 text-foreground/50">🔍</span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background border border-border text-foreground hover:bg-background/80'
                }`}
                aria-pressed={selectedCategory === cat.value}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-foreground/60" role="status" aria-live="polite">
            {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {categories.find((c) => c.value === course.category)?.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 leading-tight">{course.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">{course.description}</p>
                <div className="space-y-2 text-xs text-foreground/60 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span>Duração:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nível:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 mb-4">Nenhum curso encontrado com esses critérios.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
