import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Sprout, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/agronomia')({
  component: AgronomiaPage,
})

function AgronomiaPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <Sprout size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Agronomia</h1>

          <p className="profession-intro">
            A Agronomia reúne conhecimentos relacionados à produção
            agropecuária, ao solo, às plantas, aos recursos naturais e à
            gestão das atividades no campo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Agronomia?</h2>

            <p>
              O profissional pode atuar no planejamento e acompanhamento de
              atividades agrícolas e agropecuárias, considerando fatores como
              produção, solo, plantas, recursos naturais e tecnologias
              aplicadas ao campo.
            </p>

            <p>
              A área também pode envolver gestão rural, pesquisa,
              consultoria, produção vegetal e outras atividades relacionadas
              ao setor agropecuário.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Produção agrícola
              </li>
              <li>
                <CheckCircle2 size={18} />
                Manejo e conservação do solo
              </li>
              <li>
                <CheckCircle2 size={18} />
                Produção vegetal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Gestão rural
              </li>
              <li>
                <CheckCircle2 size={18} />
                Pesquisa e desenvolvimento
              </li>
              <li>
                <CheckCircle2 size={18} />
                Consultoria agropecuária
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A formação em Agronomia pode levar a diferentes trajetórias no
              setor agropecuário, em propriedades rurais, empresas,
              cooperativas, consultorias, instituições de pesquisa e outros
              ambientes relacionados à produção e ao campo.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Biologia</span>
              <span>Química</span>
              <span>Geografia</span>
              <span>Natureza</span>
              <span>Tecnologia</span>
              <span>Ambiente e Agro</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
