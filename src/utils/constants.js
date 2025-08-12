export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const MY_PHOTO =
  "https://res.cloudinary.com/dwit4dy8x/image/upload/v1737701019/qaut7ckfbshbaynhyjcb.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "tamizh", name: "Tamizh" },
];

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg";

export const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
  tamizh: {
    search: "தேடு",
    gptSearchPlaceholder: "இன்று நீங்கள் என்ன பார்க்க விரும்புகிறீர்கள்?",
  },
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
