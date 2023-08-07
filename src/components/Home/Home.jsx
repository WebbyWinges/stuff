import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filterByPrice}  from "../../features/products/productsSlice";

const Home = () => {

    const dispatch = useDispatch();

    const { 
        products: {list, filtered},
        categories,
    } = useSelector((state)=> state)

    useEffect(()=> {
        if(!list.length) return;

        dispatch(filterByPrice(100));
    }, [dispatch, list.length])

    return <>
        <Poster/>
        <Products title="Trending" products={list} amnout={5} />
        <Categories title="Worth seeing" products={categories.list} amnout={5} />
        <Banner/>
        <Products title="Less then 100$" products={filtered} amnout={5} />
    </>
};

export default Home;