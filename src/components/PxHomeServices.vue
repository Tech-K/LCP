<template>
    <section class="home__services">
        <div class="home__services--access">
            <h3>Accede a todas nuestras Predicas y Servicios</h3> <br>
        <v-btn to="/servicios" large color="#f2bf10" style="color: #FFF;">Predicas y Servicios</v-btn>
        </div>

        <div class="home__services--mainService">
            <iframe
                width="100%"
                height="550px"
                src="https://www.youtube.com/embed/WF4WnjHD_vc"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PxHomeServices'
}
</script>

<style scoped>
    .home__services {
        height: 100vh;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;

        display: grid;
        grid-template-columns: 1fr 30% 60% 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:    ". accessServices mainService .";
        align-items: center;
        column-gap: 50px;
    }

    .home__services--access {
        grid-area: accessServices;
        text-align: center;
        color: white;
    }

    .home__services--mainService {
        grid-area: mainService;
        text-align: center;
        align-self:center;
    }

</style>