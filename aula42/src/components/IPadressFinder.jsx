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

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 1.5em;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
`

const Content = styled.div`
  padding: 16px;
`;


export const IpAddressFinder = () => {
  const [ip, setIp] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleIpFinder = async () => {
    try {
      const response = await axios.get(`https://ipinfo.io/192.168.1.23/json`);
      // setIp(response.data.ip);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Find Your IP Address</Title>
      {/* <Input
        type="text"
        placeholder="Digite o IP aqui"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      <button onClick={handleIpFinder}>Search</button>
      {/* {ip && (
        <Content>
          <p>Your IP address is: {ip}</p>
        </Content>
      )} */}
    </Container>
  );
};