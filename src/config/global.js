export default {
  global: {
    componenteFormativo:
      'Uso de estrategias y herramientas para mejorar la atención de los clientes',
    descripcionCurso:
      'La atención y servicio al cliente es la principal ventaja competitiva que puede tener cualquier empresa, ya sea micro, pequeña, mediana o grande. Para tener éxito en su gestión es importante conocer los canales de comunicación, estrategias y herramientas que se utilizan frecuentemente en su implementación diaria, como también la administración de la información que brinda el cliente para la mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manejo de la comunicación e información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Comunicación oral',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comunicación gestual',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Comunicación escrita',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comunicación telefónica',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Comunicación telemática',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Barreras de la comunicación',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Flujo de la comunicación organizacional',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Manejo de la información organizacional',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Etiqueta y netiqueta',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Habilidades sociales y relacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Empatía',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Trabajo en equipo y colaborativo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Negociación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Solución de conflictos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Uso de sistemas de información y de relacionamiento con los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'CRM (<em>Customer Relationship Management</em>)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'ERP (<em>Enterprise Resource Planning</em>)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'SAP (<em>Systems, Applications, Products</em>)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Otros sistemas y medios electrónicos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Peticiones Quejas Reclamos Sugerencias y Felicitaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Normativa',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Formato',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Instructivo de manejo y seguimiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de evaluación y satisfacción de los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto, formas, métodos e instrumentos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Presentación de resultados',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Consolidación de propuesta de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Identificación de hallazgos positivos y negativos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo:
              'Aplicación de correctivos y mejoras al proceso de atención a clientes',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo:
              'Beneficios y garantías: económicas, sociales, ambientales, de sostenibilidad y competitividad',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Albrecht, K. (2003). <em>La Revolución del servicio</em>.',
      link: '',
    },
    {
      referencia:
        'Ariza Ramírez Francisco Javier y Ariza Ramírez, J. M. (2021). <em>Comunicación empresarial y atención al cliente</em>. MC Graw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Ariza Ramírez, F. J. (2016). <em>Comunicación y atención al cliente</em>. MC Graw-Hill Interamericana.',
    },
    {
      referencia:
        'Blanco García, C. (2013). <em>Comunicación y atención al cliente</em>. Macmillan Iberia, S.A.',
      link: '',
    },
    {
      referencia:
        'Borrego Polo, V. (2016). <em>Manual de entrenamiento de habilidades sociales</em>. Formación para el empleo. Editorial CEP, S.L.',
    },
    {
      referencia:
        'Carlzon, J. (1991). <em>El momento de la verdad</em>. Diaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Decker, B. (26 de 11 de 2021). <em>Linkedin</em>. Obtenido de. ',
      link: 'https://www.linkedin.com/in/bertdecker/',
    },
    {
      referencia:
        'Fischer, R. (2011). <em>El Desafío del Servicio</em>. HSU Hospitality & Service University.',
      link: '',
    },
    {
      referencia:
        'iebschool. (1 de 2020). <em>iebschool.com</em>. Obtenido de. ',
      link:
        'https://www.iebschool.com/blog/que-es-para-que-sirve-sap-management/',
    },
    {
      referencia:
        'Jiménez, A. (2013). <em>Competencias</em>. Madrid, España: Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Machado Mateos, A. y. (2020). <em>Comunicación oral y escrita en la empresa</em>. UF0521. Madrid: Tutor Formación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2004). <em>Guía N° 6. Estándares básicos de competencias ciudadanas</em>.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2009). <em>Clasificación Industrial Internacional Uniforme de todas las Actividades Económicas CIIU</em>. New York.',
      link: '',
    },
    {
      referencia:
        'Pymesycalidad2.0. (2014). <em>www.pymesycalidad20.com</em>. Obtenido de Pymes y calidad: ',
      link:
        'https://www.pymesycalidad20.com/4-contexto-de-la-orgaizacion-mapa-iso90012015.html',
    },
    {
      referencia:
        'Ramos, P. (2012). <em>Gestión por competencias</em>. Málaga, España: ICB Editores.',
      link: '',
    },
    {
      referencia:
        'Robbins, S. P. (2009). <em>Comportamiento Organizacional - Decimotercera Edición</em>. México D.F.: Pearson Educación.',
      link: '',
    },
    {
      referencia: 'SENA. (2021). <em>www.sena.edu.co</em>. Obtenido de. ',
      link: 'www.sena.edu.co',
    },
    {
      referencia:
        'Senge, P. M. (2010). <em>La Quinta Disciplina en la práctica. El Arte y la Práctica de la Organización Abierta al Aprendizaje</em>. Buenos Aires - Argentina: Editorial Granica S.A.',
      link: '',
    },
    {
      referencia:
        'Serna Gómez, H. (2006). <em>Servicio al cliente una nueva visión: clientes para siempre</em>. Panamericana.',
      link: '',
    },
    {
      referencia:
        'Universidad Tecnológica de la Costa Grande de Guerrero. (2013). <em>Las nueve habilidades para el desarrollo de la comunicación interpersonal basado en la obra "El Arte de la Comunicación" de Bert Decker</em>.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Antipatía',
      significado:
        'Sentimiento, generalmente instintivo, de repulsa o rechazo hacia una persona o hacia su actitud o comportamiento, que provoca encontrar desagradable su presencia.',
    },
    {
      termino: 'Asunto',
      significado: 'Tema de una exposición oral o escrita.',
    },
    {
      termino: 'Abreviatura',
      significado:
        'Procedimiento que se utiliza para representar palabras escribiendo solo una o varias de sus letras.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona que utiliza los servicios de un profesional o de una empresa, especialmente la que lo hace regularmente.',
    },
    {
      termino: 'Empatía',
      significado:
        'Participación afectiva de una persona en una realidad ajena a ella, generalmente en los sentimientos de otra persona.',
    },
    {
      termino: 'Empresa',
      significado:
        'Entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles o para la prestación de servicios.',
    },
    {
      termino: 'Folio',
      significado: 'Hoja de libro o impreso, en especial cuando está numerada.',
    },
    {
      termino: 'Gramática',
      significado:
        'Conjunto de normas y reglas para hablar y escribir correctamente una lengua.',
    },
    {
      termino: 'Organización',
      significado:
        'Grupo de personas y medios organizados con un fin determinado.',
    },
    {
      termino: 'Radicación',
      significado:
        'Acto de entregar documentos en una entidad pública o privada con un número o código de seguimiento.',
    },
    {
      termino: 'Semántica',
      significado:
        'Parte de la lingüística que estudia el significado de las expresiones lingüísticas.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Modo de combinarse y ordenarse las palabras y las expresiones dentro del discurso.',
    },
  ],
  complementario: [
    {
      texto: 'Fernández, Ana. (2021) <em>Comunicación y oratoria</em>.',
      tipo: 'Presentación',
      descarga: '/downloads/Anexo1.pptx',
    },
    {
      texto:
        'Universidad Tecnológica de la Costa Grande de Guerrero. (2013). Las nueve habilidades para el desarrollo de la comunicación interpersonal.',
      tipo: 'Taller',
      descarga: '/downloads/Anexo2.pdf',
    },
    {
      texto:
        'ICONTEC. (2009). <em>Guía Técnica Colombiana 185 de Documentación organizacional</em>.',
      tipo: 'Guía',
      descarga: '/downloads/Anexo3.pdf',
    },
    {
      texto:
        'Psicología-online. (septiembre 2020). <em>Test de habilidades sociales</em>.',
      tipo: 'Página web',
      link:
        'https://www.psicologia-online.com/test-de-habilidades-sociales-4375.html',
    },
    {
      texto:
        'Aprendiz de Mercadotecnia.(2020). <em>Qué es el neuromarketing, cómo funciona, un ejemplo de un restaurante</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wUIlPMxnCGM&t=1s',
    },
    {
      texto:
        'López Silva, M. (2020). <em>Negociación por el Método Harvard</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nYtMFQIJRZQ',
    },
    {
      texto:
        'Departamento Nacional de Planeación. (2019). Política Nacional para la Transformación Digital e Inteligencia Artivicial.',
      tipo: 'PDF',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3975.pdf',
    },
    {
      texto:
        'Webcyldigital (2014). <em>¿Qué es un ERP y qué utilidad tiene para tu negocio?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-E3Ej3OL--g&t=56s',
    },
    {
      texto: 'Academia SAP. (2020). <em>¿Qué es SAP?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gWzieIpwVvE',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana Mireya Fernández Rodríguez',
        cargo: 'Instructora',
        centro: 'Centro de Gestión Administrativa - Regional Distrito Capital',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto temático',
        centro: 'Sena Distrito Capital Grupo De Apoyo Administrativo - Cgi',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
