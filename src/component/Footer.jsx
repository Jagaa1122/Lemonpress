import { section3news } from "./array";
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-icons">
          <div>
            <img src="./x.svg" alt="" />
          </div>
          <div>
            <img src="./facebook.svg" alt="" />
          </div>
          <div>
            <img src="./youtube.svg" alt="" />
          </div>
          <div>
            <img src="./ig.svg" alt="" />
          </div>
          <div>
            <img src="./linked.svg" alt="" />
          </div>
        </div>

      </div>
      <div className="footer-middle">
        <div className="footer-middle-pic">
          <img src="./images/lemonpress-white.svg" alt="" />
          <p>Бид санхүү, хөрөнгө оруулалтын мэдээ<br></br> мэдээллийг ажлын өдрүүдэд 7:00 цагт таны
            <br></br>имэйл хаягт хүргэх болно.</p>
          <p>Утас: 7755 2400<br></br>
            Имэйл: daily@lemonpress.mn</p>
        </div>
        <div className="footer-middle-para">
          <h2>Товхимол</h2>
          <p>Lemon Press</p>
          <p> Inside Mongolia</p>
        </div>
        <div className="footer-middle-para">
          <h2>Бидний тухай</h2>
          <p>Бидний тухай</p>
          <p>Хамтран ажиллах</p>
          <p> Редакцын бодлого</p>

        </div>



      </div>

      <div className="footer-bottom">
        <p>© Lemon Press Digital, Inc. All Rights Reserved.</p>
        <div>Powered by Jagaa</div>
      </div>
    </div>
  );
}
export default Footer;
