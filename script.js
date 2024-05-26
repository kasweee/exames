const nameValue = document.querySelector(".name");
const emailValue = document.querySelector(".email");
const imgValue = document.querySelector(".img");
const create = document.querySelector(".create");
const read = document.querySelector(".read");
const cards = document.querySelector(".cards");
const hero_right = document.querySelector(".hero-right ");
const closeX =document.querySelector(".closeX")



let changing = true;

read.addEventListener("click", () => {
  if (changing) {
    hero_right.style.display = "block";
    read.innerHTML = "HIDE CONTACT";
    changing = false;
  } else {
    hero_right.style.display = "none";
    read.innerHTML = "READ CONTACT";
    changing = true;
  }
});

create.addEventListener("click", () => {
    if(nameValue.value.trim()===''||emailValue.value.trim()=== ''|| imgValue.value.trim()==='') {
        alert('fill the inputs !!!')
    } else {
        addTodo();
    }

  nameValue.value = ''
  emailValue.value = ''
  imgValue.value = ''
});

function addTodo() {
  let local = JSON.parse(localStorage.getItem("task")) || [];
  let new_item = {
    nameValue: nameValue.value,
    emailValue: emailValue.value,
    imgValue: imgValue.value,
  };
  local.push(new_item);
  localStorage.setItem("task", JSON.stringify(local));
  creatingItems();
}

function creatingItems() {
  cards.innerHTML = "";
  let local = JSON.parse(localStorage.getItem("task")) || [];
  local.map((el) => {
    cards.innerHTML += `
    <div class="card">
        <div class="image">
         <img src="${el.imgValue}"/>
        </div>
        <div class="inputValues">
            <span>name : ${el.nameValue}</span>
            <span>email : ${el.emailValue}</span>
        </div>
        <button class="dltBtn">delete</button>
    </div>
    `;
  });
  deleteContact();
}

hero_right.addEventListener("click", () => {
  hero_right.style.display ="block"
})
closeX.addEventListener("click", () => {
  hero_right.style.display ="none"
})

function deleteContact() {
  let local = JSON.parse(localStorage.getItem("task")) || [];
  let dltBtn = document.querySelectorAll(".dltBtn");
  dltBtn.forEach((el, idx) => {
    el.addEventListener("click", () => {
      local = local.filter((el, id) => {
        return id !== idx;
      });
      localStorage.setItem("task", JSON.stringify(local));
      creatingItems();
    });
  });
}



deleteContact();
creatingItems();