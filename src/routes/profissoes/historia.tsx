import React from "react";

export default function HistoriaPage() {
  return (
    <div className="profession-page">
      <header className="profession-hero">
        <span className="profession-icon">🏛️</span>
        <h1>História</h1>
        <p>
          O estudo das sociedades humanas, suas transformações, experiências
          e relações ao longo do tempo.
        </p>
      </header>

      <main className="profession-content">
        <section>
          <h2>O que é História?</h2>
          <p>
            A História busca compreender as experiências humanas ao longo do
            tempo, analisando acontecimentos, sociedades, culturas, conflitos,
            transformações políticas, econômicas e sociais.
          </p>
          <p>
            O profissional utiliza fontes históricas e métodos de pesquisa para
            investigar e interpretar diferentes períodos e sociedades.
          </p>
        </section>

        <section>
          <h2>O que faz um historiador?</h2>
          <ul>
            <li>Pesquisa documentos e fontes históricas.</li>
            <li>Analisa acontecimentos e processos históricos.</li>
            <li>Produz pesquisas e textos acadêmicos.</li>
            <li>Participa de projetos de preservação da memória.</li>
            <li>Pode atuar na educação e divulgação do conhecimento histórico.</li>
          </ul>
        </section>

        <section>
          <h2>Possíveis áreas de atuação</h2>
          <ul>
            <li>Pesquisa histórica</li>
            <li>Ensino</li>
            <li>Museus</li>
            <li>Arquivos</li>
            <li>Patrimônio histórico e cultural</li>
            <li>Pesquisa acadêmica</li>
            <li>Produção cultural</li>
          </ul>
        </section>

        <section>
          <h2>O que estudar?</h2>
          <div className="subject-grid">
            <span>História</span>
            <span>Sociologia</span>
            <span>Filosofia</span>
            <span>Geografia</span>
            <span>Política</span>
            <span>Cultura</span>
          </div>
        </section>

        <section>
          <h2>Perfil que pode combinar</h2>
          <p>
            Pode combinar com pessoas curiosas, interessadas em sociedade,
            cultura, política, leitura, pesquisa, escrita e compreensão do
            passado.
          </p>
        </section>
      </main>
    </div>
  );
}
