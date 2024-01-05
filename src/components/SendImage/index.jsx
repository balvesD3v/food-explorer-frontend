import { DivStyled } from "./styles";
import { MdOutlineFileUpload } from "react-icons/md";

function SendImage({ ...rest }) {
  return (
    <DivStyled>
      <span> Imagem do prato </span>
      <label htmlFor="fileInput">
        <MdOutlineFileUpload aria-label="Ícone de upload de arquivo" />
        Selecione imagem
      </label>
      <input type="file" id="fileInput" accept="image/*" {...rest} />
    </DivStyled>
  );
}

export default SendImage;
