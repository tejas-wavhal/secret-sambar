import { projects } from './data';
import GalleryPage from '@/components/client/GalleryPage/GalleryPage';

export const metadata = {
  title: "Gallery - Secret Sambar",
  description: "Experience the visual feast of South Indian cuisine at Secret Sambar. Explore our gallery and get a glimpse of the delightful dishes we offer.",
  alternates: {
    canonical: 'https://secretsambar.com/gallery',
    languages: {
      "en-IN": 'https://secretsambar.com/en-IN/gallery'
    }
  }
};

export default function Gallery() {

  const headingPhrases = [
    "Visual Feast of South Indian Cuisine",
    "Journey Through Flavorful Memories",
    "Experience Culinary Artistry at Secret Sambar."
  ];


  return (
    <>
      <GalleryPage headingPhrases={headingPhrases} projects={projects} />
    </>
  )
}
