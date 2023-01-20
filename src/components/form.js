const Form = () => {
    return (
      <>
        <section>
          <form className="all">
            <input className="search-input" typeof="search" placeholder="Search" />
            <select  className="select-country">
              <option value="asia">Asia</option>
              <option value="Americas">Americas</option>
              <option value="europe">Europe</option>
              <option value="africa">Africa</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </section>
      </>
    );
  };
  
  export default Form;
  