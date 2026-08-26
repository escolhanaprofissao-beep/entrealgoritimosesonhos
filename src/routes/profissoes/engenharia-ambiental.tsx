import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Leaf, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/engenharia-ambiental')({
  component: EngenhariaAmbientalPage,
})

function EngenhariaAmbientalPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <Leaf size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Engenharia Ambiental</h1>

          <p className="profession-intro">
            A Engenharia Ambiental reúne conhecimentos de engenharia e
            ciências ambientais para lidar com questões relacionadas à
            prevenção, controle e gestão de impactos ambientais.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Engenharia Ambiental?</h2>

            <p>
              O profissional pode atuar no planejamento e desenvolvimento de
              soluções relacionadas à gestão ambiental, saneamento, resíduos,
              recursos naturais e controle de impactos ambientais.
            </p>

            <p>
              A atuação pode envolver empresas, órgãos públicos, consultorias,
              projetos ambientais e diferentes setores da indústria.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Gestão ambiental
              </li>
              <li>
                <CheckCircle2 size={18} />
                Saneamento
              </li>
              <li>
                <CheckCircle2 size={18} />
                Gestão de resíduos
              </li>
              <li>
                <CheckCircle2 size={18} />
                Recursos hídricos
              </li>
              <li>
                <CheckCircle2 size={18} />
                Controle de impactos ambientais
              </li>
              <li>
                <CheckCircle2 size={18} />
                Consultoria ambiental
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A formação pode levar a diferentes funções relacionadas à
              engenharia, gestão ambiental, saneamento, recursos naturais,
              consultoria e planejamento de projetos.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Biologia</span>
              <span>Química</span>
              <span>Geografia</span>
              <span>Natureza</span>
              <span>Sustentabilidade</span>
              <span>Resolução de problemas</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
