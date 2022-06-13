import {Link} from 'react-router-dom';
import {useState} from 'react'
const styles = {
    pelicula: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
        padding: '15px 15px 0',
        margin: '5px',
        borderRadius: '5px'
    },
    titulo:{
        color: '#333',
        fontFamily: 'sans-serif', 
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '15px',
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
    tituloHovered:{
        color: '#7382F0',
    }
}

const Pelicula = (props) => {
    const { pelicula } = props
    const [hover, setHover] = useState(false);
    return(
        <div style={styles.pelicula}>
            <Link 
                onMouseEnter={()=>{
                    setHover(true);
                }}
                onMouseLeave={()=>{
                    setHover(false);
                }} 
                style={{
                    ...styles.titulo, 
                    ...(hover ? styles.tituloHovered : null)}} 
                to={`/detalle?episode_id=${pelicula.episode_id}`}
            >
                {pelicula.title}
            </Link>
            <p>{pelicula.release_date}</p>
        </div>
    )
}

export default Pelicula