document.addEventListener("DOMContentLoaded", function() {
    
    
    const zonaMonitorizare = document.getElementById('zona-monitorizare');
    const containerPoze = document.getElementById('container-poze');
    
  
    const surseImagini = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    
    let slideshowActiv = false;

   
    zonaMonitorizare.addEventListener('dblclick', function() {
        
        if (slideshowActiv) return; 
        slideshowActiv = true;

        
        containerPoze.innerHTML = '';

       
        const imgElement = document.createElement('img');
        imgElement.src = surseImagini[0];
        imgElement.className = 'img-slide-activ'; 
        
        containerPoze.appendChild(imgElement);

       
        let index = 0;
        
        setInterval(() => {
            index++;
            if (index >= surseImagini.length) {
                index = 0; 
            }
            imgElement.src = surseImagini[index];
        }, 3000); 
    });
});