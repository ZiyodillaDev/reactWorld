
import Header from "./components/header";
import "./components/header.css"
import Form from "./components/form";
import "./components/form.css"

function App() {
  return (
    <div className="container">
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
    </div>
  )
}

export default App;
