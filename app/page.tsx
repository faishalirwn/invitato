import { Button } from "@/components/ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex>
            <Box bgImage="url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539)">
                <Heading>WEDDING ANNOUNCEMENT</Heading>
                <Heading>TIFFANY & JARED</Heading>
                <Text>
                    &quot;Aku ingin mencintaimu dengan sederhana; dengan kata
                    yang tak sempat diucapkan kayu kepada api yang menjadikannya
                    abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat
                    yang tak sempat disampaikan awan kepada hujan yang
                    menjadikannya tiada.&quot;
                    <br />— Sapardi Djoko Damono
                </Text>
            </Box>
            <Box bgImage="url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920)">
                <Heading>WEDDING ANNOUNCEMENT</Heading>
                <div>
                    <Heading>Tiffany & Jared</Heading>
                    <Heading>#TImetoshaRE</Heading>
                </div>
                <Button>Open</Button>
            </Box>
        </Flex>
    );
}
