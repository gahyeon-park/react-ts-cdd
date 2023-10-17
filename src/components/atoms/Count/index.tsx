import styled from "@emotion/styled";

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface CountI {
  value: number;
}

export const Count = ({ value }: CountI) => {
  return <Container>{value}</Container>
}