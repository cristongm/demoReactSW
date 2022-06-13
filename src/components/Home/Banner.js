const styles = {
    img:{
                /* The image used */
        backgroundImage: 'url("https://cineverso.es/wp-content/uploads/2018/08/star-wars-banner-Copy.png")',
        /* Set a specific height */
        minHeight: '500px',
        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}
const Banner = () => {
    return(
        <div style={styles.img}></div>
    )
}

export default Banner;