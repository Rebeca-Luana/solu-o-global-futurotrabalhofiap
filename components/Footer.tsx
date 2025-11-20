export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">FuturoTrabalho</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Transformando profissionais para o futuro do trabalho através de educação acessível e de qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-2" aria-label="Links rodapé">
              <a href="#solucoes" className="text-foreground/70 text-sm hover:text-primary transition-colors block">
                Soluções
              </a>
              <a href="#cursos" className="text-foreground/70 text-sm hover:text-primary transition-colors block">
                Cursos
              </a>
              <a href="#depoimentos" className="text-foreground/70 text-sm hover:text-primary transition-colors block">
                Depoimentos
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div id="contato">
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-foreground/70 text-sm">
              <p>Email: info@futurotrabalho.com</p>
              <p>Tel: +55 (11) 1234-5678</p>
              <p>São Paulo - SP</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  aria-label={`Visite nossa página no ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; {currentYear} FuturoTrabalho. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
