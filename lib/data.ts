// Conteúdo do mídia kit: números, textos e links. Edite aqui para atualizar a página.

export const DATA = {
  heroStats: [
    { v: '106M', l: 'Visualizações no Instagram · 90 dias', src: 'INSIGHTS IG' },
    { v: '989K', l: 'Seguidores no Instagram', src: 'PERFIL IG' },
    { v: '25,1M', l: 'Visualizações no YouTube · 28 dias', src: 'INSIGHTS YT' },
    { v: '80K+', l: 'Média de views por story', src: 'BRIEFING' }
  ],
  aboutSpecs: [
    { k: 'SEGMENTO', v: 'Conteúdo automotivo, entretenimento & lifestyle' },
    { k: 'CARRO-SÍMBOLO', v: 'Honda Civic G10' },
    { k: 'PLATAFORMAS', v: 'Instagram · YouTube · TikTok · Facebook' },
    { k: 'FORMATOS', v: 'Séries, reels, stories, shorts' }
  ],
  platforms: [
    { id: 'instagram', n: '01', name: 'Instagram', handle: '@allblack_g10', icon: 'ph-instagram-logo', featured: true,
      head: { v: '989K', l: 'Seguidores no Instagram', real: true },
      chartLabel: 'VIEWS DIÁRIAS · 29 SET – 28 OUT', span: '30 DIAS', chart: [27, 18, 16, 32, 20, 27, 32, 23, 100, 45, 27, 86, 43, 55, 61, 48, 50, 30, 52, 55, 66, 25, 41, 43, 48, 39, 27, 41, 50, 36],
      metrics: [
        { code: 'REACH-90', v: '17,4M', l: 'Contas alcançadas · 90 dias', real: true },
        { code: 'INT-90', v: '6,8M+', l: 'Interações · 90 dias', real: true },
        { code: 'FOL-90', v: '+24K', l: 'Novos seguidores líquidos · 90 dias', real: true },
        { code: 'VW-90', v: '106M', l: 'Visualizações · 90 dias', real: true }
      ] },
    { id: 'youtube', n: '02', name: 'YouTube', handle: 'ALLBLACK · canal', icon: 'ph-youtube-logo', featured: true,
      head: { v: '25,1M', l: 'Visualizações · últimos 28 dias', real: true },
      chartLabel: 'VIEWS DIÁRIAS · 1–28 OUT', span: '28 DIAS', chart: [90, 100, 87, 62, 54, 59, 62, 56, 82, 72, 71, 67, 56, 46, 44, 49, 44, 38, 40, 41, 40, 38, 37, 37, 31, 30, 28, 23],
      metrics: [
        { code: 'WATCH-28', v: '286K', l: 'Horas assistidas · 28 dias', real: true },
        { code: 'SUBS-28', v: '+43,5K', l: 'Novos inscritos · 28 dias', real: true },
        { code: 'AUD-M', v: '6,1M', l: 'Público mensal', real: true },
        { code: 'TOP-90', v: '6,8M', l: 'Short mais visto · 90 dias', real: true }
      ] },
    { id: 'tiktok', n: '03', name: 'TikTok', handle: '@allblack_g10', icon: 'ph-tiktok-logo', featured: false,
      head: { v: '5,5M', l: 'Visualizações de posts · 28 dias', real: true },
      chartLabel: 'ESPECTADORES DIÁRIOS · 1–28 OUT', span: '28 DIAS', chart: [10, 8, 7, 15, 9, 9, 85, 100, 93, 83, 68, 48, 38, 28, 18, 13, 15, 14, 18, 11, 8, 14, 30, 66, 38, 33, 30, 29],
      metrics: [
        { code: 'VIEWERS', v: '2,9M', l: 'Espectadores totais · +67,7%', real: true },
        { code: 'NEW', v: '536K', l: 'Novos espectadores · 28 dias', real: true },
        { code: 'LIKES', v: '362,6K', l: 'Curtidas · +55,2%', real: true },
        { code: 'PROFILE', v: '130,7K', l: 'Visitas ao perfil · +186%', real: true }
      ] },
    { id: 'facebook', n: '04', name: 'Facebook', handle: 'ALLBLACK', icon: 'ph-facebook-logo', featured: false,
      head: { v: '111K', l: 'Seguidores', real: 'brief' },
      chartLabel: 'ALCANCE / SEMANA (ILUSTR.)', chart: [70, 66, 72, 68, 74, 80, 76, 72, 84, 78, 88, 100],
      metrics: [
        { code: 'RCH', v: '600K', l: 'Alcance mensal', real: false },
        { code: 'VW-M', v: '850K', l: 'Visualizações mensais', real: false },
        { code: 'ENG', v: '3,2%', l: 'Taxa de engajamento', real: false },
        { code: 'SHR', v: '4K', l: 'Compartilhamentos / mês', real: false }
      ] }
  ],
  storyValues: [173, 165, 160, 155, 152, 146, 144, 137, 136, 134, 126, 125, 124, 116],
  storyCards: [
    { v: '27M', l: 'Views em stories · 90 dias', src: 'INSIGHTS', real: true },
    { v: '8,3M', l: 'Views em stories · últimos 30 dias', src: 'INSIGHTS', real: true },
    { v: '173K', l: 'Story mais visto · 30 dias', src: 'INSIGHTS', real: true },
    { v: '1,3 mil', l: 'Respostas em um único story', src: 'INSIGHTS', real: true }
  ],
  storyFrames: [
    { id: 'story-1', bg: 'url(/assets/story-1-web.jpg)', pos: '40% 40%', label: 'FRAME 01 · ABERTURA', stat: '173K', statL: 'VIEWS · TOP 01', on: 1 },
    { id: 'story-2', bg: 'url(/assets/story-2-web.jpg)', pos: '35% 60%', label: 'FRAME 02 · PRODUTO', stat: '165K', statL: 'VIEWS · TOP 02', on: 2 },
    { id: 'story-3', bg: 'url(/assets/story-3-web.jpg)', pos: '50% 45%', label: 'FRAME 03 · CTA', stat: '1,3 mil', statL: 'RESPOSTAS EM 1 STORY', on: 3 }
  ],
  storyWhy: [
    { icon: 'ph-eye', t: 'Exposição diária', d: 'Presença recorrente no dia a dia de quem acompanha os projetos, não só no lançamento.' },
    { icon: 'ph-link-simple', t: 'CTA direto', d: 'Link, cupom e arrasta-pra-cima levam o público da garagem ao site da marca em um toque.' },
    { icon: 'ph-chats-circle', t: 'Comunidade que responde', d: 'Enquetes, caixinhas e reações transformam a marca em conversa, não em interrupção.' }
  ],
  brands: ['70mai', 'Couple2', 'Petrobras + Lubrax', 'K&N Filtros', 'Faaftech'],
  casePhotos: { '70mai': '/assets/case-70mai.png', 'Couple2': '/assets/case-couple2.png', 'Faaftech': '/assets/case-fasttech.png', 'Petrobras + Lubrax': '/assets/case-petrobras-lubrax.png', 'K&N Filtros': '/assets/case-kn.png' },
  caseFormats: { '70mai': 'REEL · INSTAGRAM', 'Couple2': 'PUBLI · APP', 'Faaftech': 'REEL · INSTAGRAM', 'Petrobras + Lubrax': 'REEL · INSTAGRAM', 'K&N Filtros': 'REEL · INSTAGRAM' },
  caseStats: { 'K&N Filtros': [{ a: '509K', b: 'VISUALIZAÇÕES' }, { a: '30,1K', b: 'CURTIDAS' }, { a: '427', b: 'REPOSTS' }, { a: '74', b: 'COMENTÁRIOS' }], 'Petrobras + Lubrax': [{ a: '2,1M', b: 'VISUALIZAÇÕES' }, { a: '83,8K', b: 'CURTIDAS' }, { a: '100', b: 'REPOSTS' }, { a: '64', b: 'COMENTÁRIOS' }], 'Faaftech': [{ a: '2,4M', b: 'VISUALIZAÇÕES' }, { a: '171K', b: 'CURTIDAS' }, { a: '4.207', b: 'REPOSTS' }, { a: '147', b: 'COMENTÁRIOS' }], 'Couple2': [{ a: '4,9M', b: 'VISUALIZAÇÕES' }, { a: '346K', b: 'CURTIDAS' }, { a: '5.129', b: 'REPOSTS' }, { a: '1.499', b: 'COMENTÁRIOS' }], '70mai': [{ a: '9,1M', b: 'VISUALIZAÇÕES' }, { a: '203K', b: 'CURTIDAS' }, { a: '2.005', b: 'REPOSTS' }, { a: '178', b: 'COMENTÁRIOS' }] },
  // Vídeo de cada case (public/videos). Abre no player da própria página.
  caseVideos: {
    '70mai': '/videos/case-70mai.mp4',
    'Couple2': '/videos/case-couple2.mp4',
    'Petrobras + Lubrax': '/videos/case-petrobraslubrax.mp4',
    'K&N Filtros': '/videos/case-knfiltros.mp4',
    'Faaftech': '/videos/case-faaftech.mp4'
  },
  // Texto do case quando ele está em destaque. Preencha a descrição real de cada campanha.
  caseInfo: {
    '70mai': { desc: 'Publi da dashcam 70mai integrada a um reel de humor: "Quando você esquece que está com a sua namorada…". O produto aparece como parte natural da cena, com as câmeras frontal, interna e traseira gravando a situação.', tags: ['DASHCAM', 'HUMOR', 'PRODUTO EM USO'] },
    'Couple2': { desc: 'Publi do app Couple2 integrada ao conteúdo do perfil.', tags: ['APP', 'PUBLI'] },
    'Petrobras + Lubrax': { desc: 'Reel em parceria com Petrobras e Lubrax publicado no Instagram.', tags: ['REEL', 'INSTAGRAM'] },
    'K&N Filtros': { desc: 'Reel em parceria com a K&N Filtros publicado no Instagram.', tags: ['REEL', 'INSTAGRAM'] },
    'Faaftech': { desc: 'Reel em parceria com a Faaftech publicado no Instagram.', tags: ['REEL', 'INSTAGRAM'] }
  },
  caseMetricSlots: ['VISUALIZAÇÕES', 'ALCANCE', 'ENGAJAMENTO'],
  projects: [
    { id: 'p1', num: '01', slotId: 'proj-revenda', statsLabel: 'VÍDEO DESTAQUE · ACESSÓRIOS DO CARRO · YOUTUBE', stats: [{ v: '159K', l: 'VISUALIZAÇÕES' }, { v: '7,2K', l: 'CURTIDAS' }, { v: '222', l: 'COMENTÁRIOS' }], placeholder: 'Civic preto da série Revendendo carros', photo: '/assets/projeto01-civic-v2.png', photoPos: '55% 60%', photoFilter: 'saturate(.55) brightness(.72) contrast(1.12)',
      title: 'REVENDENDO CARROS ATÉ O CARRO DOS SONHOS',
      short: 'Uma série longa e contínua: comprar, transformar e revender, subindo de nível a cada negócio. Cada carro rende novos episódios, novos desafios e novas oportunidades para marcas entrarem na história.',
      tags: ['SÉRIE CONTÍNUA', 'COMPRA', 'TRANSFORMAÇÃO', 'REVENDA'],
      body: 'Uma série de progressão: cada episódio é uma negociação, uma transformação e uma revenda. O público acompanha a estratégia, os riscos e o resultado, e torce pelo próximo passo rumo ao carro dos sonhos.',
      specs: [{ k: 'FORMATO', v: 'Série YouTube' }, { k: 'EPISÓDIOS', v: 'Série em andamento' }, { k: 'ARCO', v: 'Compra → transformação → revenda' }, { k: 'VÍDEO DESTAQUE', v: '159K views · 7,2K curtidas · 222 comentários' }],
      chipsLabel: 'ONDE A MARCA ENTRA EM CADA CARRO', chips: [{ a: 'COMPRA', b: 'Avaliação, vistoria, financiamento' }, { a: 'OFICINA', b: 'Peças, fluidos, ferramentas' }, { a: 'ESTÉTICA', b: 'Rodas, envelopamento, detalhamento' }, { a: 'TECNOLOGIA', b: 'Som, multimídia, acessórios' }, { a: 'REVENDA', b: 'Anúncio, entrega, documentação' }, { a: 'BASTIDORES', b: 'Stories, reels e shorts derivados' }] },
    { id: 'p2', num: '02', slotId: 'proj-civic', placeholder: 'Thumb: reforma do Civic G10',
      title: 'REFORMA DO CIVIC G10',
      short: 'A transformação do carro-símbolo do canal: o G10 preto que dá nome e identidade ao universo ALLBLACK.',
      tags: ['CIVIC G10', 'REFORMA', 'MODIFICAÇÕES'],
      body: 'O projeto que define a marca. A reforma do Civic G10 documentada etapa por etapa: espaço natural para peças, fluidos, acessórios e serviços aparecerem como parte real da reforma.',
      specs: [{ k: 'FORMATO', v: 'Série YouTube' }, { k: 'CARRO', v: 'Honda Civic G10' }, { k: 'EPISÓDIOS', v: 'A confirmar' }, { k: 'MÉTRICAS', v: 'Aguardando insights' }],
      chipsLabel: 'FASES DO PROJETO · A CONFIRMAR', chips: [{ a: 'FASE 01', b: 'Ponto de partida' }, { a: 'FASE 02', b: 'Transformação' }, { a: 'FASE 03', b: 'Revelação' }] }
  ],
  sponsorOps: [
    { n: '01', t: 'Patrocínio master', d: 'Marca apresentadora da temporada, com abertura e encerramento.' },
    { n: '02', t: 'Produto no projeto', d: 'Peça, fluido ou serviço aplicado de verdade no carro.' },
    { n: '03', t: 'Episódio dedicado', d: 'Um capítulo construído em torno da marca.' },
    { n: '04', t: 'Desdobramento social', d: 'Reels, stories e shorts derivados de cada episódio.' }
  ],
  formats: [
    { n: '01', icon: 'ph-film-reel', title: 'Reels patrocinados', platform: 'INSTAGRAM', desc: 'Vídeo curto com narrativa de garagem e produto integrado.', items: ['Roteiro alinhado com a marca', '1 reel de 30–90s', 'Post collab opcional', 'Relatório de insights'] },
    { n: '02', icon: 'ph-stack', title: 'Sequência de stories', platform: 'INSTAGRAM', desc: 'Narrativa em frames com chamada direta para ação.', items: ['3 a 7 frames', 'Link, cupom ou CTA', 'Enquete ou caixinha', 'Destaque fixado opcional'] },
    { n: '03', icon: 'ph-youtube-logo', title: 'Vídeo longo', platform: 'YOUTUBE', desc: 'Integração em vídeo do canal ou vídeo dedicado.', items: ['Integração de 60–90s ou vídeo dedicado', 'Link na descrição', 'Comentário fixado'] },
    { n: '04', icon: 'ph-wrench', title: 'Integração em séries', platform: 'YOUTUBE', desc: 'A marca como parte do projeto, episódio após episódio.', items: ['Produto aplicado no carro', 'Menção em cada episódio', 'Presença em thumbnail quando aplicável'] },
    { n: '05', icon: 'ph-device-mobile', title: 'YouTube Shorts', platform: 'YOUTUBE', desc: 'Cortes verticais de alto giro a partir dos projetos.', items: ['1 a 3 shorts', 'Cortes dos episódios', 'CTA no vídeo'] },
    { n: '06', icon: 'ph-squares-four', title: 'Multiplataforma', platform: 'IG · YT · TT · FB', desc: 'Uma ideia adaptada a cada plataforma e público.', items: ['Adaptação por formato', 'Calendário integrado', 'Relatório consolidado'] },
    { n: '07', icon: 'ph-sliders-horizontal', title: 'Pacote personalizado', platform: 'SOB MEDIDA', desc: 'Escopo construído junto com a marca.', items: ['Campanhas always-on', 'Ações e eventos presenciais', 'Entregas combinadas'] }
  ],
  contacts: [
    { label: 'E-MAIL', icon: 'ph-envelope-simple', href: 'mailto:allblackg10.contato@gmail.com', cls: 'btn-primary', tmp: '' },
    { label: 'WHATSAPP', icon: 'ph-whatsapp-logo', href: 'https://wa.me/5519981748186?text=Ol%C3%A1%21%20Vi%20o%20m%C3%ADdia%20kit%20da%20ALLBLACK%20e%20quero%20falar%20sobre%20uma%20parceria.', cls: 'btn-secondary', tmp: '' },
    { label: 'INSTAGRAM', icon: 'ph-instagram-logo', href: 'https://www.instagram.com/allblack_g10', cls: 'btn-secondary', tmp: '' }
  ],
  nav: [
    { id: 'sobre', n: '01', label: 'Sobre' }, { id: 'instagram', n: '02', label: 'Instagram' }, { id: 'marcas', n: '03', label: 'Campanhas' }, { id: 'youtube', n: '04', label: 'YouTube' },
    { id: 'audiencia', n: '05', label: 'TikTok & FB' }, { id: 'projetos', n: '06', label: 'Projetos' }, { id: 'formatos', n: '07', label: 'Formatos' }
  ],
  yt: {
    kpis: [
      { code: 'VIEWS-28', v: '25,1M', l: 'Visualizações · 28 dias', d: '+1,5M ACIMA DO HABITUAL' },
      { code: 'WATCH-28', v: '286K', l: 'Horas assistidas · 28 dias', d: '+85K ACIMA DO HABITUAL' },
      { code: 'SUBS-28', v: '+43,5K', l: 'Novos inscritos · 28 dias', d: '≈ 1,5K POR DIA' },
      { code: 'AUD-M', v: '6,1M', l: 'Público mensal', d: 'ESPECTADORES ÚNICOS' },
      { code: 'TOP-28', v: '2,2M', l: 'Short mais visto · 28 dias', d: '1–28 OUT 2026' },
      { code: 'TOP-90', v: '6,8M', l: 'Short mais visto · 90 dias', d: '31 JUL – 28 OUT 2026' }
    ],
    daily: [1.75, 1.95, 1.7, 1.2, 1.05, 1.15, 1.2, 1.1, 1.6, 1.4, 1.38, 1.3, 1.1, 0.9, 0.85, 0.95, 0.85, 0.75, 0.78, 0.8, 0.78, 0.75, 0.72, 0.72, 0.6, 0.58, 0.55, 0.45],
    top: [
      { t: '+1000 AURA · #skyline #gtr #nissan', v: '6,8M', n: 6.8 },
      { t: 'VOCÊ ANDARIA NESSE CARRO?', v: '4,5M', n: 4.5 },
      { t: 'TOMARA QUE DÊ CERTO', v: '4,3M', n: 4.3 },
      { t: 'QUAL É A MARCA???', v: '4,3M', n: 4.3 },
      { t: 'Quando o carro do Ex dela abria a porta PRA…', v: '3,7M', n: 3.7 },
      { t: 'O FINAL', v: '3,5M', n: 3.5 }
    ],
    breakdowns: [
      { title: 'PÚBLICO POR COMPORTAMENTO · MENSAL', rows: [['Espectadores casuais', '58,3%', 58.3], ['Espectadores novos', '29,0%', 29.0], ['Espectadores frequentes', '12,7%', 12.7]], max: 100 },
      { title: 'SHORTS MAIS VISTOS · 28 DIAS', rows: [['Quando o carro do EX dela abria a porta SOZI…', '2,2M', 2.2], ['esse carro NÃO é igual o meu…', '1,8M', 1.8], ['O FINAL', '1,8M', 1.8], ['VOCÊ ANDARIA NESSE CARRO?', '1,6M', 1.6]], max: 2.2 }
    ]
  },
  tt: {
    breakdowns: [
      { title: 'FAIXA ETÁRIA', rows: [['18–24', '43,3%', 43.3], ['25–34', '35,6%', 35.6], ['35–44', '13,7%', 13.7], ['45–54', '6,2%', 6.2], ['55+', '1,2%', 1.2]], max: 43.3 },
      { title: 'GÊNERO & ENGAJAMENTO', rows: [['Homens', '72%', 72], ['Mulheres', '27%', 27], ['Compartilhamentos', '6,3K', 63], ['Comentários', '1,5K', 15]], max: 100 },
      { title: 'POSTS MAIS VISTOS · 28 DIAS', rows: [['Quando o carro do EX dela abria a porta sozinho…', '1,4M', 1.4], ['SERÁ QUE ELA VAI GOSTAR???', '540K', 0.54], ['CAVALINHO???', '477K', 0.477], ['Quando tem um cara se achando de hyundai…', '430K', 0.43]], max: 1.4 }
    ]
  },
  igProfile: [{ v: '1.219', l: 'POSTS', c: 'var(--color-text)' }, { v: '989K', l: 'SEGUIDORES', c: '#F5C400' }, { v: '842', l: 'SEGUINDO', c: 'var(--color-text)' }],
  igKpis: [
    { p: '90 DIAS', v: '106M', l: 'Visualizações' },
    { p: '90 DIAS', v: '17,4M', l: 'Contas alcançadas' },
    { p: '90 DIAS', v: '6,8M+', l: 'Interações' },
    { p: '90 DIAS', v: '+24K', l: 'Novos seguidores' },
    { p: '30 DIAS', v: '30,7M', l: 'Visualizações' },
    { p: '30 DIAS', v: '2,2M', l: 'Reel mais visto' }
  ],
  ig: {
    breakdowns: [
      { title: 'VIEWS POR FORMATO · 90 DIAS', rows: [['Reels', '64M', 64], ['Stories', '27M', 27], ['Posts', '15M', 15]], max: 64 },
      { title: 'FAIXA ETÁRIA', rows: [['13–17', '14,4%', 14.4], ['18–24', '34,2%', 34.2], ['25–34', '35,2%', 35.2], ['35–44', '10,5%', 10.5], ['45+', '5,7%', 5.7]], max: 35.2 },
      { title: 'GÊNERO & PAÍSES', rows: [['Homens', '81,5%', 81.5], ['Mulheres', '18,5%', 18.5], ['Brasil', '95,4%', 95.4], ['Portugal', '1,8%', 1.8]], max: 100 }
    ],
    reels: [
      { t: 'Quando o carro do EX dela abr…', v: '2,2M', n2: 2.2, likes: '118 mil' },
      { t: 'CAVALINHO???', v: '1,7M', n2: 1.7, likes: '153 mil' },
      { t: 'civic>>>>>', v: '1,2M', n2: 1.2, likes: '33 mil' },
      { t: 'VAI FICAR BOM?', v: '1M', n2: 1.0, likes: '22 mil' },
      { t: 'SEGUE AE @allblack_g10', v: '986K', n2: 0.986, likes: '48 mil' },
      { t: 'allblack', v: '915K', n2: 0.915, likes: '98 mil' }
    ]
  },
  priceGroups: [
    { n: 'INSTAGRAM', icon: 'ph-instagram-logo', title: 'INSTAGRAM', desc: 'Stories em sequência e Reels no perfil principal.', items: [['Combo 3 stories', '1.800', ['3 stories em sequência']], ['Combo 5 stories', '2.500', ['5 stories em sequência']], ['Combo 8 stories', '3.200', ['8 stories em sequência']], ['Reels', '5.000', ['1 Reels no perfil'], 1]] },
    { n: 'COMBOS', icon: 'ph-stack', title: 'COMBOS', desc: 'Formatos combinados para mais presença e alcance.', items: [['3 stories + carrossel', '3.000', ['Sequência de 3 stories', 'Post carrossel']], ['3 stories + Reels', '6.500', ['Sequência de 3 stories', '1 Reels no perfil'], 1], ['Reels + repost TikTok e Shorts', '7.500', ['1 Reels no Instagram', 'Repost no TikTok', 'Repost no YouTube Shorts']]] },
    { n: 'YOUTUBE', icon: 'ph-youtube-logo', title: 'YOUTUBE', desc: 'Inserção em vídeo longo e Shorts com distribuição nas outras redes.', items: [['Inserção em vídeo longo', '2.000', ['1 minuto de inserção', 'Vídeo longo no canal']], ['Shorts + repost Instagram + TikTok', '7.500', ['1 YouTube Shorts', 'Repost no Instagram', 'Repost no TikTok'], 1]] },
    { n: 'EVENTOS', icon: 'ph-calendar-star', title: 'PRESENÇA EM EVENTO', desc: 'O João no evento da marca, com cobertura nas redes.', items: [['Evento + stories', '4.500', ['Presença no evento', 'Sequência de 5 stories']], ['Evento + stories + Reels', '8.500', ['Presença no evento', 'Sequência de 5 stories', '1 Reels no perfil'], 1], ['Evento completo', '10.000', ['Presença no evento', 'Sequência de 5 stories', '1 Reels no perfil', 'Repost no TikTok', 'Repost no YouTube Shorts']]] }
  ],
  partners: [
    ['Red Bull', '@redbullbr', 'redbull'], ['Faaftech', '@faaftech', 'faaftech'], ['Postos Petrobras', '@postospetrobras', 'petrobras'], ['PneuStore', '@pneustore', 'pneustore'],
    ['DDPAI', '@ddpai.brasil', 'ddpai'], ['Vonixx', '@vonixx', 'vonixx'], ['VivaVideo', '@vivavideoapp', 'vivavideo'], ['Lubrax', '@lubrax', 'lubrax'],
    ['K&N Filtros', '@filtrosknbrasil', 'kn'], ['Olla', '@ollaoficial', 'olla']
  ],
  pdfPages: ['Capa', 'Criador', 'Audiência', 'Marcas & campanhas', 'Projetos', 'Formatos']
};
