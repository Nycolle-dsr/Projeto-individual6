import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Economize dinheiro e aproveite seu tempo!</h1>
      <span className="mailDesc">Cadastre-se e enviaremos as melhores ofertas para você</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Seu Email" />
        <button>Inscreva-se</button>
      </div>
    </div>
  )
}

export default MailList