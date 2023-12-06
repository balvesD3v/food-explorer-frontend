import { MainDiv } from "./styles";
import { Brand } from "../../components/Brand";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { StyledForm, StyledInputField } from "./styles";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FaLock } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";

export const SignIn = () => {
  return (
    <div>
      <MainDiv>
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

            <Input title={"Criar uma conta"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
};
