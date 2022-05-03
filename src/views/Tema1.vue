<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #fff") 1
      h1 Manejo de la comunicación e información
    .row.mb-5.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        .p-3.bg-color1
          p.mb-0 La comunicación en la humanidad es la base del relacionamiento y acercamiento que ayuda a la interacción entre las personas, y por ende a la comunión y entendimiento y con base en ella se pueden satisfacer las necesidades de las personas. Es importante conocer cómo se hace este contacto con los clientes, porque en cualquier organización se deben generar canales tanto para sus clientes internos como externos.
      .col-lg-7
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 250px").m-auto
          .col-lg-7
            figure.d-none.d-lg-block.mb-3
              img(src='@/assets/curso/tema1/img2.svg', style="width: 70px")
            p.mb-0 Entendiendo esto, el aprendiz aprenderá en los siguientes temas cómo las empresas interactúan con sus clientes ya que por este medio podrá resolver inquietudes y solucionar problemas en la organización o en su vida propia, utilizando el medio más adecuado.
    #t_1_1.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.1 Comunicación oral
    .row.mb-5
      .col-auto
        figure.mb-3
          img(src='@/assets/curso/tema1/img2.svg', style="width: 50px")
      .col
        p.mb-0 Este tipo expresión comprende el mensaje entre las personas usando el habla, teniendo en cuenta el manejo de emociones, uso adecuado de las palabras y escuchando, obteniendo así buenas relaciones con las personas de su entorno.
      .col-12
        p La oratoria o comunicación oral es la que se verbaliza a través de la palabra, sin embargo, eso no quiere decir que solo las palabras importan, tal como ilustra el autor norteamericano Bert Decker en su obra #[span.txt-deco1 “El Arte de la comunicación. Cómo lograr un impacto interpersonal”] para lo cual se requiere del manejo de nueve habilidades así:
    figure.mb-5
      img(src='@/assets/curso/tema1/img3.svg', style="width: 900px").m-auto
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p El mismo autor ha utilizado esta frase en los entrenamientos de gerentes:
        .bloque-texto-c.color-secundario.px-4.pt-4.mb-3
          i.fas.fa-quote-right
          p.mb-4 Acelera la organización con rapidez para cambiar, rapidez para generar ahorros de costos, rapidez para generar ingresos y rapidez para brindar satisfacción al cliente. Toda mejora cuando mejora la comunicación.
          span.d-flex.justify-content-end.pe-5 CITATION Dec21 \l 3082 (Decker, 2021)
        p En las organizaciones se ve este tipo de comunicación con el cliente en los modelos tradicionales en venta directa como tiendas físicas, centros de información y demás.
        p Nota: en este tipo de comunicación con el cliente se debe tener en cuenta el equilibrio entre cada palabra, es decir, #[span.txt-deco1 sin agresividad – no agredir, ni pasividad – evitar, para tener una conversación eficiente].
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 450px")
    .separador
    .row.bg-color2.mb-5
      .col-12.p-5
        #t_1_2.pt-5
        .titulo-segundo.color-acento-contenido
          h2 1.2 Comunicación gestual
        .row.mb-4
          .col-lg-5.mb-4.mb-lg-0
            p Todas las personas pueden expresar de forma verbal, con frases ideales para toda ocasión sus ideas, pero cabe resaltar que esto va acompañado de los gestos o expresiones corporales que pueden reforzar su comunicado o emitir otro mensaje.Diversos autores y especialistas de la comunicación utilizan la fórmula 55/38/7, dados los resultados hallados después de sendas investigaciones acerca del peso que tienen los gestos, posturas y movimientos en la comunicación interpersonal.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/img5.svg', style="width: 650px").m-auto
          .row.mt-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width: 50px").m-auto
            .col
              p Todas las personas pueden expresar de forma verbal, con frases ideales para toda ocasión sus ideas, pero cabe resaltar que esto va acompañado de los gestos o expresiones corporales que pueden reforzar su comunicado o emitir otro mensaje. Diversos autores y especialistas de la comunicación utilizan la fórmula 55/38/7, dados los resultados hallados después de sendas investigaciones acerca del peso que tienen los gestos, posturas y movimientos en la comunicación interpersonal.
        p.mb-4 #[b Las tres disciplinas de la comunicación no verbal son (Machado Mateos, 2020):]
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            SlyderF(columnas="col-lg-6 col-xl-12")
              .tarjeta.color-acento-4.p-5
                .row.justify-content-center.mb-3.mt-4
                  .col-4.mb-3
                    img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
                h2.text-center Kinésica (quinésica)
                p.text-center.mb-4 Estudia el significado de los movimientos que acompañan la comunicación (gestos, posturas, miradas).
              .tarjeta.color-acento-4.p-5
                .row.justify-content-center.mb-3.mt-4
                  .col-4.mb-3
                    img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
                h2.text-center Proxémica
                p.text-center.mb-4 Se relaciona con el espacio personal y que rodea la comunicación, depende de diversos factores como el grado de intimidad, la personalidad, edad y cultura.
              .tarjeta.color-acento-4.p-5
                .row.justify-content-center.mb-3.mt-4
                  .col-4.mb-3
                    img(src='@/assets/curso/tema1/img9.svg' alt='AvatarTop')
                h2.text-center Paralingüística
                p.text-center.mb-4 Comprende esos aspectos que acompañan las palabras como tono, volumen, timbre, ritmo (o fluidez) y silencios (en ocasiones necesarios, en otras incómodos).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img1.png', style="width: 450px").m-auto
    .separador
    #t_1_3.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.3 Comunicación escrita
    .row
      .col-lg-7.mb-4.mb-lg-0
        p Gracias a este tipo de contacto, podríamos decir que conocemos la mayoría de nuestra historia, debido a que nuestros antepasados se preocuparon por dejar plasmado nuestro origen y transformación de la civilización a través del tiempo.
        .bloque-texto-c.color-secundario.px-4.pt-4.mb-3
          i.fas.fa-quote-right
          p.mb-4 Mirando la historia donde el mensaje es el objeto central entre emisor y receptor, antes de la aparición de la escritura (aproximadamente 3.200 a.C.), el ser humano solo se comunicaba a partir de mensajes simples expresados a través del habla, pero las distancias de las personas hicieron evidente la necesidad de plasmar la palabra y dotarla de un carácter permanente en un soporte físico, que al día hoy se convirtió más en soporte digital.
          span.d-flex.justify-content-end.pe-5 (Machado Mateos, 2020)
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 450px").m-auto
      .col-12.mt-4
        p.text-center.mb-5 Tenga presente que en toda forma de comunicación siguen siendo protagonistas los elementos de la comunicación:
        figure.mb-4
          img(src='@/assets/curso/tema1/img11.svg', style="width: 750px").m-auto
    p.mb-5 En la comunicación escrita se hace más difícil expresar una idea, como también se hace más lento el proceso de realimentación o respuesta. Relacionemos sus ventajas y desventajas:
    .row.mb-5.bg-color3
      .col-12.px-5
        .row.my-5
          .col-lg-6.linea1
            .p-4
              .row
                .col-12
                  figure.mb-5
                    img(src='@/assets/curso/tema1/img12.svg', style="width: 100px")
                .col-12(style="height: 300px")
                  p.mb-5.txt-deco2 Ventajas de la comunicación escrita
                  ul.lista-ul.mb-5
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      |
                      p.mb-0.text-white Permite pensar, corregir, incorporar nuevos elementos.
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      | 
                      p.mb-0.text-white Permite la comunicación masiva y simultánea.
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      |
                      p.mb-0.text-white Es permanente y duradera siempre y cuando se mantenga el soporte (o canal de comunicación).
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      |
                      p.mb-0.text-white Es un proceso que amerita más tiempo para su producción.
              figure.d-flex.justify-content-end
                img(src='@/assets/curso/tema1/img14.svg', style="width: 100px")
          .col-lg-6
            .p-4
              .row
                .col-12
                  figure.mb-5
                    img(src='@/assets/curso/tema1/img13.svg', style="width: 100px")
                .col-12(style="height: 300px")
                  p.mb-5.txt-deco2 Desventajas de la comunicación escrita
                  ul.lista-ul.mb-5
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      |
                      p.mb-0.text-white Es menos espontáneo que la comunicación oral y gestual.
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      |
                      p.mb-0.text-white Dura más tiempo en llegar al receptor, así como también en recibir la respuesta.
                    li 
                      i.far.fa-dot-circle(style="color:#3CFFE9")
                      |
                      p.mb-0.text-white Puede dar lugar a diversas interpretaciones según el lenguaje que se utilice.
              figure.d-flex.justify-content-end
                img(src='@/assets/curso/tema1/img14.svg', style="width: 100px")
    p.mb-5 Para estandarizar formatos y modelos de comunicación escrita dentro de las organizaciones, en Colombia sigue siendo vigente el uso de la Guía Técnica Colombiana 185 de Documentación organizacional, emitida desde 2009.
    .separador
    #t_1_4.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.4 Comunicación telefónica
    .row
      .col-12
        p Este tipo de comunicación se utiliza tanto para venta de productos, como también para mejorar la calidad del servicio al cliente por medio de un acompañamiento personalizado que ha servido para resolver dudas e inquietudes de los consumidores en las organizaciones.
    .row.bg-color4
      .col-12.p-5
        .row.align-items-center.mb-5
          .col-lg-7
            .tarjeta.tarjeta--azul.p-4
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-lg-7.mb-4.mb-md-0
                    P.txt-deco1.mb-3 Ventajas de la comunicación telefónica
                    ul.lista-ul
                      li 
                        i.far.fa-dot-circle(style="color:#7F4FC7")
                        |
                        p.mb-0 Permite realizar un número mayor  de contactos en menor tiempo.
                      li 
                        i.far.fa-dot-circle(style="color:#7F4FC7")
                        |
                        p.mb-0 Se evita el costo de desplazamiento.
                      li 
                        i.far.fa-dot-circle(style="color:#7F4FC7")
                        |
                        p.mb-0 Puede llegar a lugares más lejanos.
                      li 
                        i.far.fa-dot-circle(style="color:#7F4FC7")
                        |
                        p.mb-0 Es la comunicación más rápida y personalizada.
                  .col-lg-3
                    figure.mt-4
                      img(src='@/assets/curso/tema1/img15.svg', style="width: 150px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-7.mb-4.mb-md-0
                      P.txt-deco1.mb-3 Desventajas de la comunicación telefónica
                      ul.lista-ul
                        li 
                          i.far.fa-dot-circle(style="color:#7F4FC7")
                          |
                          p.mb-0 Es una relación menos cálida que la presencial.
                        li 
                          i.far.fa-dot-circle(style="color:#7F4FC7")
                          |
                          p.mb-0 Faltan los apoyos que da la comunicación gestual.
                        li 
                          i.far.fa-dot-circle(style="color:#7F4FC7")
                          |
                          p.mb-0 Pueden tenerse más interferencias (físicas, técnicas, ambientales).
                        li 
                          i.far.fa-dot-circle(style="color:#7F4FC7")
                          |
                          p.mb-0 Puede ser rechazada fácilmente.
                  .col-lg-3
                    figure.mt-4
                      img(src='@/assets/curso/tema1/img16.svg', style="width: 150px").m-auto
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width: 450px").m-auto
        .row.align-items-center
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img4.png', style="width: 450px").m-auto
          .col-lg-7
            p Ahora, los servicios de los sistemas telefónicos actuales son:
            ul.lista-ul.mb-5
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Identificación, transferencia, desvío y restricción de llamadas.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Buzón de voz.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Llamada en espera.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Registro y grabación de llamadas.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Limitación a horarios.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Conferencias (conversaciones en tiempo entre varias personas, opción muy utilizada en pandemia y post pandemia)
            p Y las pautas de comportamiento y organización son:
            ul.lista-ul.mb-5
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Ser respetuoso, conciso y claro.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Seguir la estructura de una conversación:  presentación, desarrollo, conclusión y despedida.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Utilizar en todo momento la escucha activa (con los cinco sentidos).
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Contar con la información a la mano.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Utilizar un tono de voz intermedio y adaptarse al ritmo del interlocutor.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Evitar masticar chicle o consumir alimentos.
              li 
                i.far.fa-dot-circle(style="color:#7F4FC7")
                |
                p.mb-0 Sonreír, no se ve, pero se nota.
        .separador
        #t_1_5.pt-5
        .titulo-segundo.color-acento-contenido
          h2 1.5 Comunicación telemática
        p Este tipo de comunicación se utiliza tanto para venta de productos, como también para mejorar la calidad del servicio al cliente por medio de un acompañamiento personalizado que ha servido para resolver dudas e inquietudes de los consumidores en las organizaciones.
    .row.mb-4.justify-content-center
      .col-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img5.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1.text-white Correo electrónico
              p.text-white La GTC 185 de Documentación Organizacional hace referencia a este, como el mecanismo que permite la comunicación individual o masiva con asuntos puntuales y cortos, al que también se pueden anexar cartas, circulares, tarjetas y otro tipo de documentos.
      .col-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img6.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1.text-white Chats y Foros
              p.text-white #[b Chats]: conversaciones a través del ordenador, entre dos o más personas.
              p.text-white #[b Foros]: permiten la publicación de conceptos u opiniones y la consulta de los demás.
      .col-6.col-lg-4.col-xl-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img7.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1.text-white Blogs
              p.text-white Espacio donde se publican contenidos, imágenes, experiencias para compartir.
              p.text-white FAQ (#[i frequently asked questions]) o #[i Chatbots], preguntas frecuentes con sus respectivas respuestas
    .row.mb-5.justify-content-center
      .col-6.col-lg-4.col-xl-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img8.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1.text-white Servicios de mensajería SMS (#[i short message service])
              p.text-white #[b El WhatsApp]: permite enviar mensajes, videos, audios y documentos por internet
      .col-6.col-lg-4.col-xl-3
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img9.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1.text-white Redes sociales
              p.text-white Instagram, Facebook, Linkedln, Twitter, Youtube, hoy son una necesidad.
              p.text-white Videoconferencias (Meet, Zoom, Teams).
    p.mb-5 Debido a la pandemia y a las nuevas disposiciones del trabajo combinado, teletrabajo y trabajo en casa, se ha generalizado el uso de la videoconferencia, veamos las ventajas y desventajas de este mecanismo:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .separador
    #t_1_6.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.6 Barreras de la comunicación
    p.mb-5 Es importante mitigar cualquier situación que impida que el mensaje que se quiere emitir al cliente llegue de forma correcta, por eso en la comunicación se hace uso y aprovechamiento de muchos recursos como preguntas y respuestas, anécdotas, ilustraciones y demostraciones, pero también es común enfrentarse a barreras, veamos las más comunes:
    .row
      .col-lg-7
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones.p-4(titulo="Físicas y<br>ambientales")
            h4 Físicas y ambientales
            p Relacionadas con el entorno físico (luz, calor, frio, incomodidad, distracciones visuales o auditivas).
          .tarjeta.color-acento-botones.p-4(titulo="Técnicas y<br>tecnológicas")
            h4 Técnicas y tecnológicas
            p Relacionadas con la semántica (significado de las palabras), la planeación y administración de información y recursos de comunicación.
          .tarjeta.color-acento-botones.p-4(titulo="Verbales")
            h4 Verbales
            p Relacionadas con la forma de hablar, el uso de otro código (idioma o señales), ritmo acelerado o demasiado lento, distinto acento.
          .tarjeta.color-acento-botones.p-4(titulo="Interpersonales")
            h4 Interpersonales
            p Relacionadas con el asunto a tratar y la personalidad de los intervinientes como:  suposición, diferente percepción, prejuicios, antipatía.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img10.png', style="width: 450px").m-auto
    p.mb-5 Así como existen barreras también existen recomendaciones sobre cómo gestionar de la mejor forma las interacciones comunicacionales en todos los ambientes. A continuación, algunas sugerencias:
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img11.png', style="width: 450px").m-auto
      .col-lg-7
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-lg-7.mb-4.mb-md-0
                P Escoja un ambiente que le permita  visualización, concentración y escucha, en lo posible sin interferencias ni interrupciones.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/img19.svg', style="width: 150px").m-auto
            .row.align-items-center.justify-content-center
              .col-lg-7.mb-4.mb-md-0
                  P Planee la conversación, aclare el significado de las palabras; mantenga ordenada y despejada la mesa de trabajo, con los elementos e información necesarios; verifique el buen funcionamiento de aparatos y de la conectividad.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/img20.svg', style="width: 150px").m-auto
            .row.align-items-center.justify-content-center
              .col-lg-7.mb-4.mb-md-0
                  P Utilice la escucha activa (no solo lo que la otra persona dice, sino los sentimientos, pensamientos subyacentes), trate de igualar su ritmo y explique o pida confirmación de lo entendido.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/img21.svg', style="width: 150px").m-auto
            .row.align-items-center.justify-content-center
              .col-lg-7.mb-4.mb-md-0
                  P Disponga de mente abierta, no se moleste o tome las cosas de manera personal, explique claramente, utilice la empatía, flexibilidad y tolerancia.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/img22.svg', style="width: 150px").m-auto
    .separador
    #t_1_7.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.7 Flujo de la comunicación organizacional
    p.mb-5 Dentro de las organizaciones, la comunicación no solo se tipifica según el código, como ya se mencionó: verbal, gestual, escrita; se identifican otros tipos de comunicación, como se ilustra en la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1]. Tipos de comunicación
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Criterio
                th(colspan="2") Tipo de comunicación
                th Ejemplo
            tbody
              tr
                td(rowspan="2") Según el ámbito
                td Interna
                td
                  p La que se genera al interior con los miembros de la organización; según el nivel jerárquico de los comunicantes puede ser:
                  p Horizontal-entre personas del mismo nivel.
                  p Ascendente-de subalterno a jefe 
                  p Descendente-de jefe a subalterno
                  p Oblicua o transversal: entre personas de diferente área y nivel
                td Correo electrónico, acta, circular, convocatoria, orden de trabajo, etc.
              tr
                td Externa
                td Se mantiene con otras personas o empresas (proveedores, distribuidores, clientes, gobierno).
                td Carta, invitación protocolaria, cotización, factura, remisión.
              tr(style="background-color:#E8E8E8")
                td(rowspan="2") Según el grado de control
                td Formal
                td Está definida por la jerarquía establecida dentro de la organización.
                td Circular, protocolo, guía, instructivo, procedimiento.
              tr(style="background-color:#E8E8E8")
                td Informal
                td Se da de manera espontánea entre compañeros.
                td Compañeros de almuerzo, de deporte, etc.
              tr
                td(rowspan="2") Según número de emisor/receptor
                td Individual
                td Parte de un emisor a un solo receptor.
                td Llamado de atención o encargo de un trabajo específico.
              tr
                td Colectiva
                td En la que se comunican varios emisores o varios receptores.
                td Del jefe de talento humano para todos los colaboradores.
              tr(style="background-color:#E8E8E8")
                td(rowspan="2") Según inmediatez del mensaje
                td Directa 
                td El receptor la recibe al mismo instante que la comunica el emisor.
                td El director felicita a un colaborador en plena reunión.
              tr(style="background-color:#E8E8E8")
                td Diferida
                td El receptor la recibe tiempo después de emitida.
                td Un candidato recibe convocatoria para una entrevista.
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img23.svg', style="width: 450px").m-auto
      .col-lg-7
        p En medio de todo lo que circunda, la comunicación organizacional es fundamental que se establezca desde la dirección estratégica y luego se comunique a todos los colaboradores. ¿Cuál será el conducto regular de comunicación? Es decir, ¿cuál es la ruta que debe seguirse para escalar la información en cada uno de los equipos de trabajo y por lo tanto en los procesos y procedimientos de la organización?
        p El riesgo que se corre al no definir y comunicar con claridad el conducto regular es que los rumores empiecen a darse y terminen afectando a los procesos y a las personas, o que la petición hecha no llegue a oídos de quien la puede resolver y se quede sin atender.
    .separador
    #t_1_8.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.8 Manejo de la información organizacional
    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 El recibo, transferencia, manipulación y archivo de la información son procedimientos imprescindibles que deben estar definidos y estandarizados dentro de la organización, por lo tanto, conlleva mucha responsabilidad de los colaboradores que en cualquier momento dado los deben manipular.
        .row
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img24.svg', style="width: 50px").m-auto
          .col
            p.mb-0 Como en todo proceso existen elementos de entrada, en el caso de la información, será la llamada, el correo o el documento, si se trata de un documento que debe pasar a proceso de #[span.txt-deco1 radicación], que regularmente se da en una oficina de recepción o control de documentos, donde se coloca una señal o sello de recibido acompañado de la fecha, hora y persona que lo recibe. Luego se pasa a la oficina o área que corresponde según el asunto.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img12.png', style="width: 450px").m-auto
    p.mb-5 Una vez se atiende la solicitud o se tramita lo relacionado y según el valor, la vigencia e importancia del documento para la organización, debe pasarse para el archivo; generalmente se tiene un procedimiento e instructivo para esta labor, pero en caso que no exista, es importante seguir estas reglas:
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img13.png', style="width: 450px").m-auto
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Localización") El archivo debe permitir rápida y fácilmente la ubicación del documento.
          p.text-small(numero="2" titulo="Radicación") Dejar registro de entrada o salida de documentos.
          p.text-small(numero="3" titulo="Visualización") El documento debe ser visible para facilitar su búsqueda.
          p.text-small(numero="4" titulo="Perioricidad") Archivar periódicamente, evitar su acumulación.
          p.text-small(numero="5" titulo="Clasificación y ordenación") Identificar lo útil y relevante y ordenarlo según tipo de archivo (numérico, cronológico, por asuntos, por áreas o procesos).
          p.text-small(numero="6" titulo="Depuración") Desechar documentos inútiles y evitar multiplicidad de copias o expedientes.
    .row.mt-4.mt-lg-5.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Cuando el documento ya hace parte de un archivo, puede ser requerido para #[span-txt-deco1 consulta], en ese caso el mismo procedimiento interno debe especificar en qué casos y qué personas pueden tener acceso a dicha información, para evitar pérdidas de información y que el colaborador incurra en faltas a la confidencialidad y seguridad de la información.
        p #[span.txt-deco1 De la confidencialidad de la información:] los documentos pueden contener datos personales, tratar asuntos financieros, de investigación disciplinaria, policial o penal, por lo tanto, los responsables de la manipulación y archivo de los documentos deben mantener esa información como secreto profesional, para lo cual en Colombia se cuenta con la Ley 1582 del 2012 de protección de datos. 
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img25.svg', style="width: 450px").m-auto
    .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img26.svg', style="width: 150px").m-auto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p.txt-deco1 LEY 1581 DE 2012
            p.mb-0 Buscamos garantizar que la información que administras, sea tratada en forma legal, lícita, segura y confiable para las finalidades señaladas en la ley a partir de la autorización, disposiciones generales, implementación de la política y procedimiento del tratamiento de datos personales, registro nacional de bases de datos y muchos más temas normados por la Súper Intendencia de Industria y Comercio (SIC).
            p Nota: tomado de Starsolutionsti.com, 2021
    .row.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img24.svg', style="width: 50px").m-auto
      .col
        p.mb-0 Para la salvaguarda y seguridad de la información, las organizaciones cuentan con la Norma ISO 27001 referente mundial para implementar el Sistema de Gestión de Seguridad de la Información, con la cual se genera confianza tanto con el personal interno como con todas las partes interesadas del sector externo. Esta normativa permite que los datos suministrados sean confidenciales, íntegros, disponibles y legales, con el fin de estar protegidos frente a los riesgos que se puedan presentar. Veamos los beneficios de su implementación:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img14.png', style="width: 450px").m-auto
      .col-lg-8
        p.mb-4 #[b Beneficios del ISO 27001]
        .row
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img27.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img28.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img29.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img30.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img31.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img32.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img33.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img34.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img35.svg', style="width: 450px").m-auto
          .col-lg-6
            .p-3
              figure
                img(src='@/assets/curso/tema1/img36.svg', style="width: 450px").m-auto
    .separador
    #t_1_9.pt-5
    .titulo-segundo.color-acento-contenido
      h2 1.9 Etiqueta y netiqueta
    p.mb-5 En los diferentes canales de comunicación con el cliente se deben seguir una serie de normas básicas de comportamiento tanto en el entorno presencial como en el uso virtual, para garantizar que la relación con el cliente perdure. Para esto a continuación, se presentan los siguientes protocolos:
    .row.justify-content-center.mb-5
      .col-12.col-lg-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1.text-white.mt-5 Etiqueta
              p.text-white Nos habla del cómo debemos comportarnos frente a diferentes momentos o situaciones en reuniones, actos ceremoniales, empresas, actividades culturales y se puede asociar para todo lo que hacemos como al cenar en casa y lugares públicos, el vestir según la ocasión, el tono de voz según el ambiente.
              p.text-white.mb-5 Resumiendo, está en todas las actividades que hacemos a diario y está en nuestra formación del ser, saber hacer y saber estar, por ende, la importancia de conocerla.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img15.png')})`}")
      .col-12.col-lg-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1.text-white.mt-5 Netiqueta
              p.text-white Está asociada a la manera de comportarnos utilizando las redes de comunicación virtual que nos conlleva a un entorno de vida real, mencionando algunas como correos electrónicos, páginas web, WhatsApp, Facebook, Twitter, Meet, Zoom, Chatbots, Foros, Blogs y demás redes.
              p.text-white.mb-5 Resumiendo, son las reglas que nos dice como debemos actuar cuando nos comunicamos en cualquier entorno virtual.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}")
    .row.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img24.svg', style="width: 50px").m-auto
      .col
        p.mb-0 #[span.txt-deco1 Nota:] a nivel general, en el entorno presencial y virtual, ya sea de nuestra vida en sociedad, laboral o familiar, se debe hacer alusión a que nuestro comportamiento tiene consecuencias y aunque existen reglas que rigen, de cada aprendiz o ser humano depende ponerlas en práctica y ser parte del cambio, debido a que por un mal hábito se puede perder un empleo a nivel presencial o aún más grave, por el mal uso de las redes se pueden perder vidas a nivel virtual.
    .tarjeta.color-acento-terciario.p-4.p-md-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema1/img37.svg")
        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido
            h3.text-white Etiqueta y netiqueta
          p.text-white.mb-4 Conociendo qué es la etiqueta y netiqueta, el siguiente presenta algunas de las normas para aplicar según su entorno; cabe recalcar que estas son algunas y cada espacio virtual o presencial tiene muchas más que debemos acatar y no porque lo soliciten, si no porque a la persona le nace de forma espontánea y va en él o ella.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo4.pdf')" target="_blank" type="application/pdf")
            span(style="color: #000 !important") Descargar
            i.fas.fa-file-download(style="color: #000 !important")

</template>

<script>
export default {
  name: 'Tema1',
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
