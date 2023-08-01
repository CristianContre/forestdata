import Container from "./components/container/Container";
import Container2 from "./components/container/Container2";
import styles from "./page.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.homeImage}>
        <Container
          img={{ alt: "Technology", src: "/dron-forest.jpg" }}
          title="Technology and innovation for the forestry sector"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className={styles.col2}>
        <Container2
          title="Sed fermentum sapien eu risus varius, sed hendrerit."
          description="Sed lacus sapien, ullamcorper id commodo nec, interdum nec metus.
          Vivamus ut velit est. Proin condimentum, neque ac varius congue, est
          neque congue enim, quis aliquet lectus est vitae tortor. Proin vel
          dolor nunc. Pellentesque posuere, erat a facilisis vulputate, risus
          lacus euismod diam, sed rutrum neque tellus et ipsum. Sed
          consectetur et lacus vel consequat. Sed non accumsan libero. In hac
          habitasse platea dictumst."
          url="https://jooinn.com/images/green-leaves-background-4.jpg"
        />
        <Container2
          title="Curabitur vulputate nisi magna, sed eleifend lorem condimentum."
          description="Vestibulum at nunc interdum, mattis mi a, suscipit lorem. Nam
          efficitur sapien ut lorem mattis pretium. Nunc tortor orci, maximus
          ac lacus non, placerat posuere nunc. Proin porttitor ac turpis in
          commodo. Etiam condimentum ultrices lorem sed sagittis. Vivamus ut
          convallis dolor. Nam mollis varius mattis. Suspendisse potenti.
          Quisque id tristique eros."
          url="https://jooinn.com/images600_/walk-in-the-forest..jpg"
          bgDark
        />
      </div>
    </>
  );
};

export default HomePage;
