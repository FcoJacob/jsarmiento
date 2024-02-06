<script setup lang="ts">
import IconChangeTheme from "./img/IconChangeTheme.vue";
import CheckTheme from "./img/CheckTheme.vue";
import ColorPalette from "./ColorPalette.vue";

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
</script>

<template>
    <div
        title="Change Theme"
        class="dropdown dropdown-end dropdown-hover hidden [@supports(color:oklch(0_0_0))]:block"
    >
        <div tabindex="0" role="button" class="btn btn-ghost">
            <icon-change-theme />
        </div>
        <div
            tabindex="0"
            class="menu dropdown-content h-96 max-h-[calc(100vh-10rem)] w-56 rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5"
        >
            <div class="grid grid-cols-1 gap-3 overflow-y-auto p-2">
                <button
                    v-for="theme in themes"
                    :key="theme"
                    class="theme-controller text-start outline-offset-4 outline-base-content"
                    :data-set-theme="theme"
                    data-act-class="visible"
                    name="theme-controller"
                    :aria-label="theme"
                    :value="theme"
                    @click="colorMode.preference = theme"
                >
                    <span
                        :data-theme="theme"
                        class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
                        ><span class="grid grid-cols-5 grid-rows-3"
                            ><span
                                class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
                            >
                                <check-theme
                                    :show="colorMode.preference === theme"
                                />
                                <span class="flex-grow text-sm capitalize">
                                    {{ theme }}
                                </span>
                                <color-palette />
                            </span>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
