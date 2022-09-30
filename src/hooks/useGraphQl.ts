import { useEffect } from 'react'
import {useState} from 'react';
import { AxiosError } from 'axios';
import graphqlBase from '@/services/graphql.service';





export const useGraphQl = <T>(str : string) => {
  
    const [load, setLoad]   = useState(true)
    const [data, setData]   = useState<T>()
    const [error, setError] = useState<any>()
    const [query, setQuery] = useState<string>(str)

    useEffect(() => {
        
        setQuery(str)

        getGraphQl()
    
    }, [query,str])

    const getGraphQl = async() => {

        if(query == ""){
            setData(undefined)
            return
        } 
    
        try {

            let res:any = await graphqlBase.post<T>('', { query:  query });
           
            setData(res.data.data)

            
        } catch (error){

            const err =  error as AxiosError;
        
            setError(err?.response?.data || null)
           
        }

        setLoad(false)
       
    }

    return {
        load,
        data,
        error,
        setQuery
    }


}
