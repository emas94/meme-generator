import React, { useEffect } from "react";
import { useMeme } from "./useMeme"


export const InitiallyMeme = ({ meme, timeout = 5000 }) => {
    let { dispatch } = useMeme();

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'addMeme', meme })
        }, timeout)
    }, [])
}