



var fullName = document.querySelector("#name");
var phoneNumber = document.querySelector("#phoneNumber");
var emailAddress = document.querySelector("#emailAddress");
var Address = document.querySelector("#Address");
var Group = document.querySelector("#Group");
var notes = document.querySelector("#notes");

var noEmergency = document.querySelector("#noEmergency");
var noFavorites = document.querySelector("#noFavorites");

var curentIndex;
var Total = 0;
var Favorites = 0;
var Emergency = 0;

var array = [];
var navArrStrat = [];
var navArrEmergency = [];


// local storage cheek
if(localStorage.getItem('contact')){
    array = JSON.parse(localStorage.getItem("contact"));
    displayContact(array);
}

var sectionBlur = document.querySelector("#blur")
// btn add
var btnAddContact = document.querySelector("#btnAdd");
var cardContactAdd = document.querySelector("#addContact");
function btnAdd(){
  cardContactAdd.classList.remove("d-none");
  sectionBlur.classList.add("filter");
}
btnAddContact.addEventListener("click" , btnAdd);

// btn cancle
var btnCancelContact = document.querySelector("#btn-cancle-contact")
function btnCancle(){
  var cardContactCancle = document.querySelector("#addContact");
  cardContactCancle.classList.add("d-none");
  sectionBlur.classList.remove("filter");
}
btnCancelContact.addEventListener("click" , btnCancle);

// Add Contact To Section
var addContactToSection = document.querySelector("#addContactToSection");
function confirmDetails(){
    var contact = {
        name: fullName.value,
        phone:phoneNumber.value,
        email:emailAddress.value,
        address:Address.value,
        group:Group.value,
        notes:notes.value,
    }
    array.push(contact);
    
    localStorage.setItem('contact', JSON.stringify(array))

    Swal.fire({
  title: "Successfully addad!",
  icon: "success",
  draggable: true
});

    displayContact(array);
    btnCancle();

    var cartona = `<span id="numTotal" class="fw-bold fs-4">${Total+=1}</span>`;
    document.querySelector("#numTotal").innerHTML = cartona;
}
addContactToSection.addEventListener("click",confirmDetails);

// Cancel Botton
var CancelBotton = document.querySelector("#CancelBotton");
function btnCancle(){
  var cardContactCancle = document.querySelector("#addContact");
  cardContactCancle.classList.add("d-none");
  sectionBlur.classList.remove("filter");
}
CancelBotton.addEventListener("click", btnCancle);

// Display Contact
function displayContact(list){
  var cartona = ``;
  for(var i = 0; i < list.length; i++){
    cartona += `
    <div class="col-6">
      <section>
        <div class="contact-card mt-5 rounded-4 mb-5 shadow p-2">
          <div class="d-flex">
          <div class="me-2">
              <span class="fa-stack fa-2x fs-2 text-danger position-relative">
                <i class="fa-solid fa-square fa-stack-2x"></i>
                <i class="fa-solid  fa-stack-1x fa-inverse fs-5">${list[i].name[0]? list[i].name[0] : i}</i>
                <!-- position-absolute  -->
                <div class="position-absolute tpo--50 left-60 heart-wrap">
                  <span class="starIcon fa-stack fa-2x fs-7r me-2 mt-1 text-orange d-none ">
                      <i  class="fa-solid fa-circle fa-stack-2x "></i>
                      <i class="fa-solid fa-star fa-stack-1x fa-inverse fs-0-5r "></i>
                  </span>
                </div>
                <!-- position-absolute  -->
                <div class="position-absolute bottom--30 right--10">
                  <span class="heartIcon fa-stack fa-2x fs-7r me-2 mt-1 text-pink d-none">
                      <i class="fa-solid fa-circle fa-stack-2x"></i>
                      <i class="fa-solid fa-heart fa-stack-1x fa-inverse fs-0-5r"></i>
                  </span>
                </div>
              </span>
          </div>
        <div>
            <p class="mb-0 fw-bold ms-1">${list[i].name}</p>
            <div class="d-flex">
              <span class="fa-stack fa-2x fs-7r me-2 mt-1 light-blue">
                <i class="fa-solid fa-square fa-stack-2x"></i>
                <i class="fa-solid fa-phone fa-stack-1x fa-inverse fs-0-5r text-blue"></i>
              </span>
              <p class="text-secondary">${list[i].phone}</p>
            </div>

        </div>
    </div>

          <!-- email -->
          <div class="d-flex ms-2">
            <span class="fa-stack fa-2x fs-1r me-2 mt-1 light-blue">
              <i class="fa-solid fa-square fa-stack-2x"></i>
              <i class="fa-solid fa-envelope fa-stack-1x fa-inverse fs-7r text-blue"></i>
            </span>
            <p class="text-secondary mt-1">${list[i].email}</p>
          </div>
          <div class="d-flex  ms-2">
            <span class="fa-stack fa-2x fs-1r me-2 mt-1 light-green">
              <i class="fa-solid fa-square fa-stack-2x"></i>
              <i class="fa-solid fa-location-dot fa-stack-1x fa-inverse fs-7r text-success"></i>
            </span>
            <p class="text-secondary mt-1">${list[i].address}</p>
          </div>

          <!-- span -->
          <div class="ms-2 mb-3 ">
            <span class="bg-light-blue px-3 py-1 rounded-3 fs-7r text-blue">${list[i].group}</span>
            <span class="bg-light-bink px-3 py-1 rounded-3 fs-7r text-bink spanHeart d-none"><i class="fa-solid fa-heart-pulse me-2"></i>Emergency</span>
          </div>

          <!-- button icon -->
          <div class="d-flex justify-content-between border-top">
            <div class="me-5">
              <button class="btn btn-light text-success p-1"><i class="fa-solid fa-phone"></i></button>
              <button class="btn btn-light text-move hover-yellow p-1"><i class="fa-solid fa-envelope"></i></button>
            </div>
            <div>
              <button onclick = "btnStar(this,${i})" class=" btn btn-light text-secondary p-1"><i class="fa-solid fa-star"></i></button>
              <button onclick = "btnHeart(this,${i})" class="btn btn-light text-secondary p-1"><i class="fa-solid fa-heart"></i></button>
              <button onclick = "updataBtn(${i})" class="btn btn-light  hover-blue p-1"><i class="fa-solid fa-pen"></i></button>
              <button onclick = "deleteContact(this.value)" class="btn btn-light  hover-red p-1"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      </section>
    </div>
    `
  }
  document.querySelector("#cardDemo").innerHTML = cartona;
}

