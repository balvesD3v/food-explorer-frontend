import { LeftContainer, RightContainer, DivStyled } from "./styles";

export const Detailfooter = () => {
  return (
    <DivStyled>
      <LeftContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="31"
          viewBox="0 0 27 31"
          fill="none"
        >
          <path
            d="M13.5391 0.909359L26.5294 8.40936V23.4094L13.5391 30.9094L0.548681 23.4094V8.40936L13.5391 0.909359Z"
            fill="#4D585E"
          />
        </svg>
        <span>food explorer</span>
      </LeftContainer>
      <RightContainer>
        <span>© 2023 - Todos os direitos reservados.</span>
      </RightContainer>
    </DivStyled>
  );
};
