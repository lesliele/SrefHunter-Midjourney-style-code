<template>
    <div>
        hello {{title}} {{state.title}} {{double}}
        <button @click="handleClick">click btn {{count}}</button>
        <Btn text="999" @getGta="handleGta"/>
        <RB/>
    </div>
</template>
<script>
import {ref, reactive, onMounted, computed} from 'vue'
import Btn from './component/Button.vue'
import RB from './component/renderBtn.vue'

export default {
    components: {
        Btn,
        RB
    },
    setup() {
        // 创建引用，对1的包装对象
        const count = ref(1);
        console.log(count)
        const state = reactive({
            title: '标题'
        })

        const handleClick = () => {
            count.value++;
            state.title = '变化'
        }
        onMounted(() => {
            console.log('mounted')
        })
        const double = computed(() => count.value * 2)
        const handleGta = (val) => {
            alert(val)
        }
        return {
            title: 'this is vue3.0',
            count,
            state,
            double,
            handleGta,
            handleClick
        }
    }
}
</script>
<style>

</style>