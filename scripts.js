const root = document.getElementById("root");

const getPokemon = async()=>{
    try {
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
        );
        let data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
    }
};

const p = getPokemon()
.then((data) => {
    console.log(data)
    data.results.map((pokemon)=>{
        const para= document.createElement("p");
        const div= document.createElement("div");
        para.append(pokemon.name)
        const photo=document.createElement("img");
    photo.src=
        div.append(para,photo);
    let root=document.getElementById('root');

    //creating a class name for div
    //and appending div to root
    div.classList.add("card")
    root.append(div);
    });

})
.catch((error)=>console.error(error));
