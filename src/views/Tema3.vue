<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
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
            figure
              img(src='@/assets/curso/tema3/img1.svg', style="width: 250px").m-auto
          .col-lg-7
            p Lo anterior obliga a los empresarios y negociadores a subirse al bus del uso de las TIC para publicitar, promover, atender con suma rapidez y diligencia a los clientes, realizar transacciones, hacer seguimiento de las operaciones comerciales, resolver las posibles contingencias y medir la satisfacción de los clientes a través de sistemas de información y relacionamiento con los clientes.
    .row.bg-color10
      .col-12.p-5
        .row.align-items-center
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img1.png', style="width: 600px")
          .col-lg-6.bg-color11
            .p-4
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
          .col-lg-10
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Figura 3]. Propósitos del CRM
            figure.mb-5
              img(src='@/assets/curso/tema3/img2.svg', style="width: 1100px").m-auto

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
