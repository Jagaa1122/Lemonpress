import Card from "./component/Card";
import Header from "./component/Header";
import "./app.css";

const cardItems = [
    {
        type:"Хэвлэлийн Мэдээ",
        img: "https://dash-api.yld.mn/api/image/3d5884ea-6a53-4cec-89aa-3e04982705c1",
        title:"Монгол бартендэр дэлхийд өрсөлдлөө",
        author:"12 сарын 13, 2024"
    }
]



function App() {
    return (
        <div>
            <Header />
            <div className="cards">
            {
            cardItems.map((news) => {
                return <Card title={news.title} img={news.img} type={news.type} author={news.author}/>

            })
          }
                



            </div>
        </div>
    );
}
export default App;