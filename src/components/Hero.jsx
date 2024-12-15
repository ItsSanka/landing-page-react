import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/img-hero1.jpg"
import image2 from "../assets/images/img-hero2.jpg"
import image3 from "../assets/images/img-hero3.jpg"

var heroData = [
  {
    id: 1,
    image: image1,
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: image2,
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: image3,
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];

function Hero() {
  return (
    <div id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
                <img src={hero.image} alt={"slide 1" + hero.id} />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a href={hero.link} className="btn btn-primary">
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
