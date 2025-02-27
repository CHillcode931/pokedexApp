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
    data.results.map((pokemon,index)=>{
        const para= document.createElement("p");
        const div= document.createElement("div");
        para.append(pokemon.name)
        const photo=document.createElement("img");
        photo.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
        div.append(para,photo);
        
        const root=document.getElementById("root")
        //creating a class name for div
        //and appending div to root
        div.classList.add("card")
        root.append(div);
    });
    
})
.catch((error)=>console.error(error));

 let darkMode= false;
 const toggleMode=()=>{
    if ( darkMode==false){
        darkMode=true;
        const body=document.querySelector('body');
        const card=document.getElementsByClassName('card');
        body.style.backgroundColor="black";
        body.style.color="white";
        card.style.backgroundColor="gray";
        card.style.color="white";
    }else if(darkMode==true){
        darkMode=false;
        const body= document.querySelector("body");
        const card= document.getElementsByClassName("card");
        body.style.backgroundColor="white";
        body.style.color="black";
        card.style.backgroundColor="gray";
        card.style.color="black"
    }
 }
  const searchPokemon=async(name)=>{
    const query=document.getElementById("searchBar").value;
    console.log(query)   
     fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let resultsDiv= document.getElementById("results");

        
       let para=document.createElement("p")
        let div=document.createElement("div")
        para.append('height:', data.height);
        let weight=document.createElement("p")
        div.append(para)
        resultsDiv.innerHTML=data.name
        let img = document.createElement("img")
        let moves=document.createElement("p")
        let types= document.createElement('p')
        resultsDiv.append(para, weight, img,types )
        weight.append('weight:', data.weight)
        img.src=data.sprites.front_shiny
        types.append('type:',data.types[0].type.name,", ", data.types[1].type.name)

     }
    )
}