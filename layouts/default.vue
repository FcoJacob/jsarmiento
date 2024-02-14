<script setup lang="ts">
import type { Container } from "tsparticles-engine";
import NavBar from "~/components/UI/NavBar/NavBar.vue";
import BottomNav from "~/components/UI/BottomNav/BottomNav.vue";

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
    <div class="relative h-dvh w-dvw overflow-hidden">
        <NuxtParticles id="particles" :options="options" @load="onLoad" />
        <div class="hide-in-landscape h-full w-full">
            <nav-bar />
            <slot />
            <bottom-nav />
        </div>
        <div
            class="show-in-portrait flex h-full w-full flex-col items-center justify-center"
        >
            <img
                src="~/assets/img/mobile.png"
                alt="Gira tu dispositivo"
                class="rotate-image mb-8 h-36 w-36"
            />
            <p class="text-2xl font-bold text-base-content">
                Gira tu dispositivo, para obtener la mejor experiencia!
            </p>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-height: 740px) and (orientation: landscape) and (hover: none) {
    .hide-in-landscape {
        display: none;
    }
}

@media screen and (max-height: 740px) and (orientation: portrait) and (hover: none) {
    .show-in-portrait {
        display: block;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.rotate-image {
    animation: rotate 3s infinite;
    animation-timing-function: ease-in-out;
}
</style>
