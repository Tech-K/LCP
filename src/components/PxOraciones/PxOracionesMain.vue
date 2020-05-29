<template>
        <main>
            <div class="oraciones__form">
                <h2>Peticion de Oracion</h2>
                <px-oraciones-form />
            </div>
        </main>
</template>

<script>
import PxOracionesForm from './PxOracionesForm'

export default {
    name: 'PxOracionesMain',
    components: { PxOracionesForm }
}
</script>

<style scoped>
    main {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 70% 1fr;
        grid-template-rows: 5% 1fr 5%;
        grid-template-areas:    ". . ."
                                ". form ."
                                ". . .";
        justify-items: center;
        align-items: center;
    }

    .oraciones__form {
        grid-area: form;
        width: 100%;
        text-align: center;
    }
</style>