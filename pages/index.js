import styles from "./index.module.css";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <span className={styles.brand}>stemverse.com.br</span>

        <h1 className={styles.title}>
          EM <br /> CONSTRUÇÃO
        </h1>

        <p className={styles.subtitle}>
          Algo novo está sendo preparado.
          <br />
          Um espaço para ideias, tecnologia e conteúdo.
        </p>
        <h2>
          Stem Verse é um hub local que divulga projetos e iniciativas que
          aproximam alunos de escolas públicas e privadas do universo STEM.
        </h2>
        {/* <div className={styles.progressWrapper}>
          <span>0%</span>
          <div className={styles.progressBar}>
            <div className={styles.progress} />
          </div>
          <span>100%</span>
        </div> */}
        <h3 className={styles.tagline}>Construindo conexões</h3>

        <button className={styles.button} disabled>
          Em breve
        </button>

        <footer>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/oneres_stm"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/fabioneresdejesus"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/@mocorongotech"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
          <p className={styles.location}>
            Santarém - PA
            <br />
            Desenvolvido por EngVerse.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default HomePage;
