import styled from "@emotion/styled";

const Container = styled.div`
  font-size: 1.2rem;
`

export const Label = ({ text }: { text: string }) => {
  return <Container>{text}</Container>
}