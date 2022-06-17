import "./Home.css";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import FloatingActionButton from "../components/UI/FloatingActionButton";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <img src={require("../assets/bench.png")} height="700" width="1200"></img>
      <FloatingActionButton />
      <Footer />
    </div>
  );
};
export default Home;
