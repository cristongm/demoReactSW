const styles = {
    contenido: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
}

const DetalleListado = (props) => {
    const { title, listado } = props
    return(
        <div style={styles.contenido}>
            <h4>{title}</h4>
            <ol>
                {listado.map(x => <li key={x.name}>{x.name}</li>)}
            </ol>
        </div>
    )
}

export default DetalleListado