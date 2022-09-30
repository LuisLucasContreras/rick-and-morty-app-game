import React from 'react';

import Header from '@/components/header/header'

const Cartas = React.lazy(() => import('@/components/cartas/carta/Cartas'))
const MemoryGame = React.lazy(() => import('@/components/games/memoryGame/MemoryGame'))
const CardsGames = React.lazy(() => import('@/pages/juegos/CardsGames'))
const Juegos = React.lazy(() => import('@/pages/juegos/Juegos'))
const Home = React.lazy(() => import('@/pages/home/Home'))
const CartasPage = React.lazy(() => import('@/pages/cartas/Cartas'))
// import Nav from '@/components/nav/Nav'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Loading from '@/components/loading/Loading';
import Footer from '@/components/footer/footer';


export const Router = () => {
    return (

        <section style={{width:"100%", minHeight: "800px"}}>

            <BrowserRouter>
            
                <Header />
               
               

            
                    <React.Suspense fallback={<Loading marginTop={180}/>}>
                    <Routes>
                        <Route path='cartas'element={<CartasPage />} >

                        <Route index element={<Cartas />} />

                        </Route>

                        <Route path='juegos' element={<Juegos/>} >

                        <Route path='memory' element={<MemoryGame />} />

                        <Route index element={<CardsGames />} />

                        </Route>

                        <Route path='/' element={<Home/>} />
                        <Route path='*' element={<Home/>} />
                        </Routes>
                    </React.Suspense>

             

               
                
            </BrowserRouter>
            
        </section>
    )
}
