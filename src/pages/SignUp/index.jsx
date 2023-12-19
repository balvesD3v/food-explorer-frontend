import { MainDiv } from "./styles";
import Brand from "../../components/Brand";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { StyledForm, StyledInputField } from "./styles";
import Inputlabel from "../../components/Inputlabel";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FaLock, FaUser, FaRegEnvelope } from "react-icons/fa6";

function SignUp() {
  return (
    <div>
      <MainDiv>
        <Brand logo={polygon} title={"Food Explorer"} />

        <StyledForm>
          <h2>Crie sua conta</h2>
          <StyledInputField>
            <Inputlabel
              label={"Seu nome"}
              placeholder={"Exemplo: Maria da Silva"}
              icon={FaUser}
            />
            <Inputlabel
              label={"Seu email"}
              placeholder={"Exemplo: exemplo@exemplo.com.br"}
              icon={FaRegEnvelope}
              type={"email"}
            />

            <Inputlabel
              label={"Sua senha"}
              placeholder={"No mínimo 6 caracteres"}
              icon={FaLock}
              type={"password"}
            />

            <Button title={"Criar conta"} />

            <Input title={"Já tenho uma conta"} link={"/"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
}

export default SignUp;
