const switchLink = document.getElementById('switch');


switchLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    
  
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white'; 
        
    } else {
        document.body.style.backgroundColor = 'black'; 
    }
});
