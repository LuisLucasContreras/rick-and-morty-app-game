import { Link } from 'react-router-dom'
import './buttom.style.css'

interface Props{
    width?   : number
    marginTop? : number
    link?  : string
   
}

const Buttom = ({marginTop = 20,width=200,link = ''} : Props) => {

    const style : React.CSSProperties = {
        width: width,
        marginTop: marginTop,
    }


    return (
        <div style={style} className='button'>
            {
                link === '' 
                ? <button>JUGAR</button>
                : <Link to={link}>JUGAR</Link>
            }
        </div>
    )
}

export default Buttom