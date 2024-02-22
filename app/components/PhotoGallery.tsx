"use client";

import { useState } from "react";
import { AnimalData } from "../types";
import AutoComplete from "./AutoComplete";
import ToolTip from "./ToolTip";
import { CheckIcon, XIcon } from "lucide-react";
import Modal from "./Modal";

interface PhotoGalleryProps {
  animalData: AnimalData[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ animalData }) => {
  const [formValue, setFormValue] = useState("");
  const [displayAutoComplete, setDisplayAutoComplete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [photoDetailData, setPhotoDetailData] = useState({
    imageUrl: "",
    title: "",
    isFeatured: false,
    rating: 0,
  });

  const handleModalOpen = ({
    imageUrl,
    title,
    isFeatured,
    rating,
  }: {
    imageUrl: string;
    title: string;
    isFeatured: boolean;
    rating: number;
  }) => {
    setModalVisible(true);
    setPhotoDetailData({
      imageUrl,
      isFeatured,
      title,
      rating,
    });
  };

  return (
    <div className="h-screen w-full">
      <div className="mt-20 mx-10 md:mx-20 p-5 flex justify-between bg-blue-500 shadow-lg border-b border-blue-300 items-center">
        <div className="text-xl text-white">Animal Photo Gallery</div>
        <div className="text-xl text-white"></div>
        <AutoComplete
          animalData={animalData}
          displayAutoComplete={displayAutoComplete}
          formValue={formValue}
          setDisplayAutoComplete={setDisplayAutoComplete}
          setFormValue={setFormValue}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-20 mt-5">
        {animalData
          .filter((data) =>
            data.title.toLowerCase().includes(formValue.toLowerCase())
          )
          .map((data, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  handleModalOpen({
                    imageUrl: data.image_url,
                    isFeatured: data.is_featured,
                    title: data.title,
                    rating: data.rating,
                  })
                }
              >
                <ToolTip
                  tooltip={
                    <div>
                      Name: {data.title}
                      <br />
                      <div className="flex gap-3">
                        <text>Featured in Zoo:</text>
                        <text>
                          {data.is_featured ? (
                            <CheckIcon color="green" />
                          ) : (
                            <XIcon color="red" />
                          )}
                        </text>
                      </div>
                    </div>
                  }
                >
                  <img
                    src={data.image_url}
                    className="w-full h-full"
                    alt={data.title}
                  />
                </ToolTip>
              </div>
            );
          })}
        {animalData.filter((data) =>
          data.title.toLowerCase().includes(formValue.toLowerCase())
        ).length === 0 && <div key="not-found">No Picture Found</div>}
      </div>
      <Modal
        isVisible={isModalVisible}
        setIsVisible={setModalVisible}
        imageUrl={photoDetailData.imageUrl}
        isFeatured={photoDetailData.isFeatured}
        title={photoDetailData.title}
        rating={photoDetailData.rating}
      />
    </div>
  );
};

export default PhotoGallery;
