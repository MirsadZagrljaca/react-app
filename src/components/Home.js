import logo from "../assets/images/logo.png";

const styles = {
  image: {
    width: "400px"
  },
  title: {
    fontSize: "2em",
    margin: "15px",
    textAlign:"center"
  }
};

const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" style={styles.image} />
      <div style={styles.title}>Welcome to <br/> my first React App</div>
    </div>
  );
};

export default Home;
