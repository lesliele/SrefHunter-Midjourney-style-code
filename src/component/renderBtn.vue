<template>
    
</template>
<script>
import {ref, h, reactive, watchEffect, readonly, watch} from 'vue'

export default {
    setup() {
        const count = ref(10);
        const original = reactive({
            count: 0
        });
        const copy = readonly(original);
        // watchEffect(() => {
        //     console.log('变化了')
        //     console.log(original.count)
        // })
        // copy.count++;
        // watch(original, (nV, oV) => {
        //     console.log(nV)
        //     console.log('==================')
        //     console.log(oV)
        // })
        watch(
            () => original.count,
            (c, o) => {
                console.log(c)
                console.log('===============')
                console.log(o)
            }
        )
        original.count++;   
    }
}
</script>

<style>

</style>