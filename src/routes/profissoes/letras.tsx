import React from "react";

export default function LetrasPage() {
  return (
    <div className="profession-page">
      <header className="profession-hero">
        <span className="profession-icon">📚</span>
        <h1>Letras</h1>
        <p>
          O estudo da linguagem, das línguas, da literatura e das diferentes
          formas de comunicação por meio da palavra.
        </p>
      </header>

      <main className="profession-content">
        <section>
          <h2>O que é Letras?</h2>
          <p>
            O curso de Letras envolve o estudo das línguas, da linguagem e da
            literatura. Dependendo da formação escolhida, o estudante pode se
            aprofundar em uma ou mais línguas e em diferentes áreas dos estudos
            linguísticos e literários.
          </p>
        </section>

        <section>
          <h2>O que faz um profissional de Letras?</h2>
          <ul>
            <li>Estuda línguas e suas estruturas.</li>
            <li>Analisa obras literárias.</li>
            <li>Trabalha com leitura e produção de textos.</li>
            <li>Pode atuar no ensino de línguas.</li>
            <li>Pode trabalhar com revisão e produção textual.</li>
            <li>Participa de pesquisas linguísticas e literárias.</li>
          </ul>
        </section>

        <section>
          <h2>Possíveis áreas de atuação</h2>
          <ul>
            <li>Ensino</li>
            <li>Literatura</li>
            <li>Tradução</li>
            <li>Revisão de textos</li>
            <li>Produção editorial</li>
            <li>Pesquisa acadêmica</li>
            <li>Produção de conteúdo</li>
          </ul>
        </section>

        <section>
          <h2>O que estudar?</h2>
          <div className="subject-grid">
            <span>Língua Portuguesa</span>
            <span>Literatura</span>
            <span>Gramática</span>
            <span>Linguística</span>
            <span>Redação</span>
            <span>Línguas Estrangeiras</span>
          </div>
        </section>

        <section>
          <h2>Perfil que pode combinar</h2>
          <p>
            Pode combinar com quem gosta de leitura, escrita, comunicação,
            idiomas, literatura, interpretação de textos e ensino.
          </p>
        </section>
      </main>
    </div>
  );
}
