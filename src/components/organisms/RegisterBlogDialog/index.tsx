import { useState } from "react";
import styled from "@emotion/styled";
import { DialogTitle } from "components/atoms/DialogTitle";
import { Input } from "components/molecules/Input";
import { Button } from "components/atoms/Button";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

interface RegisterBlogDialogI {
  onClose: () => void;
}

export const RegisterBlogDialog = ({ onClose }: RegisterBlogDialogI) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const registerPost = () => {
    if (title === '' || body === '') return;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // API를 사용해 데이터를 저장할 때에는 GET이 아닌 POST
      body: JSON.stringify({
        userId: 1,
        title,
        body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    }).then(res => res.json())
      .then(json => {
        console.log(json);
        if (typeof onClose === "function") onClose();
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Container>
      <Background />
      <Contents>
        <DialogTitle title="블로그 글 등록" />
        <Input label="Title:" value={title} onChange={setTitle} />
        <Input label="Body:" value={body} onChange={setBody} />
        <Actions>
          <Button label="등록하기" onClick={registerPost} />
          <Button label="닫기" color="#304ffe" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  )
}