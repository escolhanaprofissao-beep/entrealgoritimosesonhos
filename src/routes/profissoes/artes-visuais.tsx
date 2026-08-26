import React from "react";

export default function ArtesVisuaisPage() {
  return (
    <div className="profession-page">
      <header className="profession-hero">
        <span className="profession-icon">🎨</span>
        <h1>Artes Visuais</h1>
        <p>
          Uma área voltada à criação, pesquisa e reflexão por meio de
          diferentes linguagens visuais.
        </p>
      </header>

      <main className="profession-content">
        <section>
          <h2>O que são Artes Visuais?</h2>
          <p>
            As Artes Visuais envolvem diferentes formas de expressão artística,
            como desenho, pintura, escultura, fotografia, gravura e linguagens
            digitais.
          </p>
          <p>
            A área também pode envolver pesquisa, educação, produção cultural
            e desenvolvimento de projetos artísticos.
          </p>
        </section>

        <section>
          <h2>O que faz um profissional de Artes Visuais?</h2>
          <ul>
            <li>Cria e desenvolve trabalhos artísticos.</li>
            <li>Pesquisa diferentes linguagens visuais.</li>
            <li>Participa de exposições e projetos culturais.</li>
            <li>Pode atuar no ensino de Arte.</li>
            <li>Desenvolve projetos individuais ou coletivos.</li>
            <li>Trabalha com diferentes tecnologias e materiais.</li>
          </ul>
        </section>

        <section>
          <h2>Possíveis áreas de atuação</h2>
          <ul>
            <li>Produção artística</li>
            <li>Ensino de Arte</li>
            <li>Fotografia</li>
            <li>Ilustração</li>
            <li>Produção cultural</li>
            <li>Exposições e espaços culturais</li>
            <li>Arte digital</li>
          </ul>
        </section>

        <section>
          <h2>O que estudar?</h2>
          <div className="subject-grid">
            <span>Arte</span>
            <span>História da Arte</span>
            <span>Desenho</span>
            <span>Fotografia</span>
            <span>Cultura</span>
            <span>Tecnologia</span>
          </div>
        </section>

        <section>
          <h2>Perfil que pode combinar</h2>
          <p>
            Pode combinar com pessoas criativas, observadoras e interessadas
            em arte, cultura, comunicação visual e criação.
          </p>
        </section>
      </main>
    </div>
  );
}
