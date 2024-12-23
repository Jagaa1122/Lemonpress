function Header() {
  return (
    <div className="header">
      <img src="https://lemonpress.mn/logo/lemonpress.svg" />
      <ul className="headerNav">
        <li>
          Товхимол <img className="arrow" src="/images/arrowdown.svg" />
          <ul className="dropDown">
            <li>Lemon Press</li>
            <li>Inside Mongolia</li>
            <li>Тусгай дугаар</li>
          </ul>
        </li>
        <li>
          Нийтлэлүүд <img className="arrow" src="/images/arrowdown.svg" />
          <ul className="dropDown">
            <li>Lemon Press</li>
            <li>Inside Mongolia</li>
            <li>Тусгай дугаар</li>
          </ul>
        </li>
        <li>
          Цувралууд <img className="arrow" src="/images/arrowdown.svg" />
          <ul className="dropDown">
            <li>Lemon Press</li>
            <li>Inside Mongolia</li>
            <li>Тусгай дугаар</li>
          </ul>
        </li>
        <li>
          Подкаст <img className="arrow" src="/images/arrowdown.svg" />
          <ul className="dropDown">
            <li>Lemon Press</li>
            <li>Inside Mongolia</li>
            <li>Тусгай дугаар</li>
          </ul>
        </li>
        <li>
          Бидний тухай <img className="arrow" src="/images/arrowdown.svg" />
          <ul className="dropDown">
            <li>Lemon Press</li>
            <li>Inside Mongolia</li>
            <li>Тусгай дугаар</li>
          </ul>
        </li>
      </ul>
      <div className="searchbtn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <button className="bluebtn">Уншаад үзье</button>
    </div>
  );
}
export default Header;
