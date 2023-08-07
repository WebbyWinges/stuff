import React from "react";
import s from '../style/Categories.module.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = ({ title, products = [], amnout}) => {
    const list = products.filter((_, i) => i < amnout)

    return (
        <section className={s.section}>
            <h2>{title}</h2>
            <div className={s.list}>
                {list.map(({id, name, image}) =>(
                    <Link to={`categories/${id}`} className={s.item} key={id}>
                        <div className={s.image} style={ { backgroundImage: `url( ${image })` } } />
                        <h3 className={s.title}>{name}</h3>
                    </Link>
                ))}
            </div>

        </section>
    )
};

export default Categories;