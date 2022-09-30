export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getLocalStorage = (key: string, initialState:any) => {
  
    
    if ( localStorage.getItem(key) ) return JSON.parse(localStorage.getItem(key) as string)
    
    return initialState

  };