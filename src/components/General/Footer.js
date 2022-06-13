const styles = {
    footer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 3px 4px rgb(0,0,0,0.1)',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '10px'
    },
}
const Footer = () => {
    return(
        <footer style={styles.footer}>
            <p>Realizado por Cristo García.</p>
        </footer>
    )
}

export default Footer;