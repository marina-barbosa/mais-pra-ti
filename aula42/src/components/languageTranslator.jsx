import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 1em;
  background: papayawhip;
  border-radius: 50px;
  margin: 0.5rem 1rem;
`
const Title = styled.h2`
  text-align: center;
  color: #BF4F74;
`

const Label = styled.label`
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`

const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  background: #BF4F74;
  color:  white;
  transition: all 200ms ease-in-out;
  display: inline-block;
  margin: 0.5rem 1rem;
`

const TranslatedText = styled.p`  
  border: 3px solid papayawhip ;
  border-radius: 50px;
  margin: 1rem 0;
  padding: 1em;
`

export const LanguageTranslate = () => {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('pt')

  const translateText = async () => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        },
      })

      setTranslatedText(response.data.responseData.translatedText)
    } catch (error) {
      console.error("Erro ao traduzir o texto: ", error)
    }
  }
  return (
    <Container>
      <Title>Language Translator</Title>
      <Row>

        <div>
          <Label>Source Language:</Label>
          <select value={sourceLang} onChange={event => setSourceLang(event.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italiano</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>

        <div>
          <Label>Target Language:</Label>
          <select value={targetLang} onChange={event => setTargetLang(event.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italiano</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>
      </Row>

      <input type="text" value={text} onChange={event => setText(event.target.value)} placeholder='type here' />

      <Button onClick={translateText}>Translate</Button>

      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
    </Container>
  )
}