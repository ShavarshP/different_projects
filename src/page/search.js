import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { map: <div>blok</div> };
  }

  async componentDidMount() {
    console.log("maladec");
    const data = await fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    console.log(data);
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="h-20 w-60">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              className=" w-36 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
          {this.state.map}
        </div>
      </div>
    );
  }
}

export default Search;
