<script setup lang="ts">
import { Size } from "~/components/UI/Chip/types";
import ChipBase from "~/components/UI/Chip/ChipBase.vue";

export type Project = {
    name: string;
    completionYear: string;
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

const getImageSrc = (imageName: string) => {
    try {
        return new URL(`/assets/img/projects/${imageName}.png`, import.meta.url)
            .href;
    } catch (error) {
        console.error(error);
    }
};
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
                <img
                    class="aspect-radio-16/9 rounded-lg object-cover"
                    :src="getImageSrc(project.urlImg)"
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
        <div class="mt-8 flex flex-col gap-4">
            <div
                v-if="project.highlights.length > 0"
                class="flex w-full flex-wrap justify-start gap-2"
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
            <div class="flex w-full items-center justify-start gap-1.5">
                <chip-base :text="project.completionYear" :size="Size.medium" />
                <chip-base :text="project.state" :size="Size.medium" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
