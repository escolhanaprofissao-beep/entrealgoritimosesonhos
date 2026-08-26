import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profissoes/administracao')({
  component: AdministracaoPage,
})

function AdministracaoPage() {
  return (
    <main className="profession-page">
      <div className="container">

        <a href="/#cursos" className="back-link">
          ← Voltar para cursos
        </a>

        <header className="profession-header">
          <span className="section-overline">
            PROFISSÃO
          </span>

          <h1>Administração</h1>

          <p>
            A Administração envolve planejamento, organização,
            gestão de recursos e tomada de decisões em organizações.
          </p>
        </header>

        <section className="profession-section">
          <h2>O que faz um administrador?</h2>

          <p>
            O profissional de Administração pode atuar na gestão
            de empresas, organizações e projetos, ajudando a planejar
            estratégias, organizar recursos, acompanhar resultados
            e tomar decisões.
          </p>
        </section>

        <section className="profession-section">
          <h2>Onde pode trabalhar?</h2>

          <div className="profession-grid">
            <article>
              <h3>Gestão</h3>
              <p>
                Planejamento e administração de organizações e equipes.
              </p>
            </article>

            <article>
              <h3>Marketing</h3>
              <p>
                Estratégias de comunicação, mercado e relacionamento
                com clientes.
              </p>
            </article>

            <article>
              <h3>Finanças</h3>
              <p>
                Análise de recursos, orçamento e planejamento financeiro.
              </p>
            </article>

            <article>
              <h3>Recursos Humanos</h3>
              <p>
                Gestão de pessoas, desenvolvimento de equipes e
                processos organizacionais.
              </p>
            </article>

            <article>
              <h3>Empreendedorismo</h3>
              <p>
                Criação e gestão de negócios e projetos.
              </p>
            </article>

            <article>
              <h3>Consultoria</h3>
              <p>
                Análise de problemas e desenvolvimento de soluções
                para organizações.
              </p>
            </article>
          </div>
        </section>

        <section className="profession-section">
          <h2>Áreas relacionadas</h2>

          <ul>
            <li>Gestão empresarial</li>
            <li>Marketing</li>
            <li>Finanças</li>
            <li>Recursos Humanos</li>
            <li>Logística</li>
            <li>Empreendedorismo</li>
            <li>Consultoria</li>
          </ul>
        </section>

        <section className="profession-section">
          <h2>Perfil que pode gostar dessa área</h2>

          <p>
            Organização, planejamento, comunicação, liderança,
            resolução de problemas e interesse por negócios podem
            ser características relacionadas à área.
          </p>

          <p className="fine-print">
            Essas características não determinam se uma pessoa deve
            ou não seguir a profissão. O objetivo é apenas apresentar
            possibilidades para exploração.
          </p>
        </section>

        <a href="/#teste" className="button primary">
          Fazer o teste de perfil →
        </a>

      </div>
    </main>
  )
}
