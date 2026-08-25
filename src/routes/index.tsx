import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  ArrowRight, Atom, BookOpen, BrainCircuit, Check,
  ChevronRight, CircleGauge, Compass, Dna, FlaskConical, HeartPulse,
  Leaf, Menu, Palette, RotateCcw, ShieldCheck, Sparkles, Target, X,
} from 'lucide-react'
import { areaByCode, courses, labels, questions, subjects, type RiasecCode } from '@/data/career'

export const Route = createFileRoute('/')({ component: Home })

const answerOptions = [
  ['Concordo totalmente', 5], ['Concordo', 3], ['Neutro', 1], ['Discordo', -3], ['Discordo totalmente', -5],
] as const

const flow = [
  ['01', 'Interesses', 'Atividades, preferências e curiosidades.'],
  ['02', 'Perfil', 'Uma leitura inspirada no modelo RIASEC.'],
  ['03', 'Áreas', 'Conexões com campos do conhecimento.'],
  ['04', 'Cursos', 'Formações que podem combinar.'],
  ['05', 'Profissões', 'Possibilidades reais de atuação.'],
  ['06', 'Caminhos', 'Mais de uma rota pode existir.'],
]

const areas = [
  [CircleGauge, 'Exatas', 'Matemática, lógica, estatística e resolução de problemas.', 'números + raciocínio', 'violet'],
  [BrainCircuit, 'Tecnologia', 'Programação, dados, sistemas e inteligência artificial.', 'criar + resolver', 'turquoise'],
  [Dna, 'Biológicas', 'Vida, organismos, biodiversidade e pesquisa.', 'vida + descoberta', 'green'],
  [HeartPulse, 'Saúde', 'Cuidado, prevenção, diagnóstico e qualidade de vida.', 'cuidar + ciência', 'rose'],
  [Atom, 'Engenharias', 'Projetos, máquinas, estruturas, energia e inovação.', 'projetar + construir', 'yellow'],
  [BookOpen, 'Humanas', 'História, filosofia, educação, sociedade e comportamento.', 'pessoas + ideias', 'violet'],
  [Palette, 'Artes e Comunicação', 'Design, música, audiovisual, escrita e expressão.', 'criar + comunicar', 'rose'],
  [Leaf, 'Ambiente e Agro', 'Sustentabilidade, agricultura, animais e recursos naturais.', 'natureza + futuro', 'turquoise'],
] as const

