import { cardItems, newsItems, sideMenu } from "./array";
import Card from "./Card";

export function Davtalt() {
  return (
    <div>
      <div className="medeenii-ner">
        <h2>Business</h2>
        <span className="zuraas"></span>
        <p>iluu uzeh</p>
      </div>
      {
        <div className="cards">
          {cardItems.map((news) => {
            return (
              <Card
                title={news.title}
                img={news.img}
                type={news.type}
                author={news.author}
              />
            );
          })}
        </div>
      }
    </div>
  );
}
export function Davtalt2() {
  return (
    <div>
      <div className="medeenii-ner">
        <h2>Business</h2>
        <span className="zuraas"></span>
        <p>iluu uzeh</p>
      </div>
      {
        <div className="cards">
          {newsItems.map((news) => {
            return (
              <Card
                title={news.title}
                img={news.img}
                type={news.type}
                author={news.author}
              />
            );
          })}
        </div>
      }
    </div>
  );
}
export function Davtalt3() {
  return (
    <div className="mainpost1">
      {sideMenu.map((side) => {
        return (
          <div>
            <div className="mainpost1">
              <img src={side.img} alt="" />
            </div>
            {side.text.map((text) => {
              return (
                <div className="post-detail">
                  <p className="post-type1">{text.type}</p>
                  <h2 className="post-title1">{text.title}</h2>
                  <p className="post-date1">{text.date}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
