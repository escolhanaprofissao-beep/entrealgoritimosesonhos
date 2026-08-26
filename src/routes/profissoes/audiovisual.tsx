import React from "react";

export default function AudiovisualPage() {
  return (
    <div className="profession-page">
      <header className="profession-hero">
        <span className="profession-icon">🎬</span>
        <h1>Audiovisual</h1>
        <p>
          A criação de conteúdos que combinam imagem, som, narrativa e
          tecnologia para comunicar ideias e contar histórias.
        </p>
      </header>

      <main className="profession-content">
        <section>
          <h2>O que é Audiovisual?</h2>
          <p>
            O Audiovisual reúne diferentes linguagens e técnicas relacionadas
            à produção de conteúdos com imagem e som.
          </p>
          <p>
            A área pode envolver cinema, televisão, vídeos para internet,
            produção de conteúdo, animação, jogos eletrônicos e outras formas
            de comunicação audiovisual.
          </p>
        </section>

        <section>
          <h2>O que faz um profissional de Audiovisual?</h2>
          <ul>
            <li>Planeja e produz conteúdos audiovisuais.</li>
            <li>Participa de gravações e produções.</li>
            <li>Trabalha com edição de vídeo e som.</li>
            <li>Desenvolve roteiros e narrativas.</li>
            <li>Participa de projetos cinematográficos e digitais.</li>
            <li>Colabora com equipes de criação e produção.</li>
          </ul>
        </section>

        <section>
          <h2>Possíveis áreas de atuação</h2>
          <ul>
            <li>Cinema</li>
            <li>Televisão</li>
            <li>Produção de vídeos</li>
            <li>Roteiro</li>
            <li>Edição</li>
            <li>Direção</li>
            <li>Animação</li>
            <li>Conteúdo digital</li>
          </ul>
        </section>

        <section>
          <h2>O que estudar?</h2>
          <div className="subject-grid">
            <span>Comunicação</span>
            <span>Arte</span>
            <span>Roteiro</span>
            <span>Fotografia</span>
            <span>Edição</span>
            <span>Som</span>
            <span>Tecnologia</span>
          </div>
        </section>

        <section>
          <h2>Perfil que pode combinar</h2>
          <p>
            Pode combinar com pessoas criativas, comunicativas e interessadas
            em cinema, vídeos, fotografia, tecnologia, narrativa e produção de
            conteúdo.
          </p>
        </section>
      </main>
    </div>
  );
}
