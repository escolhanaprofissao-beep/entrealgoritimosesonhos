import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, FlaskConical, GraduationCap, Target } from 'lucide-react'

export const Route = createFileRoute('/profissoes/biomedicina')({
  component: BiomedicinaPage,
})

function BiomedicinaPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <span className="profession-overline">
            PROFISSÃO
          </span>

          <h1>Biomedicina</h1>

          <p>
            A Biomedicina é uma área da saúde voltada ao estudo dos processos
            biológicos e à atuação em análises, pesquisa, diagnóstico e outras
            áreas relacionadas à saúde.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <FlaskConical size={28} />

            <h2>O que faz um biomédico?</h2>

            <p>
              O biomédico pode atuar em diferentes áreas relacionadas às
              análises laboratoriais, pesquisa científica e desenvolvimento
              de conhecimentos e tecnologias na área da saúde.
            </p>

            <p>
              A atuação profissional depende da formação, habilitação e das
              regras aplicáveis à área escolhida.
            </p>
          </article>

          <article className="profession-card">
            <GraduationCap size={28} />

            <h2>Formação</h2>

            <p>
              Para seguir essa carreira, é necessário cursar uma graduação em
              Biomedicina.
            </p>

            <p>
              Durante a formação, o estudante entra em contato com conteúdos
              de Biologia, Química, anatomia, fisiologia, microbiologia e
              outras áreas das ciências da saúde.
            </p>
          </article>

          <article className="profession-card">
            <Target size={28} />

            <h2>Possíveis caminhos</h2>

            <ul>
              <li>Análises clínicas</li>
              <li>Pesquisa científica</li>
              <li>Microbiologia</li>
              <li>Imunologia</li>
              <li>Biologia molecular</li>
              <li>Genética</li>
              <li>Indústria e desenvolvimento</li>
              <li>Áreas relacionadas à saúde</li>
            </ul>
          </article>

        </div>
      </section>
    </main>
  )
}
