import styled from "@emotion/styled";

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`

export const DialogTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>
}