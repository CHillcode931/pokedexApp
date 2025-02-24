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
const getPokeDetails=async(url)=>{
    try {
        let response = await fetch(
            url
        );
        let data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
    }
}
    
const p = getPokemon()
.then((data) => {
    console.log(data)
    data.results.map((pokemon,index)=>{
    
    
        const para= document.createElement("p");
        const div= document.createElement("div");
        para.append(pokemon.name)
        const photo=document.createElement("img");
        photo.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1 }.png`;
        div.append(para,photo);
        let root=document.getElementById('root');
        
        
        //creating a class name for div
        //and appending div to root
        div.classList.add("card")
        root.append(div);
    });
    
})
.catch((error)=>console.error(error));
