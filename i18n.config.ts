export default defineI18nConfig(() => ({
    legacy: false,
    locale: "es",
    messages: {
        es: {
            welcome: "¡Hola mundo! Bienvenido",
        },
        en: {
            welcome: "Hello world! Welcome",
        },
        fr: {
            welcome: "Bonjour à tous! Bienvenue",
        },
    },
}));
