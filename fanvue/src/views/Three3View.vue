<template>
    <div>
        <h2>三维可视化</h2>
        <hr/>
        <LoadSTL/>
    </div>
</template>


<script>
// @ is an alias to /src
import LoadSTL from '@/components/LoadSTL.vue'
export default {
    name: 'Three3View',
    methods: {
    },
    components: {
        LoadSTL
    }
}
</script>