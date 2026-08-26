import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Brain, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/filosofia')({
  component: FilosofiaPage,
})

function FilosofiaPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <Brain size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Filosofia</h1>

          <p className="profession-intro">
            A Filosofia investiga questões relacionadas ao conhecimento, à
            ética, à existência, à sociedade e ao pensamento humano,
            desenvolvendo análise crítica e argumentação.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Filosofia?</h2>

            <p>
              A formação em Filosofia desenvolve habilidades de leitura,
              interpretação, reflexão, argumentação e análise crítica de
              diferentes questões e ideias.
            </p>

            <p>
              Dependendo da formação e da trajetória escolhida, o profissional
              pode atuar em educação, pesquisa, produção de conteúdo, cultura
              e outras atividades relacionadas ao pensamento e às ciências
              humanas.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Ensino de Filosofia
              </li>
              <li>
                <CheckCircle2 size={18} />
                Pesquisa acadêmica
              </li>
              <li>
                <CheckCircle2 size={18} />
                Ética
              </li>
              <li>
                <CheckCircle2 size={18} />
                Cultura
              </li>
              <li>
                <CheckCircle2 size={18} />
                Produção e análise de conteúdo
              </li>
              <li>
                <CheckCircle2 size={18} />
                Pesquisa em Ciências Humanas
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A formação pode levar a diferentes caminhos relacionados à
              educação, pesquisa, cultura e produção de conhecimento. A
              licenciatura, por exemplo, está relacionada à formação para a
              docência conforme as regras educacionais aplicáveis.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>História</span>
              <span>Português</span>
              <span>Leitura</span>
              <span>Argumentação</span>
              <span>Ética</span>
              <span>Pensamento crítico</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
