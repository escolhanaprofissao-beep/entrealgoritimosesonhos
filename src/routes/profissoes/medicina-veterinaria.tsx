import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, PawPrint, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/profissoes/medicina-veterinaria')({
  component: MedicinaVeterinariaPage,
})

function MedicinaVeterinariaPage() {
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

          <h1>Medicina Veterinária</h1>

          <p className="profession-intro">
            A Medicina Veterinária envolve a saúde e o bem-estar dos animais,
            além de atividades relacionadas à saúde pública, produção animal,
            alimentos e pesquisa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container profession-content">

          <article className="profession-card">
            <h2>O que faz um profissional de Medicina Veterinária?</h2>

            <p>
              O médico-veterinário pode atuar na prevenção, diagnóstico e
              tratamento de doenças dos animais, além de trabalhar em áreas
              relacionadas à saúde pública, produção animal e inspeção de
              produtos de origem animal.
            </p>

            <p>
              A profissão possui diferentes possibilidades de atuação, desde
              clínicas e hospitais veterinários até laboratórios, empresas,
              propriedades rurais e instituições públicas.
            </p>
          </article>

          <article className="profession-card">
            <h2>Principais áreas de atuação</h2>

            <ul className="profession-list">
              <li>
                <CheckCircle2 size={18} />
                Clínica e atendimento de animais
              </li>
              <li>
                <CheckCircle2 size={18} />
                Cirurgia e cuidados veterinários
              </li>
              <li>
                <CheckCircle2 size={18} />
                Saúde pública
              </li>
              <li>
                <CheckCircle2 size={18} />
                Produção animal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Inspeção de produtos de origem animal
              </li>
              <li>
                <CheckCircle2 size={18} />
                Pesquisa e laboratório
              </li>
            </ul>
          </article>

          <article className="profession-card">
            <h2>Que caminhos essa formação pode abrir?</h2>

            <p>
              A formação pode levar a diferentes áreas da saúde animal,
              produção, pesquisa, laboratórios, empresas, órgãos públicos e
              saúde pública, conforme a especialização e os requisitos de cada
              atividade.
            </p>
          </article>

          <article className="profession-card">
            <h2>Combina com quais interesses?</h2>

            <div className="profession-tags">
              <span>Biologia</span>
              <span>Química</span>
              <span>Animais</span>
              <span>Saúde</span>
              <span>Natureza</span>
              <span>Pesquisa</span>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}
