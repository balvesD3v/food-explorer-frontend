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
  padding: 12px 10px;
  border-radius: 5px;
  border: none;
  transition: 100ms linear;
  font-family: "Poppins";

  && {
    font-size: 1rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.tints.tomato_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 100%;
    && {
      font-size: 1rem;
    }
  }
`;
