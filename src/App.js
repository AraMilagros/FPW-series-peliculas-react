
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pelicula from './pelicula/Pelicula';
import Cabecera from './cabecera/Cabecera';
import pelis from './json/pelis.json';
import Portada from './portada/Portada';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
                <Route path="/" element={<Portada
                  url={"/listado"}/>}></Route>
                <Route path="/listado" element={

                    <>
                    
                        <Cabecera/>
                        {pelis.map( (peli, i) =>
                        <Pelicula
                            key={i}
                            titulo={peli.titulo}
                            urlImg={peli.urlImg}
                            descripcion={peli.descripcion}/>
                        )}
                        <Link className="link" to="/">Regresar</Link>
                    </>

                }></Route>
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
