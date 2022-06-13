import {useLocation, Link} from 'react-router-dom'
import {useMemo, useState, useEffect} from 'react'
import DetalleListado from './DetalleListado'

const styles= {
    containerExterno: {
        marginTop:'30px'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    volver: {
        boxShadow: '0px 10px 14px -7px #276873',
        backgroundColor:'#599bb3',
        borderRadius:'8px',
        display:'flex',
        justifyContent:'end',
        cursor:'pointer',
        color:'#fff',
        fontFamily:'Arial',
        fontSize:'20px',
        fontWeight:'bold',
        padding:'13px 32px',
        textDecoration:'none',
        textShadow:'0px 1px 0px #3d768a',
    },
    ul : {
        lineHeight: 1.8,
        marginLeft: '-20px',
        listStylePosition: 'inside'
    },
    li :{
        marginBottom: '20px'
    },
    contenido: {
        marginTop: '30px',
        marginBottom: '20px',
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    
}
const Detalle = (props) => {
    const {peliculas, axios} = props
    function useQuery() {
        const { search } = useLocation();
    
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    const [pelicula, setPelicula] = useState({})
    const [personajes, setPersonajes] = useState([])
    const [planetas, setPlanetas] = useState([])
    const [naves, setNaves] = useState([])
    const query = useQuery();
    const episode_id = Number(query.get('episode_id'));
    // Obtener datos de la pelicula
    useEffect(() => {
        if(peliculas !== undefined && peliculas.length > 0) {
            const peliculaFiltrada = peliculas.filter(x => x.episode_id === episode_id)
            if(peliculaFiltrada.length > 0) {
                setPelicula(peliculaFiltrada[0])
            }
        }
    },[pelicula, episode_id, peliculas])
    // Obtener personajes
    useEffect(() => {
        if(pelicula !== undefined && pelicula.characters !== undefined){
            pelicula.characters.map(async x => {
                try {
                    const { data, status } = await axios.get(x)
                    if(status === 200){
                        setPersonajes(personajes => [...personajes, data])
                    }
                } catch (error) {
                    console.error("Ocurrió un error al obtener personajes: ", error)
                }
            })
        }
    }, [pelicula, axios])
    // Obtener planetas
    useEffect(() => {
        if(pelicula !== undefined && pelicula.planets !== undefined){
            pelicula.planets.map(async x => {
                try {
                    const { data, status } = await axios.get(x)
                    if(status === 200){
                        setPlanetas(planetas => [...planetas, data])
                    }
                } catch (error) {
                    console.error("Ocurrió un error al obtener planetas: ", error)
                }
            })
        }
    }, [pelicula, axios])
    // Obtener naves
    useEffect(() => {
        if(pelicula !== undefined && pelicula.starships !== undefined){
            pelicula.starships.map(async x => {
                try {
                    const { data, status } = await axios.get(x)
                    if(status === 200){
                        setNaves(naves => [...naves, data])
                    }
                } catch (error) {
                    console.error("Ocurrió un error al obtener naves: ", error)
                }
            })
        }
    }, [pelicula, axios])
    const datosPelicula = 
    <div>
        <div style={styles.contenido}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    Nombre de la película: {pelicula.title}
                </li>
                <li style={styles.li}>
                    Fecha de emisión: {pelicula.release_date}
                </li>
                <li style={styles.li}>
                    Director(es): {pelicula.director}
                </li>
                <li style={styles.li}>
                    ID de episodio: {pelicula.episode_id}
                </li>
                <li>
                    Resumen: {pelicula.opening_crawl}
                </li>
            </ul>
        </div>
        <div style={styles.container}>
            <DetalleListado title="Personajes:" listado={personajes} />
            <DetalleListado title="Planetas:" listado={planetas} />
            <DetalleListado title="Naves Espaciales:" listado={naves} />
        </div>
        
    </div>

    const sinDatos = 'Película no encontrada'
    return(
        <div style={styles.containerExterno}>
            <Link to="/" style={styles.volver}>Volver atrás</Link>
            {pelicula.title !== undefined ? datosPelicula : sinDatos}
            
        </div>
    )
}

export default Detalle;
