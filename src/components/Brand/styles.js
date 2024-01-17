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
    margin-bottom: 2em;

    img {
      width: 12%;
    }
    h1 {
      font-size: 34px;
    }
  }
`;
