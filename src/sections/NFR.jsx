import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Title from "../conponents/Title";
import SimpleSlider from "../conponents/NftSlider";
import nft1 from "../assets/images/nft1.png";
import sm_nft1 from "../assets/images/sm_nft1.png";
import Buttons from "../conponents/Buttons";

const NFR = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div>
        <Flex classname="justify-center gap-2"> {dots} </Flex>
      </div>
    ),
    customPaging: (i) => (
      <div className="bg-[#595572] xl:w-7 xl:h-7 h-5 w-5 rounded-full"></div>
    ),

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className=" sm:py-[100px] py-40 px-2">
      <Container>
        <Flex classname="flex-col items-center justify-center">
          <Title
            title="Collect some NFTs"
            classname="text-white mx-auto sm:text-left text-center"
          />
        </Flex>

        <SimpleSlider settings={settings}>
          <div>
            <img src={nft1} alt="" className="bg-cover w-full" />
            <div className="-translate-y-28">
              <Flex classname="flex-col max-w-[90%] bg-secondary mx-auto p-6 rounded-[24px]">
                <Flex classname="justify-between">
                  <p className="font-extrabold text-[22px] font-menuFont">
                    Lighting Axe
                  </p>
                  <p className="font-extrabold text-[22px] font-menuFont">
                    0.36 eth
                  </p>
                </Flex>

                <Flex classname="gap-3">
                  <img src={sm_nft1} alt="" />
                  <p className="text-[22px] font-menuFont">Loura chin</p>
                </Flex>
                <Buttons
                  text="Buy it now"
                  classname="text-center mt-6 rounded-[10px]"
                />
              </Flex>
            </div>
          </div>

          <div>
            <img src={nft1} alt="" className="bg-cover w-full" />
            <div className="-translate-y-28">
              <Flex classname="flex-col max-w-[90%] bg-secondary mx-auto p-6 rounded-[24px]">
                <Flex classname="justify-between">
                  <p className="font-extrabold text-[22px] font-menuFont">
                    Lighting Axe
                  </p>
                  <p className="font-extrabold text-[22px] font-menuFont">
                    0.36 eth
                  </p>
                </Flex>

                <Flex classname="gap-3">
                  <img src={sm_nft1} alt="" />
                  <p className="text-[22px] font-menuFont">Loura chin</p>
                </Flex>
                <Buttons
                  text="Buy it now"
                  classname="text-center mt-6 rounded-[10px]"
                />
              </Flex>
            </div>
          </div>
          <div>
            <img src={nft1} alt="" className="bg-cover w-full" />
            <div className="-translate-y-28">
              <Flex classname="flex-col max-w-[90%] bg-secondary mx-auto p-6 rounded-[24px]">
                <Flex classname="justify-between">
                  <p className="font-extrabold text-[22px] font-menuFont">
                    Lighting Axe
                  </p>
                  <p className="font-extrabold text-[22px] font-menuFont">
                    0.36 eth
                  </p>
                </Flex>

                <Flex classname="gap-3">
                  <img src={sm_nft1} alt="" />
                  <p className="text-[22px] font-menuFont">Loura chin</p>
                </Flex>
                <Buttons
                  text="Buy it now"
                  classname="text-center mt-6 rounded-[10px]"
                />
              </Flex>
            </div>
          </div>
          <div>
            <img src={nft1} alt="" className="bg-cover w-full" />
            <div className="-translate-y-28">
              <Flex classname="flex-col max-w-[90%] bg-secondary mx-auto p-6 rounded-[24px]">
                <Flex classname="justify-between">
                  <p className="font-extrabold text-[22px] font-menuFont">
                    Lighting Axe
                  </p>
                  <p className="font-extrabold text-[22px] font-menuFont">
                    0.36 eth
                  </p>
                </Flex>

                <Flex classname="gap-3">
                  <img src={sm_nft1} alt="" />
                  <p className="text-[22px] font-menuFont">Loura chin</p>
                </Flex>
                <Buttons
                  text="Buy it now"
                  classname="text-center mt-6 rounded-[10px]"
                />
              </Flex>
            </div>
          </div>

          <div>
            <img src={nft1} alt="" className="bg-cover w-full" />
            <div className="-translate-y-28">
              <Flex classname="flex-col max-w-[90%] bg-secondary mx-auto p-6 rounded-[24px]">
                <Flex classname="justify-between">
                  <p className="font-extrabold text-[22px] font-menuFont">
                    Lighting Axe
                  </p>
                  <p className="font-extrabold text-[22px] font-menuFont">
                    0.36 eth
                  </p>
                </Flex>

                <Flex classname="gap-3">
                  <img src={sm_nft1} alt="" />
                  <p className="text-[22px] font-menuFont">Loura chin</p>
                </Flex>
                <Buttons
                  text="Buy it now"
                  classname="text-center mt-6 rounded-[10px]"
                />
              </Flex>
            </div>
          </div>

          <div>
            <img src={nft1} alt="" className="bg-cover w-full" />
            <div className="-translate-y-28">
              <Flex classname="flex-col max-w-[90%] bg-secondary mx-auto p-6 rounded-[24px]">
                <Flex classname="justify-between">
                  <p className="font-extrabold text-[22px] font-menuFont">
                    Lighting Axe
                  </p>
                  <p className="font-extrabold text-[22px] font-menuFont">
                    0.36 eth
                  </p>
                </Flex>

                <Flex classname="gap-3">
                  <img src={sm_nft1} alt="" />
                  <p className="text-[22px] font-menuFont">Loura chin</p>
                </Flex>
                <Buttons
                  text="Buy it now"
                  classname="text-center mt-6 rounded-[10px]"
                />
              </Flex>
            </div>
          </div>
        </SimpleSlider>
      </Container>
    </section>
  );
};

export default NFR;