function clear(){
fullName.value = "";
phoneNumber.value = "";
emailAddress.value = "";
Address.value = ""; 
Group.value = "";
notes.value = "";
}

function searchContact(searchTerm){
    var searchList = [];
    for(var i = 0 ; i < array.length; i++){
        if(array[i].name.toLowerCase().includes(searchTerm.toLowerCase())){
              searchList.push(array[i]);
        }
    }
    displayContact(searchList);
}

function deleteContact(index) {

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this item!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, delete it',
    cancelButtonText: 'No'
  }).then((result) => {

    if (result.isConfirmed) {

      array.splice(index, 1);
      
      Total = array.length;
      document.querySelector("#numTotal").innerHTML = Total;

      Favorites--;
      
      localStorage.setItem('contact', JSON.stringify(array))
      displayContact(array);

      Swal.fire(
        'Deleted!',
        'The item has been deleted successfully.',
        'success'
      );
    }
    
  });
}

function updataBtn(index){
curentIndex = index;
    fullName.value = array[index].name,
    phoneNumber.value = array[index].phone,
    emailAddress.value = array[index].email,
    Address.value = array[index].address,
    Group.value = array[index].group,
    notes.value = array[index].notes,

    addContactToSection.classList.add("d-none");
    btnUpdata.classList.remove("d-none");

    btnAdd();
}

var btnUpdata = document.querySelector("#updataContact");
function buttonUpdata(){
    var contact = {
      name: fullName.value,
      phone:phoneNumber.value,
      email:emailAddress.value,
      address:Address.value,
      group:Group.value,
      notes:notes.value,
    };
    array.splice(curentIndex,1,contact)
    
    addContactToSection.classList.remove("d-none");
    btnUpdata.classList.add("d-none");
    
    cardContactAdd.classList.add("d-none");
    sectionBlur.classList.remove("filter");
    
    Swal.fire({
      title: "Successfully Updata!",
      icon: "success",
      draggable: true
    });
    
  localStorage.setItem('contact',JSON.stringify(array));
  displayContact(array);

}
btnUpdata.addEventListener("click", function (){ buttonUpdata(); })

// validata contact
function validataContact(element){
var regex = {
    name:/^[A-Z][a-z]{2,14}( [A-Z][a-z]{2,14})?$/, 
    phoneNumber:/^(20|\+2)?01[0-25][0-9]{8}$/,      
    emailAddress:/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/,  
    Address:/^[a-zA-Z0-9\s]{3,50}$/,                 
    Group:/^(Family|Friends|Work|School|other)$/, 
    notes:/^[a-zA-Z0-9\s]{3,100}$/,                    
}

    var isValid = regex[element.id].test(element.value);
    console.log(isValid);

    if(isValid){
        element.classList.remove("is-invalid")
        element.classList.add("is-valid")
    } else {
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
    }
      return isValid;
}

function confirmDetails() {
    var inputs = [fullName, phoneNumber, emailAddress, Address, Group, notes];
    var allValid = true;

    for (var i = 0; i < inputs.length; i++) {
        if(!validataContact(inputs[i])) {
            allValid = false;
        }
    }

    if(!allValid){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'please Enter The Data Correctly',
        });
        return; 
      }
    var contact = {
        name: fullName.value,
        phone: phoneNumber.value,
        email: emailAddress.value,
        address: Address.value,
        group: Group.value,
        notes: notes.value,
    };

    array.push(contact);

    Swal.fire({
        title: "Added SuccessFully",
        icon: "success",
        draggable: true
    });

    displayContact(array);
    btnCancle();

    Total++;
    document.querySelector("#numTotal").innerHTML = Total;
}

