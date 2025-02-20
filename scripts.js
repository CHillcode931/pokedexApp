 const root = document.getElementById('root');

const getPokemon = async () => {
  try {
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
 getPokemon().then((data) => {
  console.log(data);
  data.map((pokemon) => {
    const para = document.createElement("p");
    const div = document.createElement("div");
    para.append(pokemon.name);
    const photo = document.createElement("img");
    div.append(para, photo);
    root.append(div);
  }
);

//   let nextPage = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=150";
//   let prevPage = "";
//   let results = [];

//   const getNextPage = async (nextPageLink) => {
//     try {
//       const response = await fetch(nextPageLink);
//       return response.json();
//     } catch (error) {
//       console.log(error);
//     }
//   
 });