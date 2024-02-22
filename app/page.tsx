import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import PhotoGallery from "./components/PhotoGallery";
import animalData from "./images.json";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Carousel animalData={animalData} />
      <PhotoGallery animalData={animalData} />
    </PageContainer>
  );
}
