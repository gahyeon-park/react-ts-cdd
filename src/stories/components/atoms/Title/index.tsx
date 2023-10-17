import styled from "@emotion/styled";

const Label = styled.h1`
  margin-bottom: 32px;
`

interface TitleI {
  title: string;
}

export const Title = ({ title }: TitleI) => {
  return <Label>{title}</Label>
}