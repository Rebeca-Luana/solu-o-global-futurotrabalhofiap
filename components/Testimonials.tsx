export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Gerente Comercial → Data Analyst',
      text: 'Eu tinha medo de ser deixada para trás pela automação. O programa de reskilling me transformou em profissional de dados. Hoje ganho 40% mais e tenho mais segurança.',
      image: '/mulher-profissional-sorrindo.jpg',
    },
    {
      name: 'Carlos Santos',
      role: 'Desenvolvedor Backend',
      text: 'Achei que minhas habilidades estavam "antigas". O upskilling em arquitetura de nuvem me abriu portas que nunca imaginei. Agora sou Tech Lead.',
      image: '/homem-profissional-confiante.jpg',
    },
    {
      name: 'Ana Costa',
      role: 'Administradora → Gerenta de Projetos Ágil',
      text: 'A transformação digital parecia ameaçadora, mas aprendi que adaptabilidade é meu super-poder. Agora lidero times de forma muito mais eficiente.',
      image: '/mulher-profissional-lideran-a.jpg',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Histórias de Sucesso
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-accent rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/70 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
