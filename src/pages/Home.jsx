import React from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState({
    name: 'популярности / desc',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://65c64bc3e5b94dfca2e1528d.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortId.sortProperty.replace('-', '')}&order=${
        sortId.sortProperty.includes('-') ? 'asc' : 'desc'
      }`,
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} changeCategory={(id) => setCategoryId(id)} />
          <Sort sortId={sortId} changeSort={(id) => setSortId(id)} />
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
