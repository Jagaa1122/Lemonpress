import { section3news } from "./array";
export function Subscribe() {
    return (
        <div className="section3">
            <div className="section3-cards">
                {section3news.map((news) => {
                    return (
                        <div className="section3-card">
                            <div className="section3-card-img"><img src={news.image} /></div>
                            <div className="section3-card-detail">
                                <p className="section3-card-type">{news.type}</p>
                                <h2 className="section3-card-title">{news.title}</h2>
                                <p className="section3-card-date">{news.date}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className="section3-ads">
                <div className="section3-ads-sticky">
                    <img src="/images/section3zar1.png" />
                    <img src="/images/section3zar.png" />
                </div>
            </div>
        </div>
    );
}
export default Subscribe;