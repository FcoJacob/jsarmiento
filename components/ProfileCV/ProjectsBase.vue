<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ProjectCard, {
    type Project,
} from "~/components/UI/ProjectCard/ProjectCard.vue";

const { getLocaleMessage } = useI18n();

const projects = computed<Project[]>(() =>
    getLocaleMessage("es").curriculumResume.projects
        ? getLocaleMessage("es").curriculumResume.projects
        : [],
);

const formatCol2 = [1, 2, 5, 6];
</script>

<template>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2">
            <h1>{{ $t("glossary.projects") }}</h1>
            <div
                class="auto-rows-1 mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-3"
            >
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    class="flex cursor-pointer flex-col rounded-xl border border-solid border-base-content p-5 text-base-content hover:bg-base-content hover:text-base-100 hover:shadow-lg"
                    :class="{
                        'md:col-span-2': formatCol2.includes(index),
                    }"
                >
                    <project-card :project="project" :index="index" />
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped></style>
