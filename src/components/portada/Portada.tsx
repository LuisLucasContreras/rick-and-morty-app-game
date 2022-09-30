

interface Props {
  img: any
  height: number
}

const Portada = ({img,height}:Props) => {
	
	return (

		<article className="flex portada">

			<img 
				src       = {img}
				width     = {'100%'}
				height    = {height}
				style	 = {{objectFit:'cover'}}
			/>

		</article>

	)
}


export default Portada