<script setup lang="ts">
import NavBar from "~/components/UI/NavBar/NavBar.vue";
import BottomNav from "~/components/UI/BottomNav/BottomNav.vue";
</script>

<template>
    <div class="relative h-dvh w-dvw overflow-hidden">
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
@media screen and (orientation: landscape) and (hover: none) {
    .hide-in-landscape {
        display: none;
    }
}

@media screen and (orientation: portrait) and (hover: none) {
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