// button start
function btnStar(btn,i){
  var card = btn.closest(".contact-card");
  var starIcon = card.querySelector(".starIcon");
  
  if(btn.classList.contains("text-danger")){
    // displayNavFavorites(index);
    btn.classList.remove("text-danger");
    btn.classList.add("text-secondary");
    starIcon.classList.add("d-none");
    navDisStart.classList.add("d-none");
    Favorites--;
    
  } else {
    // removeNavFavorites();
    btn.classList.remove("text-secondary");
    btn.classList.add("text-danger");
    starIcon.classList.remove("d-none");
    navDisStart.classList.remove("d-none");
    Favorites++;
  }

  document.querySelector("#numFavorites").innerHTML = Favorites;

  localStorage.setItem('contact',JSON.stringify(array));

  displayNavFavorites(i);
}

// button heart
function btnHeart(btn,i){
if(Favorites === 0){
  noFavorites.classList.remove("d-none");
}else{
  noFavorites.classList.add("d-none");
}

  var card = btn.closest(".contact-card");
  var heartIcon = card.querySelector(".heartIcon");
  var spanHeart = document.querySelector(".spanHeart");

  if(btn.classList.contains("text-danger")){
    btn.classList.remove("text-danger");
    btn.classList.add("text-secondary");
    heartIcon.classList.add("d-none");
    spanHeart.classList.add("d-none");
    navDisEmergency.classList.add("d-none");
    Emergency--;
  } else {
    btn.classList.remove("text-secondary");
    btn.classList.add("text-danger");
    heartIcon.classList.remove("d-none");
    spanHeart.classList.remove("d-none");
    navDisEmergency.classList.remove("d-none");
    Emergency++;
  }

  document.querySelector("#numEmergency").innerHTML = Emergency;

  localStorage.setItem('contact',JSON.stringify(array));

  displayNavEmergency(i);
}

var navDisStart = document.querySelector("#contactNoFavorites");
function displayNavFavorites (index){
  if(!navArrStrat.includes(array[index])){
    navArrStrat.push(array[index]);
  }
  
  var cartona = ``;
  for(var i = 0; i < navArrStrat.length; i++){
    cartona += `
            <div class="d-flex justify-content-between w-100">
            <div class="d-flex">
              <div class="">
                <span class="fa-stack fa-2x fs-4 text-warning mt-1 me-2">
                  <i class="fa-solid fa-square fa-stack-2x"></i>
                  <i class="fa-solid fa-star fa-stack-1x fa-inverse fs-5"></i>
                </span>
              </div>
              <!-- 2 -->
              <div class="">
                <p class="mb-0">${navArrStrat[i].name}</p>
                <p>${navArrStrat[i].phone}</p>
              </div>
            </div>
            <!-- 2 -->
            <div class="">
                <span class="fa-stack fa-2x fs-1r light-green hover-green mt-2 me-2">
                  <i class="fa-solid fa-square fa-stack-2x "></i>
                  <i class="fa-solid fa-phone fa-stack-1x fa-inverse fs-7r text-green hover-white"></i>
                </span>
            </div>
        </div>
    `
  }
  document.querySelector("#contactNoFavorites").innerHTML = cartona;
  
}

var navDisEmergency = document.querySelector("#contactNoEmergency");
function displayNavEmergency (index){
  if(!navArrEmergency.includes(array[index])){
      navArrEmergency.push(array[index]);
  }
  
  var cartona = ``;
  for(var i = 0; i < navArrEmergency.length; i++){
    cartona += `
        <div class="d-flex justify-content-between w-100">
          <div class="d-flex">
            <div class="">
              <span class="fa-stack fa-2x fs-4 text-danger mt-1 me-2">
                <i class="fa-solid fa-square fa-stack-2x"></i>
                <i class="fa-solid fa-heart-pulse fa-stack-1x fa-inverse fs-5"></i>
              </span>
            </div>
            <!-- 2 -->
            <div class="">
              <p class="mb-0">${navArrEmergency[i].name}</p>
              <p>${navArrEmergency[i].phone}</p>
            </div>
          </div>
          <!-- 2 -->
          <div class="">
              <span class="fa-stack fa-2x fs-1r light-bink hover-bink mt-2 me-2">
                <i class="fa-solid fa-square fa-stack-2x "></i>
                <i class="fa-solid fa-phone fa-stack-1x fa-inverse fs-7r text-bink hover-white"></i>
              </span>
          </div>
      </div>
    `
  }
  document.querySelector("#contactNoEmergency").innerHTML = cartona;
  
}

