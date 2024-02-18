<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div class="container text-center py-5">
        <h3>Pagina non trovata</h3>
        <p><router-link :to="{ name: 'home' }" class="link">Torna alla Home</router-link></p>
    </div>
</template>