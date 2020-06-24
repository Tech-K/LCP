<template>
    <footer class="footer">
        <!-- <section>
            <div>
                <h2>"Donde Todos Tienen un Lugar"</h2>
            </div>
        </section> -->

        <section class="footer__socialNetworks">
            <div class="footer__socialNetworks--tittle">
                <h2>Nuestras Redes Sociales</h2>
            </div>

                <div class="footer__socialNetworks--items">
                    <i @click="lcpInstagram" class="footer__socialNetworks--instagram"></i>
                    <i @click="lcpYoutube" class="footer__socialNetworks--youtube"></i>
                    <i @click="lcpYoutube" class="footer__socialNetworks--whatsapp"></i>
                </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>

.footer {
    height: 200px;
    display: flex;
    justify-content: center;
    color: #ffcc00;
    text-shadow: 1px 1px 6px #ffd736;
}


.footer__socialNetworks--items {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    column-gap: 20px;
    justify-items: center;
    align-items: center;
    margin: 10px 0px 0px 0px;
}

.footer__socialNetworks--instagram::before {
    display: inline-block;
    content: "";
    width: 40px;
    height: 40px;
    background-image: url('../assets/icons/instagram.svg');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    cursor: pointer;
}

.footer__socialNetworks--youtube::before {
    display: inline-block;
    content: "";
    width: 40px;
    height: 40px;
    background-image: url('../assets/icons/youtube.svg');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    cursor: pointer;
}

.footer__socialNetworks--whatsapp::before {
    display: inline-block;
    content: "";
    width: 40px;
    height: 40px;
    background-image: url('../assets/icons/whatsapp.svg');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    cursor: pointer;
}


footer{
    height: 50vh;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-items: center;
    align-items: center;
    background-color: black;
    color: white;
}

</style>

<script>
export default {
    name: 'PxFooter',

    methods: {
        lcpInstagram(){
            window.open('https://www.instagram.com/lcpcaracas/', '_blank');
        },

        lcpYoutube(){
            window.open('https://www.youtube.com/channel/UCtttlnW0skxAug4MOo7CaeQ', '_blank');
        },

        lcpWhatsapp(){
            window.open('https://www.instagram.com/lcpcaracas/', '_blank');
        },

    }
}
</script>