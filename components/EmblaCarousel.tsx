import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Box, Flex, Image } from "@chakra-ui/react";

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <Box className="embla__viewport" ref={emblaRef}>
                <Box className="embla__container">
                    {slides.map((url, index) => (
                        <Box className="embla__slide" key={index}>
                            <Image
                                src={url}
                                alt={url}
                                w={"full"}
                                h={"full"}
                                cursor={"pointer"}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Flex
                gap={"10px"}
                mt={"20px"}
                justifyContent={"flex-end"}
                pr={"2.5rem"}
            >
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />
            </Flex>
        </section>
    );
};

export default EmblaCarousel;
