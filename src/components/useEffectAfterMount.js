import { useEffect, useRef } from "react"

export const useEffectAfterMount = (func, dependency) => {
    const mounted = useRef(false)
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
            return;
        }
        func();
    }, [...dependency])
}