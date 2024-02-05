import es from "~/translations/es.json";
import en from "~/translations/en.json";

export default defineI18nConfig(() => ({
    locale: "es",
    globalInjection: true,
    messages: { es, en },
}));
