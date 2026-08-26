import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profissoes/biologia')({
  component: BiologiaPage,
})

function BiologiaPage() {
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

          <h1>Biologia</h1>

          <p>
            A Biologia é a área dedicada ao estudo da vida,
            dos seres vivos, de suas relações e dos processos
            que acontecem nos organismos e nos ecossistemas.
          </p>
        </header>

        <section className="profession-section">
          <h2>O que faz um biólogo?</h2>

          <p>
            O profissional de Biologia pode estudar organismos,
            ambientes e processos relacionados à vida. Dependendo
            da formação e da área de atuação, pode trabalhar com
            pesquisa, educação, conservação da natureza, análises
            e diferentes atividades relacionadas às Ciências
            Biológicas.
          </p>
        </section>

        <section className="profession-section">
          <h2>Possíveis caminhos</h2>

          <div className="profession-grid">

            <article>
              <h3>Pesquisa</h3>
              <p>
                Investigação de organismos, processos biológicos,
                ambientes e fenômenos relacionados à vida.
              </p>
            </article>

            <article>
              <h3>Meio Ambiente</h3>
              <p>
                Estudos relacionados à biodiversidade, conservação
                e funcionamento dos ecossistemas.
              </p>
            </article>

            <article>
              <h3>Educação</h3>
              <p>
                Atuação relacionada ao ensino de Ciências e
                Biologia, conforme a formação e os requisitos
                profissionais.
              </p>
            </article>

            <article>
              <h3>Biotecnologia</h3>
              <p>
                Aplicação de conhecimentos biológicos em pesquisas,
                processos e desenvolvimento de soluções.
              </p>
            </article>

            <article>
              <h3>Conservação</h3>
              <p>
                Estudos e ações relacionadas à preservação da
                biodiversidade e dos recursos naturais.
              </p>
            </article>

            <article>
              <h3>Saúde e Laboratório</h3>
              <p>
                Algumas áreas de atuação podem envolver atividades
                laboratoriais e relacionadas à saúde, de acordo
                com a formação e as habilitações profissionais.
              </p>
            </article>

          </div>
        </section>

        <section className="profession-section">
          <h2>O que pode ser estudado?</h2>

          <ul>
            <li>Ecologia</li>
            <li>Genética</li>
            <li>Botânica</li>
            <li>Zoologia</li>
            <li>Microbiologia</li>
            <li>Evolução</li>
            <li>Biologia celular</li>
            <li>Conservação da biodiversidade</li>
          </ul>
        </section>

        <section className="profession-section">
          <h2>Perfil que pode se interessar</h2>

          <p>
            Pessoas curiosas sobre a vida, a natureza, os animais,
            as plantas, os microrganismos e os processos naturais
            podem encontrar na Biologia uma área interessante
            para explorar.
          </p>

          <p className="fine-print">
            Essas características não determinam se uma pessoa deve
            seguir essa profissão. O objetivo é apresentar
            possibilidades para exploração.
          </p>
        </section>

        <section className="profession-section">
          <h2>Importante</h2>

          <p>
            A Biologia é uma área ampla, com diferentes possibilidades
            de formação e atuação. Os requisitos para determinadas
            atividades profissionais podem variar de acordo com a
            legislação, a formação e a área escolhida.
          </p>
        </section>

        <a href="/#teste" className="button primary">
          Fazer o teste de perfil →
        </a>

      </div>
    </main>
  )
}
