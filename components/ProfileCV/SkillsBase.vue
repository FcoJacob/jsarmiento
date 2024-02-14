<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ChipBase from "~/components/UI/Chip/ChipBase.vue";
import { Size } from "~/components/UI/Chip/types";

const { getLocaleMessage } = useI18n();

type Skills = {
    name: string;
    level: string;
    keywords: string[];
};

const skills = computed<Skills[]>(() =>
    getLocaleMessage("es").curriculumResume.skills
        ? getLocaleMessage("es").curriculumResume.skills
        : [],
);
</script>

<template>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2 text-base-content">
            <h1>{{ $t("glossary.skills") }}</h1>
            <template v-for="(skill, index) in skills" :key="index">
                <div
                    v-if="skill.keywords.length > 0"
                    class="mt-2 flex w-full flex-wrap justify-start gap-2"
                >
                    <template v-for="(item, id) in skill.keywords" :key="id">
                        <chip-base
                            :text="
                                $t(
                                    `curriculumResume.skills[${index}].keywords[${id}]`,
                                )
                            "
                            :size="Size.medium"
                        />
                    </template>
                </div>
            </template>
        </article>
    </section>
</template>

<style scoped></style>
