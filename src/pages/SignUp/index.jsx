import { MainDiv } from "./styles";
import { Brand } from "../../components/Brand";
import { Form } from "../../components/Form";
import polygon from "../../assets/polygon.png";

export const SignUp = () => {
  return (
    <MainDiv>
      <Brand logo={polygon} title={"Food Explorer"} />
      <Form />
    </MainDiv>
  );
};
