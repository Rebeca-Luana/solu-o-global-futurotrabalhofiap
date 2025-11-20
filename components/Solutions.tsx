export default function Solutions() {
  const solutions = [
    {
      title: 'Reskilling',
      description: 'Aprender habilidades completamente novas para transição de carreira.',
      examples: ['Desenvolvimento web', 'Data Science', 'Cloud Computing'],
    },
    {
      title: 'Upskilling',
      description: 'Melhorar e expandir competências atuais para permanecer competitivo.',
      examples: ['Liderança', 'Gestão ágil', 'Comunicação executiva'],
    },
    {
      title: 'Adaptabilidade',
      description: 'Desenvolver mentalidade de aprendizado contínuo e flexibilidade profissional.',
      examples: ['Pensamento crítico', 'Criatividade', 'Inteligência emocional'],
    },
  ];

  return (
    <section id="solucoes" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Nossas Soluções para Você
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="p-8 bg-accent rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-primary">{solution.title}</h3>
              <p className="text-foreground/70 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.examples.map((example, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span> {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
