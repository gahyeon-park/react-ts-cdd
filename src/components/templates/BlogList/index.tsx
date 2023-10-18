import styled from "@emotion/styled";
import { Header } from "components/organisms/Header";
import { BlogItem } from "components/organisms/BlogItem";
import { Button } from "components/atoms/Button";
import { RegisterBlogDialog } from "components/organisms/RegisterBlogDialog";
import { useState } from "react";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #eee;
overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`

// Post 인터페이스를 다른곳에서도 사용 가능하도록 export로 내보내기함.
export interface PostI {
  id: number;
  title: string;
  body: string;
}

interface BlogListI {
  posts?: PostI[]
}

// posts = [] : 초기값으로 빈 리스트를 설정하여 데이터가 없는 경우에도 에러가 발생하지 않도록..
export const BlogList = ({ posts = [] }: BlogListI) => {
  const [showDialog, setShowDialog] = useState(false);
  // const posts = [
  //   { id: 1, title: "blog title 1", body: "blog body 1" },
  //   { id: 2, title: "blog title 2", body: "blog body 2" },
  //   { id: 3, title: "blog title 3", body: "blog body 3" }
  // ];

  return (
    <Container>
      <Header />
      {posts.map(post => <BlogItem key={post.id} title={post.title} text={post.body} />)}
      <ButtonContainer><Button label="등록" onClick={() => setShowDialog(true)} /></ButtonContainer>
      {showDialog && <RegisterBlogDialog onClose={() => setShowDialog(false)} />}
    </Container>
  )
}