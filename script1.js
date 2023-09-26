function myName(param){
    console.log(param)
}

myName("Szivák Milán")

function infoAboutMe(name, city, age){
    console.log("Az én nevem "+name);
    console.log("A város ahol élek: "+city)
    console.log("jelenleg ennyi idős vagyok: " +age)
}

myName(infoAboutMe("Milán", "Budapest", 22));

