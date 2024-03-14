import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import React from 'react';

export default function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch('https://65c64bc3e5b94dfca2e1528d.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setPizzas(json));
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj) => (
                <PizzaBlock {...obj} key={obj.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
