import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Calculator, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/ciencias-contabeis')({
  component: CienciasContabeisPage,
})

function CienciasContabeisPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <Calculator size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Ciências Contábeis</h1>

          <p className="profession-intro">
            Ciências Contábeis é a área voltada ao estudo e à organização das
            informações financeiras e patrimoniais de organizações.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Ciências Contábeis?</h2>

            <p>
              O profissional da área trabalha com informações contábeis,
              financeiras e patrimoniais, auxiliando organizações na
              organização, análise e controle de seus recursos.
            </p>

            <p>
              A formação também pode oferecer caminhos relacionados à
              auditoria, controladoria, perícia e gestão financeira.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Contabilidade
              </li>
              <li>
                <CheckCircle2 size={18} />
                Auditoria
              </li>
              <li>
                <CheckCircle2 size={18} />
                Controladoria
              </li>
              <li>
                <CheckCircle2 size={18} />
                Consultoria
              </li>
              <li>
                <CheckCircle2 size={18} />
                Perícia contábil
              </li>
              <li>
                <CheckCircle2 size={18} />
                Área financeira
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A formação pode levar a diferentes funções dentro de empresas,
              escritórios contábeis, organizações públicas e privadas e outras
              instituições. A atuação específica depende da formação,
              experiência e dos requisitos profissionais aplicáveis a cada
              atividade.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Matemática</span>
              <span>Organização</span>
              <span>Finanças</span>
              <span>Análise</span>
              <span>Planejamento</span>
              <span>Gestão</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
