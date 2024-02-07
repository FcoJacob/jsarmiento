<script setup lang="ts">
import LogoHTML from "~/components/UI/ProfileCard/icons/LogoHTML.vue";
import LogoCSS from "~/components/UI/ProfileCard/icons/LogoCSS.vue";
import LogoJS from "~/components/UI/ProfileCard/icons/LogoJS.vue";
import LogoNuxt from "~/components/UI/ProfileCard/icons/LogoNuxt.vue";
import LogoNode from "~/components/UI/ProfileCard/icons/LogoNode.vue";
import AvatarProfile from "~/components/UI/ProfileCard/AvatarProfile.vue";
</script>

<template>
    <section class="flex w-full flex-col items-center justify-center gap-2">
        <avatar-profile />
        <h1
            class="text--base-content text-brillo mt-10 text-4xl font-extrabold md:text-5xl lg:text-8xl"
        >
            Jacob Sarmiento
        </h1>
        <div class="w-8/12 md:w-7/12 lg:w-9/12 xl:w-8/12">
            <div class="divider my-0" />
        </div>
        <h4
            class="text-2xl font-light text-base-content md:text-3xl lg:text-4xl"
        >
            {{ $t("home.jobPosition") }}
        </h4>
        <div class="mt-4 flex w-full items-center justify-center gap-4">
            <logo-h-t-m-l class="w-8" />
            <logo-c-s-s class="w-8" />
            <logo-j-s class="w-8" />
            <logo-nuxt class="w-10" />
            <logo-node class="w-10" />
        </div>
    </section>
</template>

<style scoped>
.text-brillo {
    background: linear-gradient(
        90deg,
        #ff0000,
        #ffff00,
        #00ff00,
        #00ffff,
        #0000ff,
        #ff00ff,
        #ff0000
    );
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px oklch(var(--bc));
    text-stroke: 1px oklch(var(--bc));
    animation: shine 5s linear infinite;
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}
</style>
