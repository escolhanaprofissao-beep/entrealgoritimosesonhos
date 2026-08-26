import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, PawPrint, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/zootecnia')({
  component: ZootecniaPage,
})

function ZootecniaPage() {
  return (
    <main className="profession-page">
      <section className="profession-hero">
        <div className="container">
          <a href="/#cursos" className="profession-back">
            <ArrowLeft size={18} />
            Voltar para cursos
          </a>

          <div className="profession-icon">
            <PawPrint size={36} />
          </div>

          <p className="section-overline">PROFISSÃO</p>

          <h1>Zootecnia</h1>

          <p className="profession-intro">
            A Zootecnia é voltada ao estudo da criação, produção e manejo de
            animais, buscando melhorar sistemas de produção de forma planejada
            e responsável.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Zootecnia?</h2>

            <p>
              O zootecnista pode trabalhar com criação e produção animal,
              nutrição, reprodução, manejo e planejamento de sistemas
              produtivos.
            </p>

            <p>
              A atuação pode envolver diferentes espécies e sistemas de
              produção, além de empresas, propriedades rurais, consultorias,
              pesquisa e instituições relacionadas ao setor.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Nutrição animal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Reprodução animal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Manejo de animais
              </li>
              <li>
                <CheckCircle2 size={18} />
                Produção animal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Melhoramento genético
              </li>
              <li>
                <CheckCircle2 size={18} />
                Gestão de propriedades e sistemas de produção
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A formação pode levar a diferentes áreas da produção animal,
              empresas do setor agropecuário, propriedades rurais,
              consultorias, pesquisa e desenvolvimento de soluções para a
              produção.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Biologia</span>
              <span>Animais</span>
              <span>Natureza</span>
              <span>Agro</span>
              <span>Pesquisa</span>
              <span>Produção</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
