import "./styles/App.css";
import "./styles/global.css";
import './styles/effectBack.css'
import { Router } from './routes/Router';
import useAppState from "./hooks/useAppState";
import Back from "./components/Back";
import Loading from "./components/loading/Loading";
import Footer from "./components/footer/footer";

function App() {

    const {load} = useAppState();



    return (
        <>
            <Back />

            {
                load ? <Loading />
                :(
                    <section className="App">
                            
                        <main className="flex flex-clm" >
                            <Router />   
                        </main>
                            <div style={{color: 'white'}}>
                        

                            </div>
                    </section>
                )
            }

<Footer />
  
        </>
    );
}

export default App;
