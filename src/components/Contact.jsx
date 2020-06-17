import '../assets/styles/components/Contact.scss';
import GitHub from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';

function Contact() {
  return (
    <section className="contact">
      <div className="contact__email">
        <h3>e-mail</h3>
        <p>
          Si tienes una idea y quieres crear algo increíble, envíame un e-mail
          a:
        </p>
        <a
          href="mailto:luisfloresdev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact__email__link">luisfloresdev@gmail.com</div>
        </a>
      </div>
      <div className="contact__social">
        <h3>Social</h3>
        <div className="contact__social__networks">
          <a
            href="https://github.com/luisflorescode"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="contact__social__networks__item--github" />
          </a>
          <a
            href="https://www.linkedin.com/in/luisfloresdev"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="contact__social__networks__item--linkedin" />
          </a>
          <a
            href="https://twitter.com/luisfloresdev"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="contact__social__networks__item--twitter" />
          </a>
          <a
            href="https://www.facebook.com/luisfloresdev"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="contact__social__networks__item--facebook" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
