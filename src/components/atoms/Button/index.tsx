import styled from "@emotion/styled";

type BtnStyleT = {
  color: string;
}

const Container = styled.button<BtnStyleT>`
  border: none;
  color: #fff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: .8;
  }

  &:active {
    box-shadow: inset 5px 5px 18px rgba(0, 0, 0, .2);
  }
`

// interface ButtonI extends BtnStyleT {
//   label: string;
//   onClick?: () => void;
// }

type ButtonT = {
  label: string;
  onClick?: () => void;
} & BtnStyleT;

export const Button = ({ label, color = "#ff5722", onClick }: ButtonT) => {
  return <Container color={color} onClick={onClick}>{label}</Container>
}