import { MainDiv } from "./styles";
import { Brand } from "../../components/Brand";
import polygon from "../../assets/polygon.png";
import { StyledForm, StyledInputField } from "./styles";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FaRegUser } from "react-icons/fa6";
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
              label={"Seu nome"}
              placeholder={"Exemplo: Maria da Silva"}
              icon={FaRegUser}
            />
            <InputLabel
              label={"Email"}
              placeholder={"Exemplo: exemplo@exemplo.com.br"}
              icon={FaRegEnvelope}
            />

            <Button title={"Entrar"} />

            <Input title={"Criar uma conta"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
};
