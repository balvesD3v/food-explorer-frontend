import Brand from "../../components/Brand";
import InputLabel from "../../components/InputLabel";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FaLock, FaRegEnvelope } from "react-icons/fa6";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { StyledForm, StyledInputField } from "./styles";
import { MainDiv } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <div>
      <MainDiv className="main-div">
        <Brand logo={polygon} title={"food explorer"} />

        <StyledForm>
          <h2>Faça login</h2>
          <StyledInputField>
            <InputLabel
              label={"Seu email"}
              placeholder={"Exemplo: exemplo@exemplo.com.br"}
              icon={FaRegEnvelope}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel
              label={"Sua senha"}
              placeholder={"No mínimo 6 caracteres"}
              icon={FaLock}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button title={"Entrar"} onClick={handleSignIn} />

            <Input title={"Criar uma conta"} link={"/register"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
}

export default SignIn;
