import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Container = styled.div`
  font-family: 'Helvetica';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  font-size: 1.2em;
  color: #555;
`

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 1.5em;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
`

const QRContainer = styled.div`
  padding: 16px;
`;
// opa
export const QRCodeGenerator = () => {
  const [text, setText] = useState('')
  return (
    <Container>
      <Title>QRCode Generator</Title>
      <Input
        text='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <QRContainer>
        <QRCode value={text} size={256} />
      </QRContainer>
    </Container>
  )
}