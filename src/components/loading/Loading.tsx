import img from '@/assets/loading.png'
import './style.css'


interface Props {
    height?: number
    marginTop?: number
}

const Loading = ({height = 200,marginTop = 0}: Props) => {

    const style: React.CSSProperties = {
       
        marginTop: marginTop
    }

    return (
       <div>
         <div className='loading flex' style={style}>
            <img width={height + 20} height={height} src={img} alt="" />
        </div>
       </div>
    )
}

export default Loading