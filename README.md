# O Futuro do Trabalho - Landing Page

## Descrição do Projeto

Uma landing page completa e acessível sobre "O Futuro do Trabalho", projetada para profissionais em recolocação que foram impactados pela automação e IA. O site oferece educação, recursos e um caminho claro para se adaptar às transformações tecnológicas.

## Persona Alvo

**Profissionais em Recolocação**
- Idade: 30-50 anos
- Impacto direto da automação/IA em suas funções
- Buscam reconversão profissional (reskilling/upskilling)
- Motivados por segurança profissional e crescimento
- Dispostos a investir em educação contínua
- Usam dispositivos diversos (mobile, tablet, desktop)

**Justificativa**: Esta persona foi escolhida porque representa o maior desafio do mercado de trabalho moderno - profissionais experientes que precisam se reinventar. A página foi construída para ser empodeadora, esperançosa e prática, mostrando que a transformação é possível.

## Como Rodar

\`\`\`bash
# Clone o repositório
git clone <seu-repo>

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Acesse no navegador
open http://localhost:3000
\`\`\`

## Decisões de UX e Acessibilidade

### Acessibilidade (WCAG 2.1 AA Compliant)

1. **Navegação Semântica**
   - Uso de tags semânticas: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`
   - Justificativa: Auxilia leitores de tela e estrutura lógica para usuários de teclado

2. **Navegação por Teclado**
   - Tab order lógico em todos os elementos interativos
   - Skip link para "Ir ao conteúdo principal" (visível ao focar)
   - Justificativa: Usuários com deficiência motora ou preferência pessoal dependem de navegação por teclado

3. **ARIA Labels e Atributos**
   - `aria-live="polite"` em mensagens dinâmicas (sucesso do formulário)
   - `aria-invalid` e `aria-describedby` em campos com erro
   - `aria-label` em botões de ícone e elementos sem texto
   - Justificativa: Comunica mudanças de estado e propósito a usuários de leitores de tela

4. **Contraste de Cores (AAA)**
   - Texto em azul (#2563eb) sobre fundo branco atende AAA
   - Texto cinza sobre fundo branco atende AA
   - Modo escuro incluído para conforto visual
   - Justificativa: Usuários com baixa visão ou daltonismo conseguem ler o conteúdo

5. **Tamanho de Fonte e Espaçamento**
   - Mínimo 16px em inputs e botões
   - Line-height 1.5-1.6 para legibilidade
   - Espaçamento adequado entre elementos
   - Justificativa: Melhora legibilidade e reduz fadiga visual

6. **Foco Visível**
   - Anel de foco de 2px em cor contrastante em todos os interativos
   - Customizado via CSS com outline-offset
   - Justificativa: Usuários de teclado precisam saber onde estão

7. **Formulário Acessível**
   - Labels associados a inputs via `htmlFor` e `id`
   - Validação em tempo real com feedback claro
   - Mensagens de erro visíveis e anunciadas
   - Justificativa: Usuários com deficiência cognitiva ou visual precisam de feedback claro

8. **Motion Acessibilidade**
   - Media query `prefers-reduced-motion` desativa animações
   - Justificativa: Usuários com vestibular ou enxaquecas precisam evitar movimento

### Decisões de UX

1. **Mobile-First Design**
   - Layout fluído começa em mobile, expande para desktop
   - Botões com 44px de altura (recomendação de toque)
   - Justificativa: 60%+ dos usuários acessam via mobile

2. **Formulário Heroico**
   - Posicionado na seção hero para maxima visibilidade
   - Validação em tempo real reduz frustração
   - Status de carregamento claro durante envio
   - Justificativa: CTA primário deve estar acima da dobra

3. **Filtro Dinâmico de Cursos**
   - Busca em tempo real e filtro por categoria
   - Contador de resultados atualiza via aria-live
   - Sem necessidade de reload
   - Justificativa: Reduz carga cognitiva, resposta rápida

4. **Testimonials Visuais**
   - Histórias autênticas da persona
   - Imagens e nomes personificados
   - Arco narrativo: medo → ação → sucesso
   - Justificativa: Prova social e identificação com o público

5. **Paleta Neutra Profissional**
   - Azul (#2563eb) como cor primária
   - Tons cinza para contextual
   - Branco/Off-white para backgrounds
   - Justificativa: Transmite confiança, profissionalismo e acessibilidade

## Interatividade

### 1. Formulário com Validação em Tempo Real

\`\`\`tsx
- Validação de nome (obrigatório)
- Validação de email (regex padrão)
- Seleção de objetivo profissional
- Estado de carregamento com botão desabilitado
- Mensagem de sucesso com aria-live
\`\`\`

**Como testar:**
- Deixar campo vazio → erro aparece
- Email inválido → mensagem específica
- Preencher corretamente → sucesso com feedback

### 2. Filtro Dinâmico com Busca

\`\`\`tsx
- 8 cursos em 4 categorias
- Busca por título e descrição
- Filtro por categoria com aria-pressed
- Contagem atualizada em tempo real
- Cards com hover animations
\`\`\`

**Como testar:**
- Digitar na barra de busca → cursos filtram
- Clicar categorias → lista atualiza
- Combinar filtros → múltiplos critérios

## Testes de Acessibilidade

### Lighthouse Audit
\`\`\`
Executar: npm run build && npm run start
Abrir DevTools → Lighthouse → Run Audit
Verificar:
- Accessibility: 90+
- Best Practices: 85+
\`\`\`

### Navegação por Teclado
\`\`\`
- Abrir site
- Usar TAB para navegar todos elementos
- ENTER para ativar botões
- ESC para fechar menu mobile
- SPACE para checkbox/radio
\`\`\`

### Leitor de Tela (NVDA/VoiceOver)
\`\`\`
macOS:
- Ativar VoiceOver: Cmd + F5
- Navegar: VO + Setas

Windows:
- Baixar NVDA gratuito
- Navegar com NVDA + Setas
\`\`\`

**Verificar:**
- Títulos anunciados corretamente
- Botões anunciados com seus labels
- Mensagens de erro lidas
- Mudanças dinâmicas anunciadas

## Deploy na Vercel

\`\`\`bash
# Push para GitHub
git push origin main

# Importar no Vercel
vercel import

# Deploy automático em cada push
\`\`\`

## Estrutura de Pastas

\`\`\`
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── AutomationImpact.tsx
│   ├── Solutions.tsx
│   ├── CourseFilter.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
└── README.md
\`\`\`

## Tecnologias

- **Next.js 16** - App Router, SSR
- **React 19** - Client Components para interatividade
- **Tailwind CSS v4** - Styling responsivo
- **TypeScript** - Type safety

## Features

✅ Landing page completa com 7 seções
✅ Formulário com validação real-time
✅ Filtro dinâmico de cursos (8 cursos, 4 categorias)
✅ Totalmente responsivo (mobile-first)
✅ WCAG 2.1 AA Accessible
✅ Navegação por teclado
✅ Modo escuro incluído
✅ Pronto para Vercel

## Checklist de Acessibilidade

- [x] Tags semânticas corretas
- [x] Navegação completa por teclado
- [x] ARIA labels apropriados
- [x] aria-live para mudanças dinâmicas
- [x] Contraste AA/AAA
- [x] Fonte mínima 16px em inputs
- [x] Foco visível personalizado
- [x] Suporte a prefers-reduced-motion
- [x] Modo escuro
- [x] Testado com leitores de tela

## Autor

Desenvolvido para GLOBAL SOLUTION 2025 - O Futuro do Trabalho
