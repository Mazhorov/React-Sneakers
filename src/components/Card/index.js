import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, onPlus, title, imageUrl, price}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/added.svg' : '/img/plus.svg'}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
