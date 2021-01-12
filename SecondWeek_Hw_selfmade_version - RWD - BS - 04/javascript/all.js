let el = document.querySelector('#submit-link');
el.addEventListener('click', function(){
    let withoutContent=false;
    let forms = document.querySelectorAll('#cart_page_form input');
    for(let i=0; i!=forms.length; i++){
        if(forms[i].value===''){
            withoutContent = true;
        }
    }
    if(!withoutContent){
        window.location.href="cart_page1.html";
        return
    }
})