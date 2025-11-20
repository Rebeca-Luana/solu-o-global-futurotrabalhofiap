export default function Problem() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
          O Desafio do Mercado Atual
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Automação Acelerada',
              description: 'Tarefas que eram manuais estão sendo automatizadas em ritmo nunca visto antes.',
            },
            {
              icon: '🤖',
              title: 'Ascensão da IA',
              description: 'IA generativa está criando novas profissões e eliminando outras ainda mais rápido.',
            },
            {
              icon: '📊',
              title: 'Mercado Exigente',
              description: 'Empregadores procuram profissionais versáteis, com pensamento crítico e criatividade.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-accent rounded-lg border border-border">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
          <p className="text-lg font-medium">
            Profissionais que não se adaptam correm o risco de se tornarem obsoletos. 
            <strong> Mas aqueles que abraçam a mudança encontram oportunidades ilimitadas.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
