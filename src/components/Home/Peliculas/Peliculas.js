import {useState, useEffect} from 'react'
import Pelicula from '../Peliculas/Pelicula'
import Title from '../../General/Title'
import Banner from '../Banner'
const styles= {
    peliculas: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto'
    }
}

const Peliculas = (props) => {
    const { peliculas } = props
    const [displayPeliculas, setDisplayPeliculas] = useState(<div style={styles.peliculas}>No hay datos de peliculas</div>)
    useEffect(() => {
        if(peliculas !== undefined && peliculas.length > 0) {
            setDisplayPeliculas(
                <div style={styles.peliculas}>
                    {peliculas.map(pelicula => 
                        <Pelicula 
                            key={pelicula.title}
                            pelicula={pelicula}
                        />
                    )}
                </div>
            )
            
        }
    }, [peliculas])
    return(
        <div>
            <Banner />
            <Title title="Listado de películas" />
            {displayPeliculas}
            
        </div>
    )
}

export default Peliculas