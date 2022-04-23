import React, { useState, useContext, useCallback } from 'react'
import { sessionContext } from '../context/sessionContext';
import postLogIn from '../services/postLogIn';

function useLogin() {
    const [userInfo, setUserInfo] = useState(null);
    const { setLoginInfo } = useContext(sessionContext);
    const logIn = async ({ usuario, clave }) => {
        console.log({ usuario, clave });
        try {
            const userInfo = await postLogIn({
                usuario,
                clave
            });
            setUserInfo(userInfo);
            setLoginInfo(userInfo);
        } catch (error) {
            console.log(error);
        }
    };


    return {
        logIn,
    }
}

export default useLogin