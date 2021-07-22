import React from "react";
import SearchCart from "../componet/searchCart";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: <div>blok</div>, imputText: "" };
  }

  async componentDidMount() {
    console.log("maladec");
    const data = await fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          countries: data,
        });
      });
  }
  handeleinputChange = (e) => {
    const text =
      e.target.value.substring(0, 1).toUpperCase() +
      e.target.value.substring(1);
    console.log("item.name"[0].toUpperCase);

    const filtCountries = this.state.countries.filter((item) =>
      item.name.startsWith(text)
    );
    this.setState({
      imputText: e.target.value,
      countriesCart: filtCountries.map((item, index) => (
        <SearchCart
          key={index}
          region={item.region}
          population={item.population}
          name={item.name}
          flag={item.flag}
        />
      )),
    });
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="h-20 w-100">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              onChange={this.handeleinputChange}
              value={this.state.imputText}
              type="text"
              className=" w-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Armenia"
            />
          </div>
          <div className="w-100 max-h-60 border-b-4 overflow-auto">
            {this.state.countriesCart}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
