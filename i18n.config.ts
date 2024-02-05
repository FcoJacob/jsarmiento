import es from "~/translations/es.json";
import en from "~/translations/en.json";

export default defineI18nConfig(() => ({
    locale: "es",
    messages: { es, en },
}));
