import { MainDiv } from "./styles";
import { Brand } from "../../components/Brand";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { StyledForm, StyledInputField } from "./styles";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";

export const SignUp = () => {
  return (
    <div>
      <MainDiv>
        <Brand logo={polygon} title={"Food Explorer"} />

        <StyledForm>
          <h2>Crie sua conta</h2>
          <StyledInputField>
            <InputLabel
              label={"Seu nome"}
              placeholder={"Exemplo: Maria da Silva"}
              icon={FaUser}
            />
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

            <Button title={"Criar conta"} />

            <Input title={"Já tenho uma conta"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
};
