import styled from "@emotion/styled";

const Container = styled.button`
  border: none;
  color: #fff;
  background-color: #ff5722;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`

interface ButtonI {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonI) => {
  return <Container onClick={onClick}>{label}</Container>
}