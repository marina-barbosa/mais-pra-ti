import './App.css'
import styled from 'styled-components'
import { LanguageTranslate } from './components/languageTranslator'
import { MovieSearchEngine } from './components/movieSearchEngine'
import { QRCodeGenerator } from './components/QRcodeGenerator'
import { IpAddressFinder } from './components/IPadressFinder'
import Login from './components/login'


const Title = styled.h2`
  font-family: 'Helvetica';
  font-size: 1.5em;
  text-align: center;
  color: papayawhip;
  background-color: #BF4F74;
  padding: 1em;  
  margin: 1em;
  border-radius: 3px;
`

function App() {

  return (
    <>
      <Title>aula 42</Title>
      {/* <LanguageTranslate /> */}
      {/* <MovieSearchEngine /> */}
      {/* <QRCodeGenerator/> */}
      {/* <IpAddressFinder /> */}
      <Login />
    </>
  )
}
export default App
