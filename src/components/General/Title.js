const styles = {
    title:{
        marginBottom: '30px'
    }
}

const Title = (props) => {
    const { title } = props
    return(
        <h1 style={styles.title}>{title}</h1>
    )
}

export default Title