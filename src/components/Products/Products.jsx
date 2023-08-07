import React from "react";
import { Link } from "react-router-dom";
import s from '../style/Products.module.css'


const Products = ({ title, products = [], amnout, style = {} }) => {
    const list = products.filter((_, i) => i < amnout)


    return <section className={s.products}> {title && <h2>{title}</h2>}
        <div className={s.list}>
            {list.map(({ id, images, title, category: { name: cat }, price } ) =>
                <Link className={s.product} to={`/products/${id}`} key={id}>
                    <div className={s.image} style={ { backgroundImage: `url( ${images[0] })` } } />
                        <div className={s.wrapper}> <h3 className={s.title}> {title} </h3> 
                            <div className={s.cat}> {cat} </div>
                            <div className={s.info}>
                                <div className={s.prices}>
                                    <div className={s.price}>{price}$</div>
                                    <div className={s.odlPrice}><strike>{Math.floor(price * 0.8)}$</strike></div>
                                </div>
                                <div className={s.purchases}>{Math.floor(Math.random * 20 + 1)}purchased </div>
                            </div>
                        </div>
                </Link>)}
        </div>
    </section>;


};

export default Products;