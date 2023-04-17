const estilos = {
    imagenes: {
        margin: 0,
        padding: 0,
        borderleft: 0,
        bordertop: 0,
    },
    cita: {
        margintop: "24px",
        color: "black",
        fontsize: "20px",
        fontfamily: "Verdana",
    },
};

function UncontrolledExample() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            </div>
            <div className="App">
                <header className="App-header">
                    <p style={estilos.cita}>
                        ¡Hola, mundo!
                    </p>
                </header>
            </div>
        </div>
    );
}

export default UncontrolledExample;

// export const Landing = () => <h2>Pagina Landing</h2>