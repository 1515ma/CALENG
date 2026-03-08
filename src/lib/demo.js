// ─────────────────────────────────────────────────
//  Demo Mode – Permite navegar o app sem backend
// ─────────────────────────────────────────────────

const KEY = 'meccalc_demo';

export const isDemoMode  = () => localStorage.getItem(KEY) === '1';
export const setDemoMode = () => localStorage.setItem(KEY, '1');
export const clearDemoMode = () => localStorage.removeItem(KEY);

export const demoUser = {
  id: 'demo-user',
  email: 'demo@meccalc.com.br',
};

export const demoUsage = {
  isPremium: false,
  queriesUsed: 2,
  queriesLimit: 5,
  weekStart: new Date().toISOString().slice(0, 10),
};

// ── Resultados simulados por categoria ────────────────────────────────────────
const mockResults = {
  dimensionamento: {
    title: '📐 Dimensionamento – Deflexão de Viga',
    inputs: { 'Carga P': '5000 N', 'Comprimento L': '2000 mm', 'Módulo E': '200000 MPa', 'Momento de inércia I': '8333333 mm⁴' },
    results: { 'Deflexão máxima (δ)': '0.50 mm', 'Deflexão admissível (L/300)': '6.67 mm', 'Status': '✅ APROVADO' },
    formula: 'δ = P×L³ / (48×E×I)',
    norm: 'NBR 6118 – Deflexão máxima L/300',
  },
  fixacao: {
    title: '🔩 Fixação – Diâmetro de Broca',
    inputs: { 'Rosca': 'M10', 'Passo': '1,5 mm' },
    results: { 'Diâmetro da broca': '8,50 mm', 'Profundidade mínima': '15,0 mm', 'Rosca UNC equivalente': '3/8"' },
    table: {
      headers: ['Rosca', 'Passo (mm)', 'Ø Broca (mm)'],
      rows: [['M6','1,0','5,00'],['M8','1,25','6,75'],['M10','1,5','8,50'],['M12','1,75','10,25'],['M16','2,0','14,00']],
    },
    norm: 'ISO 724 / DIN 13',
  },
  tolerancias: {
    title: '📏 Tolerâncias – Ajuste ISO H7/g6',
    inputs: { 'Diâmetro nominal': '50 mm', 'Furo': 'H7', 'Eixo': 'g6' },
    results: {
      'Furo máx': '50,025 mm',
      'Furo mín': '50,000 mm',
      'Eixo máx': '49,991 mm',
      'Eixo mín': '49,979 mm',
      'Folga mínima': '0,009 mm',
      'Folga máxima': '0,046 mm',
      'Tipo de ajuste': 'Com folga (deslizante)',
    },
    norm: 'ISO 286-1',
  },
  materiais: {
    title: '🧱 Materiais – Equivalência de Aços',
    inputs: { 'Aço SAE': 'SAE 1045' },
    results: { 'ABNT': 'ABNT 1045', 'DIN': 'CK 45', 'BS': '080M46', 'Rm (MPa)': '590–780', 'Dureza HB': '170–210', 'Aplicação típica': 'Eixos, engrenagens, pinos' },
    norm: 'ABNT NBR 6339 / SAE J412',
  },
  componentes: {
    title: '⚙️ Componentes – Rolamento 6205',
    inputs: { 'Código': '6205' },
    results: { 'Diâmetro interno (d)': '25 mm', 'Diâmetro externo (D)': '52 mm', 'Largura (B)': '15 mm', 'Capacidade dinâmica (C)': '14,0 kN', 'Capacidade estática (C₀)': '7,80 kN', 'Velocidade limite': '16 000 rpm' },
    norm: 'ISO 15',
  },
  hidraulica: {
    title: '💧 Hidráulica – Força de Cilindro',
    inputs: { 'Pressão': '150 bar', 'Diâmetro do êmbolo': '80 mm', 'Diâmetro da haste': '40 mm' },
    results: { 'Força de avanço': '75,4 kN', 'Força de retorno': '56,5 kN', 'Área de avanço': '5026 mm²', 'Área de retorno': '3770 mm²' },
    formula: 'F = P × A',
    norm: 'NBR ISO 4413',
  },
  fabricacao: {
    title: '🏭 Fabricação – Peso de Peça',
    inputs: { 'Forma': 'Tubo', 'DE': '60 mm', 'DI': '50 mm', 'Comprimento': '500 mm', 'Material': 'Aço (7850 kg/m³)' },
    results: { 'Volume': '431 cm³', 'Massa': '3,39 kg', 'Peso': '33,2 N' },
    formula: 'V = π/4 × (DE² − DI²) × L',
  },
  motores: {
    title: '⚡ Motores – Potência Necessária',
    inputs: { 'Torque': '120 N·m', 'Rotação': '1450 rpm', 'Fator de serviço': '1,25' },
    results: { 'Potência calculada': '18,2 kW', 'Potência com FS': '22,8 kW', 'Potência comercial IEC': '22 kW ou 30 cv', 'Corrente aprox.': '42,8 A (380 V)' },
    formula: 'P = T × ω = T × 2πn/60',
    norm: 'IEC 60034',
  },
  molas: {
    title: '🌀 Molas – Constante de Mola',
    inputs: { 'Diâmetro do arame (d)': '3 mm', 'Diâmetro médio (D)': '25 mm', 'Nº de espiras ativas (Na)': '10', 'Material': 'A228 (Mola de aço)' },
    results: { 'Índice de mola (C)': '8,33', 'Fator de Wahl (Kw)': '1,17', 'Constante k': '9,43 N/mm', 'Força máxima (Fmax)': '180 N', 'Deformação máxima': '19,1 mm' },
    formula: 'k = G×d⁴ / (8×D³×Na)',
  },
  custos: {
    title: '💰 Custos – Corte a Laser',
    inputs: { 'Material': 'Aço carbono', 'Espessura': '6 mm', 'Comprimento de corte': '3500 mm' },
    results: { 'Taxa de corte': 'R$ 0,85/m', 'Custo de corte': 'R$ 2,98', 'Tempo estimado': '4,5 min', 'Velocidade': '1200 mm/min' },
    norm: 'Referência de mercado nacional',
  },
  ergonomia: {
    title: '🦺 Ergonomia – Distância de Segurança NR-12',
    inputs: { 'Nível de risco': '2 (médio)', 'Tempo de parada da máquina': '0,4 s' },
    results: { 'Distância mínima': '420 mm', 'Distância recomendada': '500 mm', 'Categoria de parada': 'Categoria 1 (IEC 60204-1)' },
    formula: 'Ds = 2000 mm/s × Ts',
    norm: 'NR-12 Anexo I / ISO 13857',
  },
  vedacao: {
    title: '🔧 Vedação – Seleção de O-ring',
    inputs: { 'Fluido': 'Óleo hidráulico', 'Temperatura': '80 °C', 'Pressão': '200 bar' },
    results: { 'Material recomendado': 'NBR (Nitrila)', 'Dureza Shore A': '70–90', 'Temperatura de operação': '−30 °C a +120 °C', 'Compatibilidade': '✅ Compatível' },
    note: 'Para temperaturas acima de 120 °C, considere HNBR ou FKM (Viton).',
    norm: 'ISO 3601',
  },
  soldagem: {
    title: '🔥 Soldagem – Seleção de Eletrodo',
    inputs: { 'Material base': 'Aço low carbon (até 0,3% C)', 'Processo': 'SMAW' },
    results: { 'Eletrodo AWS': 'E6013', 'Resistência à tração': '480 MPa', 'Corrente': 'CA/CC', 'Posição': 'Todas', 'Aplicação': 'Estruturas, chapas finas' },
    norm: 'AWS A5.1 / ISO 2560',
  },
  conversores: {
    title: '🔄 Conversor – Pressão',
    inputs: { 'Valor': '150 bar', 'Converter para': 'PSI e MPa' },
    results: { 'bar → PSI': '2175,6 PSI', 'bar → MPa': '15,00 MPa', 'bar → kgf/cm²': '152,97 kgf/cm²', 'bar → Pa': '15 000 000 Pa' },
  },
  gestao: {
    title: '📋 Gestão – Checklist de Produção',
    sections: [
      {
        title: 'Desenho Técnico',
        items: [
          { text: 'Título, número de revisão e data preenchidos', critical: false },
          { text: 'Tolerâncias gerais conforme ABNT NBR 6158', critical: false },
          { text: 'Material e tratamento térmico especificados', critical: true },
        ],
      },
      {
        title: 'Processo',
        items: [
          { text: 'Plano de controle emitido', critical: true },
          { text: 'Ferramentas e dispositivos calibrados', critical: false },
        ],
      },
    ],
  },
};

export function getMockResult(category) {
  return mockResults[category] || {
    title: `Cálculo – ${category}`,
    results: { 'Resultado demo': '42,00 unidades' },
    note: 'Dados simulados para demonstração.',
  };
}
