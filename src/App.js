import { useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routes from './api-routes'
import axios from 'axios'
//Importacion de componentes
import Layout from './components/General/Layout'
import Navbar from './components/General/Navbar'
import Home from './components/Home/Home'
import Detalle from './components/Detalle/Detalle'
import Footer from './components/General/Footer'

const App = () => {
    const [peliculasState, setPeliculas] = useState({})
    const [personajesState, setPersonajes] = useState({})
    const [planetasState, setPlanetas] = useState({})
    const [navesState, setNaves] = useState({})
    useEffect(() => {
      getPeliculas();
      getPersonajes();
      getPlanetas();
      getNaves();
    }, [])
    const getPeliculas =  async () =>{
      try {
          const { data, status } = await axios.get(routes.films)
          if(status === 200){
            setPeliculas(data)
          }
      } catch (error) {
        console.error("Ocurrió un error al obtener peliculas: ", error)
      }   
    }
    const getPersonajes = async () => {
      try {
        const { data, status } = await axios.get(routes.people)
          if(status === 200){
            setPersonajes(data)
          }
      } catch (error) {
        console.error("Ocurrió un error al obtener personajes: ", error)
      }
    }
    const getPlanetas = async () => {
      try {
        const { data, status } = await axios.get(routes.planets)
        if(status === 200){
          setPlanetas(data)
        }
      } catch (error) {
        console.error("Ocurrió un error al obtener planetas: ", error)
      }
    }
    const getNaves = async () => {
      try {
        const { data, status } = await axios.get(routes.starships)
        if(status === 200){
          setNaves(data)
        }
      } catch (error) {
        console.error("Ocurrió un error al obtener naves espaciales: ", error)
      }
    }
		return (
			<div>
				<Navbar/>
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/' element={
                <Home 
                  peliculas={peliculasState} 
                  personajes={personajesState}
                  planetas={planetasState}
                  naves={navesState}
                />
              }/>
              <Route exact path='/detalle' element={<Detalle peliculas={peliculasState.results} axios={axios}/>} />
            </Routes>
          </Layout>
        </Router>
        <Footer/>
				
			</div>
		)
}

export default App;
