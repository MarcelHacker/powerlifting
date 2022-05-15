import {useParams} from "react-router-dom";

const Athlete = () => {
  const {id} = useParams();
  return <div>Athlete {id}</div>;
};
export default Athlete;
