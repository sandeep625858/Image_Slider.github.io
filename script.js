const allimages=document.querySelector('.all_image');
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const header=document.querySelectorAll('.circle');
var num=0;
const url=[
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600"]
next.addEventListener('click',()=>{
    num++;
    if(num==url.length)
    {
        num=0;
    }
    allimages.innerHTML='<img src='+url[num]+'class="image" id="im"></img>';
    header[num].innerHTML='O';
    header[num].style.color='red';
    if(num==0)
    {
        header[url.length-1].innerHTML='O';
        header[url.length-1].style.color='black';
    }
    else
    {
        header[num-1].innerHTML='O';
        header[num-1].style.color='black';
    }
})
prev.addEventListener('click',()=>{
    num--;
    if(num<0)
    {
        num=url.length-1;
    }
    allimages.innerHTML='<img src='+url[num]+'class="image"></img>';
    header[num].innerHTML='O';
    header[num].style.color='red';
    if(num==url.length-1)
    {
        header[0].innerHTML='O';
        header[0].style.color='black';
    }
    else
    {
        header[num+1].innerHTML='O';
        header[num+1].style.color='black';
    }
})
