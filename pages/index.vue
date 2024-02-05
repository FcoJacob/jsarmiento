<script setup lang="ts">
import type { Container } from "tsparticles-engine";

const { t } = useI18n();
const title = computed(() => `${t("home.titlePage")} 👨‍💻`);

useHead({
    title: title,
    htmlAttrs: {
        lang: "es",
    },
});

const options = {
    background: {
        color: "transparent",
    },
    zIndex: {
        value: -1,
    },
    particles: {
        color: { value: "#000" },
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
};

const onLoad = (container: Container) => {
    container.pause();
    setTimeout(() => container.play(), 1000);
};
</script>

<template>
    <div class="h-full w-full">
        <NuxtParticles id="particles" :options="options" @load="onLoad" />
        <div class="relative z-0 h-full w-full">
            <div
                class="flex h-[calc(100%-64px)] w-full flex-col items-center justify-center"
            >
                <h1 class="text-4xl dark:text-white">
                    {{ $t("home.titlePage") }}
                </h1>
                <div class="py-10">
                    <div class="text-center">
                        <div class="max-w-md">
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
