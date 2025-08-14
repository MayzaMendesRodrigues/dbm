import './Footer.css'

const socialLinks = [
  {
    href: "https://www.facebook.com/motosdbm",
    icon: "fab fa-facebook-f",
  },
  {
    href: "https://www.instagram.com/dbmmotos/",
    icon: "fab fa-instagram",
  },
  {
    href: "https://wa.me/5491173608326?text=Hola,%20quiero%20información%20sobre%20sus%20motos",
    icon: "fab fa-whatsapp",
  },
  {
    href: "https://maps.app.goo.gl/qZ5ydZGazjmu46VS6",
    icon: "fas fa-map-marker-alt",
  },
]

const footerLinks = [
  "Lunes a Viernes: 10:00 - 19:00",
  "Sábados: 10:00 - 13:00",
  "Domingos: Cerrado",
  "Feriados: Consultar",
];

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    text: "Av. Rivadavia 10801, Liniers, CABA",
  },
  {
    icon: "fas fa-phone",
    text: "+54 11 7360-8326",
  },
  {
    icon: "fas fa-envelope",
    text: "motos.dbm@gmail.com",
  },
];


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>DBM Motos</h3>
            <p>
              Especialistas en motos usadas y multimarca con más de 20 años de
              experiencia. Garantía, financiación y servicio técnico propio.
            </p>
            <div className="social-links">
              {socialLinks.map(({ href, icon }, index) => (
                <a key={index} href={href}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Horario de atención</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (<li key={index}>{link}</li>))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <ul className="contact-info">
              {contactInfo.map(({ icon, text }, index) => (
                <li key={index}>
                  <i className={icon}></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 DBM Motos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
