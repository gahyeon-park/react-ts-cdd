import styled from "@emotion/styled"

const Container = styled.input`
  font-size: 1.2rem;
`

interface InputTextI {
  value: string;
  onChange: (text: string) => void;
}

export const InputText = ({ value, onChange }: InputTextI) => {
  return <Container value={value} onChange={(e) => onChange(e.target.value)}></Container>
}