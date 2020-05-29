<template>
    <main>
        <section class="servicios__dominicales">

            <div class="servicios__dominicales--title">
                <h2>Servicios Dominicales</h2>
            </div>

            <div class="servicios__dominicales--mainContent">
                Content
            </div>

            <div class="servicios__dominicales--carrouselContent">
                carrouselContent
            </div>
        </section>

        <section class="servicios__estudioBiblico">

            <div class="servicios__estudioBiblico--title">
                <h2>Estudio Biblico</h2>
            </div>

            <div class="servicios__estudioBiblico--mainContent">
                Main Content
            </div>

            <div class="servicios__estudioBiblico--carrouselContent">
                Carrousel Content
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
    main {
        /* height: auto;     */
        /* display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:    "serviciosDominicales"
                                "serviciosEstudioBiblico";
        align-items: flex-start;
        justify-items: center; */
    }

    .servicios__dominicales {
        background-color: rgb(207, 182, 230);
        display: grid;
        grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
        grid-template-areas:    ". title title ."
                                " . mainContent mainContent ."
                                ". carrouselContent carrouselContent .";
        height: 100vh;
        justify-items: center;
    }

    .servicios__dominicales--title {
        grid-area: title;
    }

    .servicios__dominicales--mainContent {
        grid-area: mainContent;
    }

    .servicios__dominicales--carrouselContent {
        grid-area: carrouselContent;
    }


.servicios__estudioBiblico {
    background-color: rgb(33, 199, 83);
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
    grid-template-areas:    ". title title ."
                            " . mainContent mainContent ."
                            ". carrouselContent carrouselContent .";
    height: 100vh;
    justify-items: center;
}

.servicios__estudioBiblico--title {
    grid-area: title;
}

.servicios__estudioBiblico--mainContent {
    grid-area: mainContent;
}

.servicios__estudioBiblico--carrouselContent {
    grid-area: carrouselContent;
}

</style>