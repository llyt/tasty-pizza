import styles from './Catalog.module.sass'
import PizzaCard from '../PizzaCard/PizzaCard'
import { useSelector } from 'react-redux'

const Catalog = () => {
  const pizzas = useSelector((state) => state.catalog.all)
  return (
    <section className='container'>
      <div className={styles.Catalog}>
        {pizzas.map(({ _id, image, title, description, startPrice }, index) => (
          <PizzaCard
            key={title + index}
            id={`${_id}`}
            image={image}
            title={title}
            description={description}
            startPrice={startPrice}
          />
        ))}
      </div>
    </section>
  )
}

export default Catalog
