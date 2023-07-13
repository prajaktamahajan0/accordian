let cl = console.log;

const accoHead = [...document.querySelectorAll('.accoHead')]

const onHeadClick = (eve) => {
    let cssname = eve.target.className;
    cl(cssname)
    accoHead.forEach(head => {
        head.classList.remove('active')
    })
   
    if(cssname.includes('active')){
        eve.target.classList.remove('active')
    }else{
        eve.target.classList.add('active')
    }
}




accoHead.forEach(heading => {
    heading.addEventListener('click', onHeadClick)
})