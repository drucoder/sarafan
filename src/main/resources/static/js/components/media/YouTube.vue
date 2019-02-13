<template>
    <iframe
            width="560"
            height="315"
            :src="targetSrc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
    ></iframe>
</template>

<script>
    export default {
        name: 'YouTube',
        props: ['src'],
        computed: {
            targetSrc() {
                let parts = this.src.split('/')
                return `https://www.youtube.com/embed/${parts[parts.length - 1]}`
            }
        }
    }
</script>

<style scoped>

</style>
