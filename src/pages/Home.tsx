import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import AthletPaper from "../components/UI/Paper";
import paperInterface from "../interfaces/AthletePaper";

const Docs = () => {
  const data: paperInterface[] = [{name: "Marcel", weightclass: "105 kg"}];
  return (
    <div>
      <Header />
      <AthletPaper name={data[0].name} weightclass={data[0].weightclass} />
      <Footer />
    </div>
  );
};
export default Docs;
