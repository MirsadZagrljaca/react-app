import logo from "../assets/images/paragon.png";
import Navigator from "./Navigator";

const styles = {
  image: {
    width: "120px",
    height: "120px",
    margin: "20px"
  },
  text: {
    fontSize: "1.5em",
    float: "right",
    marginTop: "55px"
  },
  links: {
    color: "blue",
    marginTop: "35px"
  }
};

const AppHeader = () => {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="logo" style={styles.image} />
        <h2 style={styles.text}>React-App</h2>
      </div>
      <div className="right" style={styles.links}>
        <Navigator />
      </div>
    </header>
  );
};

export default AppHeader;
