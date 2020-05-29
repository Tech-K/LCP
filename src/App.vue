<template>
    <v-app>
        <px-nav transition="scale-transition" />
            <v-content>
                <router-view />
            </v-content>
        <px-footer transition="scale-transition" />
    </v-app>
</template>

<script>
import PxNav from '@/components/PxNav'
import PxFooter from '@/components/PxFooter'

export default {
    name: 'App',
    components: { PxNav, PxFooter },
};
</script>
