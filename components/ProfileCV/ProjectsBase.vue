<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ChipBase from "~/components/UI/Chip/ChipBase.vue";
import { Size } from "~/components/UI/Chip/types";

const { getLocaleMessage } = useI18n();

type Project = {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    url: string;
    highlights: string[];
};

const projects = computed<Project[]>(() =>
    getLocaleMessage("es").curriculumResume.projects
        ? getLocaleMessage("es").curriculumResume.projects
        : [],
);
</script>

<template>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2 text-base-content">
            <h1>{{ $t("glossary.projects") }}</h1>
            <div
                class="mt-8 flex w-full flex-wrap content-start items-start justify-start gap-6"
            >
                <template v-for="(project, index) in projects" :key="index">
                    <div
                        class="flex h-fit w-full flex-col rounded-xl border border-solid border-neutral p-6 lg:w-[22rem]"
                    >
                        <h2>
                            {{ $t(`curriculumResume.projects[${index}].name`) }}
                        </h2>
                        <p class="mt-2">
                            {{
                                $t(
                                    `curriculumResume.projects[${index}].description`,
                                )
                            }}
                        </p>
                        <div
                            v-if="project.highlights.length > 0"
                            class="mt-8 flex w-full flex-wrap justify-start gap-2"
                        >
                            <template
                                v-for="(item, id) in project.highlights"
                                :key="id"
                            >
                                <chip-base
                                    :text="
                                        $t(
                                            `curriculumResume.projects[${index}].highlights[${id}]`,
                                        )
                                    "
                                    :size="Size.medium"
                                />
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </article>
    </section>
</template>

<style scoped></style>
