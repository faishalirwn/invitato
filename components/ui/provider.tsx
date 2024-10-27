"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { system } from "@/styles/theme";

export function Provider(props: React.PropsWithChildren) {
    return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
}
