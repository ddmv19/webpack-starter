import '../css/components.css';
// import webPackLogo from '../assets/img/webpack-logo.png';

export const saludar = () => {
  console.log('Creando etiqueta h1');
  const h1 = document.createElement('h1');
  h1.innerText = "Start your web with this starter of webpack";
  document.body.append(h1);
}
