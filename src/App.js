import React from 'react';
import Card from './components/Card';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63e69b4283c0e85a8696eb34.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-between">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
