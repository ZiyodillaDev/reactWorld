
import Header from "./components/header";
import "./components/header.css"
import Form from "./components/form";
import "./components/form.css"
import Card from "./components/card";
import "./components/card.css"
import data from "./components/data";
function App() {
  return (
    <>
     <Header />
     <Form />
     <div className="countries">
        {data.map((item) => {
          return (
            <Card
              name={item.name}
              img={item.img}
              population={item.population}
              capital={item.capital}
              region={item.region}
            />
          );
        })}
      </div>
    </>
  )
}

export default App;
