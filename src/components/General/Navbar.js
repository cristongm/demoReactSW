const styles = {
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 3px 4px rgb(0,0,0,0.1)',
        fontSize: '2rem'
    },
    brand:{
        color: 'white',
        fontWeight: 'bold',
    },
}

const Navbar = () => {
    return(
        <nav style={styles.navbar}>
            <div style={styles.brand}>Demo StarWars</div>
        </nav>
    )
}
export default Navbar