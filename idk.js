let active = document.getElementById("Recent_lost");
let Lost_item_container=document.getElementById("Lost_item_container");
let Found_item_container=document.getElementById("Found_item_container");
let non_active = document.getElementById("Recent_found");
active.addEventListener('click', () => {
    console.log("active");
    active.style.color = "rgb(35, 109, 255)";
    active.style.borderBottom = "3px solid rgb(35, 109, 255)"; 
    non_active.style.color = "white";
    non_active.style.borderBottom = "none";
    Lost_item_container.style.display = "block";
    Found_item_container.style.display = "none";
})

non_active.addEventListener('click', () => {
    console.log("active-non");
    non_active.style.color = "rgb(35, 109, 255)";
    non_active.style.borderBottom = "3px solid rgb(35, 109, 255)";
    active.style.color = "white";
    active.style.borderBottom = "none";
    Lost_item_container.style.display = "none";
    Found_item_container.style.display = "block";
})
