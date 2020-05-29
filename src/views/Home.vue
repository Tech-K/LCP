<template>
    <div>
        <px-home-header />
        <px-home-main />
        <px-home-services />
        <px-home-pray />
        <!-- <px-home-worship /> -->
    </div>
</template>

<script>
import PxHomeHeader from '@/components/PxHomeHeader'
import PxHomeMain from '@/components/PxHomeMain'
import PxHomeServices from '@/components/PxHomeServices'
import PxHomePray from '@/components/PxHomePray'
import PxHomeWorship from '@/components/PxHomeWorship'


export default {
    name: 'Home',
    components: { PxHomeHeader, PxHomeMain, PxHomeServices, PxHomePray,PxHomeWorship }
}
</script>