import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from '../images/logo.svg'

import s from '../../components/style/Footer.module.css'

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="Stuff" />
                </Link>
            </div>


            <div className={s.rights}>
                Developed by Webby Winges
            </div>

            <div className={s.socials}>
                <a href="https://instargam.com">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>
                <a href="https://facebook.com">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
                <a href="https://youtube.com">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    )
};

export default Footer;