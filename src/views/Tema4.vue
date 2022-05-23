<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff") 4
      h1 Peticiones Quejas Reclamos Sugerencias y Felicitaciones
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-start
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img1.svg', style="width: 60px")
          .col
            p.mb-0 Las PQRSF son sin duda una herramienta de mejora, porque ayuda a la organización a retroalimentarse en la calidad y gestión del servicio que le está brindando al cliente, debido a que es un canal directo que tiene con el consumidor que expresa por medio de este mecanismo sus peticiones, quejas, reclamos, sugerencias y felicitaciones, según corresponda con su experiencia con el producto o servicio adquirido.
      .col-lg-5
        figure(data-aos="fade-up-left")
          img(src='@/assets/curso/tema4/img1.png', style="width: 450px").m-auto
    p.mb-5.txt-deco1.text-center Conozcamos cada una de ellas:
    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            P.txt-deco1.mb-3 Petición
            p.mb-0 Son todas aquellas que se presentan ante cualquier institución o empresa ya sea publica o privada de forma cordial por situaciones individuales o comunes, con el propósito de hacer una solicitud.
            p.mb-0 Ejemplo: la petición de un descuento en la matrícula de estudiantes, pago de liquidación laboral, vacaciones, mayor seguridad en las calles, entre otras.
          .col-lg-4
            figure.mt-4
              img(src='@/assets/curso/tema4/img2.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            P.txt-deco1.mb-3 Quejas
            p.mb-0 Son todas estas manifestaciones que presentan las personas ya sea de forma escrita o verbal ante las entidades publicas o privadas sobre inconformidades sobre la atención recibida de un empleado.
            p.mb-0 Ejemplo: un funcionario al vender un producto atiende de forma descortés a un cliente y el cliente remite su insatisfacción.
          .col-lg-4
            figure.mt-4
              img(src='@/assets/curso/tema4/img3.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            P.txt-deco1.mb-3 Reclamos
            p.mb-0 Son todas estas manifestaciones que presentan las personas ya sea de forma escrita o verbal ante las entidades públicas o privadas sobre inconformidades sobre el producto o servicio adquirido que no cumple con las características ofertadas.
            p.mb-0 Ejemplo: un cliente compra un alimento y sale con la fecha vencida, o un equipo de sonido con unas características que al usar no tiene y procede hacer el respectivo reclamo a la entidad donde lo compro.
          .col-lg-4
            figure.mt-4
              img(src='@/assets/curso/tema4/img4.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            P.txt-deco1.mb-3 Sugerencia
            p.mb-0 Son todas estas manifestaciones que presentan las personas ya sea de forma escrita o verbal ante las entidades públicas o privadas para mejoras sobre la atención, producto o servicio que pueden hacer y no tienen.
            p.mb-0 Ejemplo: un cliente de una institución capacitadora tiene la necesidad de recibir un curso que no oferta la entidad y hace la sugerencia de crearlo.
          .col-lg-4
            figure.mt-4
              img(src='@/assets/curso/tema4/img5.png', style="width: 650px").m-auto
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Normativa
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-up-right")
          img(src='@/assets/curso/tema4/img6.png', style="width: 650px").m-auto
      .col-lg-7.mb-4.mb-lg-0
        p Cabe resaltar que las peticiones, quejas, reclamos, sugerencias, están reguladas por la ley tal y como podríamos ver desde la Constitución Política de 1991, en donde se evidencian las peticiones en su artículo 23 citando lo siguiente: “Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución. El legislador podrá reglamentar su ejercicio ante organizaciones privadas para garantizar los derechos fundamentales”.
        p.mb-4 Así mismo, todas las entidades tanto privadas o públicas deben responder a las solicitudes de sus colaboradores, clientes y partes interesadas como lo podemos encontrar en el siguiente documento, el cual brinda un resumen de la normatividad que aplican para las PQRS.
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo5.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. criterios normativos para peticiones, quejas, reclamos y sugerencias (pqrs)
      .col-lg-8.mb-4.mb-lg-0
        .row.bg-color1
          .col-12.p-4
            p Por otro lado, también se cuenta con la norma ISO 10002, en donde la gestión de calidad está enfocada en la satisfacción del cliente por medio de directrices para el tratamiento de las quejas en las organizaciones.
            p.mb-0 En esta norma se pueden encontrar los pasos para crear el diseño de un sistema para el tratamiento efectivo de las PQRS lo cual crea un impacto positivo con las relaciones con el cliente.
      .col-lg-4
        figure(data-aos="fade-up-left")
          img(src='@/assets/curso/tema4/img7.png', style="width: 650px").m-auto
    Separador
    .row.bg-color13.mb-5
      .col-12.p-5
        #t_4_2
        .titulo-segundo.color-acento-contenido
          h2 4.2 Formato
        .row.align-items-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            .row.align-items-start
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/img2.svg', style="width: 70px")
              .col
                p A continuación, se comparte un formato guía para que los clientes internos, externos y partes interesadas puedan presentar sus peticiones, quejas, reclamos, sugerencias y felicitaciones.
                a.anexo(:href="obtenerLink('/downloads/Anexo6.pdf')" target="_blank").mb-3
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Anexo]. Formato para peticiones, quejas, reclamos y sugerencias (pqrs)
              .row
                .col-12.bg-color6
                  .p-4
                    p.mb-0 Se debe tener en cuenta que estas peticiones, quejas, sugerencias, reclamos y felicitaciones se pueden hacer de forma física, por apoderado, verbal o digital, se debe generar un recibido ya sea por medio de un radicado o consecutivo para un adecuado seguimiento, como también se debe dar una respuesta oportuna.
          .col-lg-5
            figure(data-aos="fade-up-left")
              img(src='@/assets/curso/tema4/img8.png', style="width: 450px").m-auto
        Separador
        #t_4_3
        .titulo-segundo.color-acento-contenido
          h2 4.3 Instructivo de manejo y seguimiento
        .row.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="fade-up-right")
              img(src='@/assets/curso/tema4/img9.png', style="width: 450px").m-auto
          .col-lg-7
            p Una vez la parte interesada formaliza la petición, queja, reclamo, sugerencia o felicitación, la empresa o entidad está en la obligación de darle respuesta. Para esto, una vez recibe, ya sea de forma física, verbal, por apoderado o digital, empieza el proceso de seguimiento, para lo cual se presenta más adelante el formato como apoyo al aprendizaje.
            p Se debe tener en cuenta que la ley 1755 de 2015 en su artículo 14 expresa lo siguiente para el plazo que se tiene para dar respuesta a una PQRS.
            p #[span.txt-deco1 Artículo 14.] Términos para resolver las distintas modalidades de peticiones. Salvo norma legal especial y so pena de sanción disciplinaria, toda petición deberá resolverse dentro de los quince (15) días siguientes a su recepción. Estará sometida a término especial la resolución de las siguientes peticiones:
        .row.justify-content-center.mb-5(data-aos="fade-up-left")
          .col-lg-10
            .row.align-items-center
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/img4.svg', style="width: 450px").m-auto
              .col-lg-2.mb-4.mb-lg-0
                figure.img-position3
                  img(src='@/assets/curso/tema4/img5.svg', style="width: 80px").m-auto
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema4/img6.svg', style="width: 450px").m-auto
        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img7.svg', style="width: 70px")
          .col
            p.mb-0 Ahora bien, es importante entender que para el proceso de recepción, seguimiento y respuestas de las PQRSF, se debe estandarizar un procedimiento para que el funcionario que hace la gestión tenga las pautas y herramientas para dar una respuesta oportuna y en los mejores términos para garantizar su cumplimiento.
    p.text-center.mb-5 Las bases iniciales para dar respuesta a una PQRS son:
    .row.mb-5.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .row.bg-color1.rounded.mb-4
          .col-12
            .p-2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img8.svg', style="width: 100px").m-auto
                .col
                  p.mb-0 #[span.txt-deco1 Primero:] establecer acuerdos de servicio con el cliente que estarían escritos en la oferta de valor de los productos o servicios.
        .row.bg-color1.rounded.mb-4
          .col-12
            .p-2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img9.svg', style="width: 100px").m-auto
                .col
                  p.mb-0 #[span.txt-deco1 Segundo:] establecer los canales de comunicación para atender tanto el servicio y venta como para atención.
        .row.bg-color1.rounded.mb-4
          .col-12
            .p-2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img10.svg', style="width: 100px").m-auto
                .col
                  p.mb-0 #[span.txt-deco1 Tercero:] generar los lineamientos, políticas y normas publicadas en donde el cliente conozca sus deberes prohibiciones y derechos.
        .row.bg-color1.rounded.mb-4
          .col-12
            .p-2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img11.svg', style="width: 100px").m-auto
                .col
                  p.mb-0 #[span.txt-deco1 Cuarto:] mantener actualizado el protocolo de atención y servicio al cliente de la organización.
        .row.bg-color1.rounded
          .col-12
            .p-2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img12.svg', style="width: 100px").m-auto
                .col
                  p.mb-0 #[span.txt-deco1 Quinto:] capacitar al personal para la recepción de PQRSF ya que de su gestión dependerá el éxito de brindar una solución a la razón de ser de la organización.
      .col-lg-6
        figure(data-aos="fade-up-left")
          img(src='@/assets/curso/tema4/img10.png', style="width: 650px")
    p.mb-5 Una vez se cuenta con esta base mínima, se procede a crear un área de recepción y seguimiento que en ocasiones se delega, acorde al tamaño de la organización, para que se manejen los siguientes puntos:
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .tarjeta.tarjeta--rosa.p-3.p-lg-3
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="1er. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img13.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 1er. acuerdo]: recepción de la PQRS.
            .row.justify-content-center(titulo="2do. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img14.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 2do. acuerdo]: trámite de la solicitud con el área designada, es decir se identifica el proceso al cual va dirigida la PQRSF y se le notifica para que identifique la causal y haga un análisis de la situación para dar respuesta y solución al cliente.
            .row.justify-content-center(titulo="3er. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img15.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 3er. acuerdo]: hacer seguimiento del proceso identificando en qué fase va el área para dar respuesta rápida.
            .row.justify-content-center(titulo="4to. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img16.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 4to. acuerdo]: recibir la respuesta del área encargada y remitir al solicitante con la solución.
            .row.justify-content-center(titulo="5to. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img17.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 5to. acuerdo]: evaluar la satisfacción del cliente.
            .row.justify-content-center(titulo="6to. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img18.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 6to. acuerdo]: generar plan de mejora para que esta situación no vuelva a suceder, en este punto se involucra al área.
            .row.justify-content-center(titulo="7mo. acuerdo")
              .col-11
                .row.align-items-center
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema4/img19.svg', style="width: 80px").m-auto
                  .col-lg-8
                    p.mb-0 #[b 7mo. acuerdo]:  cierre del proceso.
      .col-lg-4
        figure(data-aos="fade-up-left")
          img(src='@/assets/curso/tema4/img11.png', style="width: 450px").m-auto
    .row
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-up-right")
          img(src='@/assets/curso/tema4/img12.png', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-3
          .col-12.bg-color6
            .p-3
              p.mb-0 #[span.txt-deco1 Nota:] tenga en cuenta que estos son lineamientos mínimos de un instructivo que le sirven de guía para hacer la gestión de forma adecuada y cada organización implementa diferentes formas y herramientas para aplicarlo.
        p.mb-4 Lo importante es entender que sea cual sea la empresa privada o pública y sin distinción de actividad económica, debe responder por los derechos que tienen sus clientes y partes interesadas cuando hacen una solicitud por medio de una PQRS. En el siguiente formato se puede evidenciar la forma de generar seguimiento a una PQRSF.
        a.anexo(:href="obtenerLink('/downloads/Anexo7.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Formato de seguimiento peticiones, quejas, reclamos, sugerencias y felicitaciones

</template>

<script>
export default {
  name: 'Tema4',
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
