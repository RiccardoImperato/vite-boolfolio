<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import store from '../store'
import ProjectSearch from '../components/ProjectSearch.vue';

export default {
    name: 'ProjectsList',
    data() {
        return {
            store,
            responseData: {},
            errors: null,
            'projects': [],
        }
    },
    components: {
        ProjectCard,
        ProjectSearch
    },
    methods: {
        getProjects() {
            this.errors = null;
            axios.get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
                params: {
                    page: this.store.projects.currentPage,
                    key: this.store.projects.searchKey,
                }
            }).then(response => {
                this.responseData = response.data
            }).catch((error) => {
                console.log(error);
                this.responseData.results.data = [];
                this.errors = error.response.data.message;
            });
        },
        nextPage() {
            this.store.projects.currentPage++;
            this.$router.push({ name: 'projects', query: { page: this.store.projects.currentPage, key: this.store.projects.searchKey } });
            this.getProjects();
        },
        prevPage() {
            this.store.projects.currentPage--;
            this.$router.push({ name: 'projects', query: { page: this.store.projects.currentPage, key: this.store.projects.searchKey } });
            this.getProjects();
        },
    },
    created() {
        this.store.projects.currentPage = this.$route.query.page ?? 1;
        this.store.projects.searchKey = this.$route.query.key ?? null;
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h2 class="mt-4">Progetti</h2>
            <ProjectSearch @search-project="getProjects" />
            <div v-if="errors" class="alert alert-danger mt-4" role="alert">{{ errors }}</div>
            <div class="row">
                <ProjectCard v-for="project in responseData.results?.data" :project="project" />
            </div>
            <nav class="my-5">
                <ul class="d-flex justify-content-center gap-4 list-unstyled">
                    <li>
                        <button class="btn btn-primary" @click="prevPage"
                            v-show="responseData.results?.prev_page_url">&blacktriangleleft;</button>
                    </li>
                    <li>
                        <button class="btn btn-primary" @click="nextPage"
                            v-show="responseData.results?.next_page_url">&blacktriangleright;</button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>

<style scoped lang="scss">
button {
    font-size: 20px;
}
</style>