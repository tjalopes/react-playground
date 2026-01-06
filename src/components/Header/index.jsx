import "./Header.css"
import { genRandomInt } from "../../utils/";
// import images to this way to make sure the image is important in deployment
import reactImage from '../../assets/react-core-concepts.png';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

export default function Header() {
    const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
