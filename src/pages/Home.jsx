import React from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://65c64bc3e5b94dfca2e1528d.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }`,
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} changeCategory={(id) => setCategoryId(id)} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((obj) => <PizzaBlock {...obj} key={obj.title} />)}
        </div>
      </div>
    </>
  );
}
