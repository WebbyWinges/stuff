import React from "react";
import pc from '../images/computer.png';

import s from '../style/Home.module.css'

const Poster = () => {
    return (
        <section className={s.home}>
            <div className={s.title}>BIG SALE 20%</div>
            <div className={s.product}>
                <div className={s.text}>
                    <div className={s.subtitle}>the bestseller of 2022</div>
                    <h1 className={s.head}>LENNON R2D2 with NVIDIA 5090TI</h1>
                    <button className={s.button}>Shop Now</button>
                </div>
                <div className={s.image}>
                    <img src={pc} alt=""/>
                </div>
            </div>
        </section>
    )
};

export default Poster;