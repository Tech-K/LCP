<template>
    <section class="home__pray">
        <div class="home__pray--CTA">
            <v-btn
            rounded
            large
            color="#FFC000"
            style="color: #FFF; font-size: 26px; padding: 40px;">
                Buzon de Peticiones
            </v-btn>

            <h3>
                <span>#</span>
                <span>Quedate</span>
                <span>En</span>
                <span>Casa</span>
            </h3>
        </div>

        <div class="home__pray--title">
            <h2>
                ¿Necesitas
                una oración?
            </h2>

            <p>
                Déjanos tu petición
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PxHomePray'
}
</script>

<style scoped>
    .home__pray {
        height: 100vh;
        background-image: url('../assets/Oracion-min.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;

        display: grid;
        grid-template-columns: 5% 1fr 1fr 5%;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:    ". . . ."
                                ". cta title ."
                                ". . . .";
        align-items: center;
    }

    .home__pray--CTA {
        grid-area: cta;
        color: #FFF;
    }

    .home__pray--CTA h3 {
        letter-spacing: 6.8px;
    }

    .home__pray--CTA h3 :nth-child(odd) {
        color: #FFC000;
    }

    .home__pray--title {
        grid-area: title;
        text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.27);
        font-size: 30px;
        color: #FFF
    }

    .home__pray--title p {
        font-size: 0.5em;
        letter-spacing: 6.8px;
    }
</style>