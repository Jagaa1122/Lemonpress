import Card from "./component/Card";
import Header from "./component/Header";
import "./app.css";
import { Davtalt } from "./component/Davtalt";
import { Davtalt2 } from "./component/Davtalt";
import { Davtalt3 } from "./component/Davtalt";

function App() {
  return (
    <div>
      {" "}
      <Header />
      <div className="container">
        <div className="zar">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/20c223c1-36b0-4855-9e9e-cfe9f6a233cf.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T011336Z&X-Goog-Expires=86399&X-Goog-Signature=582b6cfa79adba81a4acb28f9c3386b0ebef9f59c1a694ac69364a7070d9fff629b9d0da40ad73a52ac1ecd3c8a0dd4f1ad3271cbbf854ddbd4b0a32b88bcefdda567589d20beef19f45a1f599d43eb8ef51bfb32931628f65ef56671981f3100d1937a3aa4f479b4a7d2be86c84385143f3156068a6ee6b53f71708cd3f41d48cc69ef46ee791e8ade91d39b1b07b0af2d9111b9dadee8e8e4781460f8d941f3175b2c3cf77e2b7dab9b1c7c9f2a94d3a092ac2c81b873ca4e99e32b54af14c67edff56c6fc5f53891a07e16272e7efee9dcb422f9c68378e83f1855039115609625ae1809871514f48de853e679969c476d38c9bb7c11d210d1d995f534a91&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
        <div className="lemonade">
          <div className="lemon">
            <p>LEMONADE</p>
          </div>
          <div className="lemon1">
            <p>
              Х.Энхжин:&nbsp;Тийрэлтэт онгоцны Монголын анхны эмэгтэй нисгэгч
            </p>
          </div>
        </div>

        <div className="container1">
          <div className="mainpost">
            <img
              src="https://dash-api.yld.mn/api/image/5bebd0f5-effa-4355-a2a4-8b5524096915"
              alt=""
            />
            <div className="post-detail">
              <p className="post-type">Бизнес</p>
              <h2 className="post-title">
                Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ
              </h2>
              <p className="post-date">12 сарын 18, 2024</p>
            </div>
          </div>
          <Davtalt3 />
        </div>

        <Davtalt />
        <Davtalt2 />
        <Davtalt />
        <Davtalt2 />
        <Davtalt />

        {/* <div className="cards">
            {
            cardItems.map((news) => {
                return <Card title={news.title} img={news.img} type={news.type} author={news.author}/>

            })
          }
            </div> */}

        {/* <div className="cards">
            {
            cardItems.map((news) => {
                return <Card title={news.title} img={news.img} type={news.type} author={news.author}/>

            })
          }
            </div> */}
      </div>
    </div>
  );
}
export default App;
