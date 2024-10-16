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
  text-align: center;
  color: #BF4F74;
`

const Input = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
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

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 16px; 
  width: 100%;
  max-width: 1200px; 

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`


// cARD pros MOVIES
const Card = styled.div`
  display: flex; 

  // width: 720px;
  // height: 540px;

  width: 100%;
  height: auto;
  flex-direction: column;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  border: 3px solid #BF4F74;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const Poster = styled.img`
  // width: 50%;
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 16px;
`;

const TitleCard = styled.h2`
  margin: 0 0 8px;
  font-size: 1.5em;
`;

const Detail = styled.p`
  margin: 4px 0;
  font-size: 0.9em;
`;


export const MovieSearchEngine = () => {
  const apiKey = 'e3e33bbc'
  const [movie, setMovie] = useState([])
  const [query, setQuery] = useState('')

  const searchMovies = async () => {
    try {
      // https://developer.themoviedb.org/reference/intro/getting-started
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&plot=full&apikey=${apiKey}`)
      setMovie(response.data.Search || []);
      // console.log(response.data)
      console.log(response.data.Search[0].Poster)

    } catch (error) {
      console.error('Erro: ', error)
    }
  }

  return (
    <Container>
      <Title>Search Engine</Title>

      <Input
        type='text'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />

      <Button onClick={searchMovies}>Search</Button>

      <MoviesContainer>
        {movie && movie.map((item, index) => (
          <Card key={index}>
            <Poster src={item.Poster} alt={item.Title} />
            <Content>
              <TitleCard>{item.Title}</TitleCard>
              <Detail><strong>Year:</strong>{item.Year}</Detail>
            </Content>
          </Card>
        ))}
      </MoviesContainer>

    </Container>

  )
}




