import Peliculas from './Peliculas/Peliculas';
import Indicadores from './Indicadores/Indicadores'
const Home = (props) => {
    const {peliculas} = props
    return(
        <div>
            <Peliculas peliculas={peliculas.results} />
            <Indicadores datosIndicadores={props} />
        </div>
    )
}
export default Home;