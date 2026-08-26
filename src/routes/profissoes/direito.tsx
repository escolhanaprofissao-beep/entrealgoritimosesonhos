import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Scale, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/direito')({
  component: DireitoPage,
})

function DireitoPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <Scale size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Direito</h1>

          <p className="profession-intro">
            O Direito estuda as normas e princípios que organizam a vida em
            sociedade e oferece diferentes caminhos de atuação relacionados à
            justiça, à legislação e às relações jurídicas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">
          <article className="profession-card">
            <h2>O que faz um profissional do Direito?</h2>

            <p>
              Quem se forma em Direito pode seguir diferentes caminhos
              profissionais, trabalhando com questões jurídicas, legislação,
              orientação, pesquisa e outras atividades relacionadas à área.
            </p>

            <p>
              Algumas carreiras jurídicas possuem requisitos específicos,
              como aprovação em concursos ou exames profissionais.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Advocacia
              </li>
              <li>
                <CheckCircle2 size={18} />
                Direito empresarial
              </li>
              <li>
                <CheckCircle2 size={18} />
                Direito trabalhista
              </li>
              <li>
                <CheckCircle2 size={18} />
                Direito civil
              </li>
              <li>
                <CheckCircle2 size={18} />
                Direito penal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Direito público
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A graduação em Direito pode permitir diferentes trajetórias
              profissionais. Além da advocacia, existem caminhos relacionados
              ao setor público, empresas, pesquisa, consultoria e outras
              áreas jurídicas, de acordo com os requisitos de cada carreira.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Argumentação</span>
              <span>Comunicação</span>
              <span>Leitura</span>
              <span>Sociedade</span>
              <span>Justiça</span>
              <span>Pesquisa</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
