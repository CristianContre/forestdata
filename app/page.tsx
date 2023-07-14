import Container from "./Container";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <main className={styles.homeMain}>
      <div className={styles.homeImage}>
        <Container
          img={{ alt: "Technology", src: "/dron-forest.jpg" }}
          title="Technology and innovation for the forestry sector"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className={styles.overlappedDiv}>
        <span>asdasd</span>
      </div>
    </main>
  );
};

export default HomePage;
