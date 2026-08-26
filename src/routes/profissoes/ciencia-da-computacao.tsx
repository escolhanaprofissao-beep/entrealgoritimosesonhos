import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profissoes/ciencia-da-computacao')({
  component: CienciaDaComputacaoPage,
})

function CienciaDaComputacaoPage() {
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

          <h1>Ciência da Computação</h1>

          <p>
            A Ciência da Computação estuda a computação, os algoritmos,
            os dados e o desenvolvimento de sistemas e soluções
            tecnológicas.
          </p>
        </header>

        <section className="profession-section">
          <h2>O que faz um profissional da área?</h2>

          <p>
            Quem trabalha com Ciência da Computação pode desenvolver
            programas e sistemas, analisar dados, estudar algoritmos,
            trabalhar com inteligência artificial e participar de
            projetos de tecnologia.
          </p>
        </section>

        <section className="profession-section">
          <h2>Possíveis caminhos</h2>

          <div className="profession-grid">

            <article>
              <h3>Desenvolvimento de Software</h3>
              <p>
                Criação e manutenção de programas, aplicativos,
                plataformas e sistemas.
              </p>
            </article>

            <article>
              <h3>Inteligência Artificial</h3>
              <p>
                Desenvolvimento e estudo de sistemas capazes de
                realizar tarefas envolvendo dados e aprendizado
                computacional.
              </p>
            </article>

            <article>
              <h3>Ciência de Dados</h3>
              <p>
                Análise de dados para encontrar informações,
                padrões e apoiar decisões.
              </p>
            </article>

            <article>
              <h3>Segurança da Informação</h3>
              <p>
                Proteção de sistemas, informações e infraestrutura
                digital.
              </p>
            </article>

            <article>
              <h3>Pesquisa</h3>
              <p>
                Investigação de novos métodos, algoritmos,
                tecnologias e soluções computacionais.
              </p>
            </article>

            <article>
              <h3>Computação e Tecnologia</h3>
              <p>
                Desenvolvimento de soluções tecnológicas para
                diferentes setores da sociedade.
              </p>
            </article>

          </div>
        </section>

        <section className="profession-section">
          <h2>O que pode ser estudado?</h2>

          <ul>
            <li>Programação</li>
            <li>Algoritmos</li>
            <li>Estruturas de dados</li>
            <li>Banco de dados</li>
            <li>Inteligência artificial</li>
            <li>Redes de computadores</li>
            <li>Engenharia de software</li>
            <li>Computação teórica</li>
          </ul>
        </section>

        <section className="profession-section">
          <h2>Perfil que pode se interessar</h2>

          <p>
            Pessoas que gostam de resolver problemas, entender como
            as coisas funcionam, trabalhar com lógica, tecnologia,
            matemática e criação de soluções podem se interessar
            por essa área.
          </p>

          <p className="fine-print">
            Essas características não determinam se uma pessoa deve
            seguir essa profissão. O objetivo é apresentar
            possibilidades de exploração.
          </p>
        </section>

        <section className="profession-section">
          <h2>Importante</h2>

          <p>
            A formação em Ciência da Computação pode abrir diferentes
            caminhos profissionais. A área de tecnologia é ampla e
            permite que o profissional desenvolva conhecimentos em
            diferentes especialidades ao longo da carreira.
          </p>
        </section>

        <a href="/#teste" className="button primary">
          Fazer o teste de perfil →
        </a>

      </div>
    </main>
  )
}
