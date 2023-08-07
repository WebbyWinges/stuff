import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import s from '../../components/style/Header.module.css'
import { ROUTES } from "../../utils/routes";

import logo from '../images/logo.svg'
import avatar from '../images/avatar.jpg'
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("");

    const {currentUser, cart} = useSelector(({user}) => user);

    const [values, setValues] = useState({name:"Guest", avatar: avatar});

    const {data, isLoading} = useGetProductsQuery({title:searchValue});

    useEffect(() => {
        if(!currentUser) return;

        setValues(currentUser)
    }, [currentUser]);


    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE)
    };


    const handleSearch = ({ target: {value} }) => {
        setSearchValue(value) 
    }
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="Stuff" />
                </Link>
            </div>
            <div className={s.info}>
                <div className={s.user} onClick={handleClick}>
                    <div className={s.avatar} style={{ backgroundImage: `url(${values.avatar})` }}></div> 
                    <div className={s.username}>{values.name}</div>
                
                </div>
                    <form className={s.form}>

                        <div className='icon'>
                            <svg className="icon">
                                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                            </svg>
                        </div>

                        <div className={s.input}>
                            <input type="search" name="search"
                                placeholder='search...'
                                autoComplete="off"
                                onChange={handleSearch}
                                value={searchValue} 
                            />

                        </div>

                        { searchValue && (
                            <div className={s.box}>
                            {isLoading
                             ? 'Loading' 
                             : !data.length 
                             ? 'No resualts' 
                             :  data.map(({title, images, id}) => { 
                                    return (
                                        <Link 
                                            key={id} 
                                            onClick={() => setSearchValue("")} 
                                            className={s.item} 
                                            to={`/products/${id}`}
                                        >
                                            <div 
                                                className={s.image} 
                                                style={{ backgroundImage: `url(${images[0]})` }}
                                            />
                                            <div className={s.title}>{title}</div>
                                        </Link>
                                    );
                                })}
                        </div> )}
                        
                    </form>

                

                    <div className={s.account}>
                        <Link to={ROUTES.HOME} className={s.favorites}>
                            <svg className={s["icon-fav"]}>
                                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                            </svg>
                        </Link>

                        <Link to={ROUTES.CART} className={s.cart}>
                            <svg className={s["icon-cart"]}>
                                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                            </svg>
                            {!!cart.length && (<span className={s.count}>{cart.length}</span>)}
                        </Link>
                    </div>

                

            </div>

        </div>
    )
};

export default Header;

// https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-68.jpg