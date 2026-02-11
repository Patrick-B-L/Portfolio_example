import aboutMe from './img/about-me.png';
import avatar1 from './img/avatar-image-1.png';
import avatar2 from './img/avatar-image-2.png';
import avatar from './img/avatar-image.png';
import featherPen1 from './img/feather-pen-1.png';
import featherPen2 from './img/feather-pen-2.png';
import heroImg from './img/hero_img.png';
import logo from './img/logo.svg';
import placeholder1 from './img/placeholder-image-1.png';
import placeholder2 from './img/placeholder-image-2.png';
import placeholder from './img/placeholder-image.png';
import productChain1 from './img/product-chain-1.png';
import tag1 from './img/tag-1.png';

const images = {
  './img/about-me.png': aboutMe,
  './img/avatar-image-1.png': avatar1,
  './img/avatar-image-2.png': avatar2,
  './img/avatar-image.png': avatar,
  './img/feather-pen-1.png': featherPen1,
  './img/feather-pen-2.png': featherPen2,
  './img/hero_img.png': heroImg,
  './img/logo.svg': logo,
  './img/placeholder-image-1.png': placeholder1,
  './img/placeholder-image-2.png': placeholder2,
  './img/placeholder-image.png': placeholder,
  './img/product-chain-1.png': productChain1,
  './img/tag-1.png': tag1,
};

export const resolveImage = (src) => images[src] ?? src;
