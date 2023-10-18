import styled from "@emotion/styled";
import { Label } from "components/atoms/Label";
import { InputText } from "components/atoms/InputText";

const Container = styled.div`
  margin-bottom: 16px;
`

interface InputI {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export const Input = ({ label, value, onChange }: InputI) => {
  return (
    <Container>
      <Label text={label} />
      <InputText value={value} onChange={onChange} />
    </Container>
  )
}