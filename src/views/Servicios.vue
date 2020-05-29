<template>
    <div>
        <px-servicios-header />
        <px-servicios-main />
    </div>
</template>

<script>
import PxServiciosHeader from '@/components/PxServicios/PxServiciosHeader'
import PxServiciosMain from '@/components/PxServicios/PxServiciosMain'


export default {
    name: 'Servicios',
    components: { PxServiciosHeader, PxServiciosMain }
}
</script>