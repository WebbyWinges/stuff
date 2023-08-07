import React from "react";
import UserSignForm from "./UserSignForm";
import { useDispatch, useSelector } from "react-redux";
import s from "../style/User.module.css"
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserLoginForm from "./UserLoginForm";


const UserForm = () => {
    const dispatch = useDispatch();
    const {showForm, formType} = useSelector(({user}) => user);   
    const closeForm = () => {
        dispatch(toggleForm(false))
    }
    const toggleCurrentFormType = (type) => {
        
        dispatch(toggleFormType(type))
    }

   return showForm  ?  (
    <> 
        <div className={s.overlay} onClick={ () => { closeForm () } }/>
        {formType === "signup" ? (<UserSignForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/>) 
        : (<UserLoginForm toggleCurrentFormType = {toggleCurrentFormType} closeForm={closeForm}/>)
        } 
    </>
    )  : (
        <></> 
    ); 
    
};

export default UserForm;