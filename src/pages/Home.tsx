import "./Home.css";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import FloatingActionButton from "../components/UI/FloatingActionButton";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div>
        <img src={require("../assets/bench.jpg")} height="700" width="1200"></img>
        <p>Marcel Hacker - Powerlifting Coach</p>
      </div>
      <FloatingActionButton />
      <Footer />
    </div>
  );
};
export default Home;
