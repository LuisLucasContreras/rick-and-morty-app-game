
import './footer-style.css'
import a from '@/assets/github_101792.png'


const Footer = () => {


	return (
		<footer  className='footer flex'>

				<h1 translate='no'>
					Power by Lucas
				</h1>


			<a href="https://github.com/LuisLucasContreras" target="_blank" rel="noreferrer" className="flex">
				<img src={a} alt="" width={50} />
			</a>


		


			
		</footer>
	)
}

export default Footer