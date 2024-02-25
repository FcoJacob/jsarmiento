<script setup lang="ts">
import { Size } from "~/components/UI/Chip/types";
import ChipBase from "~/components/UI/Chip/ChipBase.vue";

export type Project = {
    name: string;
    startDate: string;
    state: string;
    description: string;
    urlImg: string;
    url: string;
    highlights: string[];
};

defineProps<{
    project: Project;
    index: number;
    isCol2?: boolean;
}>();
</script>

<template>
    <div class="flex h-full w-full flex-col justify-between overflow-hidden">
        <div
            class="flex w-full items-start justify-start gap-6"
            :class="{
                'flex-col': !isCol2,
                'flex-row': isCol2,
            }"
        >
            <div :class="{ 'w-full': !isCol2, 'w-1/2': isCol2 }">
                <nuxt-img
                    preload
                    loading="lazy"
                    class="rounded-lg"
                    :src="project.urlImg"
                    :alt="project.name"
                />
            </div>
            <div :class="{ 'w-full': !isCol2, 'w-1/2': isCol2 }">
                <h2>
                    {{ $t(`curriculumResume.projects[${index}].name`) }}
                </h2>
                <p class="mt-2">
                    {{ $t(`curriculumResume.projects[${index}].description`) }}
                </p>
            </div>
        </div>
        <div
            v-if="project.highlights.length > 0"
            class="mt-8 flex w-full flex-wrap justify-start gap-2"
        >
            <template v-for="(item, id) in project.highlights" :key="id">
                <chip-base
                    color="bg-neutral-content"
                    text-color="text-neutral"
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

<style scoped></style>
