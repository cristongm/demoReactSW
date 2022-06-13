const styles= {
    layout:{
        backgroundColor: '#fff',
        color: '#0a283e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '30px',
    },
    container:{
        width: '1200px'
    }
}

const Layout = (props) => {
    return(
        <div style={styles.layout}>
            <div style={styles.container}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout