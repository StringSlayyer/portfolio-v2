import React, { useState } from "react";
import { Modal, ModalContent, ModalBody, Link } from "@nextui-org/react";
import Image from "next/image";

import gal1 from "../../../public/gallery/1.jpg";
import gal2 from "../../../public/gallery/2.jpg";
import gal3 from "../../../public/gallery/3.jpg";
import gal4 from "../../../public/gallery/4.jpg";
import gal5 from "../../../public/gallery/5.jpg";
import gal6 from "../../../public/gallery/6.jpg";
import gal7 from "../../../public/gallery/7.jpg";
import gal8 from "../../../public/gallery/8.jpg";
import gal9 from "../../../public/gallery/9.jpg";
import gal10 from "../../../public/gallery/10.jpg";
import gal11 from "../../../public/gallery/11.jpg";
import gal12 from "../../../public/gallery/12.jpg";
import gal13 from "../../../public/gallery/13.jpg";
import gal14 from "../../../public/gallery/14.jpg";
import gal15 from "../../../public/gallery/15.jpg";

const Gallery = () => {
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
  return (
    <div id="fotogalerie" className="mt-36">
      <h1 className="text-3xl text-grey-50 text-center">Fotogalerie</h1>
      <p className="w-2/3 mx-auto text-center my-6">
        Ve volném čase se zabývám focením, jak pro zábavu, tak i pro zakázku.
        Zde si můžete prohlédnout některé z fotografií. Více jich najdete na{" "}
        <Link isExternal href="" className="text-blood-600">
          Instagramovém profilu
        </Link>{" "}
        nebo na{" "}
        <Link isExternal className="text-blood-600">
          Zoneramě
        </Link>
        .
      </p>
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
  );
};

export default Gallery;
