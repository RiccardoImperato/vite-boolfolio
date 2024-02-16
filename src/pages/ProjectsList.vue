<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsList',
    data() {
        return {
            currentPage: 1,
            responseData: {},
            'projects': [],
            'baseUrl': 'http://127.0.0.1:8000/',
            'apiUrls': {
                'projects': 'api/projects'
            }
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        getProjects() {
            axios.get(this.baseUrl + this.apiUrls.projects, {
                params: {
                    page: this.currentPage
                }
            }).then(response => {
                this.responseData = response.data
            }).catch((error) => {
                console.log(error);
            });
        },
        nextPage() {
            this.currentPage++;
            this.getProjects();
        },
        prevPage() {
            this.currentPage--;
            this.getProjects();
        },
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h2 class="mt-4">Progetti</h2>
            <div class="row">
                <ProjectCard v-for="project in responseData.results?.data" :title="project.title"
                    :description="project.description" />
            </div>
            <nav class="my-5">
                <ul class="d-flex justify-content-center gap-4 list-unstyled">
                    <li>
                        <button class="btn btn-primary" @click="prevPage"
                            v-show="responseData.results?.prev_page_url">prev</button>
                    </li>
                    <li>
                        <button class="btn btn-primary" @click="nextPage"
                            v-show="responseData.results?.next_page_url">next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>