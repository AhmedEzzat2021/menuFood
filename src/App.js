import "./App.css";
import { Container } from "react-bootstrap";
import NavbarComp from "./Components/Navbar";
import { HeaderTitle } from "./Components/HeaderTitle";
import { Category } from "./Components/Category";
import { CardList } from "./Components/CardList";
import Data from "./data";
import { useState } from "react";

function App() {
  const [item, setItems] = useState(Data);

  //Get all category dynamic
  const allCtaegory = ["الكل", ...new Set(Data.map(x => x.category))];

  // Filter items data by category
  const filterCateg = cat => {
    if (cat === "الكل") {
      setItems(Data);
    } else {
      let newArr = Data.filter(item => item.category === cat);
      setItems(newArr);
    }
  };

  // Filter items data by Search input field
  const filterSearch = word => {
    if (word !== "") {
      let newArr = Data.filter(item => item.title === word);
      setItems(newArr);
    }
  };
  return (
    <div className="App">
      <NavbarComp filterSearch={filterSearch} />
      <Container>
        <HeaderTitle />
        <Category filterCateg={filterCateg} allCtaegory={allCtaegory} />
        <CardList myItems={item} />
      </Container>
    </div>
  );
}

export default App;
