import React, { useEffect, useState } from "react";



import s from "../style/Profile.module.css"
import { current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {

    const dispatch = useDispatch();
    const {currentUser} = useSelector(({user})=> user);
    
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    })

    useEffect(() => {
        if(!currentUser) return;

        setValues(currentUser)
    }, [currentUser])
    
    const handleChange = ({ target: { value, name}}) => {
        setValues({...values, [name]:value });
    }

    const handleSubmit = (e) => {
        const isNotEmpty = Object.values(values).every((val) => val);

        if(!isNotEmpty) return;

        dispatch(updateUser(values));
    }

   
    return <section className={s.profile}>
       {!currentUser ? <span>You need to log in</span> : (
        <form className={s.form} onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
                <div className={s.group}>
                    <input 
                        type = "email" 
                        name="email" 
                        placeholder = "Your email" 
                        value={values.email}
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                        />
                </div>

                <div className={s.group}>
                    <input 
                        type = "name" 
                        name="name" 
                        placeholder = "Your name" 
                        value={values.name}
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                        />
                </div>

                <div className={s.group}>
                    <input 
                        type = "password" 
                        name="password" 
                        placeholder = "Your password" 
                        value={values.password}
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                        />
                </div>

                <div className={s.group}>
                    <input 
                        type = "avatar" 
                        name="avatar" 
                        placeholder = "Your avatar" 
                        value={values.avatar} 
                        utoComplete="off" 
                        onChange={handleChange}
                        required
                        />
                </div>
                <button type="submit" className={s.submit}>Update</button>
            </form>
       )}
    </section>
};

export default Profile;