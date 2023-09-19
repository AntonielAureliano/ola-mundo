import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";
export default function () {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentaca}>
        <h1 className={styles.titulo}>Óla, mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Antoniel Aureliano,
          desenvolvedor web. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Antoniel"
        />
      </div>
    </div>
  );
}
