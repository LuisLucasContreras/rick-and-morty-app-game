import { useState } from 'react'

interface UseFormSync<T> {
    formState           : T,
    handleInput         : (name: string, value: any) => void,
    handleInputItems    : (e: any) => void
}

export const useFormSync =<T> (initialState : T) : UseFormSync<T>  => {

    const [formState, setFormState] = useState<T>(initialState)

    const handleInputItems   = (e:any) =>{

        let obj = (e.target.itemData)? e.target.itemData:  e.target.value 
        
        setFormState((pre:any) => ({  
            ...pre,  
            [e.target.id]  : e.target.value,  
            [e.target.name]: (e.target.name)?obj : ""
        }));
    } 

    const handleInput  = (name: string, value: any) =>{
        
        setFormState((pre:any) => ({  
            ...pre,  
            [name]: value  
        }));
    }

    return {formState,handleInput,handleInputItems}
}
