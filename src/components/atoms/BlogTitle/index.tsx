import styled from "@emotion/styled";

const Title = styled.h2`
  font-weight: bold;
  mix-blend-mode: 10px;
`

type TitleT = {
  title: string;
}

export const BlogTitle = ({ title }: TitleT) => {
  return <Title>{title}</Title>
}