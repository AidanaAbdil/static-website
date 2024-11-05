let modal = document.querySelector('.modal-window')
function showModal(){
    modal.style.display = 'flex'
    //modal.classList.add = 'active' - another way, to add class-active in CSS
}

function closeModal(){
    modal.style.display = 'none'
}

let modal1 = document.querySelector('.another-window')
function showModal1(){
    modal1.style.display = 'flex';
}

let modal2 = document.querySelector('.popup')
function showModal2(){
    modal2.style.display = 'flex';
}

function closeModal1(){
    modal2.style.display = 'none'
}


// $('.customer-slider').slick({
//     rtl: true
//   });  //ne srabotalo

$('.customers').slick();

// $('.customers').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });