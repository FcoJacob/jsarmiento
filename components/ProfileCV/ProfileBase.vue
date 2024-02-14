<script setup lang="ts">
import PhoneIcon from "~/components/UI/Icons/PhoneIcon.vue";
import XIcon from "~/components/UI/Icons/XIcon.vue";
import LinkedinIcon from "~/components/UI/Icons/LinkedinIcon.vue";
import InstagramIcon from "~/components/UI/Icons/InstagramIcon.vue";
import GithubIcon from "~/components/UI/Icons/GithubIcon.vue";
import MailIcon from "~/components/UI/Icons/MailIcon.vue";

const { getLocaleMessage } = useI18n();

type Profile = {
    network: string;
    url: string;
    username: string;
};

const profiles = computed<Profile[]>(() =>
    getLocaleMessage("es").curriculumResume.basics.profiles
        ? getLocaleMessage("es").curriculumResume.basics.profiles
        : [],
);
</script>

<template>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2 text-base-content sm:w-8/12">
            <h1>
                {{ $t("curriculumResume.basics.name") }}
            </h1>
            <div class="flex flex-col">
                <h3>{{ $t("curriculumResume.basics.label") }}</h3>
                <span>
                    {{ $t("curriculumResume.basics.location.address") }},
                    {{ $t("curriculumResume.basics.location.city") }},
                    {{ $t("curriculumResume.basics.location.region") }}
                </span>
            </div>
            <span class="mt-2 flex w-full items-start justify-start gap-1.5">
                <a
                    :href="`mailto:${$t('curriculumResume.basics.email')}@gmail.com`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-design"
                >
                    <mail-icon />
                </a>
                <a
                    :href="`tel:${$t('curriculumResume.basics.phone')}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-design"
                >
                    <phone-icon />
                </a>
                <template v-if="profiles.length > 0">
                    <template v-for="(profile, id) in profiles" :key="id">
                        <a
                            :href="`${$t('curriculumResume.basics.profiles[0].url')}`"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon-design"
                        >
                            <x-icon v-if="profile.network === 'Twitter'" />
                            <github-icon v-if="profile.network === 'Github'" />
                            <instagram-icon
                                v-if="profile.network === 'Instagram'"
                            />
                            <linkedin-icon
                                v-if="profile.network === 'Linkedin'"
                            />
                        </a>
                    </template>
                </template>
            </span>
        </article>
        <figure class="hidden w-4/12 items-center justify-center sm:flex">
            <img
                src="~/assets/img/JacobHD.png"
                alt="Jacob Sarmiento"
                class="w-40 rounded-full"
            />
        </figure>
    </section>
    <section class="flex w-full items-start justify-start">
        <article class="flex w-full flex-col gap-2">
            <h1>
                {{ $t("glossary.about") }}
            </h1>
            <p>
                {{ $t("curriculumResume.basics.summary") }}
            </p>
        </article>
    </section>
</template>

<style scoped>
.icon-design {
    @apply flex h-8 w-8 items-center justify-center gap-1 overflow-hidden rounded-md border border-solid border-base-content p-1 transition-all duration-300 ease-in-out hover:bg-base-content hover:text-base-100;
}
</style>
