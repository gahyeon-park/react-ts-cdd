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


export const BlogPost = () => {
  return (
    <Container>
      <BlogTitle title="blog heading" />
      <BlogBody text="blog body" />
    </Container>
  )
}