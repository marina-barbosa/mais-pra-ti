export function Gallery(){
  return(
    <div className="gallery-grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div className="gallery-item" key={index}></div>
      ))}
    </div>
  )
}


