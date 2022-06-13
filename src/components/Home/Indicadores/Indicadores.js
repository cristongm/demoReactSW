import {useState, useEffect} from 'react'
import Title from '../../General/Title'
import Indicador from './Indicador'
const styles= {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}
const Indicadores = (props) => {
    const {peliculas, planetas, personajes, naves} = props.datosIndicadores;
    const [countPeliculas, setCountPeliculas] = useState(0)
    const [countPlanetas, setCountPlanetas] = useState(0)
    const [countPersonajes, setCountPersonajes] = useState(0)
    const [countNaves, setCountNaves] = useState(0)
    useEffect(() => {
        setCountPeliculas(peliculas.count)
        setCountPlanetas(planetas.count)
        setCountPersonajes(personajes.count)
        setCountNaves(naves.count)
    }, [peliculas, planetas, personajes, naves])
    return(
        <div>
            <Title title="Indicadores" />
            <div style={styles.container}>
                <Indicador 
                    indicador="Peliculas"
                    valor={countPeliculas}
                />
                <Indicador 
                    indicador="Planetas"
                    valor={countPlanetas}
                />
                <Indicador 
                    indicador="Personajes"
                    valor={countPersonajes}
                />
                <Indicador 
                    indicador="Naves"
                    valor={countNaves}
                />
            </div>
        </div>
    )
}

export default Indicadores;