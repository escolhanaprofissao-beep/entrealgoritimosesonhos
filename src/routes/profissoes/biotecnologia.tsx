import React from "react";

export default function BiotecnologiaPage() {
  return (
    <div className="profession-page">
      <header className="profession-hero">
        <span className="profession-icon">🧬</span>
        <h1>Biotecnologia</h1>
        <p>
          Ciência, tecnologia e inovação para transformar conhecimentos
          biológicos em soluções para a sociedade.
        </p>
      </header>

      <main className="profession-content">
        <section>
          <h2>O que é Biotecnologia?</h2>
          <p>
            A Biotecnologia utiliza conhecimentos de Biologia, Química,
            genética, microbiologia e outras áreas para desenvolver produtos,
            processos e soluções que podem ser aplicados em diferentes setores.
          </p>
          <p>
            É uma área interdisciplinar presente em setores como saúde,
            agricultura, alimentos, meio ambiente e produção industrial.
          </p>
        </section>

        <section>
          <h2>O que faz um profissional da área?</h2>
          <ul>
            <li>Participa de pesquisas científicas e tecnológicas.</li>
            <li>Atua em processos laboratoriais e de produção.</li>
            <li>Trabalha com análises biológicas e moleculares.</li>
            <li>Participa do desenvolvimento de produtos biotecnológicos.</li>
            <li>Pode atuar em controle de qualidade e biossegurança.</li>
          </ul>
        </section>

        <section>
          <h2>Onde pode trabalhar?</h2>
          <ul>
            <li>Laboratórios de pesquisa</li>
            <li>Empresas de biotecnologia</li>
            <li>Indústrias farmacêuticas</li>
            <li>Indústrias de alimentos</li>
            <li>Instituições de pesquisa</li>
            <li>Empresas do setor agrícola</li>
            <li>Setor ambiental</li>
          </ul>
        </section>

        <section>
          <h2>O que estudar?</h2>
          <div className="subject-grid">
            <span>Biologia</span>
            <span>Química</span>
            <span>Genética</span>
            <span>Microbiologia</span>
            <span>Biologia Molecular</span>
            <span>Bioquímica</span>
          </div>
        </section>

        <section>
          <h2>Perfil que pode combinar</h2>
          <p>
            Pode ser interessante para quem gosta de Ciências da Natureza,
            pesquisa, tecnologia, laboratório, resolução de problemas e
            inovação.
          </p>
        </section>
      </main>
    </div>
  );
}
