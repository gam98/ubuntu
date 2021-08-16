const $sidebarMenu = document.getElementById('sidebar-menu')
const $menuIcon = document.getElementById('menu_icon')
const $item = document.getElementById('item')
const $dropdownItems = document.getElementById("dropdown-items")
const $detailsList = document.querySelectorAll('details')
const $languagesContainer = document.querySelectorAll('.lg')
const $clipboards = document.querySelectorAll('.lg span')
const widthWindow = window.innerWidth
const sidebarItems = document.querySelectorAll('#dropdown-items li a')

sidebarItems.forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#dropdown-items .active').classList.remove('active');
		elemento.parentElement.classList.add('active');
	});
});

for(const clp of $clipboards){
    clp.addEventListener('click',()=>{        
        let $id_elemento = clp.previousElementSibling.firstElementChild.getAttribute('id')
        let aux = document.createElement('input')
        aux.setAttribute('value',document.getElementById($id_elemento).innerHTML)
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        clp.parentElement.classList.add('copied--show')
        clp.classList.add('clipboard-clicked')
        clp.firstElementChild.classList.replace('far','fas')
        clp.firstElementChild.classList.replace('fa-clipboard','fa-clipboard-check')
        setTimeout(function() {            
            clp.firstElementChild.classList.replace('fas','far')
            clp.firstElementChild.classList.replace('fa-clipboard-check','fa-clipboard')
            clp.classList.remove('clipboard-clicked')
            clp.parentElement.classList.remove('copied--show')
        },500);
    })
}
$detailsList.forEach(($details)=> {
    $details.querySelector('summary').addEventListener('click',expand)
})
function expand(){
    $detailsList.forEach(($details)=> {
        $details.removeAttribute('open')
    })  
}

$menuIcon.addEventListener('click',()=> {
    $sidebarMenu.classList.toggle('sidebar-menu--show')
    if($menuIcon.classList.contains('fa-bars')){
        $menuIcon.classList.replace('fa-bars','fa-times')
    }else {
        $menuIcon.classList.replace('fa-times','fa-bars')
    }
})
window.addEventListener('resize', () => {
    if ($sidebarMenu.classList.contains('sidebar-menu--show')) {
        $sidebarMenu.classList.remove('sidebar-menu--show');
        $menuIcon.classList.replace('fa-times','fa-bars')
        // $sidebarMenu.classList.remove('main-menu--show');
    }
});

if (widthWindow < 1024){
    $item.addEventListener('click',()=>{
        $dropdownItems.classList.toggle('sidebar-menu-content-main--show')
        if($item.children[0].classList.contains('fa-chevron-down')) {
            $item.children[0].classList.replace('fa-chevron-down','fa-chevron-up')
            console.log($item.children[0]);
        }else {
            $item.children[0].classList.replace('fa-chevron-up','fa-chevron-down')
            console.log($item.children[0]);
        }    
    })
}
console.log(widthWindow);

// console.log($item.children);