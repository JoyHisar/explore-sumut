console.log("Explore Sumut berhasil dijalankan");

const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Pemesanan berhasil dikirim.");

    bookingForm.reset();

    const modal=bootstrap.Modal.getInstance(document.getElementById("formPemesanan"));

    modal.hide();

});
const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",function(){

    if(window.scrollY>300){

        backToTop.style.display="block";

        document.querySelector(".navbar").classList.add("scrolled");

    }else{

        backToTop.style.display="none";

        document.querySelector(".navbar").classList.remove("scrolled");

    }

});

backToTop.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltipTriggerList.forEach(function(item){

    new bootstrap.Tooltip(item);

});
window.addEventListener("load",function(){

    console.log("Explore Sumut berhasil dimuat.");

});

document.querySelectorAll(".nav-link").forEach(function(link){

    link.addEventListener("click",function(){

        const navbar=document.querySelector(".navbar-collapse");

        if(navbar.classList.contains("show")){

            new bootstrap.Collapse(navbar).hide();

        }

    });

});