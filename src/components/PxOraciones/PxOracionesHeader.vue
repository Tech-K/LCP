<template>
    <div>
        <header>
            <div class="header__title">
                <h1>Oraciones</h1>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'PxOracionesHeader'
}
</script>

<style scoped>
    header {
        height: 65vh;
        background-image: url('../../assets/Biblia-min.jpg');
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

    h1 {
        color: whitesmoke;
        font-size: 100px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        .header__title h1 {
            font-size: 4em;
        }
    }

</style>