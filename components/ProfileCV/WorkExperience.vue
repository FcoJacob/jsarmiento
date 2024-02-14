<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ChipBase from "~/components/UI/Chip/ChipBase.vue";

const { getLocaleMessage } = useI18n();

type Work = {
    name: string;
    position: string;
    location: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
};

const workExperiences = computed<Work[]>(() =>
    getLocaleMessage("es").curriculumResume.work
        ? getLocaleMessage("es").curriculumResume.work
        : [],
);
</script>

<template>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2 text-base-content">
            <h1>{{ $t("glossary.workExperience") }}</h1>
            <template v-for="(work, index) in workExperiences" :key="index">
                <div class="mt-10 flex items-center justify-between gap-3">
                    <h2 class="flex items-center justify-start gap-2 font-bold">
                        {{ $t(`curriculumResume.work[${index}].name`) }}
                        <chip-base
                            :text="
                                $t(`curriculumResume.work[${index}].location`)
                            "
                        />
                    </h2>
                    <p class="text-opacity-65">
                        {{
                            $t(
                                `curriculumResume.work[${index}].startDate`,
                            ).split("-")[0]
                        }}
                        -
                        {{
                            $t(`curriculumResume.work[${index}].endDate`).split(
                                "-",
                            )[0]
                        }}
                    </p>
                </div>
                <p class="-mt-1 font-semibold">
                    {{ $t(`curriculumResume.work[${index}].position`) }}
                </p>
                <p class="mt-1">
                    {{ $t(`curriculumResume.work[${index}].summary`) }}
                </p>
            </template>
        </article>
    </section>
</template>

<style scoped></style>
