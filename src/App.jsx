import Card from "./component/Card";
import Header from "./component/Header";
import "./app.css";
import { Davtalt } from "./component/Davtalt";
import { Davtalt2 } from "./component/Davtalt";
import { Davtalt3 } from "./component/Davtalt";
import { Tohimol } from "./component/Tohimol";
import News from "./component/News";
import Subscribe from "./component/Subscribe";
import Section3 from "./component/Section3";
function App() {
  return (
    <div>
      {" "}
      <Header />
      <div className="container">
        <div className="zar">
          <img src="/images/zar.png" alt="" />
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
        <div className="section2">
          <Tohimol />
          <News />
          <Davtalt3 />
        </div>

        <Subscribe />
        <Section3 />
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
