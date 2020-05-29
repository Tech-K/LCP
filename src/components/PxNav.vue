<template>
    <div>
        <nav>
            <router-link to="/">
                <figure v-ripple="{ class: `info--text` }">
                    <img src="../assets/LOGO.png" alt="" width="80px">
                </figure>
            </router-link>

            <div class="nav__routes">
                <router-link style="margin-right: 20px;" to='/oraciones'>Oraciones</router-link>
                <router-link class="link-clave" to='/servicios'>Servicios</router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 9vh;
        background: black;
    }

    .nav__routes {
        font-size: 18px;
    }

    .v-application a {
        text-decoration: none;
        color: #f2bf10;
    }

    .link-clave {
        border-radius: 10px ;
        padding: 10px;
        background-color: blueviolet;
    }
    

</style>

<script>
export default {
    name: 'PxNav'
}
</script>