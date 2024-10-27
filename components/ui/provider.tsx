"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { system } from "@/styles/theme";

export function Provider(props: React.PropsWithChildren) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider>{props.children}</ColorModeProvider>
        </ChakraProvider>
    );
}
