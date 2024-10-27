import { Button } from "@/components/ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex justifyContent="space-between">
            <Box color="alternativeColorText">
                <Box
                    padding={"42px"}
                    pos="fixed"
                    w="calc(100% - 500px)"
                    h="full"
                    borderRight={"solid 8px"}
                    borderColor={"blackAlpha.400"}
                    background={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url("https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539") center center / cover`}
                >
                    <Heading
                        fontFamily="headingAlternative"
                        letterSpacing={"2px"}
                        fontSize="md"
                        lineHeight={"1.5"}
                        fontWeight={"700"}
                    >
                        WEDDING ANNOUNCEMENT
                    </Heading>
                    <Box paddingTop={"32px"}>
                        <Heading
                            fontSize="7xl"
                            fontWeight="light"
                            letterSpacing={"4px"}
                            lineHeight={"1"}
                        >
                            TIFFANY &
                        </Heading>
                        <Heading
                            fontSize="7xl"
                            fontWeight="light"
                            letterSpacing={"4px"}
                            marginTop={"-16px"}
                            lineHeight={"1.5"}
                        >
                            JARED
                        </Heading>
                    </Box>
                    <Text
                        fontFamily="body"
                        fontStyle="italic"
                        fontWeight={"300"}
                        letterSpacing={"1px"}
                        maxW={"800px"}
                        fontSize={"16px"}
                    >
                        &quot;Aku ingin mencintaimu dengan sederhana; dengan
                        kata yang tak sempat diucapkan kayu kepada api yang
                        menjadikannya abu. Aku ingin mencintaimu dengan
                        sederhana; dengan isyarat yang tak sempat disampaikan
                        awan kepada hujan yang menjadikannya tiada.&quot;
                        <br />— Sapardi Djoko Damono
                    </Text>
                </Box>
            </Box>
            <Box
                w="500px"
                bgColor="grey"
                // bgImage="url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920)"
            >
                <Box minH="100vh">
                    <Heading>WEDDING ANNOUNCEMENT</Heading>
                    <div>
                        <Heading>Tiffany & Jared</Heading>
                        <Heading>#TImetoshaRE</Heading>
                    </div>
                    <Button>Open</Button>
                </Box>
                <Box minH="100vh">
                    <Heading>WEDDING ANNOUNCEMENT</Heading>
                    <div>
                        <Heading>Tiffany & Jared</Heading>
                        <Heading>#TImetoshaRE</Heading>
                    </div>
                    <Button>Open</Button>
                </Box>
            </Box>
        </Flex>
    );
}
