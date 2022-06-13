const styles = {
    indicador: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
        backgroundColor:'#7382F0',
        color: '#fff',
        textAlign: 'center'
    },
    valor:{
        fontSize: '3.75rem',
        lineHeight: 1,
        fontWeight: 700,
        margin: '27px auto',
    }
}
const Indicador = (props) => {
    const {indicador, valor} = props
    return(
        <div style={styles.indicador}>
            <h3>{indicador}</h3>
            <p style={styles.valor}>{valor}</p>
        </div>
    )
}

export default Indicador;