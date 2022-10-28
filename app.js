let invitat = document.querySelector(".givenname");
let submit = document.querySelector(".submit");
let theOnes = document.querySelector(".theones")

submit.addEventListener("click", ()=> {
    
let numeInvitat = invitat.value;
let newItem = createElement(numeInvitat);


if(numeInvitat != "") {
    theOnes.appendChild(newItem);
    invitat.value="";
}else {
    alert("No valid input")
}


})

let remove = document.querySelector(".remove");
let edit = document.querySelector(".edit");

let newDiv=document.querySelector(".newdiv")

theOnes.addEventListener("click", e => {


    let obj=e.target;
    let parintele = obj.parentNode;
    let bunicul = parintele.parentNode;
    let strabunicul = bunicul.parentNode;

    // let bifa = 

    if(obj.classList.contains("remove")) {

        strabunicul.removeChild(bunicul);

    }else
    if(obj.classList.contains("edit")) {
        obj.textContent = "Save";
        let label = bunicul.firstElementChild;
        bunicul.removeChild(label);
        
        let inputNou = document.createElement("input");
        inputNou.classList.add("inputnou");
        let fratele = bunicul.firstElementChild;
        bunicul.insertBefore(inputNou,fratele)
        let ultimulFrate = fratele.nextElementSibling;
        let save = ultimulFrate.firstElementChild;
        save.classList.remove("edit")
        save.classList.add("save")

        
        
    }else if(obj.classList.contains("save")){
        let x = bunicul.firstElementChild;
        let aux = x.value;
        bunicul.removeChild(x);
        let y = bunicul.firstElementChild;

        let label = document.createElement("label");
        bunicul.insertBefore(label,y);
        label.textContent = aux;
        label.classList.add("labeltable");
        
    }

    


})

let filter  = document.getElementById("filter");




filter.addEventListener("change", ()=>{
    let c = "";

    if(filter.checked == true){
        
        let x = filter.parentNode;
        let y = x.parentNode;
        let k = y.nextElementSibling; 
        
        // console.log(k);
        
        let arr = k.children;
        // console.log(arr);
        for(i=0;i<arr.length;i++){
            let a = arr[i].firstElementChild;
            let b = a.nextElementSibling;
            c = b.lastElementChild;
            let elPadre = c.parentNode;
            let elAbuelo = elPadre.parentNode;

            if(c.checked != true){
                elAbuelo.classList.add("hide");
            }
        }

    } else {
        
        let x = filter.parentNode;
        let y = x.parentNode;
        let k = y.nextElementSibling; 
        
        // console.log(k);
        
        let arr = k.children;
        // console.log(arr);

        for(i=0;i<arr.length;i++){
            let a = arr[i].firstElementChild;
            let b = a.nextElementSibling;
            c = b.lastElementChild;
            let elPadre = c.parentNode;
            let elAbuelo = elPadre.parentNode;
            elAbuelo.classList.remove("hide");


    }

    }

})