<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { getLocaleMessage } = useI18n();

type Work = {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
};

const education = computed<Work[]>(() =>
    getLocaleMessage("es").curriculumResume.education
        ? getLocaleMessage("es").curriculumResume.education
        : [],
);
</script>

<template>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2 text-base-content">
            <h1>{{ $t("glossary.education") }}</h1>
            <template v-for="(study, index) in education" :key="index">
                <div class="mt-10 flex items-center justify-between gap-3">
                    <h2 class="flex items-center justify-start gap-2 font-bold">
                        {{
                            $t(
                                `curriculumResume.education[${index}].institution`,
                            )
                        }}
                    </h2>
                    <p class="text-opacity-65">
                        {{
                            $t(
                                `curriculumResume.education[${index}].startDate`,
                            ).split("-")[0]
                        }}
                        -
                        {{
                            $t(
                                `curriculumResume.education[${index}].endDate`,
                            ).split("-")[0]
                        }}
                    </p>
                </div>
                <p class="-mt-1 font-semibold">
                    {{ $t(`curriculumResume.education[${index}].studyType`) }}
                </p>
                <p class="mt-1">
                    {{ $t(`curriculumResume.education[${index}].area`) }}
                </p>
                <div
                    v-if="study.courses.length > 0"
                    class="flex w-full justify-center"
                >
                    <ul class="w-11/12 list-inside list-disc">
                        <template
                            v-for="(course, id) in study.courses"
                            :key="id"
                        >
                            <li>
                                <span>
                                    {{
                                        $t(
                                            `curriculumResume.education[${index}].courses[${id}]`,
                                        )
                                    }}
                                </span>
                            </li>
                        </template>
                    </ul>
                </div>
            </template>
        </article>
    </section>
</template>

<style scoped></style>
