<script setup lang="ts">
import type { Container } from "tsparticles-engine";
import ProfileCard from "~/components/UI/ProfileCard/ProfileCard.vue";

const { t } = useI18n();
const title = computed(() => `${t("home.titlePage")} 👨‍💻`);

useHead({
    title: title,
    htmlAttrs: {
        lang: "es",
    },
});

const options = ref({
    background: {
        color: "transparent",
    },
    zIndex: {
        value: -1,
    },
    particles: {
        color: { value: "#939387" },
        move: {
            direction: "top",
            enable: true,
            outModes: "out",
            speed: 2,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 40,
        },
        opacity: {
            value: 0.4,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 3,
                max: 8,
            },
        },
        wobble: {
            enable: true,
            distance: 5,
            speed: 6,
        },
    },
});

const onLoad = (container: Container) => {
    container.pause();
    setTimeout(() => container.play(), 500);
};
</script>

<template>
    <div class="h-full w-full">
        <NuxtParticles id="particles" :options="options" @load="onLoad" />
        <div class="relative z-0 h-full w-full">
            <div
                class="flex h-[calc(100%-64px)] w-full flex-col items-center justify-center"
            >
                <profile-card />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
