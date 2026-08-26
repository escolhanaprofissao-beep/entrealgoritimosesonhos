import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, GraduationCap, MapPin, Route } from 'lucide-react'
import { professions } from '@/data/career'

export const Route = createFileRoute('/profissoes/cientista-de-dados')({
  component: CientistaDeDadosPage,
})

function CientistaDeDadosPage() {
  const profession = professions.find(
    (item) => item.slug === 'cientista-de-dados'
  )

  if (!profession) {
    return <main>Profissão não encontrada.</main>
  }

  return (
    <main className="profession-page">
      <div className="container">

        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Voltar para o início
        </Link>

        <section className="profession-hero">
          <span className="section-overline">PROFISSÃO</span>

          <h1>{profession.name}</h1>

          <p>{profession.description}</p>

          <div className="profession-course">
            <GraduationCap size={22} />
            <div>
              <small>Formação relacionada</small>
              <strong>{profession.course}</strong>
            </div>
          </div>
        </section>

        <section className="profession-content">

          <article className="profession-block">
            <h2>Áreas de atuação</h2>

            <div className="profession-list">
              {profession.areas.map((area) => (
                <div key={area}>
                  <ArrowRight size={16} />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="profession-block">
            <h2>Onde pode trabalhar?</h2>

            <div className="profession-list">
              {profession.workplaces.map((place) => (
                <div key={place}>
                  <MapPin size={16} />
                  <span>{place}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="profession-block profession-wide">
            <h2>Possíveis caminhos</h2>

            <div className="path-list">
              {profession.paths.map((path) => (
                <div key={path}>
                  <Route size={17} />
                  <span>{path}</span>
                </div>
              ))}
            </div>
          </article>

        </section>

        <section className="profession-footer">
          <h2>Quer continuar explorando?</h2>

          <p>
            Conheça outras possibilidades de formação e atuação.
          </p>

          <Link to="/#cursos" className="button primary">
            Explorar cursos
            <ArrowRight size={18} />
          </Link>
        </section>

      </div>
    </main>
  )
}
