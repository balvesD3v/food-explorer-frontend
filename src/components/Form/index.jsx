import { StyledForm, StyledInputField } from "./styles";
import { InputLabel } from "../InputLabel";
import { Button } from "../Button/index";
import { Input } from "../Input/index";

export const Form = () => {
  return (
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
        <InputLabel label={"Senha"} placeholder={"No mínimo 6 caracteres"} />

        <Button />

        <Input />
      </StyledInputField>
    </StyledForm>
  );
};
