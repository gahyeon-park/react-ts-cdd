import styled from "@emotion/styled";
import { BlogTitle } from "components/atoms/BlogTitle";
import { BlogBody } from "components/atoms/BlogBody";

const Container = styled.div`
background-color: #fff;
padding: 20px;
margin: 20px;
border-radius: 10px;
box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #fff;
max-width: 800px;
`

interface BlogItemI {
  title: string;
  text: string;
}

export const BlogItem = ({ title, text }: BlogItemI) => {
  return (
    <Container>
      <BlogTitle title={title} />
      <BlogBody text={text} />
    </Container>
  )
}