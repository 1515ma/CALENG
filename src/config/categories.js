// =============================================================
// Configuração de todas as 15 categorias de cálculo
// Define: ícone, cor, tipos, campos de formulário
// =============================================================

export const CATEGORIES = {
  dimensionamento: {
    id: 'dimensionamento', label: 'Dimensionamento e Resistência',
    icon: '🔩', color: 'blue',
    description: 'Espessura de chapa, deflexão de vigas, torque de eixos e fatores de segurança',
    types: {
      plate_thickness: {
        label: 'Espessura Mínima de Chapa',
        fields: [
          { name: 'load_unit', label: 'Unidade de carga', type: 'select', options: [
            { value: 'kgf', label: 'kgf' },
            { value: 'N',   label: 'N (Newton)' },
            { value: 'lbf', label: 'lbf (Libra-força)' }
          ]},
          { name: 'load_value', label: 'Carga total', type: 'number', required: true, placeholder: '500' },
          { name: 'length_unit', label: 'Unidade de comprimento', type: 'select', options: [
            { value: 'mm', label: 'mm' },
            { value: 'cm', label: 'cm' },
            { value: 'in', label: 'Polegadas (in)' },
            { value: 'm',  label: 'Metros (m)' }
          ]},
          { name: 'span_value', label: 'Vão livre', type: 'number', required: true, placeholder: '1000' },
          { name: 'width_value', label: 'Largura da chapa', type: 'number', required: false, placeholder: 'Padrão = vão' },
          { name: 'material_grade', label: 'Material (tensão de escoamento)', type: 'select', options: [
            { value: '1006_170', label: 'Aço 1006 – 170 MPa' },
            { value: '1008_180', label: 'Aço 1008 – 180 MPa' },
            { value: '1010_205', label: 'Aço 1010 – 205 MPa' },
            { value: '1012_215', label: 'Aço 1012 – 215 MPa' },
            { value: '1015_230', label: 'Aço 1015 – 230 MPa' },
            { value: '1018_240', label: 'Aço 1018 – 240 MPa' },
            { value: '1020_250', label: 'Aço 1020 – 250 MPa' },
            { value: '1025_260', label: 'Aço 1025 – 260 MPa' },
            { value: '1030_295', label: 'Aço 1030 – 295 MPa' },
            { value: '1035_310', label: 'Aço 1035 – 310 MPa' },
            { value: '1040_350', label: 'Aço 1040 – 350 MPa' },
            { value: '1045_380', label: 'Aço 1045 – 380 MPa' },
            { value: '1050_410', label: 'Aço 1050 – 410 MPa' },
            { value: '1060_440', label: 'Aço 1060 – 440 MPa' },
            { value: '1070_460', label: 'Aço 1070 – 460 MPa' },
            { value: '1080_480', label: 'Aço 1080 – 480 MPa' },
            { value: '1095_510', label: 'Aço 1095 – 510 MPa' },
            { value: '4130_460', label: 'Aço 4130 – 460 MPa' },
            { value: '4140_655', label: 'Aço 4140 – 655 MPa' },
            { value: '4340_710', label: 'Aço 4340 – 710 MPa' },
            { value: '8620_360', label: 'Aço 8620 – 360 MPa' },
            { value: '6150_515', label: 'Aço 6150 – 515 MPa' },
            { value: '304_205',  label: 'Inox 304 – 205 MPa' },
            { value: '316_210',  label: 'Inox 316 – 210 MPa' },
            { value: '410_275',  label: 'Inox 410 – 275 MPa' },
            { value: 'al6061_276', label: 'Alumínio 6061-T6 – 276 MPa' },
            { value: 'al7075_503', label: 'Alumínio 7075-T6 – 503 MPa' },
            { value: 'cobre_70',   label: 'Cobre puro – 70 MPa' },
            { value: 'latao_200',  label: 'Latão C360 – 200 MPa' }
          ]},
          { name: 'safety_factor', label: 'Fator de segurança', type: 'number', required: false, placeholder: '2.0', defaultValue: 2.0 }
        ]
      },
      beam_deflection: {
        label: 'Deflexão de Viga',
        fields: [
          { name: 'load_unit', label: 'Unidade de carga', type: 'select', options: [
            { value: 'N',   label: 'N (Newton)' },
            { value: 'kgf', label: 'kgf' },
            { value: 'lbf', label: 'lbf' }
          ]},
          { name: 'load_value', label: 'Carga central', type: 'number', required: true, placeholder: '5000' },
          { name: 'length_unit', label: 'Unidade de comprimento', type: 'select', options: [
            { value: 'mm', label: 'mm' },
            { value: 'cm', label: 'cm' },
            { value: 'in', label: 'Polegadas (in)' },
            { value: 'm',  label: 'Metros (m)' }
          ]},
          { name: 'span_value', label: 'Vão', type: 'number', required: true, placeholder: '2000' },
          { name: 'base_value', label: 'Base da seção', type: 'number', required: true, placeholder: '50' },
          { name: 'height_value', label: 'Altura da seção', type: 'number', required: true, placeholder: '100' },
          { name: 'material_elastic', label: 'Material (módulo de elasticidade)', type: 'select', options: [
            { value: '1006_200',  label: 'Aço 1006 – 200 GPa' },
            { value: '1008_200',  label: 'Aço 1008 – 200 GPa' },
            { value: '1010_205',  label: 'Aço 1010 – 205 GPa' },
            { value: '1020_205',  label: 'Aço 1020 – 205 GPa' },
            { value: '1030_205',  label: 'Aço 1030 – 205 GPa' },
            { value: '1040_205',  label: 'Aço 1040 – 205 GPa' },
            { value: '1045_205',  label: 'Aço 1045 – 205 GPa' },
            { value: '1060_205',  label: 'Aço 1060 – 205 GPa' },
            { value: '4130_205',  label: 'Aço 4130 – 205 GPa' },
            { value: '4140_205',  label: 'Aço 4140 – 205 GPa' },
            { value: '4340_205',  label: 'Aço 4340 – 205 GPa' },
            { value: '304_193',   label: 'Inox 304 – 193 GPa' },
            { value: '316_193',   label: 'Inox 316 – 193 GPa' },
            { value: '410_200',   label: 'Inox 410 – 200 GPa' },
            { value: 'al6061_69', label: 'Alumínio 6061-T6 – 69 GPa' },
            { value: 'al7075_72', label: 'Alumínio 7075-T6 – 72 GPa' },
            { value: 'cobre_117', label: 'Cobre – 117 GPa' },
            { value: 'latao_100', label: 'Latão – 100 GPa' },
            { value: 'titanio_114', label: 'Titânio Gr.5 – 114 GPa' },
            { value: 'ferro_fundido_170', label: 'Ferro Fundido – 170 GPa' }
          ]},
          { name: 'profile_type', label: 'Tipo de seção', type: 'select', options: [
            { value: 'retangular', label: 'Retangular / Quadrada' },
            { value: 'circular',   label: 'Circular sólida' }
          ]}
        ]
      },
      shaft_torque: {
        label: 'Torque e Verificação de Eixo',
        fields: [
          { name: 'length_unit', label: 'Unidade de comprimento', type: 'select', options: [
            { value: 'mm', label: 'mm' },
            { value: 'cm', label: 'cm' },
            { value: 'in', label: 'Polegadas (in)' }
          ]},
          { name: 'diameter_value', label: 'Diâmetro do eixo', type: 'number', required: true, placeholder: '40' },
          { name: 'power_kw',    label: 'Potência (kW)',          type: 'number', required: false, placeholder: '5.5' },
          { name: 'rpm',         label: 'Rotação (RPM)',          type: 'number', required: false, placeholder: '1450' },
          { name: 'load_n',      label: 'Força radial (N)',       type: 'number', required: false, placeholder: '1000' }
        ]
      },
      safety_factor: {
        label: 'Fator de Segurança Recomendado',
        fields: [
          { name: 'application_type', label: 'Tipo de aplicação', type: 'select', options: [
            { value: '',                  label: 'Mostrar tabela completa' },
            { value: 'static_ductile',    label: 'Estático – material dúctil' },
            { value: 'static_brittle',    label: 'Estático – material frágil' },
            { value: 'dynamic_smooth',    label: 'Dinâmico suave' },
            { value: 'dynamic_vibration', label: 'Dinâmico com vibração' },
            { value: 'impact',            label: 'Impacto / choque' },
            { value: 'pressure_vessel',   label: 'Vaso de pressão' },
            { value: 'lifting_gear',      label: 'Equipamentos de içamento' }
          ]}
        ]
      }
    }
  },

  fixacao: {
    id: 'fixacao', label: 'Elementos de Fixação e Roscas',
    icon: '🔧', color: 'orange',
    description: 'Broca pré-rosca (métrica, UNC, NPT) e torque de aperto por classe e material',
    types: {
      thread_drill: {
        label: 'Broca Pré-Rosca',
        fields: [
          { name: 'thread_size', label: 'Rosca (ex: M10 ou 3/8-16)', type: 'text', required: true, placeholder: 'M10' },
          { name: 'standard',    label: 'Padrão', type: 'select', options: [
            { value: 'metric', label: 'Métrico ISO' },
            { value: 'unc',    label: 'UNC (polegada)' },
            { value: 'npt',    label: 'NPT (hidráulico)' }
          ]}
        ]
      },
      tightening_torque: {
        label: 'Torque de Aperto',
        fields: [
          { name: 'bolt_size',   label: 'Parafuso (ex: M12)', type: 'text', required: true, placeholder: 'M12' },
          { name: 'bolt_material', label: 'Material do parafuso', type: 'select', options: [
            { value: 'aco_8.8',    label: 'Aço Carbono – Classe 8.8 (uso geral)' },
            { value: 'aco_10.9',   label: 'Aço Carbono – Classe 10.9 (alta resistência)' },
            { value: 'aco_12.9',   label: 'Aço Carbono – Classe 12.9 (ultra resistência)' },
            { value: 'aco_4.6',    label: 'Aço Carbono – Classe 4.6 (baixa resistência)' },
            { value: 'aco_4.8',    label: 'Aço Carbono – Classe 4.8' },
            { value: 'aco_5.6',    label: 'Aço Carbono – Classe 5.6' },
            { value: 'aco_5.8',    label: 'Aço Carbono – Classe 5.8' },
            { value: 'aco_6.8',    label: 'Aço Carbono – Classe 6.8' },
            { value: 'inox_a2_70', label: 'Inox A2-70 (304) – 700 MPa' },
            { value: 'inox_a2_80', label: 'Inox A2-80 (304) – 800 MPa' },
            { value: 'inox_a4_70', label: 'Inox A4-70 (316) – 700 MPa' },
            { value: 'inox_a4_80', label: 'Inox A4-80 (316) – 800 MPa' },
            { value: 'latao',      label: 'Latão' },
            { value: 'bronze',     label: 'Bronze' },
            { value: 'aluminio',   label: 'Alumínio' },
            { value: 'titanio',    label: 'Titânio Gr.5' },
            { value: 'nylon',      label: 'Nylon / Poliamida' }
          ]},
          { name: 'friction', label: 'Condição', type: 'select', options: [
            { value: 'lubricated', label: 'Lubrificado (µ ≈ 0,12)' },
            { value: 'dry',        label: 'Seco (µ ≈ 0,20)' },
            { value: 'anti_seize', label: 'Anti-seize (µ ≈ 0,10)' },
            { value: 'loctite',    label: 'Loctite® (µ ≈ 0,16)' }
          ]}
        ]
      }
    }
  },

  tolerancias: {
    id: 'tolerancias', label: 'Tolerâncias e Ajustes',
    icon: '📐', color: 'green',
    description: 'Calculadora de ajustes ISO 286, tolerâncias geométricas (GD&T)',
    types: {
      iso_fit: {
        label: 'Ajuste ISO (Furo-Base)',
        fields: [
          { name: 'nominal_mm', label: 'Diâmetro nominal (mm)', type: 'number', required: true, placeholder: '50' },
          { name: 'fit',        label: 'Sistema de ajuste', type: 'select', options: [
            { value: 'H7/h6',  label: 'H7/h6 – Deslizante livre' },
            { value: 'H7/g6',  label: 'H7/g6 – Deslizante (mancal)' },
            { value: 'H7/f7',  label: 'H7/f7 – Folga (mancal rot.)' },
            { value: 'H7/js6', label: 'H7/js6 – Transição precisa' },
            { value: 'H7/k6',  label: 'H7/k6 – Transição (polia/engrenagem)' },
            { value: 'H7/m6',  label: 'H7/m6 – Transição (interferência leve)' },
            { value: 'H7/n6',  label: 'H7/n6 – Interferência (rolamento ext.)' },
            { value: 'H7/p6',  label: 'H7/p6 – Interferência (prensado)' }
          ]}
        ]
      },
      gdt_guide: {
        label: 'Guia GD&T / GPS',
        fields: [
          { name: 'symbol', label: 'Símbolo / nome (opcional)', type: 'text', required: false, placeholder: 'flatness, position, runout...' }
        ]
      }
    }
  },

  materiais: {
    id: 'materiais', label: 'Materiais e Tratamentos',
    icon: '🏗️', color: 'yellow',
    description: 'Equivalência SAE/ABNT/DIN/BS/JIS/EN, tratamentos térmicos e compatibilidade galvânica',
    types: {
      steel_equivalence: {
        label: 'Equivalência de Aços',
        fields: [
          { name: 'grade',    label: 'Grau do aço (ex: 1045, 4140, 304)', type: 'text', required: true, placeholder: '4140' },
          { name: 'standard', label: 'Norma de referência', type: 'select', options: [
            { value: 'sae',  label: 'SAE/AISI (padrão)' },
            { value: 'abnt', label: 'ABNT' },
            { value: 'din',  label: 'DIN' },
            { value: 'bs',   label: 'BS (Britânica)' },
            { value: 'jis',  label: 'JIS (Japonesa)' },
            { value: 'en',   label: 'EN (Europeia)' },
            { value: 'gost', label: 'GOST (Russa)' },
            { value: 'afnor',label: 'AFNOR (Francesa)' },
            { value: 'uni',  label: 'UNI (Italiana)' }
          ]}
        ]
      },
      heat_treatment: {
        label: 'Tratamento Térmico',
        fields: [
          { name: 'process', label: 'Processo', type: 'select', options: [
            { value: '',             label: 'Mostrar todos' },
            { value: 'annealing',    label: 'Recozimento' },
            { value: 'normalizing',  label: 'Normalização' },
            { value: 'quench_temper',label: 'Têmpera + Revenido' },
            { value: 'case_hardening',label: 'Cementação' },
            { value: 'nitriding',    label: 'Nitretação' },
            { value: 'induction',    label: 'Têmpera por indução' },
            { value: 'carburizing',  label: 'Carbonitretação' },
            { value: 'stress_relief',label: 'Alívio de tensões' },
            { value: 'aging',        label: 'Envelhecimento (Al, Ti)' },
            { value: 'austempering', label: 'Austêmpera' },
            { value: 'martempering', label: 'Martêmpera' },
            { value: 'cryogenic',    label: 'Tratamento criogênico' },
            { value: 'boriding',     label: 'Boretação' },
            { value: 'plasma_nitriding', label: 'Nitretação a plasma' },
            { value: 'shot_peening', label: 'Shot peening (jateamento)' }
          ]},
          { name: 'target_hardness_hrc', label: 'Dureza alvo (HRC, opcional)', type: 'number', required: false, placeholder: '45' }
        ]
      },
      corrosion_table: {
        label: 'Compatibilidade Galvânica',
        fields: [
          { name: 'pair', label: 'Par de materiais (opcional)', type: 'select', options: [
            { value: '', label: 'Mostrar tabela completa' },
            { value: 'Aço × Inox 304/316',         label: 'Aço × Inox 304/316' },
            { value: 'Aço × Alumínio',             label: 'Aço × Alumínio' },
            { value: 'Aço × Cobre/Latão',          label: 'Aço × Cobre/Latão' },
            { value: 'Alumínio × Cobre',           label: 'Alumínio × Cobre' },
            { value: 'Inox × Cobre',               label: 'Inox × Cobre' },
            { value: 'Zinco × Aço (galvanizado)',  label: 'Zinco × Aço (galvanizado)' },
            { value: 'Titânio × Aço',              label: 'Titânio × Aço' },
            { value: 'Alumínio × Inox',            label: 'Alumínio × Inox' },
            { value: 'Bronze × Aço',               label: 'Bronze × Aço' },
            { value: 'Cromo × Aço',                label: 'Cromo × Aço' },
            { value: 'Níquel × Aço',               label: 'Níquel × Aço' }
          ]}
        ]
      }
    }
  },

  componentes: {
    id: 'componentes', label: 'Componentes e Transmissão',
    icon: '⚙️', color: 'purple',
    description: 'Identificação de rolamentos por diâmetro+espessura com código, correias em V e sincronizadas',
    types: {
      bearing_code: {
        label: 'Código de Rolamento',
        fields: [
          { name: 'bore_mm',       label: 'Diâm. interno (mm)',    type: 'number', required: true,  placeholder: '25' },
          { name: 'outer_mm',      label: 'Diâm. externo (mm)',    type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'width_mm',      label: 'Espessura / Largura (mm)', type: 'number', required: false, placeholder: 'Opcional – ajuda identificar série' },
          { name: 'bearing_type',  label: 'Tipo de rolamento', type: 'select', options: [
            { value: 'deep_groove',      label: 'Esfera radial (série 6)' },
            { value: 'angular_contact',  label: 'Contato angular (série 7)' },
            { value: 'self_aligning',    label: 'Autocompensador esferas' },
            { value: 'cylindrical',      label: 'Rolo cilíndrico (NJ)' },
            { value: 'tapered',          label: 'Rolo cônico (30xxx)' }
          ]},
          { name: 'seal_type', label: 'Tipo de vedação', type: 'select', options: [
            { value: 'open',  label: 'Aberto (sem vedação)' },
            { value: '2Z',    label: 'Blindado (2Z / ZZ) – placas metálicas' },
            { value: '2RS',   label: 'Vedação (2RS / 2RSR) – lábios de borracha' },
            { value: '2RS1',  label: 'Vedação de baixo atrito (2RS1)' }
          ]}
        ]
      },
      belt_length: {
        label: 'Comprimento de Correia',
        fields: [
          { name: 'd1_mm',     label: 'Polia menor – Ø primitivo (mm)', type: 'number', required: true,  placeholder: '100' },
          { name: 'd2_mm',     label: 'Polia maior – Ø primitivo (mm)', type: 'number', required: true,  placeholder: '250' },
          { name: 'center_mm', label: 'Distância entre centros (mm)',   type: 'number', required: true,  placeholder: '600' },
          { name: 'belt_type', label: 'Tipo', type: 'select', options: [
            { value: 'v_belt',  label: 'Correia em V' },
            { value: 'timing',  label: 'Correia sincronizada' },
            { value: 'flat',    label: 'Correia plana' }
          ]}
        ]
      }
    }
  },

  hidraulica: {
    id: 'hidraulica', label: 'Hidráulica e Pneumática',
    icon: '💧', color: 'cyan',
    description: 'Força de cilindros com curso, dimensionamento de tubulações e perda de carga',
    types: {
      cylinder_force: {
        label: 'Força de Cilindro',
        fields: [
          { name: 'pressure_unit', label: 'Unidade de pressão', type: 'select', options: [
            { value: 'bar', label: 'bar' },
            { value: 'psi', label: 'psi' },
            { value: 'MPa', label: 'MPa' },
            { value: 'kgf_cm2', label: 'kgf/cm²' },
            { value: 'atm', label: 'atm' }
          ]},
          { name: 'length_unit', label: 'Unidade de comprimento', type: 'select', options: [
            { value: 'mm', label: 'mm' },
            { value: 'cm', label: 'cm' },
            { value: 'in', label: 'Polegadas (in)' }
          ]},
          { name: 'bore_value',       label: 'Diâm. do êmbolo',   type: 'number', required: true,  placeholder: '100' },
          { name: 'rod_value',        label: 'Diâm. da haste',    type: 'number', required: false, placeholder: '50' },
          { name: 'pressure_value',   label: 'Pressão de trabalho', type: 'number', required: true, placeholder: '150' },
          { name: 'stroke_value',     label: 'Curso do cilindro',  type: 'number', required: false, placeholder: '200' },
          { name: 'system', label: 'Sistema', type: 'select', options: [
            { value: 'hydraulic',  label: 'Hidráulico' },
            { value: 'pneumatic',  label: 'Pneumático' }
          ]},
          { name: 'efficiency', label: 'Eficiência mecânica', type: 'number', required: false, placeholder: '0.95', defaultValue: 0.95 }
        ]
      },
      pipe_sizing: {
        label: 'Dimensionamento de Tubulação',
        fields: [
          { name: 'flow_unit', label: 'Unidade de vazão', type: 'select', options: [
            { value: 'l_min',   label: 'l/min (litros por minuto)' },
            { value: 'l_h',     label: 'l/h (litros por hora)' },
            { value: 'm3_h',    label: 'm³/h (metros cúbicos por hora)' },
            { value: 'gpm',     label: 'GPM (galões US por minuto)' },
            { value: 'l_s',     label: 'l/s (litros por segundo)' },
            { value: 'cfm',     label: 'CFM (pés cúbicos por minuto)' }
          ]},
          { name: 'flow_value',          label: 'Vazão',              type: 'number', required: true,  placeholder: '40' },
          { name: 'line_type', label: 'Tipo de linha', type: 'select', options: [
            { value: 'pressure', label: 'Pressão (4 m/s rec.)' },
            { value: 'return',   label: 'Retorno (2 m/s rec.)' },
            { value: 'suction',  label: 'Sucção (1 m/s rec.)' }
          ]},
          { name: 'pipe_length_m',      label: 'Comprimento do trecho (m)',type: 'number', required: false, placeholder: '10' },
          { name: 'fluid_viscosity_cst',label: 'Viscosidade do fluido (cSt)', type: 'number', required: false, placeholder: '32', defaultValue: 32 }
        ]
      }
    }
  },

  fabricacao: {
    id: 'fabricacao', label: 'Processos de Fabricação',
    icon: '🏭', color: 'red',
    description: 'Raio mínimo de dobra, comprimento da aba e calculadora de peso completa',
    types: {
      bend_radius: {
        label: 'Raio Mínimo de Dobra',
        fields: [
          { name: 'thickness_mm',   label: 'Espessura da chapa (mm)', type: 'number', required: true, placeholder: '3' },
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_carbono',   label: 'Aço carbono' },
            { value: 'aco_inox',      label: 'Aço inoxidável' },
            { value: 'aluminio_mole', label: 'Alumínio mole (1050, 3003)' },
            { value: 'aluminio_duro', label: 'Alumínio duro (6061, 7075)' },
            { value: 'cobre_laton',   label: 'Cobre / Latão' }
          ]},
          { name: 'bend_angle_deg', label: 'Ângulo de dobra (°)', type: 'number', required: false, placeholder: '90', defaultValue: 90 },
          { name: 'flange_length_mm', label: 'Comprimento da aba/flange (mm)', type: 'number', required: false, placeholder: '30' }
        ]
      },
      weight_calc: {
        label: 'Calculadora de Peso',
        fields: [
          { name: 'shape', label: 'Forma da peça', type: 'select', options: [
            { value: 'retangular',       label: 'Bloco retangular (L×W×H)' },
            { value: 'chapa',            label: 'Chapa (L×W×espessura)' },
            { value: 'cilindro_solido',  label: 'Cilindro / Barra redonda (Ø×L)' },
            { value: 'tubo',             label: 'Tubo redondo (Øext×Øint×L)' },
            { value: 'tubo_quadrado',    label: 'Tubo quadrado (Lado×esp×L)' },
            { value: 'tubo_retangular',  label: 'Tubo retangular (A×B×esp×L)' },
            { value: 'perfil_l',         label: 'Perfil L / Cantoneira (A×B×t×L)' },
            { value: 'perfil_u',         label: 'Perfil U / Canal (H×B×t×L)' },
            { value: 'perfil_t',         label: 'Perfil T (H×B×t×L)' },
            { value: 'perfil_i',         label: 'Perfil I / H (H×B×tw×tf×L)' },
            { value: 'barra_sextavada', label: 'Barra sextavada (chave×L)' },
            { value: 'esfera',           label: 'Esfera (Ø)' },
            { value: 'cone',             label: 'Cone (Øbase×Øtopo×H)' },
            { value: 'disco',            label: 'Disco / Flange (Øext×Øint×esp)' }
          ]},
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_1020',       label: 'Aço 1020 (7,85 g/cm³)' },
            { value: 'aco_1045',       label: 'Aço 1045 (7,85 g/cm³)' },
            { value: 'aco_4140',       label: 'Aço 4140 (7,85 g/cm³)' },
            { value: 'aco_inox_304',   label: 'Inox 304 (7,93 g/cm³)' },
            { value: 'aco_inox_316',   label: 'Inox 316 (7,98 g/cm³)' },
            { value: 'aluminio_1050',  label: 'Alumínio 1050 (2,71 g/cm³)' },
            { value: 'aluminio_6061',  label: 'Alumínio 6061-T6 (2,70 g/cm³)' },
            { value: 'aluminio_6063',  label: 'Alumínio 6063 (2,69 g/cm³)' },
            { value: 'aluminio_7075',  label: 'Alumínio 7075-T6 (2,81 g/cm³)' },
            { value: 'cobre',          label: 'Cobre (8,96 g/cm³)' },
            { value: 'laton',          label: 'Latão (8,50 g/cm³)' },
            { value: 'bronze',         label: 'Bronze (8,80 g/cm³)' },
            { value: 'ferro_fundido',  label: 'Ferro fundido (7,20 g/cm³)' },
            { value: 'titanio_gr2',    label: 'Titânio Gr.2 (4,51 g/cm³)' },
            { value: 'titanio_gr5',    label: 'Titânio Gr.5 (4,43 g/cm³)' },
            { value: 'nylon_pa6',      label: 'Nylon PA6 (1,14 g/cm³)' },
            { value: 'polietileno',    label: 'Polietileno PEAD (0,96 g/cm³)' },
            { value: 'polipropileno',  label: 'Polipropileno (0,91 g/cm³)' },
            { value: 'abs',            label: 'ABS (1,05 g/cm³)' },
            { value: 'pvc',            label: 'PVC (1,40 g/cm³)' },
            { value: 'teflon_ptfe',    label: 'PTFE / Teflon (2,17 g/cm³)' },
            { value: 'poliacetal_pom', label: 'Poliacetal POM (1,41 g/cm³)' },
            { value: 'chumbo',         label: 'Chumbo (11,34 g/cm³)' },
            { value: 'zinco',          label: 'Zinco (7,13 g/cm³)' },
            { value: 'estanho',        label: 'Estanho (7,30 g/cm³)' },
            { value: 'magnesio',       label: 'Magnésio (1,74 g/cm³)' }
          ]},
          { name: 'dim_A',      label: 'Dimensão A (L, Øext, Lado, H, Øbase)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_B',      label: 'Dimensão B (W, Øint, B, Øtopo)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_C',      label: 'Dimensão C (H, t, espessura, tw)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_D',      label: 'Dimensão D (tf, comprimento extra)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_length', label: 'Comprimento L (mm)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'quantity',   label: 'Quantidade de peças', type: 'number', required: false, placeholder: '1', defaultValue: 1 }
        ]
      }
    }
  },

  motores: {
    id: 'motores', label: 'Motores e Redutores',
    icon: '⚡', color: 'indigo',
    description: 'Potência de eixo, seleção de motor IEC e relação de transmissão com regra de 3',
    types: {
      motor_power: {
        label: 'Potência Necessária do Motor',
        fields: [
          { name: 'power_unit', label: 'Unidade de potência', type: 'select', options: [
            { value: 'kW', label: 'kW (Quilowatt)' },
            { value: 'CV', label: 'CV (Cavalo-vapor)' },
            { value: 'HP', label: 'HP (Horse Power)' },
            { value: 'W',  label: 'W (Watt)' }
          ]},
          { name: 'force_unit', label: 'Unidade de força', type: 'select', options: [
            { value: 'N',   label: 'N (Newton)' },
            { value: 'kgf', label: 'kgf' },
            { value: 'lbf', label: 'lbf' }
          ]},
          { name: 'speed_unit', label: 'Unidade de velocidade', type: 'select', options: [
            { value: 'm_s',   label: 'm/s' },
            { value: 'm_min', label: 'm/min' },
            { value: 'km_h',  label: 'km/h' },
            { value: 'ft_s',  label: 'ft/s' }
          ]},
          { name: 'torque_unit', label: 'Unidade de torque', type: 'select', options: [
            { value: 'Nm',    label: 'N·m' },
            { value: 'kgfm',  label: 'kgf·m' },
            { value: 'kgfcm', label: 'kgf·cm' },
            { value: 'lbfft', label: 'lbf·ft' }
          ]},
          { name: 'force_value',        label: 'Força resistente',     type: 'number', required: false, placeholder: 'Ou torque+rpm' },
          { name: 'velocity_value',     label: 'Velocidade linear',    type: 'number', required: false, placeholder: 'Se usou força' },
          { name: 'torque_value',       label: 'Torque resistente',    type: 'number', required: false, placeholder: 'Ou força+vel.' },
          { name: 'rpm',               label: 'Rotação (RPM)',         type: 'number', required: false, placeholder: '1450' },
          { name: 'eff_transmission',  label: 'Eficiência transmissão', type: 'number', required: false, placeholder: '0.95', defaultValue: 0.95 },
          { name: 'service_factor',    label: 'Fator de serviço (Fs)',  type: 'number', required: false, placeholder: '1.25', defaultValue: 1.25 }
        ]
      },
      transmission_ratio: {
        label: 'Relação de Transmissão / Redutor',
        description: 'Preencha 2 dos 3 valores (entrada, saída, redução) – o terceiro será calculado automaticamente',
        fields: [
          { name: 'n_input_rpm',   label: 'Rotação de entrada (RPM)',  type: 'number', required: false,  placeholder: '1750' },
          { name: 'n_output_rpm',  label: 'Rotação de saída (RPM)',    type: 'number', required: false,  placeholder: '72' },
          { name: 'ratio',         label: 'Relação de redução (i)',    type: 'number', required: false,  placeholder: 'Ex: 24.3' },
          { name: 'torque_unit', label: 'Unidade de torque', type: 'select', options: [
            { value: 'Nm',    label: 'N·m' },
            { value: 'kgfm',  label: 'kgf·m' },
            { value: 'kgfcm', label: 'kgf·cm' },
            { value: 'lbfft', label: 'lbf·ft' }
          ]},
          { name: 'torque_input_value',label: 'Torque de entrada', type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'stages',        label: 'Nº de estágios (opcional)', type: 'number', required: false, placeholder: '2' },
          { name: 'reducer_type', label: 'Tipo de redutor', type: 'select', options: [
            { value: '',             label: 'Não especificar' },
            { value: 'helical',      label: 'Engrenagem helicoidal' },
            { value: 'worm',         label: 'Coroa e rosca sem-fim' },
            { value: 'planetary',    label: 'Planetário (epicicloidal)' },
            { value: 'bevel',        label: 'Engrenagem cônica' },
            { value: 'cycloidal',    label: 'Cicloidal' }
          ]}
        ]
      }
    }
  },

  molas: {
    id: 'molas', label: 'Molas e Elementos Elásticos',
    icon: '🌀', color: 'teal',
    description: 'Constante elástica de molas helicoidais e estimativa de vida à fadiga',
    types: {
      spring_constant: {
        label: 'Constante Elástica (k)',
        fields: [
          { name: 'length_unit', label: 'Unidade de comprimento', type: 'select', options: [
            { value: 'mm', label: 'mm' },
            { value: 'in', label: 'Polegadas (in)' }
          ]},
          { name: 'force_unit', label: 'Unidade de força', type: 'select', options: [
            { value: 'N',   label: 'N (Newton)' },
            { value: 'kgf', label: 'kgf' },
            { value: 'lbf', label: 'lbf' }
          ]},
          { name: 'wire_diameter',     label: 'Diâm. do fio (d)',      type: 'number', required: true, placeholder: '3' },
          { name: 'coil_diameter',     label: 'Diâm. médio da espira (D)', type: 'number', required: true, placeholder: '25' },
          { name: 'active_coils',      label: 'Nº de espiras ativas (Na)', type: 'number', required: true, placeholder: '8' },
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_mola_a228',      label: 'Aço mola ASTM A228 (Music Wire)' },
            { value: 'aco_mola_a229',      label: 'Aço mola ASTM A229 (Oil Tempered)' },
            { value: 'aco_mola_a231',      label: 'Aço mola ASTM A231 (Chrome-Vanadium)' },
            { value: 'aco_mola_a232',      label: 'Aço mola ASTM A232 (Chrome-Vanadium Valve)' },
            { value: 'aco_inox_302',       label: 'Aço inox 302 (ASTM A313)' },
            { value: 'aco_inox_304',       label: 'Aço inox 304' },
            { value: 'aco_inox_316',       label: 'Aço inox 316' },
            { value: 'aco_inox_17_7ph',    label: 'Aço inox 17-7 PH' },
            { value: 'bronze_fosforo',     label: 'Bronze fosforoso (CuSn8)' },
            { value: 'berilio_cobre',      label: 'Berílio-Cobre (CuBe2)' },
            { value: 'monel_400',          label: 'Monel 400' },
            { value: 'inconel_600',        label: 'Inconel 600' },
            { value: 'inconel_x750',       label: 'Inconel X-750' },
            { value: 'titanio_beta',       label: 'Titânio Beta C' },
            { value: 'aco_mola_sup9',      label: 'Aço SUP9 (mola de suspensão)' }
          ]},
          { name: 'free_length',       label: 'Comprimento livre',      type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'solid_length',      label: 'Comprimento sólido',     type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'spring_rate_target',label: 'k alvo – calcular Na', type: 'number', required: false, placeholder: 'Opcional' }
        ]
      },
      fatigue_life: {
        label: 'Vida à Fadiga',
        fields: [
          { name: 'length_unit', label: 'Unidade de comprimento', type: 'select', options: [
            { value: 'mm', label: 'mm' },
            { value: 'in', label: 'Polegadas (in)' }
          ]},
          { name: 'force_unit', label: 'Unidade de força', type: 'select', options: [
            { value: 'N',   label: 'N (Newton)' },
            { value: 'kgf', label: 'kgf' },
            { value: 'lbf', label: 'lbf' }
          ]},
          { name: 'wire_diameter',  label: 'Diâm. do fio (d)',   type: 'number', required: true, placeholder: '3' },
          { name: 'coil_diameter',  label: 'Diâm. médio da espira (D)', type: 'number', required: true, placeholder: '25' },
          { name: 'load_min',       label: 'Carga mínima',         type: 'number', required: true, placeholder: '50' },
          { name: 'load_max',       label: 'Carga máxima',         type: 'number', required: true, placeholder: '200' }
        ]
      }
    }
  },

  custos: {
    id: 'custos', label: 'Custos e Estimativa de Fabricação',
    icon: '💰', color: 'emerald',
    description: 'Estimativas de corte laser/plasma e tempo de usinagem (torno/fresa manual ou CNC)',
    types: {
      laser_cutting: {
        label: 'Corte Laser / Plasma',
        fields: [
          { name: 'perimeter_mode', label: 'Como informar o perímetro?', type: 'select', options: [
            { value: 'direct',      label: 'Informar perímetro diretamente (mm)' },
            { value: 'retangular',  label: 'Calcular – peça retangular (L×W)' },
            { value: 'circular',    label: 'Calcular – peça circular (Ø)' },
            { value: 'circular_furo', label: 'Calcular – circular com furo central (Øext + Øint)' },
            { value: 'triangular',  label: 'Calcular – triângulo (a×b×c)' }
          ]},
          { name: 'perimeter_mm',  label: 'Perímetro total de corte (mm)',   type: 'number', required: false,  placeholder: '2500' },
          { name: 'dim_length_mm', label: 'Comprimento L (mm) – se retangular', type: 'number', required: false, placeholder: '200' },
          { name: 'dim_width_mm',  label: 'Largura W (mm) – se retangular', type: 'number', required: false, placeholder: '100' },
          { name: 'dim_diameter_mm', label: 'Diâmetro externo (mm) – se circular', type: 'number', required: false, placeholder: '150' },
          { name: 'dim_inner_diameter_mm', label: 'Diâmetro do furo (mm) – se tiver furo', type: 'number', required: false, placeholder: '50' },
          { name: 'dim_side_a', label: 'Lado a (mm) – se triângulo', type: 'number', required: false, placeholder: '' },
          { name: 'dim_side_b', label: 'Lado b (mm) – se triângulo', type: 'number', required: false, placeholder: '' },
          { name: 'dim_side_c', label: 'Lado c (mm) – se triângulo', type: 'number', required: false, placeholder: '' },
          { name: 'thickness_mm',  label: 'Espessura da chapa (mm)',         type: 'number', required: true,  placeholder: '6' },
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_carbono',   label: 'Aço carbono' },
            { value: 'aco_inox',      label: 'Aço inoxidável' },
            { value: 'aluminio',      label: 'Alumínio' },
            { value: 'cobre',         label: 'Cobre' },
            { value: 'latao',         label: 'Latão' },
            { value: 'galvanizado',   label: 'Aço galvanizado' },
            { value: 'hardox',        label: 'Hardox® / AR' },
            { value: 'aco_inox_316',  label: 'Inox 316' }
          ]},
          { name: 'qty',           label: 'Quantidade de peças',            type: 'number', required: false, placeholder: '1',  defaultValue: 1 },
          { name: 'setup_fee_brl', label: 'Taxa de setup (R$)',             type: 'number', required: false, placeholder: '80', defaultValue: 80 }
        ]
      },
      machining_time: {
        label: 'Tempo de Usinagem',
        fields: [
          { name: 'operation', label: 'Operação', type: 'select', options: [
            { value: 'turning',  label: 'Torneamento' },
            { value: 'milling',  label: 'Fresamento' },
            { value: 'drilling', label: 'Furação' }
          ]},
          { name: 'machine_type', label: 'Tipo de máquina', type: 'select', options: [
            { value: 'cnc',    label: 'CNC' },
            { value: 'manual', label: 'Manual / Convencional' }
          ]},
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_mole',      label: 'Aço mole (1020)' },
            { value: 'aco_medio',     label: 'Aço médio (1045)' },
            { value: 'aco_duro',      label: 'Aço duro (4140)' },
            { value: 'aco_inox',      label: 'Aço inoxidável' },
            { value: 'aluminio',      label: 'Alumínio' },
            { value: 'ferro_fundido', label: 'Ferro fundido' },
            { value: 'cobre',         label: 'Cobre / Latão' },
            { value: 'bronze',        label: 'Bronze' },
            { value: 'titanio',       label: 'Titânio' },
            { value: 'plastico',      label: 'Plástico (Nylon, POM)' }
          ]},
          { name: 'diameter_mm',           label: 'Diâm. (torno) ou diâm. fresa (mm)', type: 'number', required: false, placeholder: '50' },
          { name: 'length_mm',             label: 'Comprimento do corte (mm)',         type: 'number', required: false, placeholder: '200' },
          { name: 'volume_to_remove_cm3',  label: 'Vol. a remover (cm³) – genérico',  type: 'number', required: false, placeholder: '50' },
          { name: 'hourly_rate_brl',       label: 'Taxa horária (R$/h)',               type: 'number', required: false, placeholder: '180', defaultValue: 180 }
        ]
      }
    }
  },

  ergonomia: {
    id: 'ergonomia', label: 'Ergonomia e Segurança (NR-12)',
    icon: '🦺', color: 'amber',
    description: 'Distâncias de segurança NR-12/ISO 13857 e dimensões ergonômicas de bancadas',
    types: {
      safety_distance: {
        label: 'Distância de Segurança (NR-12)',
        fields: [
          { name: 'opening_mm', label: 'Abertura da grade/malha (mm) – deixe vazio para tabela completa', type: 'number', required: false, placeholder: 'Ex: 25' },
          { name: 'body_part', label: 'Parte do corpo (alternativo)', type: 'select', options: [
            { value: '',           label: 'Não especificar' },
            { value: 'finger',     label: 'Dedos' },
            { value: 'hand',       label: 'Mão' },
            { value: 'forearm',    label: 'Antebraço' },
            { value: 'arm',        label: 'Braço' },
            { value: 'full_body',  label: 'Corpo inteiro' }
          ]}
        ]
      },
      workstation: {
        label: 'Dimensões de Posto de Trabalho',
        fields: [
          { name: 'station_type', label: 'Tipo de posto', type: 'select', options: [
            { value: 'standing_bench',    label: 'Bancada em pé' },
            { value: 'seated_bench',      label: 'Bancada sentado' },
            { value: 'buttons_controls',  label: 'Botoeiras e controles' }
          ]}
        ]
      }
    }
  },

  vedacao: {
    id: 'vedacao', label: 'Vedação e Lubrificação',
    icon: '🛢️', color: 'stone',
    description: 'Seleção de O-rings com código de compra, por fluido/temperatura e relubrificação',
    types: {
      oring_selection: {
        label: 'Seleção de O-ring',
        fields: [
          { name: 'id_mm',             label: 'Diâm. interno do O-ring (mm)', type: 'number', required: true,  placeholder: '30' },
          { name: 'cross_section_mm',  label: 'Seção transversal (mm)',       type: 'number', required: false, placeholder: '3.53' },
          { name: 'fluid', label: 'Fluido em contato', type: 'select', options: [
            { value: '',                label: 'Selecione o fluido' },
            { value: 'oleo_mineral',    label: 'Óleo mineral (hidráulico, lubrificante)' },
            { value: 'oleo_sintetico',  label: 'Óleo sintético' },
            { value: 'agua',            label: 'Água' },
            { value: 'vapor',           label: 'Vapor d\'água' },
            { value: 'ar_comprimido',   label: 'Ar comprimido' },
            { value: 'gasolina',        label: 'Gasolina' },
            { value: 'diesel',          label: 'Diesel' },
            { value: 'etanol',          label: 'Etanol / Álcool' },
            { value: 'glicol',          label: 'Etilenoglicol (arrefecimento)' },
            { value: 'amonia',          label: 'Amônia' },
            { value: 'cloro',           label: 'Cloro / Água clorada' },
            { value: 'acido_sulfurico', label: 'Ácido sulfúrico' },
            { value: 'acido_cloridrico',label: 'Ácido clorídrico' },
            { value: 'soda_caustica',   label: 'Soda cáustica (NaOH)' },
            { value: 'oxigenio',        label: 'Oxigênio' },
            { value: 'nitrogenio',      label: 'Nitrogênio' },
            { value: 'glp',             label: 'GLP (gás liquefeito)' },
            { value: 'alimento',        label: 'Alimentos / Farmacêutico' },
            { value: 'freon',           label: 'Freon / Refrigerante R134a' }
          ]},
          { name: 'temperature_c',     label: 'Temperatura máx. (°C)',        type: 'number', required: false, placeholder: '80', defaultValue: 70 }
        ]
      },
      lubrication_interval: {
        label: 'Intervalo de Relubrificação',
        fields: [
          { name: 'speed_rpm',        label: 'Rotação (RPM)',        type: 'number', required: true,  placeholder: '1450' },
          { name: 'bearing_bore_mm',  label: 'Diâm. interno rolamento (mm)', type: 'number', required: true, placeholder: '40' },
          { name: 'load_condition', label: 'Condição de carga', type: 'select', options: [
            { value: 'light',  label: 'Leve (P < 0,05·C)' },
            { value: 'normal', label: 'Normal (P = 0,1·C)' },
            { value: 'heavy',  label: 'Pesada (P > 0,15·C)' },
            { value: 'shock',  label: 'Choque / vibração' }
          ]},
          { name: 'environment', label: 'Ambiente', type: 'select', options: [
            { value: 'clean',        label: 'Limpo' },
            { value: 'dusty',        label: 'Empoeirado' },
            { value: 'wet',          label: 'Úmido / molhado' },
            { value: 'contaminated', label: 'Contaminado' }
          ]},
          { name: 'temperature_c', label: 'Temperatura de operação (°C)', type: 'number', required: false, placeholder: '70', defaultValue: 70 }
        ]
      }
    }
  },

  soldagem: {
    id: 'soldagem', label: 'Soldagem e Simbologia',
    icon: '🔥', color: 'rose',
    description: 'Seleção de eletrodos/arames por combinação de materiais e dicionário de símbolos',
    types: {
      electrode_selection: {
        label: 'Seleção de Eletrodo / Arame',
        fields: [
          { name: 'material_a', label: 'Metal base A',          type: 'text', required: true,  placeholder: 'Ex: aco carbono' },
          { name: 'material_b', label: 'Metal base B (igual ou diferente)', type: 'text', required: false, placeholder: 'Ex: aco inox 304' }
        ]
      },
      symbol_guide: {
        label: 'Guia de Símbolos de Soldagem',
        fields: [
          { name: 'symbol', label: 'Símbolo ou nome (deixe vazio para tabela completa)', type: 'text', required: false, placeholder: 'fillet, groove, spot...' }
        ]
      }
    }
  },

  conversores: {
    id: 'conversores', label: 'Conversor de Unidades Técnicas',
    icon: '🔄', color: 'violet',
    description: 'Pressão, torque, potência, comprimento, força, polegadas fracionárias e temperatura',
    types: {
      convert: {
        label: 'Converter Unidades',
        fields: [
          { name: 'value',    label: 'Valor',           type: 'number', required: true,  placeholder: '100' },
          { name: 'from_unit',label: 'De',              type: 'text',   required: true,  placeholder: 'bar, psi, N·m, kW...' },
          { name: 'to_unit',  label: 'Para',            type: 'text',   required: true,  placeholder: 'MPa, kgf/cm2, CV...' },
          { name: 'quantity', label: 'Grandeza (opcional)', type: 'select', options: [
            { value: '',         label: 'Detectar automaticamente' },
            { value: 'pressure', label: 'Pressão' },
            { value: 'torque',   label: 'Torque' },
            { value: 'power',    label: 'Potência' },
            { value: 'length',   label: 'Comprimento' },
            { value: 'force',    label: 'Força' },
            { value: 'energy',   label: 'Energia' },
            { value: 'mass',     label: 'Massa' }
          ]}
        ]
      },
      temperature: {
        label: 'Conversão de Temperatura',
        fields: [
          { name: 'value',     label: 'Temperatura',    type: 'number', required: true,  placeholder: '200' },
          { name: 'from_unit', label: 'De',             type: 'select', options: [{ value:'C',label:'°C (Celsius)'},{ value:'F',label:'°F (Fahrenheit)'},{ value:'K',label:'K (Kelvin)'}] },
          { name: 'to_unit',   label: 'Para',           type: 'select', options: [{ value:'F',label:'°F (Fahrenheit)'},{ value:'C',label:'°C (Celsius)'},{ value:'K',label:'K (Kelvin)'}] }
        ]
      },
      inch_fraction: {
        label: 'Polegadas Fracionárias → mm',
        fields: [
          { name: 'search_mm',        label: 'Buscar por mm (aproximado)',          type: 'number', required: false, placeholder: '12.7' },
          { name: 'search_fraction',  label: 'Buscar por fração (ex: 1/2, 3/8)',   type: 'text',   required: false, placeholder: '1/2' }
        ]
      }
    }
  },

  gestao: {
    id: 'gestao', label: 'Gestão de Arquivos e Revisões',
    icon: '📋', color: 'slate',
    description: 'Checklist de verificação pré-produção e controle de revisões de desenhos',
    types: {
      production_checklist: {
        label: 'Checklist Pré-Produção',
        fields: [
          { name: 'show_critical_only', label: 'Mostrar apenas itens críticos', type: 'select', options: [
            { value: false, label: 'Todos os itens' },
            { value: true,  label: 'Somente críticos' }
          ]},
          { name: 'category_filter', label: 'Filtrar categoria', type: 'select', options: [
            { value: '', label: 'Todas as categorias' },
            { value: 'Desenho Técnico',       label: 'Desenho Técnico' },
            { value: 'Material e Tratamento', label: 'Material e Tratamento' },
            { value: 'Lista de Materiais',    label: 'Lista de Materiais (BOM)' },
            { value: 'Interferências',        label: 'Interferências e Montagem' },
            { value: 'Normas e Segurança',    label: 'Normas e Segurança' },
            { value: 'Documentação',          label: 'Documentação' }
          ]}
        ]
      },
      revision_history: {
        label: 'Histórico de Revisões',
        fields: [
          { name: 'part_number', label: 'Número da peça / documento', type: 'text',   required: true,  placeholder: 'DWG-001-A' },
          { name: 'part_name',   label: 'Nome da peça',               type: 'text',   required: false, placeholder: 'Eixo principal' }
        ]
      }
    }
  }
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export const COLOR_MAP = {
  blue:    { bg: 'bg-blue-600',    hover: 'hover:bg-blue-700',    text: 'text-blue-400',   border: 'border-blue-500'   },
  orange:  { bg: 'bg-orange-600',  hover: 'hover:bg-orange-700',  text: 'text-orange-400', border: 'border-orange-500' },
  green:   { bg: 'bg-green-600',   hover: 'hover:bg-green-700',   text: 'text-green-400',  border: 'border-green-500'  },
  yellow:  { bg: 'bg-yellow-600',  hover: 'hover:bg-yellow-700',  text: 'text-yellow-400', border: 'border-yellow-500' },
  purple:  { bg: 'bg-purple-600',  hover: 'hover:bg-purple-700',  text: 'text-purple-400', border: 'border-purple-500' },
  cyan:    { bg: 'bg-cyan-600',    hover: 'hover:bg-cyan-700',    text: 'text-cyan-400',   border: 'border-cyan-500'   },
  red:     { bg: 'bg-red-600',     hover: 'hover:bg-red-700',     text: 'text-red-400',    border: 'border-red-500'    },
  indigo:  { bg: 'bg-indigo-600',  hover: 'hover:bg-indigo-700',  text: 'text-indigo-400', border: 'border-indigo-500' },
  teal:    { bg: 'bg-teal-600',    hover: 'hover:bg-teal-700',    text: 'text-teal-400',   border: 'border-teal-500'   },
  emerald: { bg: 'bg-emerald-600', hover: 'hover:bg-emerald-700', text: 'text-emerald-400',border: 'border-emerald-500'},
  amber:   { bg: 'bg-amber-600',   hover: 'hover:bg-amber-700',   text: 'text-amber-400',  border: 'border-amber-500'  },
  stone:   { bg: 'bg-stone-600',   hover: 'hover:bg-stone-700',   text: 'text-stone-400',  border: 'border-stone-500'  },
  rose:    { bg: 'bg-rose-600',    hover: 'hover:bg-rose-700',    text: 'text-rose-400',   border: 'border-rose-500'   },
  violet:  { bg: 'bg-violet-600',  hover: 'hover:bg-violet-700',  text: 'text-violet-400', border: 'border-violet-500' },
  slate:   { bg: 'bg-slate-600',   hover: 'hover:bg-slate-700',   text: 'text-slate-400',  border: 'border-slate-500'  }
};
