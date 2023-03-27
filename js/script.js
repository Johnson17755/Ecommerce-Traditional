// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


const body = document.querySelector("body"),
       modeToggle = document.querySelector(".dark-light");

               // when you refresh a page it store the mode(dark and light)
               let getMOde = localStorage.getItem("mode");
               if(getMOde && getMOde === "dark-mode"){
                   body.classList.add("dark");
               }
           
       
       
           // js code to toggle dark and light mode
               modeToggle.addEventListener("click", () =>{
               modeToggle.classList.toggle("active");
               body.classList.toggle("dark");
       
       
       
               // to keep user select mood even page refersh file reopen
               if(!body.classList.contains("dark")){
                   localStorage.setItem("mode" , "light-mode");
               } else {
                   localStorage.setItem("mode" , "dark-mode");
               }
              });
       