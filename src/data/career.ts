export type RiasecCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C'

export const questions: Array<{ text: string; code: RiasecCode }> = [
  { text: 'Durante uma viagem, prefiro fazer trilhas, praticar esportes ou realizar atividades ao ar livre do que visitar museus.', code: 'R' },
  { text: 'Quando alguma coisa quebra em casa, geralmente tento descobrir como consertá-la sozinho.', code: 'R' },
  { text: 'Se pudesse escolher, preferiria passar mais tempo realizando atividades manuais do que trabalhando no computador.', code: 'R' },
  { text: 'Sinto satisfação quando consigo observar um resultado concreto e físico do trabalho que realizei.', code: 'R' },
  { text: 'Diante de um problema difícil, gosto de analisar diferentes possibilidades por bastante tempo antes de tomar uma decisão.', code: 'I' },
  { text: 'Costumo me questionar sobre os motivos pelos quais as coisas funcionam da maneira que funcionam.', code: 'I' },
  { text: 'Antes de formar uma opinião sobre um assunto importante, prefiro analisar todas as informações e evidências disponíveis.', code: 'I' },
  { text: 'Fico entediado quando passo muito tempo participando de reuniões ou lendo documentos.', code: 'I' },
  { text: 'Ao escolher uma roupa ou objeto, considero a aparência e o design quase tão importantes quanto o preço.', code: 'A' },
  { text: 'Frequentemente penso em maneiras novas e criativas de realizar determinadas tarefas.', code: 'A' },
  { text: 'Fico incomodado quando recebo uma resposta sem entender o raciocínio ou a explicação que levou até ela.', code: 'A' },
  { text: 'Ao decorar ou organizar um ambiente, considero a aparência e a estética tão importantes quanto a utilidade.', code: 'A' },
  { text: 'Sinto-me mais satisfeito quando meu trabalho consegue ajudar outras pessoas de maneira direta.', code: 'S' },
  { text: 'Em situações de grupo, geralmente percebo rapidamente quando alguém está desconfortável ou sendo deixado de lado.', code: 'S' },
  { text: 'Tenho facilidade para compreender a perspectiva de outras pessoas, mesmo quando suas opiniões são totalmente diferentes das minhas.', code: 'S' },
  { text: 'Quando percebo que alguém está enfrentando dificuldades, normalmente sinto vontade de me aproximar e oferecer ajuda.', code: 'S' },
  { text: 'Quando identifico uma boa oportunidade, tenho vontade de aproveitá-la mesmo sabendo que existem riscos envolvidos.', code: 'E' },
  { text: 'Sinto-me motivado quando tenho a possibilidade de participar ou influenciar decisões importantes.', code: 'E' },
  { text: 'Durante uma discussão, costumo defender minhas opiniões de maneira firme e utilizando argumentos.', code: 'E' },
  { text: 'Quando um experimento ou teste não apresenta o resultado esperado, fico mais interessado em descobrir a causa do erro do que frustrado.', code: 'E' },
  { text: 'Pequenos erros em documentos, como números incorretos ou problemas de formatação, costumam me incomodar.', code: 'C' },
  { text: 'Ter uma rotina organizada e estruturada me ajuda a manter a produtividade e a tranquilidade.', code: 'C' },
  { text: 'Costumo manter minha mesa, meus documentos e meus arquivos digitais organizados.', code: 'C' },
  { text: 'Se pudesse escolher, preferiria desenvolver projetos sozinho a trabalhar constantemente em equipe.', code: 'C' },
]

export const labels: Record<RiasecCode, string> = {
  R: 'Realista', I: 'Investigativo', A: 'Artístico', S: 'Social', E: 'Empreendedor', C: 'Convencional',
}

export const areaByCode: Record<RiasecCode, string[]> = {
  R: ['Engenharias', 'Agronomia', 'Áreas técnicas', 'Ambiente e Agro'],
  I: ['Ciência', 'Saúde', 'Pesquisa', 'Tecnologia'],
  A: ['Artes e Comunicação', 'Design', 'Arquitetura', 'Audiovisual'],
  S: ['Saúde', 'Psicologia', 'Educação', 'Humanas'],
  E: ['Gestão', 'Direito', 'Negócios', 'Comunicação'],
  C: ['Administração', 'Contabilidade', 'Logística', 'Dados'],
}

export const subjects = ['Matemática', 'Física', 'Química', 'Biologia', 'História', 'Geografia', 'Português', 'Literatura', 'Inglês', 'Artes', 'Educação Física', 'Tecnologia/Informática']

export type Course = {
  name: string
  area: string
  type: string
  time: string
  keys: string[]
  codes: RiasecCode[]
  description: string
}

