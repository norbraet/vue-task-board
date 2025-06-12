<script setup lang="ts">
    import { ref } from 'vue' 
    import Survey from '@/components/Survey.vue'
    import type { SurveyType } from '@/types/surveyType';

    const surveys = ref<SurveyType[]>([
        {   
            id: "123",
            question: "Wie war das Essen?",
            answers: [
                "Gut",
                "Sehr gut",
                "Furchtbar"
            ],
            participantCount: 10
        },
        {
            id: "234",
            question: "Warum ist Vue so kompliziert?",
            answers: [
                "Weil react zu einfach ist",
                "Node JS",
                "Keine ahnung :)"
            ],
            participantCount: 10
        },
        {
            id: "345",
            question: "Warum sind nicht alle Applikationen nicht in PHP geschrieben?",
            answers: [
                "Weil sies nicht besser wussten",
                "Lorem ipsum",
                "Blacsdsf"
            ],
            participantCount: 10
        }
    ])

    function deleteSurvey(survey: SurveyType) {
        surveys.value = surveys.value.filter((s: SurveyType) => survey.id !== s.id)
    }

    function updateSurcey(survey: SurveyType) {
        surveys.value = surveys.value.map((s: SurveyType) => {
            if (survey.id === s.id) {
                s.question = survey.question
            }
            return s
        })
    }

</script>

<template>
    <section>
        <ol class="surveys">
            <li v-for="survey in surveys">
                <Survey 
                    :survey 
                    @click-delete="deleteSurvey(survey)"
                    @update="updateSurcey"
                />
            </li>
        </ol>
    </section>
</template>

<style scoped>
    .surveys {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        gap: 1rem;
    }
</style>