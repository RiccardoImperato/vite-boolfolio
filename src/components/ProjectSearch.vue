<script>
import store from '../store';
export default {
    name: 'ProjectSearch',
    data() {
        return {
            store,
        }
    },
    emits: ['searchProject'],
    methods: {
        search() {
            this.$emit('searchProject')
        }
    }
};
</script>

<template>
    <section>
        <form action="" @submit.prevent="search">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="search-key" placeholder="Cerca progetti"
                    v-model="store.projects.searchKey">
                <label for="search-key">Cerca progetti</label>
            </div>
            <button class="btn btn-primary">Cerca</button>
        </form>

    </section>
</template>