import { useState, useEffect } from "react"

export const Timer = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {
      clearInterval(timerId)  // Limpa o timer quando o componente é desmontado para economizar memória
      console.log('timer foi limpo')
    }
  }, []);



  return (
    <div>Timer: {count}</div>
  )
}

