
import EmblaCarousel from '../carousel.jsx'; // adjust path as needed

export default function CommunityEngagement() {
  const slides = Array.from({ length: 5 }, (_, index) => index); 

  return (
    <div className="">
        <EmblaCarousel slides={slides} />
    </div>
  )
}
