import React from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

export default function Home({ searchValue }) {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortId, setSortId] = React.useState({
    name: 'популярности / desc',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(false);

    const sortBy = sortId.sortProperty.replace('-', '');
    const order = sortId.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://65c64bc3e5b94dfca2e1528d.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId, searchValue, currentPage]);
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
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
}
