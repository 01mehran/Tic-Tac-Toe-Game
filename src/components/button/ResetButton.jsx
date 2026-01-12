import styled from "styled-components";

let Button = styled.button`
  border: 0;
  outline: 0;
  padding: 0.5rem 3rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.4rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 1px 3px var(--blue);
  color: var(--blue);
  transition: all 1s ease-out;

  &:active {
    transform: scale(0.94);
    box-shadow: 0 0 1px 3px var(--white);
  }

  &:hover span {
    color: var(--blue);
  }
`;

let NewSpan = styled.span`
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    border-radius: 0.4rem;
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.2s ease-in-out;
    z-index: -1;
  }

  ${Button}:hover &::before {
    width: 100%;
  }
`;

export const ResetButton = ({ startNewGame }) => {
  return (
    <Button onClick={startNewGame}>
      <NewSpan>New game</NewSpan>
    </Button>
  );
};
