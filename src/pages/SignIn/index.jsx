import Brand from "../../components/Brand";
import InputLabel from "../../components/InputLabel";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FaLock, FaRegEnvelope } from "react-icons/fa6";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { StyledForm, StyledInputField } from "./styles";
import { MainDiv } from "./styles";

function SignIn() {
  return (
    <div>
      <MainDiv className="main-div">
        <Brand logo={polygon} title={"Food Explorer"} />

        <StyledForm>
          <h2>Faça login</h2>
          <StyledInputField>
            <InputLabel
              label={"Seu email"}
              placeholder={"Exemplo: exemplo@exemplo.com.br"}
              icon={FaRegEnvelope}
              type={"email"}
            />
            <InputLabel
              label={"Sua senha"}
              placeholder={"No mínimo 6 caracteres"}
              icon={FaLock}
              type={"password"}
            />

            <Button title={"Entrar"} />

            <Input title={"Criar uma conta"} link={"/register"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
}

export default SignIn;
