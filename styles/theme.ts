import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                heading: { value: `var(--font-butler), sans-serif` },
                headingAlternative: { value: `var(--font-poppins), serif` },
                body: { value: `var(--font-newsreader), serif` },
            },
            colors: {
                bgPrimary: { value: "#FEFEFE" },
                bgSecondary: { value: "#F9F7F4" },
                bgAlternative: { value: "#cdc1b1" },
                bgStepRSVP: { value: "#997a5e" },
                mainColorText: { value: "#1A1B1D" },
                secondaryColorText: { value: "#1A1B1D" },
                alternativeColorText: { value: "#FEFEFE" },
                "theme-bgPrimaryText": { value: "#1A1B1D" },
                "theme-bgPrimary": { value: "#FEFEFE" },
                "theme-bgSecondary": { value: "#F9F7F4" },
                "theme-bgAlternative": { value: "#cdc1b1" },
                "button-secondary-500": { value: "#F9F7F4" },
                "button-secondaryDark-500": { value: "#cdc1b1" },
            },
        },
    },
});
