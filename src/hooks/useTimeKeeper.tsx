import { useEffect, useState } from "react";

interface TimeKeeperState {
    timeInMinutes         : number,
    timeInSeconds         : number,
}

const useTimeKeeper = () => {

    
    const [isRunning, setIsRunning] = useState(false)
    const [timeKeeper, setTimeKeeper] = useState<TimeKeeperState>({
        
        timeInMinutes         : 0,
        timeInSeconds         : 0,
    })


    const { timeInMinutes,timeInSeconds } = timeKeeper
   
    const toggledTimeKeeper = (value: boolean) => {

       
        setIsRunning(value)

        setTimeout(() => {

            
            setTimeKeeper({
                ...timeKeeper , 
                timeInSeconds :  timeKeeper.timeInSeconds, 
            })
            
        }, 1000);
    } 
      
    
   
    const runTimeKeeper = () => { 

        setTimeout(() => {

            if(timeInSeconds >= 59){

                setTimeKeeper({
                    ...timeKeeper,
                    timeInSeconds : 0,
                    timeInMinutes : timeKeeper.timeInMinutes + 1,
                })
              
                return
            }
                
            setTimeKeeper({
                ...timeKeeper , 
                timeInSeconds :   timeKeeper.timeInSeconds + 1 
            })
            
            
        }, 1000);

    }
   
  
    useEffect(() => {

        
        
        if(!isRunning) return

        runTimeKeeper()
        
    

    } , [timeInSeconds, isRunning])
  
   

    return{
        timeInMinutes ,
        timeInSeconds ,
        toggledTimeKeeper,
    }
}

export default useTimeKeeper