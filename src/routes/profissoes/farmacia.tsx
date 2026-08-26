import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profissoes/farmacia')({
  component: FarmaciaPage,
})

function FarmaciaPage() {
  return (
    <main style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <a href="/" style={{ textDecoration: 'none' }}>
        ← Voltar para Entre Algoritmos e Sonhos
      </a>

      <h1 style={{ marginTop: '30px' }}>Farmácia</h1>

      <p>
        A Farmácia é uma área da saúde voltada ao estudo dos medicamentos,
        substâncias químicas, análises e cuidados relacionados ao uso seguro
        de produtos para a saúde.
      </p>

      <h2>O que faz um farmacêutico?</h2>

      <p>
        O profissional pode atuar em diferentes áreas, dependendo de sua
        formação e das exigências profissionais. Entre as possibilidades estão
        farmácias, hospitais, laboratórios, indústria farmacêutica, análises,
        pesquisa e controle de qualidade.
      </p>

      <h2>Principais áreas de atuação</h2>

      <ul>
        <li>Farmácia comunitária</li>
        <li>Farmácia hospitalar</li>
        <li>Indústria farmacêutica</li>
        <li>Análises clínicas</li>
        <li>Pesquisa e desenvolvimento</li>
        <li>Controle de qualidade</li>
        <li>Cosmetologia</li>
        <li>Vigilância e saúde pública</li>
      </ul>

      <h2>Quais matérias podem ajudar?</h2>

      <p>
        Química e Biologia são especialmente relacionadas à formação, além de
        conhecimentos de Matemática e outras áreas das ciências.
      </p>

      <h2>Essa profissão combina com quem?</h2>

      <p>
        Pode ser interessante para pessoas que gostam de ciência, saúde,
        investigação, organização e atividades que envolvem conhecimento
        químico e biológico.
      </p>

      <h2>Importante</h2>

      <p>
        Esta página tem finalidade educacional e apresenta possibilidades
        gerais de carreira. A atuação profissional depende da formação,
        legislação e requisitos vigentes.
      </p>
    </main>
  )
}
