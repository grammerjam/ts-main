import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CardContext = createContext()

export function CardContextProvider(props){
    const [items, setItems] = createStore([])

    return (
        <CardContext.Provider value={{items, setItems}}>
            {props.children}
        </CardContext.Provider>
    )
}

export function useCardContext(){
    return useContext(CardContext)
}