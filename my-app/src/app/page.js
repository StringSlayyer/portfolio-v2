"use client";
import { useState } from "react";
import Image from "next/image";
import BasicLayout from "./components/BasicLayout";
import {
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  Button,
  Link,
  Image as nextImage,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { siteConfig } from "./_config/site.js";
import TypewriterCompo from "./components/Typewriter";

import img1 from "../../public/IMG_0406.jpg";
import nextui from "../../public/nextui.png";
import nextjs from "../../public/nextjs.svg";
import tailwindcss from "../../public/tailwind.png";
import java from "../../public/java.png";
import php from "../../public/php.png";
import javascript from "../../public/javascript.png";
import csharp from "../../public/csharp.svg";
import unity from "../../public/unity.png";
import mysql from "../../public/mysql.png";

import gal1 from "../../public/gallery/1.jpg";
import gal2 from "../../public/gallery/2.jpg";
import gal3 from "../../public/gallery/3.jpg";
import gal4 from "../../public/gallery/4.jpg";
import gal5 from "../../public/gallery/5.jpg";
import gal6 from "../../public/gallery/6.jpg";
import gal7 from "../../public/gallery/7.jpg";
import gal8 from "../../public/gallery/8.jpg";
import gal9 from "../../public/gallery/9.jpg";
import gal10 from "../../public/gallery/10.jpg";
import gal11 from "../../public/gallery/11.jpg";
import gal12 from "../../public/gallery/12.jpg";
import gal13 from "../../public/gallery/13.jpg";
import gal14 from "../../public/gallery/14.jpg";
import gal15 from "../../public/gallery/15.jpg";

export default function Home() {
  const list = [
    {
      title: "NextUI",
      img: nextui,
    },
    {
      title: "NextJS",
      img: nextjs,
    },
    {
      title: "TailwindCSS",
      img: tailwindcss,
    },
    {
      title: "Java",
      img: java,
    },
    {
      title: "PHP",
      img: php,
    },
    {
      title: "Javascript",
      img: javascript,
    },
    {
      title: "C#",
      img: csharp,
    },
    {
      title: "Unity",
      img: unity,
    },
    {
      title: "MySQL",
      img: mysql,
    },
  ];
  const gallery = [
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal7,
    gal8,
    gal9,
    gal10,
    gal11,
    gal12,
    gal13,
    gal14,
    gal15,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpenModal = (index) => {
    setIsOpen(true);
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setOpenModalIndex(null);
  };
  return (
    <BasicLayout>
      <div className="bg-grey-600 text-grey-400">
        <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full h-screen">
          <div className="w-1/2 flex flex-col justify-center  mb-16 text-4xl leading-10">
            <h2>jmenuji se</h2>
            <h1 className="text-[3rem] my-1">Samuel Žárský</h1>
            <div className="flex">
              <h2 className="mr-2">Jsem </h2>
              {/* <Typewriter
                options={{
                  strings: ["web developer", "fotograf", "backend developer"],
                  autoStart: true,
                  loop: true,
                }}
              />*/}
              <TypewriterCompo
                strings={["web developer", "fotograf", "backend developer"]}
              />
            </div>
          </div>
          <div className="w-1/3 mr-8">
            <Image src={img1} className="w-full" alt="ja" />
          </div>
        </div>
        <div id="o-mne" className="mb-16 w-11/12 mx-auto flex justify-between">
          <div className="w-fit text-center">
            <h1 className="text-3xl text-grey-50 ">O mně</h1>
            <p className="w-2/3 mx-auto mt-6 text-lg text-grey-100">
              Jmenuji se Samuel Žárský a je mi 18 let. Studuji na{" "}
              <Link
                isExternal
                href={siteConfig.links.chc}
                className="text-blood-600"
              >
                Creative Hill College
              </Link>{" "}
              ve Zlíně obor Vývoj multimediálních aplikací a her. Zabývám se
              tvorbou webů, programováním aplikací v jazycích Java, PHP,
              Javascript a 3D her v jazyce C#. Také rád fotím jak pro zábavu,
              tak i na zakázku.{" "}
            </p>
          </div>
          <div className="w-fit text-center">
            <h1 className="text-3xl text-grey-50 ">O mně</h1>
            <p className="w-2/3 mx-auto mt-6 text-lg text-grey-100">
              Jmenuji se Samuel Žárský a je mi 18 let. Studuji na{" "}
              <Link
                isExternal
                href={siteConfig.links.chc}
                className="text-blood-600"
              >
                Creative Hill College
              </Link>{" "}
              ve Zlíně obor Vývoj multimediálních aplikací a her. Zabývám se
              tvorbou webů, programováním aplikací v jazycích Java, PHP,
              Javascript a 3D her v jazyce C#. Také rád fotím jak pro zábavu,
              tak i na zakázku.{" "}
            </p>
          </div>
        </div>
        <div
          id="technologie"
          className="w-11/12 mx-auto grid grid-cols-2 my-10"
        >
          <Card className="bg-black rounded-4xl w-4/5 mx-auto py-4">
            <CardHeader className="text-center text-3xl mb-8 text-grey-50">
              <h1 className="mx-auto">Technologie</h1>
            </CardHeader>
            <CardBody className="grid grid-cols-3 mx-auto gap-y-6 gap-10 w-4/5 justify-items-center">
              {list.map((item, index) => (
                <Tooltip content={item.title} key={index}>
                  <Card
                    shadow="sm"
                    isHoverable
                    className="w-4/5 bg-grey-50 p-3 h-auto"
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        alt={item.title}
                        src={item.img}
                        className="object-cover mx-auto my-auto"
                      />
                    </CardBody>
                  </Card>
                </Tooltip>
              ))}
            </CardBody>
          </Card>
          <Card className="bg-blood-700 rounded-4xl w-4/5 mx-auto py-4">
            <CardHeader className="text-center text-3xl mb-8 text-grey-50">
              <h1 className="mx-auto">Projekty</h1>
            </CardHeader>
            <CardBody className="grid grid-cols-2 justify-items-center gap-y-6">
              {siteConfig.githubProjects.map((item, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  isBlurred
                  className=" dark w-4/5 p-3 h-fit"
                >
                  <CardBody className="  overflow-visible p-0">
                    <h1 className="text-lg text-grey-50 leading-5 mt-2">
                      {item.label}
                    </h1>
                    <h2 className="text-grey-50">{item.technologies}</h2>
                    <p className="text-grey-100 text-sm leading-5">
                      {item.description}
                    </p>
                    <Button
                      href={item.href}
                      as={Link}
                      showAnchorIcon
                      isExternal
                      className="bg-white my-3 text-blood-700"
                    >
                      Zobrazit na GitHubu
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </CardBody>
          </Card>
        </div>
        <div id="fotogalerie" className="mt-36">
          <h1 className="text-3xl text-grey-50 text-center">Fotogalerie</h1>
          <div className="w-5/6 mt-9 mx-auto grid grid-cols-5 gap-4">
            {gallery.map((item, index) => (
              <div
                className="w-fit"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <Image src={item} alt="fotka" />
              </div>
            ))}
          </div>
          {openModalIndex !== null && (
            <Modal
              isOpen={true}
              onClose={handleCloseModal}
              placement="top-center"
              size="4xl"
              className="bg-transparent"
            >
              <ModalContent className="w-screen">
                <ModalBody className=" w-full h-full">
                  <Image
                    src={gallery[openModalIndex]}
                    className="w-full"
                    alt="fotka"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </div>
      </div>
    </BasicLayout>
  );
}
