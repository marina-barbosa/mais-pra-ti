import PicPayButton from "../pic-pay-button/PicPayButton"
import Button from "../button/Button"

const Footer = () => {
  return (
    <footer>
      <nav className="navbar bg-neutral-700 text-neutral-200 flex justify-between items-center rounded px-8 py-2 h-16">

        <div className="flex gap-2">
          <PicPayButton />
          <Button text="Button" />
        </div>
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Marina Barbosa 2024</p>
      </nav>
    </footer>
  )
}

export default Footer