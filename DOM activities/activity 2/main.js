function changeTextColor(){

    const paragraphs = document.getElementsByTagName("p");
    const headerLvlThree = document.getElementsByTagName("h3");

    for(i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = "blue";
        console.log(paragraphs[i].style.color = "blue");
    }

    for(i = 0; i < headerLvlThree.length; i++){
        headerLvlThree[i].style.color = "green";
        console.log(headerLvlThree[i].style.color = "green");
    }
}