<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <nav class="py-3">
            <ul class="list-unstyled d-flex gap-5 justify-content-center align-items-center m-0">
                <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                <li><router-link :to="{ name: 'projects' }">Progetti</router-link></li>
                <li><router-link :to="{ name: 'about' }">Contatti</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: #222222;
    color: #ffff;
}
</style>