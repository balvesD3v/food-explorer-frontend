import { DivStyled } from "./styles";
import { MdOutlineFileUpload } from "react-icons/md";

export const Sendimage = () => {
  return (
    <DivStyled>
      <span> Imagem do prato </span>
      <label htmlFor="fileInput">
        <MdOutlineFileUpload />
        Selecione imagem{" "}
      </label>
      <input type="file" id="fileInput" />
    </DivStyled>
  );
};
