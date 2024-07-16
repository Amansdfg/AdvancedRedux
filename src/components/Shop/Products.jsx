import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[
    {
        id:"p1",
        price:6,
        title:"My first Book",
        description:"The first book I ever wrote",
    },
    {
        id:"p2",
        price:8,
        title:"My second Book",
        description:"The second book I ever wrote",
    },
    {
        id:"p3",
        price:10,
        title:"My third Book",
        description:"The third book I ever wrote",
    }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item=>(
            <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
           />
        ))}
      </ul>
    </section>
  );
};

export default Products;
