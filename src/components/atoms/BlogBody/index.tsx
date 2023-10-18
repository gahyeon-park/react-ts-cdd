import styled from "@emotion/styled";

const Body = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

interface TextI {
  text: string;
}

export const BlogBody = ({ text }: TextI) => {
  return <Body>{text}</Body>
}