import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  width: calc(100% - 40px);
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`

export const AppTitle = () => {
  return <Container><Title>Blog Post</Title></Container>
}