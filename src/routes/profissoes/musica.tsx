import React from "react";

export default function MusicaPage() {
  return (
    <div className="profession-page">
      <header className="profession-hero">
        <span className="profession-icon">🎵</span>
        <h1>Música</h1>
        <p>
          Uma área artística e acadêmica dedicada à criação, interpretação,
          pesquisa, produção e ensino musical.
        </p>
      </header>

      <main className="profession-content">
        <section>
          <h2>O que é Música?</h2>
          <p>
            A Música envolve criação, interpretação, composição, arranjo,
            pesquisa e diferentes formas de produção e expressão sonora.
          </p>
          <p>
            A formação pode preparar o estudante para diferentes caminhos,
            incluindo performance, composição, educação musical e pesquisa.
          </p>
        </section>

        <section>
          <h2>O que faz um profissional de Música?</h2>
          <ul>
            <li>Interpreta obras musicais.</li>
            <li>Cria e compõe músicas.</li>
            <li>Realiza arranjos musicais.</li>
            <li>Pode ensinar música.</li>
            <li>Participa de apresentações e projetos culturais.</li>
            <li>Pesquisa música e cultura.</li>
          </ul>
        </section>

        <section>
          <h2>Possíveis áreas de atuação</h2>
          <ul>
            <li>Performance musical</li>
            <li>Composição</li>
            <li>Educação musical</li>
            <li>Produção musical</li>
            <li>Pesquisa</li>
            <li>Projetos culturais</li>
            <li>Orquestras e grupos musicais</li>
          </ul>
        </section>

        <section>
          <h2>O que estudar?</h2>
          <div className="subject-grid">
            <span>Teoria Musical</span>
            <span>Percepção Musical</span>
            <span>História da Música</span>
            <span>Instrumento</span>
            <span>Composição</span>
            <span>Tecnologia Musical</span>
          </div>
        </section>

        <section>
          <h2>Perfil que pode combinar</h2>
          <p>
            Pode combinar com pessoas interessadas em música, criatividade,
            expressão artística, instrumentos, composição e trabalho em equipe.
          </p>
        </section>
      </main>
    </div>
  );
}
