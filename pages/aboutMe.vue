<script setup lang="ts">
import ProfileBase from "~/components/ProfileCV/ProfileBase.vue";
import WorkExperience from "~/components/ProfileCV/WorkExperience.vue";
import EducationBase from "~/components/ProfileCV/EducationBase.vue";
import SkillsBase from "~/components/ProfileCV/SkillsBase.vue";
import ProjectsBase from "~/components/ProfileCV/ProjectsBase.vue";

const { t } = useI18n();
const title = computed(() => `${t("glossary.about")}👋`);

useHead({
    title: title,
    htmlAttrs: {
        lang: "es",
    },
});
</script>

<template>
    <main
        class="relative z-0 flex h-dvh w-dvw items-center justify-center py-16 lg:py-20"
    >
        <div
            class="h-full w-full overflow-y-auto rounded-sm bg-base-200 p-4 shadow-lg transition-all lg:w-11/12 lg:p-16 xl:w-10/12 2xl:w-8/12"
        >
            <profile-base />
            <work-experience />
            <education-base />
            <skills-base />
            <projects-base />
        </div>
    </main>
</template>

<style>
h1 {
    @apply text-pretty text-2xl font-bold sm:text-4xl;
}

h2 {
    @apply text-pretty text-lg font-bold sm:text-2xl;
}

h3 {
    @apply text-pretty text-base font-semibold sm:text-xl;
}

p {
    @apply text-balance text-base font-normal sm:text-lg;
}

span {
    @apply text-pretty text-xs font-normal sm:text-sm;
}

section {
    @apply mt-8;
}

article {
    @apply mt-4;
}
</style>
