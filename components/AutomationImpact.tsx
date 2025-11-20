export default function AutomationImpact() {
  const impacts = [
    {
      stat: '47%',
      description: 'de empregos podem ser afetados pela automação nos próximos 10 anos',
    },
    {
      stat: '85%',
      description: 'das empresas planejam usar IA em suas operações até 2025',
    },
    {
      stat: '+65%',
      description: 'de crescimento em demanda por profissionais tech desde 2020',
    },
    {
      stat: '5.2 anos',
      description: 'é o tempo médio que leva para habilidades se tornarem obsoletas',
    },
  ];

  return (
    <section id="impacto" className="py-16 md:py-24 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">
          Impacto da Automação no Trabalho
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-background rounded-lg border border-border text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {item.stat}
              </div>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-center text-lg text-foreground/80 leading-relaxed">
            Esses números não são para assustá-lo, mas para motivá-lo. A boa notícia? 
            Profissionais que se reinventam regularmente estão entre os mais procurados do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
