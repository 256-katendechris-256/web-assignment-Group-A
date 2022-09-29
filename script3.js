const imgDiv=document.querySelector('.nav');
const img=document.querySelector('#photo');
const file=document.querySelector('#file');
const uploadBtn =document.querySelector('#uploadBtn');

//when user hovers over the profile pic
imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display ="block"
});

//when hover out
imgDiv.addEventListener('mouseleave',function(){
    uploadBtn.style.display ="none"
});

file.addEventListener('change', function(){
    const chooseFile = this.files[0];

    if(chooseFile){
        const reader =new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
})
