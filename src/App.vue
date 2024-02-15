<script >
import axios from 'axios';
import AppMain from './components/AppMain.vue';
export default {
    name: 'Boolfolio',
    components: {
        AppMain
    },
    data() {
        return {
            'projects': [],
            'baseUrl': 'http://127.0.0.1:8000/',
            'apiUrls': {
                'projects': 'api/projects'
            }
        }
    },
    methods: {
        getProjects() {
            axios.get(this.baseUrl + this.apiUrls.projects).then(response => {
                this.projects = response.data.results;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <AppMain :projects="projects" />
</template>

<style scoped lang="scss"></style>

