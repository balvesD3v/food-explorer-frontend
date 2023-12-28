import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MainDiv } from "./styles";
import Brand from "../../components/Brand";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { StyledForm, StyledInputField } from "./styles";
import InputLabel from "../../components/InputLabel";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FaLock, FaUser, FaRegEnvelope } from "react-icons/fa6";
import { api } from "../../services/api";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password) {
      return toast.error("Preencha todos os campos");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar");
        }
      });
  };

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
              type={"text"}
              onChange={(e) => setName(e.target.value)}
            />
            <InputLabel
              label={"Seu email"}
              placeholder={"Exemplo: exemplo@exemplo.com.br"}
              icon={FaRegEnvelope}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputLabel
              label={"Sua senha"}
              placeholder={"No mínimo 6 caracteres"}
              icon={FaLock}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button title={"Criar conta"} onClick={handleSignUp} />
            <ToastContainer theme="colored" />

            <Input title={"Já tenho uma conta"} link={"/"} />
          </StyledInputField>
        </StyledForm>
      </MainDiv>
    </div>
  );
}

export default SignUp;
