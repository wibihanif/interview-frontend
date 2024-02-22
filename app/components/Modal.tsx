"use client";

import { CheckIcon, XIcon } from "lucide-react";
import Image from "next/image";
import StarRating from "./StarRating";
import { useState } from "react";
import { writeJsonFile } from "write-json-file";
import animalData from "../images.json";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
  title: string;
  imageUrl: string;
  isFeatured: boolean;
  rating: number;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  setIsVisible,
  imageUrl,
  isFeatured,
  title,
  rating,
}) => {
  const [newRating, setNewRating] = useState(0);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => setIsVisible(false)}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <div>Animal Picture Detail</div>
          <Image src={imageUrl} width="600" height="600" alt={title} />
          <div>Name: {title}</div>
          <div className="flex gap-2">
            Featured in zoo:
            {isFeatured ? <CheckIcon color="green" /> : <XIcon color="red" />}
          </div>
          <div>
            Star Rating:
            <div className="flex gap-3">
              <StarRating
                starRating={rating}
                onRatingChange={setNewRating}
                setIsVisible={setIsVisible}
              />
              {rating}/5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
