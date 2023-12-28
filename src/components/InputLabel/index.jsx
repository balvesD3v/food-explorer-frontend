/* eslint-disable react/prop-types */
import { DivStyled, InputWrapper } from "./styles";

function InputLabel({ icon: Icon, label, placeholder, type, ...rest }) {
  return (
    <DivStyled>
      {label && <label>{label}</label>}
      <InputWrapper className="input-container">
        {Icon && <Icon className="input-icon" />}
        <input type={type} placeholder={placeholder} {...rest} />
      </InputWrapper>
    </DivStyled>
  );
}

export default InputLabel;
