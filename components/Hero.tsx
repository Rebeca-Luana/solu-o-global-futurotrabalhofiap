'use client';

import { useState } from 'react';

export default function Hero() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    objective: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formState.objective.trim()) {
      newErrors.objective = 'Objetivo profissional é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSuccessMessage('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setSuccessMessage('Cadastro realizado com sucesso! Você receberá nossos conteúdos em breve.');
    setFormState({ name: '', email: '', objective: '' });

    // Auto-clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              O Futuro do Trabalho Começa Agora
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              A automação e IA estão transformando o mercado. Profissionais que se adaptam prosperam. 
              Descubra como você pode estar preparado para os desafios e oportunidades de amanhã.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Inscrever-se no nosso programa"
              >
                Comece Aqui
              </button>
              <button
                onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Explorar nossos cursos"
              >
                Ver Cursos
              </button>
            </div>
          </div>

          {/* Right - Form */}
          <div id="form-section" className="bg-white dark:bg-accent rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Comece Sua Transformação</h3>

            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de inscrição">
              {/* Success Message with aria-live */}
              {successMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm"
                >
                  {successMessage}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Nome Completo <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  E-mail <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Objective Field */}
              <div>
                <label htmlFor="objective" className="block text-sm font-medium mb-2 text-foreground">
                  Objetivo Profissional <span className="text-primary">*</span>
                </label>
                <select
                  id="objective"
                  value={formState.objective}
                  onChange={(e) => setFormState({ ...formState, objective: e.target.value })}
                  aria-invalid={!!errors.objective}
                  aria-describedby={errors.objective ? 'objective-error' : undefined}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
                >
                  <option value="">Selecione seu objetivo...</option>
                  <option value="reskilling">Reskilling - Aprenda novas habilidades</option>
                  <option value="upskilling">Upskilling - Melhore suas competências</option>
                  <option value="transition">Transição de carreira</option>
                  <option value="leadership">Desenvolvimento de liderança</option>
                </select>
                {errors.objective && (
                  <p id="objective-error" className="mt-1 text-sm text-red-600">
                    {errors.objective}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-busy={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Inscrever-se Agora'}
              </button>

              <p className="text-xs text-foreground/60">
                Seus dados são protegidos. Não compartilhamos com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
