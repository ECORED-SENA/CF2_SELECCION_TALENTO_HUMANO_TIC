<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff") 3
      h1 Uso de sistemas de información y de relacionamiento con los clientes
    .row.mb-4.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure.d-none.d-lg-block.mb-3
          img(src='@/assets/curso/tema1/img6.svg', style="width: 70px")
        p.mb-0 La globalización de la economía ha impulsado con gran fuerza el uso del #[i e-commerce] (comercio electrónico), desde 2018 Colombia ha mostrado cifras representativas de crecimiento de ventas on-line; según el periódico de La República, en su edición del 12 de diciembre de 2021, “Para 2020, el comercio electrónico creció 53% en Colombia y se espera que hacia 2025 incremente 74%, representando 18% del crecimiento total de las ventas en retail del país”.
      .col-lg-7
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img1.svg', style="width: 250px").m-auto
          .col-lg-7
            p Lo anterior obliga a los empresarios y negociadores a subirse al bus del uso de las TIC para publicitar, promover, atender con suma rapidez y diligencia a los clientes, realizar transacciones, hacer seguimiento de las operaciones comerciales, resolver las posibles contingencias y medir la satisfacción de los clientes a través de sistemas de información y relacionamiento con los clientes.
    .row.bg-color10
      .col-12.p-5
        .row.align-items-center(data-aos="fade-up-left")
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img1.png', style="width: 600px")
          .col-lg-6
            .bg-color11
              p.mb-0 Para esto el país cuenta con la Política Nacional para la Transformación digital e Inteligencia Artificial en el documento CONPES 3975 del 8 de noviembre de 2019. Esta política está cambiando radicalmente la sociedad y es uno de los principales motores de la 4 Revolución Industrial (en adelante 4RI), lo que conlleva a asumir grandes retos por las consabidas pérdidas de movilidad y oportunidad del país, para generar valor económico y social, a través del uso de las Tecnologías de la Información y las Comunicaciones TIC (CONPES 3975, 2019,11,8).
        #t_3_1.pt-5
        .titulo-segundo.color-acento-contenido
          h2 3.1  CRM (#[i Customer Relationship Management])
        p.mb-4 El CRM trata la gestión de las relaciones con el cliente, entendiéndose que cliente no solo es el que compra una y otra vez, sino toda persona, grupo o entidad con quien la empresa intercambia valor.
        .row.mb-5
          .col-auto
            figure.d-none.d-lg-block.mb-3
              img(src='@/assets/curso/tema1/img6.svg', style="width: 70px")
          .col
            p.mb-0 El CRM es un conjunto de estrategias de negocio que integra acciones de marketing soportadas en diversos canales de comunicación, ideadas con el fin de construir relaciones duraderas con los clientes, centradas en conocer, comprender y satisfacer sus necesidades para lograr la conquista, afiliación, retención y fidelización de los clientes. Dentro de los propósitos del CRM encontramos los siguientes:
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Figura 3]. Propósitos del CRM
            figure.mb-5(data-aos="fade-up-right")
              img(src='@/assets/curso/tema3/img2.svg', style="width: 800px").m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/G5SZHCsYEcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .separador
    #t_3_2.pt-5
    .titulo-segundo.color-acento-contenido
      h2 3.2  ERP (#[i Enterprise Resource Planning])
    .row.align-items-start.mb-5
      .col-auto.d-none.d-lg-block
        figure.mt-2
          img(src='@/assets/curso/tema3/img3.svg', style="width: 70px")
      .col
        p.mb-0 Los sistemas de planeación de recursos empresariales integran la información de las áreas de una empresa, es decir, se comparte información de todas y cada una de las áreas o procesos a partir de un único sistema informático, lo cual facilita la interacción entre los colaboradores, agiliza las comunicaciones, facilita la operatividad y se convierte en herramienta fundamental para la toma de decisiones de los directivos. A continuación, se pueden observar las áreas de integración.
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 4].  Áreas de integración del ERP
        figure.mb-5(data-aos="fade-up-right")
          img(src='@/assets/curso/tema3/img4.svg', style="width: 800px").m-auto
    .separador
    #t_3_3.pt-5
    .titulo-segundo.color-acento-contenido
      h2 3.3  SAP (#[i Systems, Applications, Products])
    .row.align-items-center.mb-4.mb-lg-0
      .col-lg-7
        p Son los sistemas, aplicaciones y productos en procesamiento de datos, es la empresa líder en software ERP, proviene de una multinacional alemana creada desde 1972 por antiguos empleados de IBM (iebschool, 2020).
        p Tres características fundamentales de SAP son:
        ul.lista-ul
          li 
            i.far.fa-dot-circle(style="color:#7F4FC7")
            |
            p.mb-2 Sistema a la medida de las necesidades de la empresa, puede ser pequeño o robusto según las necesidades, extensión de sedes y procesos de la empresa.
          li 
            i.far.fa-dot-circle(style="color:#7F4FC7")
            |
            p.mb-2 Sistema enlatado, engloba los sistemas dentro de empresas que fabrican software, no están destinados a un cliente en particular, sino a un mercado más amplio; se comercializa a través de licencias de software.
          li 
            i.far.fa-dot-circle(style="color:#7F4FC7")
            |
            p Sistema de código abierto: es decir, puede ser modificable según las necesidades del cliente.
      .col-lg-5
        figure(data-aos="fade-up-left")
          img(src='@/assets/curso/tema3/img2.png', style="width: 600px")
    p.mb-5 La configuración de los SAP se hace atendiendo las características de la empresa o negocio, sin embargo, los módulos que más comúnmente se utilizan son los siguientes:
    .row.justify-content-center.mb-5
      .col-9.col-md-4.col-lg-3
        .p-2
          figure
            img(src='@/assets/curso/tema3/img5.svg', style="width: 300px")
      .col-9.col-md-4.col-lg-3
        .p-2
          figure
            img(src='@/assets/curso/tema3/img6.svg', style="width: 300px")
      .col-9.col-md-4.col-lg-3
        .p-2
          figure
            img(src='@/assets/curso/tema3/img7.svg', style="width: 300px")
      .col-9.col-md-4.col-lg-3
        .p-2
          figure
            img(src='@/assets/curso/tema3/img8.svg', style="width: 300px")
      .col-9.col-md-4.col-lg-3
        .p-2
          figure
            img(src='@/assets/curso/tema3/img9.svg', style="width: 300px")
    .separador
    #t_3_4.pt-5
    .titulo-segundo.color-acento-contenido
      h2 3.4 Otros sistemas y medios electrónicos
    p.mb-4 Día a día siguen apareciendo más aplicaciones y canales ágiles de comunicación con los clientes, entre ellos tenemos:
    .row
      .col-lg-5
        figure(data-aos="fade-up-right")
          img(src='@/assets/curso/tema3/img3.png', style="width: 600px")
      .col-lg-7
        LineaTiempoD.color-secundario.mb-4
          p.text-small(numero="1" titulo="WhatsApp Business") Aplicación a la cual se puede acceder gratuitamente, útil para atender las ¡necesidades de todo tipo de empresas, pero ¡cuidado! A la manera como te comunicas por ella, es necesario un lenguaje cordial y respetuoso, evita emoticones y expresiones fuera de tiempo. Esta aplicación facilita y agiliza la comunicación con los clientes, permite mostrar los productos y servicios a partir de un catálogo, crear etiquetas es decir englobar en diferentes grupos a los clientes, usuarios, proveedores u otras; crear listas de difusión (para comunicar lo mismo a muchos usuarios a la vez), también permite vincular a enlaces para comprar el producto, para calificar la experiencia de compra y para responder a preguntas frecuentes.
          p.text-small(numero="2" titulo="Factura electrónica") Precisamente a partir del CONPES de la transformación digital, la Dirección de Impuestos y Aduanas Nacional (DIAN) evolucionó la factura tradicional en papel, a la factura electrónica que tiene los mismos efectos legales, validez y ventajas como conservar la información de manera ágil y segura, facilitar la ubicación y consultar la información en tiempo real, además de las ventajas tributarias.
          p.text-small(numero="3" titulo="Chatbots") Se refiere a un #[i software] que mantiene en tiempo real una conversación con el cliente o usuario, puede funcionar en el portal web, o en plataformas como Facebook o Messenger. La mayor ventaja es que se puede mantener la conversación automática 24/7 (las 24 horas de los 7 días de la semana) y aunque se asemeja al formulario es mucho más amigable que eso, porque da respuesta inmediata y hace que la experiencia sea mucho más agradable.
        .row
          .col-12
            
              .row.align-items-center
                .col-10.bg-color12
                  .p-2
                    p.mb-0.me-3 #[b Nota]: cabe aclarar que cada organización dependiendo su actividad en el mercado y su deseo de mejorar la calidad de relacionamiento con los clientes le hará adoptar los medios y sistemas mencionados o como también crear o mirar más alternativas.
                .col-2
                  figure.img-position2
                    img(src='@/assets/curso/tema3/img10.svg', style="width: 200px")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
