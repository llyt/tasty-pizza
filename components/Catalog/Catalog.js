import styles from './Catalog.module.sass'
import PizzaCard from '../PizzaCard/PizzaCard'
import pizzas from '../../mocs/Pizzas'

const Catalog = () => {
  return (
    <section className='container'>
      <div className={styles.Catalog}>
        {pizzas.map(({ id, image, title, description, startPrice }, index) => (
          <PizzaCard
            key={title + index}
            id={`${id}`}
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
