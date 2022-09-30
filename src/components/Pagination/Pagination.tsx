import React, { useEffect } from 'react';
import './styles/Pagination.css';

export interface PaginationInterface {
	maxPage        : number;
	currentPage    : number;
	setCurrentPage : (page : number) => void;
}


const Pagination: React.FC<PaginationInterface> = ({currentPage,maxPage,setCurrentPage}) => {

	const [pagesState, setPages] = React.useState<number[]>([]);

	useEffect(() => {
		let pages: number[] = []

		for (let i = 0; i < maxPage; i++) {
			pages.push(i+1)
		}
		
		setPages(pages)
	}, [])
	

	

	return(
		<div className='Pagination flex'>
			{
				pagesState.map((page) => (
					<button 
						className={`page ${currentPage === page ? 'active ' : ''}`}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				))
			}
		</div>
	)
};




export default Pagination;

