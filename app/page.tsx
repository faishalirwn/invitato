"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "@/components/ui/icons/ChevronDown";
import { Music } from "@/components/ui/icons/Music";
import { MusicOff } from "@/components/ui/icons/MusicOff";
import {
    Box,
    Center,
    Flex,
    Heading,
    IconButton,
    Show,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Slide = ({
    backgroundUrl,
    animationDelay,
}: {
    backgroundUrl: string;
    animationDelay: string;
}) => {
    return (
        <Box
            pos={"absolute"}
            w={"full"}
            h={"full"}
            opacity={"0"}
            animation={"slide 25s infinite"}
            animationDelay={animationDelay}
            background={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${backgroundUrl})`}
            backgroundPosition={"50%"}
            backgroundSize={"cover"}
        ></Box>
    );
};

export default function Home() {
    const [clicked, setClicked] = useState(false);
    const [init, setInit] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);

    const audioRef = useRef(
        typeof Audio !== "undefined"
            ? new Audio(
                  "https://invitato.net/test-product-engineer/static/bg-sound-a2a8927862ee1aa412b3df1a7e46ff7c.mp3"
              )
            : null
    );

    useEffect(() => {
        if (clicked && audioRef.current) {
            audioRef.current.play();
            audioRef.current.loop = true;
            setAudioPlaying(true);

            const timer = setTimeout(() => {
                setInit(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [clicked]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (audioPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setAudioPlaying(!audioPlaying);
    };

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
                            textTransform={"uppercase"}
                            lineHeight={"1"}
                        >
                            TIFFANY &
                        </Heading>
                        <Heading
                            fontSize="7xl"
                            fontWeight="light"
                            letterSpacing={"4px"}
                            textTransform={"uppercase"}
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
            <Box w="500px">
                <Show when={!init}>
                    <VStack
                        minH="100vh"
                        textAlign={"center"}
                        justifyContent={"space-between"}
                        pos={"relative"}
                        background={
                            "linear-gradient(rgb(50 48 48/ 50%), rgb(50 48 48 / 50%)),center/cover url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920)"
                        }
                    >
                        <Heading
                            fontFamily="headingAlternative"
                            letterSpacing={"2px"}
                            fontSize="md"
                            lineHeight={"1.5"}
                            fontWeight={"700"}
                            mt={"92px"}
                        >
                            WEDDING ANNOUNCEMENT
                        </Heading>
                        <Box
                            position="absolute"
                            top="48%"
                            transform="translateY(-50%)"
                        >
                            <Heading
                                fontSize="4xl"
                                fontWeight="light"
                                lineHeight={"1.2"}
                                textTransform={"uppercase"}
                            >
                                Tiffany & Jared
                            </Heading>
                            <Heading
                                fontSize="4xl"
                                fontWeight="light"
                                lineHeight={"1.2"}
                                fontFamily={"body"}
                                fontStyle={"italic"}
                            >
                                #TImetoshaRE
                            </Heading>
                        </Box>
                        <Button
                            mb={"250px"}
                            h={"2rem"}
                            p={"0 2.4rem"}
                            fontFamily={"body"}
                            fontStyle={"italic"}
                            fontSize={"lg"}
                            borderRadius={"0"}
                            border={"1px solid #1A1B1D"}
                            backgroundColor={"bgSecondary"}
                            color={"secondaryColorText"}
                            animation={"MoveUpDown 3s linear infinite"}
                            loading={clicked}
                            onClick={() => setClicked(true)}
                        >
                            Open
                        </Button>
                    </VStack>
                </Show>
                <Show when={init}>
                    <Box h="100vh" pos={"relative"}>
                        <Box
                            pos={"absolute"}
                            w={"full"}
                            h={"full"}
                            top={"0"}
                            left={"0"}
                            zIndex={"-1"}
                            overflow={"hidden"}
                        >
                            <Slide
                                animationDelay="0s"
                                backgroundUrl="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920"
                            />
                            <Slide
                                animationDelay="5s"
                                backgroundUrl="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322"
                            />
                            <Slide
                                animationDelay="10s"
                                backgroundUrl="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828"
                            />
                            <Slide
                                animationDelay="15s"
                                backgroundUrl="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497"
                            />
                            <Slide
                                animationDelay="20s"
                                backgroundUrl="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372"
                            />
                        </Box>

                        <VStack
                            h={"full"}
                            textAlign={"center"}
                            justifyContent={"space-between"}
                            zIndex={"2"}
                        >
                            <Heading
                                fontFamily="headingAlternative"
                                letterSpacing={"2px"}
                                fontSize="md"
                                lineHeight={"1.5"}
                                fontWeight={"700"}
                                mt={"92px"}
                            >
                                WEDDING ANNOUNCEMENT
                            </Heading>
                            <Box
                                position="absolute"
                                top="48%"
                                transform="translateY(-50%)"
                            >
                                <Heading
                                    fontSize="4xl"
                                    fontWeight="light"
                                    lineHeight={"1.2"}
                                    textTransform={"uppercase"}
                                >
                                    Tiffany & Jared
                                </Heading>
                                <Heading
                                    fontSize="4xl"
                                    fontWeight="light"
                                    lineHeight={"1.2"}
                                    fontFamily={"body"}
                                    fontStyle={"italic"}
                                >
                                    #TImetoshaRE
                                </Heading>
                            </Box>
                            <Flex
                                w="full"
                                paddingRight={"2rem"}
                                mb={"72px"}
                                justifyContent={"flex-end"}
                                alignItems={"center"}
                                cursor={"pointer"}
                            >
                                <Text
                                    fontFamily={"headingAlternative"}
                                    marginRight={"4px"}
                                    fontSize={"sm"}
                                >
                                    SCROLL TO BEGIN
                                </Text>
                                <Center>
                                    <ChevronDown width={"28"} height={"28"} />
                                </Center>
                            </Flex>
                        </VStack>
                    </Box>
                </Show>
            </Box>
            <Show when={init}>
                <IconButton
                    position={"fixed"}
                    bottom={"12px"}
                    left={"12px"}
                    minW={"8"}
                    h={"8"}
                    borderRadius={"50%"}
                    backgroundColor={"rgb(153, 122, 94)"}
                    onClick={togglePlay}
                >
                    {audioPlaying ? <Music /> : <MusicOff />}
                </IconButton>
            </Show>
        </Flex>
    );
}
