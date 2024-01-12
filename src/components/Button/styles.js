import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const ButtonStyled = styled(Link)`
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.COLORS.dark.dark_800 : theme.COLORS.tints.tomato_100};

  display: flex;
  justify-content: center;

  text-decoration: none;
  color: #fff;
  padding: 12px 3em;
  border-radius: 5px;
  border: none;
  transition: 100ms linear;
  font-family: "Poppins";

  && {
    font-size: 1rem;
    font-weight: lighter;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.tints.tomato_300};
  }
`;
