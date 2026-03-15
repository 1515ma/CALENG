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
          { name: 'load_kgf',          label: 'Carga total (kgf)',            type: 'number', required: true,  placeholder: '500' },
          { name: 'span_mm',           label: 'Vão livre (mm)',               type: 'number', required: true,  placeholder: '1000' },
          { name: 'width_mm',          label: 'Largura da chapa (mm)',        type: 'number', required: false, placeholder: 'Padrão = vão' },
          { name: 'yield_strength_mpa',label: 'Tensão de escoamento (MPa)',   type: 'number', required: false, placeholder: '250 (aço 1020)', defaultValue: 250 },
          { name: 'safety_factor',     label: 'Fator de segurança',          type: 'number', required: false, placeholder: '2.0',           defaultValue: 2.0 }
        ]
      },
      beam_deflection: {
        label: 'Deflexão de Viga',
        fields: [
          { name: 'load_n',    label: 'Carga central (N)',         type: 'number', required: true,  placeholder: '5000' },
          { name: 'span_mm',   label: 'Vão (mm)',                  type: 'number', required: true,  placeholder: '2000' },
          { name: 'base_mm',   label: 'Base da seção (mm)',        type: 'number', required: true,  placeholder: '50' },
          { name: 'height_mm', label: 'Altura da seção (mm)',      type: 'number', required: true,  placeholder: '100' },
          { name: 'e_gpa',     label: 'Módulo de elasticidade E (GPa)', type: 'number', required: false, placeholder: '205 (aço)', defaultValue: 205 },
          { name: 'profile_type', label: 'Tipo de seção', type: 'select', options: [
            { value: 'retangular', label: 'Retangular / Quadrada' },
            { value: 'circular',   label: 'Circular sólida' }
          ]}
        ]
      },
      shaft_torque: {
        label: 'Torque e Verificação de Eixo',
        fields: [
          { name: 'diameter_mm', label: 'Diâmetro do eixo (mm)', type: 'number', required: true,  placeholder: '40' },
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
    description: 'Broca pré-rosca (métrica, UNC, NPT) e torque de aperto por classe',
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
          { name: 'bolt_class',  label: 'Classe do parafuso', type: 'select', options: [
            { value: '8.8',  label: 'Classe 8.8 (uso geral)' },
            { value: '10.9', label: 'Classe 10.9 (alta resistência)' },
            { value: '12.9', label: 'Classe 12.9 (ultra resistência)' }
          ]},
          { name: 'friction', label: 'Condição', type: 'select', options: [
            { value: 'lubricated', label: 'Lubrificado (µ ≈ 0,12)' },
            { value: 'dry',        label: 'Seco (µ ≈ 0,20)' }
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
    description: 'Equivalência SAE/ABNT/DIN, tratamentos térmicos e compatibilidade galvânica',
    types: {
      steel_equivalence: {
        label: 'Equivalência de Aços',
        fields: [
          { name: 'grade',    label: 'Grau do aço (ex: 1045, 4140, 304)', type: 'text', required: true, placeholder: '4140' },
          { name: 'standard', label: 'Norma de referência', type: 'select', options: [
            { value: 'sae',  label: 'SAE/AISI (padrão)' },
            { value: 'abnt', label: 'ABNT' },
            { value: 'din',  label: 'DIN' }
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
            { value: 'induction',    label: 'Têmpera por indução' }
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
            { value: 'Zinco × Aço (galvanizado)',  label: 'Zinco × Aço (galvanizado)' }
          ]}
        ]
      }
    }
  },

  componentes: {
    id: 'componentes', label: 'Componentes e Transmissão',
    icon: '⚙️', color: 'purple',
    description: 'Identificação de rolamentos, comprimento de correias em V e sincronizadas',
    types: {
      bearing_code: {
        label: 'Código de Rolamento',
        fields: [
          { name: 'bore_mm',       label: 'Diâm. interno (mm)',    type: 'number', required: true,  placeholder: '25' },
          { name: 'outer_mm',      label: 'Diâm. externo (mm)',    type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'bearing_type',  label: 'Tipo de rolamento', type: 'select', options: [
            { value: 'deep_groove',      label: 'Esfera radial (série 6)' },
            { value: 'angular_contact',  label: 'Contato angular (série 7)' },
            { value: 'self_aligning',    label: 'Autocompensador esferas' },
            { value: 'cylindrical',      label: 'Rolo cilíndrico (NJ)' },
            { value: 'tapered',          label: 'Rolo cônico (30xxx)' }
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
    description: 'Força de cilindros, dimensionamento de tubulações e perda de carga',
    types: {
      cylinder_force: {
        label: 'Força de Cilindro',
        fields: [
          { name: 'bore_mm',       label: 'Diâm. do êmbolo (mm)',   type: 'number', required: true,  placeholder: '100' },
          { name: 'rod_mm',        label: 'Diâm. da haste (mm)',    type: 'number', required: false, placeholder: '50' },
          { name: 'pressure_bar',  label: 'Pressão de trabalho (bar)', type: 'number', required: true, placeholder: '150' },
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
          { name: 'flow_lpm',           label: 'Vazão (l/min)',           type: 'number', required: true,  placeholder: '40' },
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
    description: 'Raio mínimo de dobra para chapas e calculadora de peso de peças',
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
          { name: 'bend_angle_deg', label: 'Ângulo de dobra (°)', type: 'number', required: false, placeholder: '90', defaultValue: 90 }
        ]
      },
      weight_calc: {
        label: 'Calculadora de Peso',
        fields: [
          { name: 'shape', label: 'Forma da peça', type: 'select', options: [
            { value: 'retangular',      label: 'Bloco retangular (L×W×H)' },
            { value: 'chapa',           label: 'Chapa (L×W×espessura)' },
            { value: 'cilindro_solido', label: 'Cilindro sólido (Ø×L)' },
            { value: 'tubo',            label: 'Tubo (Øext×Øint×L)' },
            { value: 'perfil_l',        label: 'Perfil L/cantoneira (A×B×t×L)' }
          ]},
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_carbono',   label: 'Aço carbono (7,85 g/cm³)' },
            { value: 'aco_inox_304',  label: 'Inox 304 (7,93 g/cm³)' },
            { value: 'aluminio_6061', label: 'Alumínio 6061 (2,70 g/cm³)' },
            { value: 'cobre',         label: 'Cobre (8,96 g/cm³)' },
            { value: 'ferro_fundido', label: 'Ferro fundido (7,20 g/cm³)' },
            { value: 'titanio_gr5',   label: 'Titânio Gr.5 (4,43 g/cm³)' }
          ]},
          { name: 'dim_L',     label: 'Dimensão L ou Ø ext (mm)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_W',     label: 'Dimensão W ou Ø int (mm)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_H_t',   label: 'Dimensão H, t ou espessura (mm)', type: 'number', required: false, placeholder: 'mm' },
          { name: 'dim_length',label: 'Comprimento L (mm)', type: 'number', required: false, placeholder: 'mm' }
        ]
      }
    }
  },

  motores: {
    id: 'motores', label: 'Motores e Redutores',
    icon: '⚡', color: 'indigo',
    description: 'Potência de eixo, seleção de motor IEC e relação de transmissão',
    types: {
      motor_power: {
        label: 'Potência Necessária do Motor',
        fields: [
          { name: 'force_n',           label: 'Força resistente (N)',     type: 'number', required: false, placeholder: 'Ou torque+rpm' },
          { name: 'velocity_ms',       label: 'Velocidade linear (m/s)',  type: 'number', required: false, placeholder: 'Se usou força' },
          { name: 'torque_nm',         label: 'Torque resistente (N·m)',  type: 'number', required: false, placeholder: 'Ou força+vel.' },
          { name: 'rpm',               label: 'Rotação (RPM)',            type: 'number', required: false, placeholder: '1450' },
          { name: 'eff_transmission',  label: 'Eficiência transmissão',   type: 'number', required: false, placeholder: '0.95', defaultValue: 0.95 },
          { name: 'service_factor',    label: 'Fator de serviço (Fs)',    type: 'number', required: false, placeholder: '1.25', defaultValue: 1.25 }
        ]
      },
      transmission_ratio: {
        label: 'Relação de Transmissão',
        fields: [
          { name: 'n_input_rpm',   label: 'Rotação de entrada (RPM)',  type: 'number', required: true,  placeholder: '1450' },
          { name: 'n_output_rpm',  label: 'Rotação de saída (RPM)',    type: 'number', required: true,  placeholder: '72' },
          { name: 'torque_input_nm',label: 'Torque de entrada (N·m)', type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'stages',        label: 'Nº de estágios (opcional)', type: 'number', required: false, placeholder: '2' }
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
          { name: 'wire_diameter_mm',    label: 'Diâm. do fio (d) – mm',   type: 'number', required: true, placeholder: '3' },
          { name: 'coil_diameter_mm',    label: 'Diâm. médio da espira (D) – mm', type: 'number', required: true, placeholder: '25' },
          { name: 'active_coils',        label: 'Nº de espiras ativas (Na)', type: 'number', required: true, placeholder: '8' },
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_mola',           label: 'Aço mola ASTM A228' },
            { value: 'aco_inox',           label: 'Aço inox 302/304' },
            { value: 'bronze_fosforo',     label: 'Bronze fosforoso' }
          ]},
          { name: 'free_length_mm',      label: 'Comprimento livre (mm)',    type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'solid_length_mm',     label: 'Comprimento sólido (mm)',   type: 'number', required: false, placeholder: 'Opcional' },
          { name: 'spring_rate_target_n_mm', label: 'k alvo (N/mm) – calcular Na', type: 'number', required: false, placeholder: 'Opcional' }
        ]
      },
      fatigue_life: {
        label: 'Vida à Fadiga',
        fields: [
          { name: 'wire_diameter_mm', label: 'Diâm. do fio (d) – mm',   type: 'number', required: true, placeholder: '3' },
          { name: 'coil_diameter_mm', label: 'Diâm. médio da espira (D) – mm', type: 'number', required: true, placeholder: '25' },
          { name: 'load_min_n',       label: 'Carga mínima (N)',         type: 'number', required: true, placeholder: '50' },
          { name: 'load_max_n',       label: 'Carga máxima (N)',         type: 'number', required: true, placeholder: '200' }
        ]
      }
    }
  },

  custos: {
    id: 'custos', label: 'Custos e Estimativa de Fabricação',
    icon: '💰', color: 'emerald',
    description: 'Estimativas de corte laser/plasma e tempo de usinagem (torno/fresa)',
    types: {
      laser_cutting: {
        label: 'Corte Laser / Plasma',
        fields: [
          { name: 'perimeter_mm',  label: 'Perímetro total de corte (mm)',   type: 'number', required: true,  placeholder: '2500' },
          { name: 'thickness_mm',  label: 'Espessura da chapa (mm)',         type: 'number', required: true,  placeholder: '6' },
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_carbono', label: 'Aço carbono' },
            { value: 'aco_inox',    label: 'Aço inoxidável' },
            { value: 'aluminio',    label: 'Alumínio' }
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
          { name: 'material', label: 'Material', type: 'select', options: [
            { value: 'aco_mole',      label: 'Aço mole (1020)' },
            { value: 'aco_medio',     label: 'Aço médio (1045)' },
            { value: 'aco_duro',      label: 'Aço duro (4140)' },
            { value: 'aco_inox',      label: 'Aço inoxidável' },
            { value: 'aluminio',      label: 'Alumínio' },
            { value: 'ferro_fundido', label: 'Ferro fundido' }
          ]},
          { name: 'diameter_mm',           label: 'Diâm. (torno) ou diâm. fresa (mm)', type: 'number', required: false, placeholder: '50' },
          { name: 'length_mm',             label: 'Comprimento do corte (mm)',         type: 'number', required: false, placeholder: '200' },
          { name: 'volume_to_remove_cm3',  label: 'Vol. a remover (cm³) – genérico',  type: 'number', required: false, placeholder: '50' },
          { name: 'hourly_rate_brl',       label: 'Taxa horária CNC (R$/h)',           type: 'number', required: false, placeholder: '180', defaultValue: 180 }
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
    description: 'Seleção de O-rings por fluido/temperatura e intervalos de relubrificação',
    types: {
      oring_selection: {
        label: 'Seleção de O-ring',
        fields: [
          { name: 'id_mm',             label: 'Diâm. interno do O-ring (mm)', type: 'number', required: true,  placeholder: '30' },
          { name: 'cross_section_mm',  label: 'Seção transversal (mm)',       type: 'number', required: false, placeholder: '3.53' },
          { name: 'fluid',             label: 'Fluido em contato',            type: 'text',   required: false, placeholder: 'oleo, agua, ar, acido...' },
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
