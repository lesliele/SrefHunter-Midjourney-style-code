<template>
  <div style="color: red;" @click="gta">
      {{props.text}}
  </div>
</template>

<script>
export default {
    props: {
        text: String
    },
    setup(props, {emit}) {
        const gta = () => {
            emit('getGta', 5555);
        }
        return {
            props,
            gta
        }
    }
}
</script>

<style>

</style>