import { MainDiv } from "./styles";
import { Brand } from "../../components/Brand";
import polygon from "../../assets/polygon.png";
import { StyledForm, StyledInputField } from "./styles";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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
            />
            <InputLabel
              label={"Email"}
              placeholder={"Exemplo: exemplo@exemplo.com.br"}
            />

            <InputLabel
              label={"Senha"}
              placeholder={"No mínimo 6 caracteres"}
            />

            <Button title={"Criar conta"} />

            <Input title={"Já tenho uma conta"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
};
