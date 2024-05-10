import { useEffect, useState } from "react";
import { useNavigateHook } from "../../Hooks/useNavigateHook";


export const usePremiumHook = () => {
    const { reset } = useNavigateHook()
    const [isCloseButtonActivated, setIsCloseButtonActivated] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsCloseButtonActivated(true)
        }, 5000)
    }, [])

    const closePremium = () => {
        reset('Home')
    };

    return {
        isCloseButtonActivated,
        closePremium
    }
};