var x = function myFunction() {
  var elmnt = document.getElementsByClassName("menu");
  elmnt.scrollIntoView();
var y= function myFunction() {
  var elmnt = document.getElementsByClassName("conteneur-pres");
  elmnt.scrollIntoView();

function myFunction() {
  var elmnt = document.getElementById("slide3");
  elmnt.scrollIntoView();

function myFunction() {
  var elmnt = document.getElementById("slide2");
  elmnt.scrollIntoView();

function myFunction() {
  var elmnt = document.getElementsByClassName("container-contact100");
  elmnt.scrollIntoView();


/*var x = document.getElementById('test');
x.scrollIntoView();*/

function openModal(id){

	let img = document.getElementById(id)
	let imgModal = document.getElementById("img-modal")
	imgModal.src = img.src
}



// Wrap every letter in a span
$('.ml2').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter', 
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function(el, i) {
      return 70*i;
    }
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });











