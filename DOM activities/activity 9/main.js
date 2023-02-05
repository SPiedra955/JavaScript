function createFooter(){

    const txt1 = document.getElementById("str1").value;
    const txt2 = document.getElementById("str2").value;
    const finalTxt = txt1 + " " + txt2;

    const foot = document.createElement("footer");
    document.body.appendChild(foot);

    foot.innerHTML = finalTxt;
}