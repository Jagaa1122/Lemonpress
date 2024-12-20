export function Subscribe() {
  return (
    <div className="subscribe-box">
      {/* <img src="chocolate.webp" alt="" /> */}
      <div className="subscribe-detail">
        <p className="subscribe-type">NEWSLETTER</p>
        <h2 className="subscribe-title">
          Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ
        </h2>
        <div className="subscribe-input">
          <input type="email" name="email" placeholder="email address"></input>
          <button>Уншаад үзье</button>
        </div>
        <p>
          Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан имэйл
          <br></br>
          товхимлыг ажлын өдөр бүр, өглөө 07:00 цагт үнэгүй илгээнэ.
        </p>
      </div>
    </div>
  );
}
export default Subscribe;
