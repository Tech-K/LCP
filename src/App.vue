<template>
    <v-app>
        <px-nav />
                <v-content>
                    <transition name="fade" mode="out-in">
                        <router-view />
                    </transition>
                </v-content>
        <px-footer />
    </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>

<script>
import PxNav from '@/components/PxNav'
import PxFooter from '@/components/PxFooter'

export default {
    name: 'App',
    components: { PxNav, PxFooter },
};
</script>
