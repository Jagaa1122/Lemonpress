import { cardItems } from "./Array";
import Card from "./Card";
import { newsItems } from "./Array";

export function Davtalt () {
    return <div>
 <div className="medeenii-ner">
    <h2>Business</h2>
  <span className="zuraas"></span>
    <p>iluu uzeh</p>
</div>
{<div className="cards">
            {
            cardItems.map((news) => {
                return <Card title={news.title} img={news.img} type={news.type} author={news.author}/>

            })
          }
            </div>}
    </div>
   
}
export function Davtalt2 () {
  return <div>
<div className="medeenii-ner">
  <h2>Business</h2>
<span className="zuraas"></span>
  <p>iluu uzeh</p>
</div>
{<div className="cards">
          {
          newsItems.map((news) => {
              return <Card title={news.title} img={news.img} type={news.type} author={news.author}/>

          })
        }
          </div>}
  </div>
 
}