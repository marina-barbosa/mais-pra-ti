import { useState } from "react"
const Tabs = () => {
  const [currentContent, setCurrentContent] = useState(0)

  const contents = [
    { title: 'Tab 1', content: 'Conteúdo da Tab 1' },
    { title: 'Tab 2', content: 'DOIS' },
    { title: 'Tab 3', content: '3 3 3 3 3 3 3 3 3 3' },
  ]
  return (
    <div className="border rounded">
      <nav>
        <ul className="nav-links flex border-b">
          {contents.map((content, index) => (
            <li key={index} className="nav-link min-w-40 text-center cursor-pointer border-x px-5 hover:bg-neutral-600 transition duration-300" onClick={() => { setCurrentContent(index) }}>{content.title}</li>
          ))
          }
        </ul>
      </nav>
      <div className="content p-5 h-60 flex justify-center items-center">
        {contents[currentContent].content}
      </div>
    </div>
  )
}

export default Tabs