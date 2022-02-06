import Banner from "../../components/UI/Banner/Banner";
import Gallery from "../../components/Designs/Gallery/Gallery";
import banner from "../../resources/images/designs/banner.jpg";

const Designs = () => {
  return (
    <div>
      <Banner
        title="Johnson's Designs"
        desc="Here displays my art works, which include paintings, photos, and PS work."
        img={banner}
      />
      <Gallery />
    </div>
  );
};

export default Designs;
