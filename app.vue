<script setup lang="ts">
import type { Container } from "tsparticles-engine";

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
            direction: "bottom",
            enable: true,
            outModes: "out",
            speed: 1,
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
    // Do something with the container
    container.pause();
    setTimeout(() => container.play(), 1000);
};

const colorMode = useColorMode();
const themes = [
    "system",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
];
const { locale } = useI18n();
const languageEmojis = {
    es: "🇪🇸",
    en: "🇬🇧",
    fr: "🇫🇷",
};
</script>

<template>
    <NuxtParticles id="particles" :options="options" @load="onLoad" />
    <div class="relative z-0 h-screen w-screen">
        <div class="navbar bg-base-100">
            <div class="flex-1">JSarmiento</div>
            <div class="flex-none gap-2">
                <form>
                    <select v-model="locale" class="select">
                        <option
                            v-for="(emoji, lang) in languageEmojis"
                            :value="lang"
                        >
                            {{ emoji }}
                        </option>
                    </select>
                </form>
                <select
                    v-model="colorMode.preference"
                    class="select w-full max-w-xs"
                >
                    <option disabled selected>Theme</option>
                    <option v-for="theme of themes" :key="theme">
                        {{ theme }}
                    </option>
                </select>
            </div>
        </div>
        <div
            class="flex h-[calc(100%-64px)] w-full flex-col items-center justify-center"
        >
            <h1 class="text-4xl dark:text-white">
                {{ $t("welcome") }}
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
</template>