const women = [
  ['MC', 'Marie Curie', 'Física e Química', 'Pioneira nos estudos da radioatividade e referência histórica na ciência.'],
  ['AL', 'Ada Lovelace', 'Matemática e Computação', 'Figura histórica associada aos primeiros trabalhos sobre programação.'],
  ['KJ', 'Katherine Johnson', 'Matemática', 'Contribuiu para cálculos de trajetórias em missões espaciais.'],
  ['EM', 'Enedina Alves Marques', 'Engenharia', 'Primeira mulher negra a se formar em Engenharia no Paraná e referência na área.'],
]

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [scores, setScores] = useState<Record<RiasecCode, number>>({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 })
  const [finished, setFinished] = useState(false)
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const resultHeading = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => undefined)
  }, [])

  useEffect(() => {
    if (finished) resultHeading.current?.focus()
  }, [finished])

  const sortedScores = useMemo(() => Object.entries(scores).sort((a, b) => b[1] - a[1]) as Array<[RiasecCode, number]>, [scores])
  const areaScores = useMemo(() => {
    const totals: Record<string, number> = {}
    sortedScores.forEach(([code, score]) => areaByCode[code].forEach((area) => { totals[area] = (totals[area] || 0) + Math.max(score, 0) }))
    return Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, 5)
  }, [sortedScores])

  const recommendations = useMemo(() => [...courses].sort((a, b) => compatibility(b) - compatibility(a)).slice(0, 6), [scores, selectedSubjects])

  function compatibility(course: (typeof courses)[number]) {
    const profilePoints = course.codes.reduce((total, code) => total + Math.max(scores[code], 0), 0)
    const subjectPoints = selectedSubjects.reduce((total, subject) => total + (course.keys.includes(subject) ? 12 : 0), 0)
    return profilePoints + subjectPoints
  }

  function submitAnswer() {
    if (selectedAnswer === null) return
    const code = questions[questionIndex].code
    setScores((current) => ({ ...current, [code]: current[code] + selectedAnswer }))
    setSelectedAnswer(null)
    if (questionIndex === questions.length - 1) setFinished(true)
    else setQuestionIndex((current) => current + 1)
  }

  function restartQuiz() {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setScores({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 })
    setSelectedSubjects([])
    setFinished(false)
    scrollToSection('#teste')
  }

  const profilePercent = (value: number) => Math.max(0, Math.min(100, Math.round(((value + 20) / 40) * 100)))
  const maxArea = areaScores[0]?.[1] || 1

  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#inicio" aria-label="Entre Algoritmos e Sonhos, início">
            <span className="brand-mark">E</span><span>Entre Algoritmos<small>E SONHOS</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#como">Como funciona</a><a href="#teste">Teste</a><a href="#areas">Áreas</a><a href="#cursos">Cursos</a><a href="#mulheres">Mulheres</a>
          </nav>
          <a className="nav-cta" href="#teste">Fazer teste <ArrowRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{[['Como funciona', '#como'], ['Teste', '#teste'], ['Áreas', '#areas'], ['Cursos', '#cursos'], ['Mulheres', '#mulheres']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={18} /></a>)}</nav>}
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shape shape-one" /><div className="hero-shape shape-two" /><div className="hero-shape shape-three" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Feito para quem ainda está descobrindo</div>
            <h1>Seu futuro não precisa de <em>uma</em> resposta. <span>Precisa de possibilidades.</span></h1>
            <p>Descubra o que combina com seus interesses, conheça áreas, cursos e profissões e encontre caminhos que talvez você ainda não tivesse imaginado.</p>
            <div className="hero-actions"><button className="button primary" onClick={() => scrollToSection('#teste')}>Começar meu teste <ArrowRight size={18} /></button><button className="button secondary" onClick={() => scrollToSection('#como')}>Como funciona</button></div>
            <div className="hero-note"><Check size={15} /> 24 perguntas <span /> perfil RIASEC <span /> áreas, cursos e caminhos</div>
          </div>
          <div className="hero-visual" aria-label="Prévia ilustrativa do questionário">
            <div className="sticker sticker-one"><Sparkles size={16} /> seu jeito importa</div>
            <div className="sticker sticker-two">+ possibilidades</div><div className="sticker sticker-three">não é destino</div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="phone">
              <div className="phone-top"><span>10:24</span><span className="phone-dot" /></div>
              <div className="phone-card"><small>Seu perfil</small><h2>Qual atividade mais combina com você?</h2>{['Investigar como algo funciona', 'Criar algo novo e diferente', 'Ajudar alguém com um problema', 'Liderar um projeto'].map((item, index) => <div className={`mini-choice ${index === 1 ? 'active' : ''}`} key={item}><span>{String.fromCharCode(65 + index)}</span>{item}</div>)}<div className="mini-progress"><b>Você está descobrindo...</b><span><i /></span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="como" className="section paper-section">
        <div className="container"><SectionTitle overline="A ideia do projeto" title="Do que você gosta até os caminhos que pode explorar." text="A descoberta profissional em etapas, sem transformar uma resposta em uma sentença sobre o seu futuro." />
          <div className="flow-grid">{flow.map(([number, title, text], index) => <article className="flow-card" key={number}><span className={`flow-number color-${index}`}>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section areas-section" id="areas">
        <div className="container"><SectionTitle overline="Explore sem rótulos" title="Qual área faz você pensar: “quero saber mais”?" text="As áreas são portas de entrada. Uma mesma profissão pode conversar com mais de uma delas." />
          <div className="area-grid">{areas.map(([Icon, title, text, tag, color], index) => <article className={`area-card area-${index + 1}`} key={title}><div className={`area-icon ${color}`}><Icon /></div><h3>{title}</h3><p>{text}</p><strong>{tag}</strong><span className="card-arrow"><ArrowRight size={17} /></span></article>)}</div>
        </div>
      </section>

      <section className="quiz-section" id="teste">
        <div className="quiz-texture" />
        <div className="container quiz-container"><SectionTitle overline="Seu momento" title="Vamos descobrir o que desperta seu interesse?" text="São 24 afirmações equilibradas entre os seis perfis do modelo RIASEC. Não existem respostas certas ou erradas." dark />
          <div className="quiz-card">
            {!finished ? <>
              <div className="progress-label"><span>Pergunta {questionIndex + 1} de {questions.length}</span><span>Inspirado no RIASEC</span></div>
              <div className="progress-track"><span style={{ transform: `scaleX(${(questionIndex + 1) / questions.length})` }} /></div>
              <div className="question-layout"><span className="question-number">{String(questionIndex + 1).padStart(2, '0')}</span><div><h2>{questions[questionIndex].text}</h2><div className="answer-grid">{answerOptions.map(([label, value], index) => <button key={label} className={`answer-button ${selectedAnswer === value ? 'selected' : ''}`} onClick={() => setSelectedAnswer(value)} aria-pressed={selectedAnswer === value}><span>{String.fromCharCode(65 + index)}</span>{label}{selectedAnswer === value && <Check size={18} />}</button>)}</div></div></div>
              <div className="quiz-footer"><p>{selectedAnswer === null ? 'Escolha a alternativa que mais combina com você.' : 'Resposta selecionada. Você pode continuar.'}</p><button className="button primary" disabled={selectedAnswer === null} onClick={submitAnswer}>{questionIndex === questions.length - 1 ? 'Ver meu resultado' : 'Próxima'} <ArrowRight size={18} /></button></div>
            </> : <div className="result-view">
              <div className="result-heading"><span className="result-icon"><Compass /></span><div><p>Seu mapa de possibilidades</p><h2 ref={resultHeading} tabIndex={-1}>Alguns caminhos combinam mais com você agora.</h2></div></div>
              <div className="result-grid"><ResultCard title="Seu perfil de interesses" icon={<Target />}><div className="score-list">{sortedScores.map(([code, value]) => <ScoreBar key={code} label={labels[code]} value={profilePercent(value)} />)}</div><p className="fine-print">O resultado apoia o autoconhecimento. Não é teste psicológico, diagnóstico ou decisão profissional.</p></ResultCard>
              <ResultCard title="Áreas para explorar" icon={<Compass />}><div className="score-list">{areaScores.map(([area, value]) => <ScoreBar key={area} label={area} value={Math.round((value / maxArea) * 100)} />)}</div><p className="fine-print">Maior compatibilidade indica prioridade de exploração, não obrigação.</p></ResultCard></div>
              <ResultCard title="Quais matérias você mais gosta?" icon={<BookOpen />} wide><p className="result-intro">Selecione algumas para cruzar seus interesses com o conteúdo escolar.</p><div className="subject-grid">{subjects.map((subject) => <button key={subject} className={selectedSubjects.includes(subject) ? 'selected' : ''} onClick={() => setSelectedSubjects((current) => current.includes(subject) ? current.filter((item) => item !== subject) : [...current, subject])}>{selectedSubjects.includes(subject) && <Check size={14} />}{subject}</button>)}</div></ResultCard>
              <ResultCard title="Possibilidades que apareceram para você" icon={<Sparkles />} wide><div className="recommendation-grid">{recommendations.map((course, index) => <article className="recommendation" key={course.name}><span>0{index + 1}</span><small>{course.area}</small><h3>{course.name}</h3><p>{course.description}</p><div><b>{course.type}</b><b>{course.time}</b></div></article>)}</div></ResultCard>
              <button className="button ghost-light restart" onClick={restartQuiz}><RotateCcw size={17} /> Refazer teste</button>
            </div>}
          </div>
        </div>
      </section>

      <section className="section courses-section" id="cursos"><div className="container"><SectionTitle overline="Cursos e caminhos" title="Não existe um único caminho até uma profissão." text="Exemplos de formações e áreas de atuação. Duração e organização curricular variam conforme a instituição." />
        <div className="course-grid">{courses.map((course, index) => <article className="course-card" key={course.name}><div className="course-index">{String(index + 1).padStart(2, '0')}</div><small>{course.area}</small><h3>{course.name}</h3><p>{course.description}</p><div className="course-tags"><span>{course.type}</span><span>{course.time}</span></div><footer>Interesses relacionados: {course.keys.join(' • ')}</footer></article>)}</div>
      </div></section>

      <section className="combo-section"><div className="container combo-card"><div><div className="section-overline">Você gosta de duas coisas?</div><h2>Talvez o seu caminho esteja justamente no meio.</h2><p>Possibilidades interdisciplinares para quem não quer escolher entre dois interesses.</p></div><div className="combo-grid">{[['Biologia', 'Tecnologia', 'Biotecnologia'], ['Psicologia', 'Tecnologia', 'UX Research'], ['Arte', 'Tecnologia', 'Design Digital'], ['Matemática', 'Tecnologia', 'Ciência de Dados'], ['Engenharia', 'Ambiente', 'Engenharia Ambiental'], ['Direito', 'Tecnologia', 'Direito Digital']].map(([a, b, result]) => <div key={result}><span>{a}</span><b>+</b><span>{b}</span><ArrowRight size={15} /><strong>{result}</strong></div>)}</div></div></section>

      <section className="section women-section" id="mulheres"><div className="container"><SectionTitle overline="Referências que inspiram" title="Mulheres também fazem parte do mapa." text="Trajetórias que ampliam referências na ciência e tecnologia, sem interferir na pontuação do teste." /><div className="women-grid">{women.map(([initials, name, field, description], index) => <article className={`woman-card woman-${index}`} key={name}><div className="avatar">{initials}</div><span>0{index + 1}</span><h3>{name}</h3><small>{field}</small><p>{description}</p></article>)}</div></div></section>

      <section className="section principles-section"><div className="container"><SectionTitle overline="Nosso compromisso" title="Um teste não deve escolher por você." text="Ele deve ajudar você a fazer perguntas melhores sobre o próprio futuro." /><div className="principles-grid"><article className="principle-feature"><ShieldCheck /><h3>Privacidade primeiro</h3><p>O protótipo não pede nome, gênero ou outros dados pessoais. Suas respostas ficam apenas no navegador enquanto o teste está aberto.</p><ul><li><Check /> Sem cadastro obrigatório</li><li><Check /> Sem identificação desnecessária</li><li><Check /> Transparência sobre a experiência</li></ul></article>{[['Sem estereótipos', 'Gênero não decide qual profissão combina com alguém. Interesses são apresentados de forma aberta.'], ['Algoritmo explicável', 'As recomendações vêm de pontuações e cruzamentos simples, permitindo entender de onde cada possibilidade veio.'], ['Uso responsável', 'Este questionário educacional não substitui orientação profissional ou avaliação psicológica.'], ['Validação contínua', 'Uma versão científica deve ser testada com estudantes e especialistas, medindo clareza e utilidade.']].map(([title, text], index) => <article className="principle-card" key={title}><span>0{index + 2}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section references-section" id="referencias"><div className="container"><SectionTitle overline="Referências e fontes" title="De onde vêm as informações?" text="Bases do modelo, informações históricas e fontes educacionais que orientam o protótipo." /><div className="references-grid">{[['Modelo de interesses', 'O*NET Interest Profiler — estrutura R-I-A-S-E-C.', 'SATEPSI/CFP — avaliação de instrumentos psicológicos.'], ['Mulheres na ciência', 'Nobel Prize — Marie Curie.', 'NASA Science — Katherine Johnson.', 'Computer History Museum — Ada Lovelace.', 'MCTI — Enedina Alves Marques.'], ['Educação e ocupações', 'Inep — Censo da Educação Superior.', 'Ministério do Trabalho — CBO.'], ['Privacidade', 'ANPD — tratamento de dados de crianças e adolescentes.']].map(([title, ...items]) => <article key={title}><FlaskConical /><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="install-section" id="instalar"><div className="container install-card"><div><small>NO CELULAR</small><h2>Leve o projeto para a tela inicial.</h2><p>Depois de publicar, instale o site para abrir de forma mais parecida com um aplicativo.</p></div><div className="install-options"><article><span>01</span><div><h3>iPhone e iPad</h3><p>No Safari, toque em Compartilhar e depois em Adicionar à Tela de Início.</p></div></article><article><span>02</span><div><h3>Android</h3><p>No navegador compatível, procure a opção Instalar ou Adicionar à tela inicial.</p></div></article></div></div></section>

      <footer className="site-footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">E</span><span>Entre Algoritmos<small>E SONHOS</small></span></a><p>Uma plataforma educacional para transformar dúvidas sobre o futuro em possibilidades para explorar.</p></div><div><h3>Explorar</h3><a href="#teste">Teste de perfil</a><a href="#areas">Áreas</a><a href="#cursos">Cursos</a><a href="#mulheres">Mulheres na Ciência</a></div><div><h3>Princípios</h3><span>Autonomia</span><span>Privacidade</span><span>Transparência</span><span>Sem estereótipos</span></div><div className="footer-cta"><Compass /><h3>Ainda descobrindo?</h3><a href="#teste">Comece pelo teste <ArrowRight size={16} /></a></div></div><div className="container footer-bottom"><span>© 2026 Entre Algoritmos e Sonhos</span><span>Protótipo educacional • Não é diagnóstico</span></div></footer>
    </main>
  )
}

function SectionTitle({ overline, title, text, dark = false }: { overline: string; title: string; text: string; dark?: boolean }) {
  return <div className={`section-title ${dark ? 'dark' : ''}`}><div className="section-overline">{overline}</div><h2>{title}</h2><p>{text}</p></div>
}

function ResultCard({ title, icon, children, wide = false }: { title: string; icon: ReactNode; children: ReactNode; wide?: boolean }) {
  return <section className={`result-card ${wide ? 'wide' : ''}`}><div className="result-card-title"><span>{icon}</span><h3>{title}</h3></div>{children}</section>
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return <div className="score-row"><div><b>{label}</b><span>{value}%</span></div><div className="score-track"><span style={{ transform: `scaleX(${value / 100})` }} /></div></div>
}
