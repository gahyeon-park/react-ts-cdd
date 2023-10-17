import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "stories/components/atoms/Button";
import { Count } from "stories/components/atoms/Count";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button label="-" onClick={() => setCount(count - 1)} />
      <Count value={count} />
      <Button label="+" onClick={() => setCount(count + 1)} />
    </Container>
  )
}