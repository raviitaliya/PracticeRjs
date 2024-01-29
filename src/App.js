import Card from "./components/Card"
import './App.css';

function App() {
  return (
    <div className="flex p-4 gap-10">
      <Card name="Macbook" img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1699558878477"/>
      <Card name="Dell"  img="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-multiple-products/laptop/laptop-deals-custom-module.png"/>
      <Card name="HP"  img="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg?webp"/>
      <Card name="Lenovo"  img="https://p2-ofp.static.pub//fes/cms/2023/11/30/agseru582cwtcqzu6yegsicrvqscu8382910.png"/>
    </div>
  );
}
  
export default App;
