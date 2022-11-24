import Img1 from "../../assets/paybeta.jpeg";
import Img2 from "../../assets/atlas.png";
import Img3 from "../../assets/samarket.png";
import Logo1 from "../../assets/React-icon.png";
import Logo2 from "../../assets/styled.png";
import Logo3 from "../../assets/spring.png";
import Logo4 from "../../assets/redux.png";

// import { FaReact } from "react-icons/fa";
// import { SiStyledcomponents, SiSpringCreators, SiRedux } from "react-icons/si";
export const projects = [
  {
    name: "PayBeta",
    Img: `${Img1}`,
    link: "https://paybeta.netlify.app/",
    git: "https://github.com/Rogue-codes/paybeta",
    tech: [
    {
        img:`${Logo1}`,
        stack:"React JS"
    },
    {
        img:`${Logo2}`,
        stack:"StyledComponents"
    },
    {
        img:`${Logo3}`,
        stack:"React-spring"
    },
],
  },
  {
    name: "Atlas Airways",
    Img: `${Img2}`,
    link: "https://atlas-air.netlify.app/",
    git: "https://github.com/Rogue-codes/Atlas-Airways",
    tech: [
    {
        img:`${Logo1}`,
        stack:"React JS"
    },
    {
        img:`${Logo2}`,
        stack:"StyledComponents"
    },
    {
        img:`${Logo3}`,
        stack:"React-spring"
    },
],
  },
  {
    name: "Market Place",
    Img: `${Img3}`,
    link: "https://sa-market.netlify.app/",
    git: "https://github.com/Rogue-codes/Ecommerce-Frontend",
    tech: [
    {
        img:`${Logo1}`,
        stack:"React JS"
    },
    {
        img:`${Logo2}`,
        stack:"StyledComponents"
    },
    {
        img:`${Logo4}`,
        stack:"Redux"
    },
],
  },
];
