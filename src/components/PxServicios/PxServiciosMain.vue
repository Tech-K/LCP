<template>
    <main>
        <section class="servicios__dominicales">

            <div class="servicios__dominicales--title">
                <h2>Servicios Dominicales</h2>
            </div>

            <div class="servicios__dominicales--mainContent">
                <h3>Contenido Mas Reciente</h3>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WF4WnjHD_vc"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="servicios__dominicales--carrouselContent">
                <div class="servicios__dominicales--itemCarrousel">1</div>
                <div class="servicios__dominicales--itemCarrousel">2</div>
                <div class="servicios__dominicales--itemCarrousel">3</div>
            </div>
            </div>
        </section>

        <section class="servicios__estudioBiblico">
            <div class="servicios__estudioBiblico--titleMainContent">
                <h2>Estudio Biblico</h2>
            </div>

            <div class="servicios__estudioBiblico--mainContent">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WF4WnjHD_vc"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="servicios__estudioBiblico--carrouselContent">
                <div class="servicios__estudioBiblico--itemCarrousel">1</div>
                <div class="servicios__estudioBiblico--itemCarrousel">2</div>
                <div class="servicios__estudioBiblico--itemCarrousel">3</div>
            </div>
        </section>

    </main>
</template>

<script>
export default {
    name: 'PxServiciosMain',
}
</script>

<style scoped>

    .servicios__dominicales {
        display: grid;
        grid-template: min-content 1fr 1fr / 10% 1fr 1fr 10%;
        grid-template-areas:    ". title title ."
                                " . mainContent mainContent ."
                                ". carrouselContent carrouselContent .";
        height: 100%;
        justify-items: center;
        align-items: center;
        padding: 20px 0px;
    }

    .servicios__dominicales--title {
        grid-area: title;
        font-size: 30px;
    }

    .servicios__dominicales--mainContent {
        grid-area: mainContent;
        width: 100%;
        height: 500px;
        text-align: center;
    }

    .servicios__dominicales--carrouselContent {
        grid-area: carrouselContent;
        display: flex;
    }

    .servicios__dominicales--itemCarrousel {
    border: 1px solid black;
    border-radius: 5%;
    background-color: rgb(192, 188, 188);
    padding: 100px;
    margin: 0px 20px;
    }



.servicios__estudioBiblico {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
    grid-template-areas:     "titleMainContent titleMainContent mainContent mainContent"
                            ". carrouselContent carrouselContent .";
    row-gap: 20px;
    height: auto;
    width: 100%;
    justify-items: center;
    align-items: center;
    padding: 20px 35px;
}

.servicios__estudioBiblico--titleMainContent{
    grid-area: titleMainContent;
    font-size: 30px;
}


.servicios__estudioBiblico--mainContent {
        grid-area: mainContent;
        width: 100%;
        height: 300px;
        text-align: center;
    }

.servicios__estudioBiblico--carrouselContent {
    grid-area: carrouselContent;
    display: flex;
}

.servicios__estudioBiblico--itemCarrousel {
    border: 1px solid black;
    border-radius: 5%;
    background-color: rgb(192, 188, 188);
    padding: 100px;
    margin: 0px 20px;
}

@media (min-width: 320px) and (max-width: 767px) {

        .servicios__dominicales {
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content 1fr;
        grid-template-areas:    "title"
                                "mainContent"
                                "carrouselContent";
        row-gap: 50px;
        }

        .servicios__dominicales--title {
            font-size: 1.3em;
        }

        .servicios__dominicales--mainContent {
        width: 100%;
        height: 400px;
        }

    .servicios__dominicales--carrouselContent {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .servicios__dominicales--itemCarrousel {
        margin: 25px 0px;
    }



    .servicios__estudioBiblico {
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
        grid-template-areas:    "titleMainContent"
                                "mainContent"
                                "carrouselContent";
        padding: 0px;
    }

    .servicios__estudioBiblico--titleMainContent h2 {
        font-size: 30px;
    }

        .servicios__estudioBiblico--carrouselContent {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .servicios__estudioBiblico--itemCarrousel {
        margin: 25px 0px;
    }
}

</style>