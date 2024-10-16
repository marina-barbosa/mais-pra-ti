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
`;


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

const Ratings = styled.div`
  margin-top: 16px;
`;

const RatingItem = styled.p`
  margin: 4px 0;
  font-size: 0.9em;
`;

export const MovieSearchEngine = () => {
  const apiKey = 'e3e33bbc'
  const [movie, setMovie] = useState([])
  const [query, setQuery] = useState('')

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
      setMovie(response.data.Search || []);
      // console.log(response.data.Search[0].Title)
      // console.log(response.data.Search)

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

              {/* <Detail><strong>Released:</strong> 05 May 2017</Detail>
              <Detail><strong>Runtime:</strong> 136 min</Detail>
              <Detail><strong>Genre:</strong> Action, Adventure, Comedy</Detail>
              <Detail><strong>Director:</strong> James Gunn</Detail>
              <Detail><strong>Actors:</strong> Chris Pratt, Zoe Saldana, Dave Bautista</Detail>
              <Detail><strong>Plot:</strong> The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.</Detail>
              <Detail><strong>Language:</strong> English</Detail>
              <Detail><strong>Awards:</strong> Nominated for 1 Oscar. 15 wins & 60 nominations total</Detail>

              <Ratings>
                <RatingItem><strong>Internet Movie Database:</strong> 7.6/10</RatingItem>
                <RatingItem><strong>Rotten Tomatoes:</strong> 85%</RatingItem>
                <RatingItem><strong>Metacritic:</strong> 67/100</RatingItem>
              </Ratings> */}
            </Content>
          </Card>
        ))}
      </MoviesContainer>

    </Container>

  )
}




