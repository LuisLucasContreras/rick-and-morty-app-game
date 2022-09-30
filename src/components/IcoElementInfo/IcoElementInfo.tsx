import './style.css'

interface Props {
    title: string;
    info : string;
    Ico : JSX.Element;
}

const IcoElementInfo = ({ Ico, info, title}:Props) => {

    return (
        
        <div className='data-element flex'>

            { Ico }

            <div className='flex flex-clm'>
                
                <p>{ title }</p>

                <span>{ info }</span>

            </div>

        </div>
    )
}

export default IcoElementInfo