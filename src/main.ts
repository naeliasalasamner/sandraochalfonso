import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hero: {
      subtitle: "Welcome to the celebration of our love story",
      meta: "Malmö · 12 of June 2026"
    },
    nav: {
      lovestory: "Our Story",
      celebration: "Celebration",
      familyspace: "Family space",
      language: "Language",
      speeches: "Speeches",
      dresscode: "Dresscode",
      gifts: "Gifts",
      cocreate: "Co-creation",
      afterglow: "Afterglow",
      rsvp: "RSVP"
    },
    lovestory: {
      title: "Our Love Story",
      text: "Our love story started six years ago and now the day is here – a wedding! This page of our story symbolises and carries the intention, for us, of becoming a family and the joy of sharing a life. In that, we found a deeper love surfacing, one that we are excited to hold in ceremony. We keep re-discovering our path in life, small and big. We never thought this day would come and here we are!"
    },
    celebration: {
      title: "The celebration",
      text: "<p>The party and ceremony will take place in the cute greenhouse of Backagården Café, Östra Kustvägen 987, 271 77 Löderup, around a 1 hour drive from Malmö.</p><p>Here is the approximate flow of the day:</p><ul><li><strong>12.30–14.00</strong> Bus from Malmö to the venue (more info about this will come). If you drive with your own car there is parking at the venue.</li><li><strong>14.30–15.30</strong> The ceremony, which hopefully (if it isn't raining) will take place in the garden.</li><li><strong>15.30–16.00</strong> Space for photos and bridal toast.</li><li><strong>16.00–18.00</strong> Mingle with loads of tapas and drinks in the garden (if the weather allow it).</li><li><strong>18.30–20.00</strong> Seated dinner with speeches.</li><li><strong>20.00–22.00</strong> Open space for surprise activities.</li><li><strong>22.00–01.00</strong> Dancing, cake and coziness.</li><li><strong>01.30–03.00</strong> Bus going back to Malmö.</li></ul>"
    },
    familyspace: {
      title: "Family space",
      text: "Your children are super welcome to join us, we love to have them there! Just please be prepared to take care of possible crying and screaming during the ceremony. There will not be any special food for children or held activities but a friendly atmosphere. If you have questions about this, just connect with us."
    },
    language: {
      title: "Language",
      text: "Since our love story is a mix of two languages our wedding will represent this and it is really important for us that everyone feels included. Therefore we will hold the ceremony in English and Spanish. This will make everything a bit longer but we hope this will contribute to the space and offer a possibility for more slowness and depth."
    },
    speeches: {
      title: "Speeches",
      text: "A Swedish wedding tradition is to hold speeches during the dinner (we really love this!). The speech generally contains some loving words towards the bridal couple, maybe a funny anecdote or a beautiful wish. It does not need to be big! So if you want to hop on this train you will need to write it down and send it to XXXXX two weeks before the wedding so that it can be translated (in written). You can always write something and then speak from your heart in the moment but then at least everyone gets a chance to hear you."
    },
    dresscode: {
      title: "Dresscode",
      theme: "Bohemian (countryside chic)",
      text: "With this said we would like you to dress in whatever you feel the most beautiful in! Bring something warmer for the evening, especially if you are from the south! Swedish summers are very bright and lovely but it can be around 18 degrees. We are going to be on grass so don't bring heels (also we want to see you on the dancefloor!)."
    },
    gifts: {
      title: "Gifts",
      text: "We wish for your presence in the wedding and if anything else a contribution for our Honeymoon. No wrapped gifts please! You can swish to 0701991100 or make a transfer to ES5921006272411300006736 (Spanish account) marked with 'love story'."
    },
    cocreate: {
      title: "Co-create with us",
      text: "We would love for you to feel included and participate in the celebration! There will be some open space during the evening for you to bring a little game, song you want to sing or a ceremonial thing you wish to offer. If you wish to do this or have an idea, please contact: XXXXXX that will be helping us to organize it."
    },
    afterglow: {
      title: "A three day party - Afterglow and hangout",
      text: "Some of you we haven't seen in a long time and you might have traveled far and we would love to create a little bit more time to hangout and enjoy the afterglow together! The celebration will end around 1pm and a bus will take everyone back to Malmö. But if you wish and have the possibility to stay until the 14th we invite you to come to our house in Malmö (on the Saturday and Sunday). Maybe we will organise a brunch in the city somewhere and then go back to our garden and hang out there (play games, drink coffee, beers, chat, be cozy, have a sauna… the sky is the limit) or if it is really nice weather maybe go to the beach and have a swim, order some pizzas for the night. We live in Ljunggatan 28, so you could book a place to sleep close by and then find your flow into the afterglow! Just let us know if you have any questions."
    },
    closingwords: {
      text: "Some people say that a relationship is a great deal of work, and a marriage even more so. We have been pondering about this, now soon being wedded. And maybe it is not love that needs the work but the relationship that frames it that does - it needs dedication, be figured out, compromised on, built together, renewed, and formed. But maybe love is something so simple, that spontaneously strikes us. And maybe we just need each other to be reminded of that, to come back into our hearts and let love touch us.",
      closing: "We are so looking forward to sharing this celebration with you all and feel so grateful to have such amazing friends and family! We hope it will be wonderful, wild, touching and fun!",
      signature: "With much love, Sandra & Alfonso"
    },
    rsvp: {
      title: "RSVP",
      intro: "Please fill in the information below, which also works as a confirmation of your attendance, so we can organize the fiesta according to everyone's needs by latest by 1st of February 2026:",
      loading: "Loading..."
    }
  },
  es: {
    hero: {
      subtitle: "Bienvenidas y bienvenidos a la celebración de nuestra historia de amor",
      meta: "Malmö · 12 de junio de 2026"
    },
    nav: {
      lovestory: "Nuestra historia",
      celebration: "Celebración",
      familyspace: "Espacio familiar",
      language: "Idioma",
      speeches: "Discursos",
      dresscode: "Código de vestido",
      gifts: "Regalos",
      cocreate: "Co-crear",
      afterglow: "Afterglow",
      rsvp: "RSVP"
    },
    lovestory: {
      title: "Nuestra historia de amor",
      text: "Nuestra historia de amor comenzó hace seis años y ahora ha llegado el día: ¡nuestra boda! Esta página de nuestra historia simboliza y sostiene la intención de formar una familia y la alegría de compartir una vida. En este camino hemos descubierto un amor más profundo que sale a la superficie, algo que nos emociona llevar a ceremonia. Seguimos redescubriendo nuestro camino en la vida, en lo pequeño y en lo grande. ¡Y aquí estamos!"
    },
    celebration: {
      title: "La celebración",
      text: "<p>La fiesta y la ceremonia tendrán lugar en el acogedor invernadero de Backagården Café, Östra Kustvägen 987, 271 77 Löderup, a aproximadamente 1 hora en coche desde Malmö.</p><p>Aquí está el flujo aproximado del día:</p><ul><li><strong>12:30–14:00</strong> Autobús desde Malmö al lugar (más información sobre esto llegará más adelante). Si vienes en tu propio coche, hay aparcamiento en el lugar.</li><li><strong>14:30–15:30</strong> La ceremonia, que esperamos (si no llueve) realizar en el jardín.</li><li><strong>15:30–16:00</strong> Espacio para fotos y brindis con las personas recién casadas.</li><li><strong>16:00–18:00</strong> Cóctel y encuentro informal con muchas tapas y bebidas en el jardín (si el clima lo permite).</li><li><strong>18:30–20:00</strong> Cena sentadas/os con brindis.</li><li><strong>20:00–22:00</strong> Espacio abierto para actividades sorpresa.</li><li><strong>22:00–01:00</strong> Baile, pastel y momentos acogedores.</li><li><strong>01:30–03:00</strong> Autobús de regreso a Malmó.</li></ul>"
    },
    familyspace: {
      title: "Espacio para familias",
      text: "¡Sus hijas e hijos son muy bienvenidos, nos encanta tenerles con nosotras/os! Solo les pedimos que estén preparadas/os para atender posibles llantos o gritos durante la ceremonia. No habrá comida especial para niñas/os ni actividades organizadas, pero sí un ambiente cercano y amable. Si tienen preguntas sobre esto, no duden en contactarnos."
    },
    language: {
      title: "Idioma",
      text: "Como nuestra historia de amor es una mezcla de dos idiomas; nuestra boda también lo será, y es muy importante para nosotras/os que todas las personas se sientan incluidas. Por eso, la ceremonia será en inglés y en español. Esto hará que todo sea un poco más largo, pero esperamos que contribuya al espacio y ofrezca una posibilidad de más calma y profundidad."
    },
    speeches: {
      title: "Discursos",
      text: "Habrá posibilidad de hacer un discurso durante la cena (¡nos encanta!). Si quieres hacerlo, por favor escríbelo y envíalo a XXXXX dos semanas antes de la boda para que podamos traducirlo por escrito. Siempre puedes hablar desde el corazón en el momento, pero así al menos todas las personas tienen la oportunidad de entender lo que dices."
    },
    dresscode: {
      title: "Código de vestimenta",
      theme: "Bohemio (chic campestre)",
      text: "¡Lo que sea que te haga sentir más hermosa/o! Trae algo más abrigado para la noche, especialmente si vienes del sur. Los veranos suecos son muy claros y preciosos, pero puede hacer alrededor de 18 grados. Estaremos sobre césped, así que es mejor no llevar tacones (¡además queremos verte en la pista de baile!)."
    },
    gifts: {
      title: "Regalos",
      text: 'Lo que más deseamos es tu presencia en la boda y, si quieres, una contribución a nuestra luna de miel. Puedes enviar por Swish al 0701991100 o hacer una transferencia a ES5921006272411300006736 (cuenta española) con el concepto "love story". ¡Por favor, sin regalos envueltos!'
    },
    cocreate: {
      title: "Co-crear con nosotras/os",
      text: "Nos encantaría que te sintieras parte de la celebración y que también puedas participar activamente. Durante la noche habrá espacio abierto para que traigas algún juego, una canción que quieras cantar o algún gesto ceremonial que quieras ofrecer. Si quieres hacer algo de esto o tienes alguna idea, por favor contacta con XXXXXX, quien nos ayudará a organizarlo."
    },
    afterglow: {
      title: "Tres días de celebración – Afterglow y encuentro",
      text: "Algunas/os de ustedes han viajado desde lejos o hace mucho que no nos vemos, y nos gustaría crear un poco más de tiempo para estar juntas/os y disfrutar del afterglow. La celebración terminará alrededor de la 1 de la madrugada y un autobús llevará a todas las personas de vuelta a Malmö. Pero, si quieres y puedes quedarte hasta el día 14, te invitamos a venir a nuestra casa en Malmö (sábado y domingo). Tal vez organicemos un brunch en la ciudad y luego volvamos a nuestro jardín para pasar el rato (jugar juegos, tomar café o cerveza, charlar, estar cómodas/os, ir a la sauna… el cielo es el límite) o, si hace muy buen tiempo, ir a la playa, nadar y pedir unas pizzas por la noche. Vivimos en Ljunggatan 28, así que puedes reservar un alojamiento cerca y fluir con el afterglow. Solo avísanos si tienes cualquier pregunta."
    },
    closingwords: {
      text: "Algunas personas dicen que una relación requiere mucho trabajo, y un matrimonio aún más. Hemos estado reflexionando sobre esto, ahora que pronto nos casaremos. Y tal vez no sea el amor lo que necesita trabajo, sino la relación que lo enmarca: necesita dedicación, ser descubierta, negociada, construida juntos, renovada y formada. Pero tal vez el amor sea algo tan simple que nos golpea espontáneamente. Y tal vez solo nos necesitamos mutuamente para recordarlo, para volver a nuestros corazones y dejar que el amor nos toque.",
      closing: "¡Estamos muy emocionados de compartir esta celebración con todos ustedes y nos sentimos muy agradecidos de tener amigos y familia tan increíbles! Esperamos que sea maravilloso, salvaje, conmovedor y divertido!",
      signature: "Con mucho amor, Sandra & Alfonso"
    },
    rsvp: {
      title: "RSVP",
      intro: "Por favor completa la información a continuación, que también funciona como confirmación de tu asistencia, para que podamos organizar la fiesta según las necesidades de todos, a más tardar el 1 de febrero de 2026:",
      loading: "Cargando..."
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
