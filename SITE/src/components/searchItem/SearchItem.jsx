import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street </h1>
        <span className="siDistance">500m do centro</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
         Apartaomento com ar-condicionado
        </span>
        <span className="siFeatures">
          Apartamento• 1 banheiro • 21m² 1 cama de casal
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
         Você pode cancelar, então pode ficar tranquilo
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excelente</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Inclui taxis</span>
          <button className="siCheckButton">Veja as avaliaçôes</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;