const courseRows: Array<[string, string, string, string, string[], RiasecCode[], string]> = [
  ['Ciência da Computação', 'Tecnologia / Exatas', 'Bacharelado', 'Duração variável', ['Tecnologia/Informática', 'Matemática', 'Física'], ['I', 'R', 'A'], 'Desenvolvimento, dados, inteligência artificial, pesquisa e sistemas.'],
  ['Biologia', 'Ciências Biológicas', 'Bacharelado ou Licenciatura', 'Duração variável', ['Biologia', 'Química'], ['I', 'S', 'R'], 'Pesquisa, conservação, educação e meio ambiente.'],
  ['Biomedicina', 'Saúde / Biológicas', 'Bacharelado', 'Duração variável', ['Biologia', 'Química'], ['I', 'S'], 'Análises clínicas, pesquisa, diagnóstico e indústria.'],
  ['Biotecnologia', 'Biológicas / Tecnologia', 'Bacharelado', 'Duração variável', ['Biologia', 'Química', 'Tecnologia/Informática'], ['I', 'R'], 'Pesquisa, indústria, alimentos, agricultura e inovação.'],
  ['Engenharia Civil', 'Engenharias / Exatas', 'Bacharelado', 'Duração variável', ['Matemática', 'Física'], ['R', 'I', 'C'], 'Construção, infraestrutura, obras e gestão de projetos.'],
  ['Engenharia Mecânica', 'Engenharias / Exatas', 'Bacharelado', 'Duração variável', ['Matemática', 'Física', 'Tecnologia/Informática'], ['R', 'I'], 'Máquinas, indústria, energia, automação e robótica.'],
  ['Engenharia Ambiental', 'Engenharias / Ambiente', 'Bacharelado', 'Duração variável', ['Biologia', 'Química', 'Geografia'], ['R', 'I', 'S'], 'Gestão ambiental, saneamento e recursos naturais.'],
  ['Medicina', 'Ciências da Saúde', 'Bacharelado', 'Duração variável', ['Biologia', 'Química'], ['I', 'S'], 'Prevenção, diagnóstico, tratamento e pesquisa.'],
  ['Enfermagem', 'Ciências da Saúde', 'Bacharelado', 'Duração variável', ['Biologia'], ['S', 'I'], 'Cuidado, assistência, prevenção e promoção da saúde.'],
  ['Farmácia', 'Ciências da Saúde', 'Bacharelado', 'Duração variável', ['Química', 'Biologia'], ['I', 'C', 'S'], 'Medicamentos, análises, indústria e pesquisa.'],
  ['Agronomia', 'Ambiente / Agro', 'Bacharelado', 'Duração variável', ['Biologia', 'Química', 'Geografia'], ['R', 'I', 'E'], 'Produção agrícola, solo, plantas e gestão rural.'],
  ['Medicina Veterinária', 'Saúde / Biológicas / Agro', 'Bacharelado', 'Duração variável', ['Biologia', 'Química'], ['S', 'I', 'R'], 'Clínica, saúde animal, indústria e saúde pública.'],
  ['Zootecnia', 'Biológicas / Agro', 'Bacharelado', 'Duração variável', ['Biologia'], ['R', 'I', 'E'], 'Nutrição, reprodução, manejo e produção animal.'],
  ['Administração', 'Sociais Aplicadas', 'Bacharelado', 'Duração variável', ['Matemática', 'Português'], ['E', 'C', 'S'], 'Gestão, finanças, marketing, pessoas e empreendedorismo.'],
  ['Direito', 'Sociais Aplicadas / Humanas', 'Bacharelado', 'Duração variável', ['História', 'Português'], ['E', 'I', 'S'], 'Advocacia, consultoria e carreiras jurídicas conforme requisitos.'],
  ['Ciências Contábeis', 'Sociais Aplicadas / Exatas', 'Bacharelado', 'Duração variável', ['Matemática'], ['C', 'I'], 'Contabilidade, auditoria, finanças e custos.'],
  ['Psicologia', 'Humanas / Saúde', 'Bacharelado', 'Duração variável', ['Biologia', 'História', 'Português'], ['S', 'I'], 'Clínica, escolas, empresas, hospitais e pesquisa.'],
  ['História', 'Humanas', 'Licenciatura ou Bacharelado', 'Duração variável', ['História', 'Geografia'], ['I', 'S', 'A'], 'Educação, pesquisa, museus, arquivos e cultura.'],
  ['Filosofia', 'Humanas', 'Licenciatura ou Bacharelado', 'Duração variável', ['História', 'Português'], ['I', 'A', 'S'], 'Educação, pesquisa, ética e cultura.'],
  ['Letras', 'Linguística / Humanas', 'Licenciatura ou Bacharelado', 'Duração variável', ['Português', 'Literatura', 'Inglês'], ['A', 'S', 'I'], 'Ensino, tradução, revisão, pesquisa e conteúdo.'],
  ['Artes Visuais', 'Artes', 'Licenciatura ou Bacharelado', 'Duração variável', ['Artes'], ['A', 'S'], 'Produção artística, educação, museus e cultura.'],
  ['Música', 'Artes', 'Licenciatura ou Bacharelado', 'Duração variável', ['Artes'], ['A', 'S'], 'Performance, composição, ensino e produção musical.'],
  ['Audiovisual', 'Artes / Comunicação / Tecnologia', 'Formação variável', 'Duração variável', ['Artes', 'Português', 'Tecnologia/Informática'], ['A', 'R', 'E'], 'Roteiro, direção, produção, edição e conteúdo digital.'],
]

export const courses: Course[] = courseRows.map(([name, area, type, time, keys, codes, description]) => ({ name, area, type, time, keys, codes, description }))
