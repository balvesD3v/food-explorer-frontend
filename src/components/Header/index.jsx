import { Brand } from "../Brand";
import polygon from "../../assets/polygon.png";
import { InputLabel } from "../InputLabel";
import { FaSistrix } from "react-icons/fa6";

export const Header = () => {
  return (
    <div>
      <Brand logo={polygon} title={"Food explorer"} />
      <InputLabel
        placeholder={"Busque por pratos ou ingredientes"}
        icon={FaSistrix}
      />
    </div>
  );
};
