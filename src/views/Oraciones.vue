<template>
    <div>
        <px-oraciones-header />
        <px-oraciones-main />
    </div>
</template>

<script>
import PxOracionesHeader from '@/components/PxOraciones/PxOracionesHeader'
import PxOracionesMain from '@/components/PxOraciones/PxOracionesMain'

export default {
    name: 'Oraciones',
    components: { PxOracionesHeader, PxOracionesMain }
}
</script>
