<template>
    <div>
        <header id="header">
            <div class="header__title">
                <h1>Nuestro Servicios</h1>
                <span style="justify-self: center;">Accede a nuestro contenido Digital</span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'PxServiciosHeader'
}
</script>

<style scoped>
    header {
        height: 65vh;
        width: 100%;
        background-image: url('../../assets/Servicios_Header-min.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:    ". . ."
                                ". title ."
                                ". . .";
        max-width: 1920px;
        align-items: center;
        justify-items: center;
    }

    .header__title {
        grid-row: title;
        text-align: center;
    }

    .header__title span {
        color: antiquewhite;
        font-weight: 600;
        font-size: 20px;
    }

    h1 {
        color: whitesmoke;
        font-size: 100px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        .header__title h1{
            font-size: 2.2em;
        }

        .header__title span {
            font-size: 1em;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .header__title h1{
            font-size: 4.8em;
        }
    }

</style>