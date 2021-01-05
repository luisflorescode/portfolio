import '../assets/styles/components/Contact.scss';
import GitHub from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mt-3 mb-3 contact__email">
            <h3>e-mail</h3>
            <p>
              ¿Tienes una idea y quieres crear algo increíble?
              <br />
              Envíame un e-mail a:
            </p>
            <a
              href="mailto:luisfloresdev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact__email__link">
                luisfloresdev@gmail.com
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-6 mt-3 mb-3 contact__social">
            <h3>Social</h3>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <a
                    className="contact__social__networks"
                    href="https://github.com/luisflorescode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub className="contact__social__networks__item" />
                    <br />
                    <small className="contact__social__networks__name">
                      GitHub
                    </small>
                  </a>
                </div>
                <div className="col-3">
                  <a
                    className="contact__social__networks"
                    href="https://www.linkedin.com/in/luisflorescode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn className="contact__social__networks__item" />
                    <br />
                    <small className="contact__social__networks__name">
                      LinkedIn
                    </small>
                  </a>
                </div>
                <div className="col-3">
                  <a
                    className="contact__social__networks"
                    href="https://twitter.com/luisflorescode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="contact__social__networks__item" />
                    <br />
                    <small className="contact__social__networks__name">
                      Twitter
                    </small>
                  </a>
                </div>
                <div className="col-3">
                  <a
                    className="contact__social__networks"
                    href="https://www.facebook.com/luisflorescode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook className="contact__social__networks__item" />
                    <br />
                    <small className="contact__social__networks__name">
                      Facebook
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
