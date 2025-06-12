<script setup lang="ts">

    import type { SurveyType } from '@/types/surveyType' 
    import type { PropType } from 'vue';
    import EditSurveyModal from './EditSurveyModal.vue'
    import { ref } from 'vue'


    const props = defineProps({
        survey: Object as PropType<SurveyType> 
    })
    const showModal = ref(false)
    const copySurvey = ref<SurveyType>()
    
    const emits = defineEmits(['click-delete', 'update'])

    function deleteSurvey() {
        emits('click-delete')
    }

    function edit() {
        copySurvey.value = { ...props.survey } as SurveyType
        showModal.value = true

    }

    function editData() {
        emits('update', copySurvey.value)
        closeModal()
    }
    
    function closeModal() {
        showModal.value = false
    }

</script>

<template>
    <div class="survey-container">
        <p class="survey-title">{{ survey?.question }}</p>
        <ol>
            <li v-for="answer in survey?.answers">
                {{ answer }}
            </li>
        </ol>
        <p class="">Participants: {{ survey?.participantCount }}</p>
        <button class="button-edit" @click="edit">Bearbeiten</button>
        <button class="button-delete" @click="deleteSurvey">Löschen</button>
    </div>

    <EditSurveyModal v-if="showModal">
        <form>
            <input type="text" v-model="copySurvey.question" />
            <button @click="editData">Übernehmen</button>
            <button @click="closeModal">Abbrechen</button>

        </form>

    </EditSurveyModal>
    
</template>

<style scoped>
    .survey-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: white;
        color: black;
        padding: 2rem;
        border-radius: 0.5rem;
    }
    button {
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
    .button-edit {
        background-color: blue;
        color: white;
    }
    
    .button-delete {
        background-color: #ff0000;
        color: white;
    }
    .button-delete:hover {
        background-color: #a11e1e;
    }
    
</style>