// ============================================================
//  CONTENIDO DE LA WEB DE 7IN GAMES
//  Editá los textos entre comillas y guardá. La web se arma sola.
//  - Para agregar un juego: copiá un bloque { ... }, pegalo con una coma y cambiá los datos.
//  - estado: "disponible" o "proximamente"
//  - enlace y boton: si no hay enlace todavía, dejalos vacíos ("").
//  - imagen: ruta de una captura o ícono (por ejemplo "juegos/nimbo.png"). Vacía = se muestra la inicial.
// ============================================================
window.CONTENIDO = {
  estudio: {
    kicker: "Estudio indie · Argentina",
    titular: "Juegos que se juegan en un ratito y se quedan.",
    bajada: "Hacemos videojuegos para Android con arte retro y mucha paciencia.",
    pronunciacion: "El nombre se lee «Tin»: el 7 hace de T."
  },

  juegos: [
    {
      nombre: "Alien Vision",
      estado: "disponible",
      texto: "Ya se puede descargar en Google Play.",
      enlace: "https://play.google.com/store/apps/details?id=com.tga.Aliens",
      boton: "Ver en Google Play",
      imagen: ""
    },
    {
      nombre: "NIMBO",
      estado: "proximamente",
      texto: "Arena aérea 2D de un solo escenario. En desarrollo.",
      enlace: "",
      boton: "",
      imagen: ""
    }
  ],

  contacto: {
    texto: "¿Consultas, prensa o ideas? Escríbenos.",
    email: "7ingames@gmail.com"
  },

  pie: "© 2026 7IN GAMES · Argentina"
};
