import React from 'react';

import styles from './Categories.module.scss';

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? styles.active : ''}
            key={value}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
