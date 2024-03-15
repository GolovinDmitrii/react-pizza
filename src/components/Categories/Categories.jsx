import React from 'react';

import styles from './Categories.module.scss';

export default function Categories({ categoryId, changeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => changeCategory(index)}
            className={categoryId === index ? styles.active : ''}
            key={value}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
