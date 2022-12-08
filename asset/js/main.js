$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
       
    }
})
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const textarea = document.getElementById('textarea');
const formContact = document.getElementById('formContact')
formContact.addEventListener("submit", (e) => {
    Swal.fire({
  icon: 'success',
  title: 'Success',
  text: 'We have received input from you',
}) 

  e.preventDefault();
  resetFormPre();
});
let resetFormPre = () => {
  email.value ="";
  subject.value = "";
  textarea.value = "";
};