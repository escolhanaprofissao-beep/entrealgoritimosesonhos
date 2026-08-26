import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Cog, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/engenharia-mecanica')({
  component: EngenhariaMecanicaPage,
})

function EngenhariaMecanicaPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <Cog size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Engenharia Mecânica</h1>

          <p className="profession-intro">
            A Engenharia Mecânica envolve o desenvolvimento, análise,
            fabricação e manutenção de máquinas, equipamentos e sistemas
            mecânicos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Engenharia Mecânica?</h2>

            <p>
              O engenheiro mecânico pode trabalhar no desenvolvimento e
              planejamento de máquinas, equipamentos e processos industriais,
              além de atuar na análise e melhoria de sistemas.
            </p>

            <p>
              A área também pode envolver energia, automação, fabricação,
              manutenção e projetos de diferentes tipos.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Projetos mecânicos
              </li>
              <li>
                <CheckCircle2 size={18} />
                Indústria
              </li>
              <li>
                <CheckCircle2 size={18} />
                Automação
              </li>
              <li>
                <CheckCircle2 size={18} />
                Energia
              </li>
              <li>
                <CheckCircle2 size={18} />
                Manutenção
              </li>
              <li>
                <CheckCircle2 size={18} />
                Fabricação e produção
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A graduação pode permitir diferentes trajetórias em empresas de
              engenharia, indústria, energia, fabricação, tecnologia e outros
              setores que utilizam sistemas mecânicos.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Matemática</span>
              <span>Física</span>
              <span>Tecnologia</span>
              <span>Projetos</span>
              <span>Máquinas</span>
              <span>Resolução de problemas</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
