import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const BrandDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  h1 {
    font-family: "roboto", sans-serif;
    font-weight: bold;
    font-size: 42px;
    color: #fff;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    margin-top: 5em;
    h1 {
      font-size: 3rem;
    }

    img {
      width: 3rem;
    }
  }
`;
