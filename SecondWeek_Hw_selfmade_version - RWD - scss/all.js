let rwd_nav_option_el = document.querySelector(".rwd-nav-option");
document.querySelector('.rwd-hamburger-btn').addEventListener('click', function(e){
    e.preventDefault();
    if(document.body.className === 'show-menu'){
        document.body.className = '';
    } else {
        document.body.className = 'show-menu';
    }
}, false);

