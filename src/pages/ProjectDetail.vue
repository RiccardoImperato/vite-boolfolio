<script>
import axios from 'axios';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            'baseUrl': 'http://127.0.0.1:8000/',
            'apiUrls': {
                'projects': 'api/projects'
            }
        }
    },
    methods: {
        getProjects() {
            axios.get(this.baseUrl + this.apiUrls.projects + '/' + this.$route.params.slug).then((response) => {
                if (response.data.results) {
                    this.project = response.data.results;
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getProjects();

        this.$watch(
            () => this.$route.params, (toParams, previousParams) => {
                this.getProjects();
            }
        );
    }
}
</script>

<template>
    <div class="container text-center py-5">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <!-- <router-link :to="{ name: 'single-project', params: { slug: '' } }" class="btn btn-primary">Progetti
            correlati</router-link> -->
    </div>
</template>