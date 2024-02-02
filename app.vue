<script setup>
const colorMode = useColorMode();
const themes = [
    'system',
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
];
</script>

<template>
    <div class="w-screen h-screen">
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">JSarmiento</a>
            </div>
            <div class="flex-none">
                <select class="select w-full max-w-xs" v-model="colorMode.preference">
                    <option disabled selected>Theme</option>
                    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                </select>
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="bg-base-200 w-full h-[calc(100%-64px)] flex flex-col justify-center items-center">
            <h1 class="text-4xl dark:text-white">Hello world!</h1>
            <div class="bg-base-200 py-10">
                <div class="text-center">
                    <div class="max-w-md">
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
