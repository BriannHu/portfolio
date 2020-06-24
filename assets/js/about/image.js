// display
const display = document.querySelector('.imgs-slide');
// icons
const listIcon = document.querySelector('#list');
const grphIcon = document.querySelector('#graph');
const compIcon = document.querySelector('#compass');
const linkIcon = document.querySelector('#link');

grphIcon.addEventListener('mouseover', ()=>{
    display.style.background = `url('assets/images/about/30op_200x200headshot.jpg')`;
    var text = 
    '<br></br>\
     <b class="b-a">I often incorporate<br></br>\
     logical and creative<br></br>\
     aspects of programming,<br></br>\
     my favorite being web<br></br>\
     design and problem<br></br>\
     solving.</b>';
     display.innerHTML = text;
     display.style.borderColor = "purple";
});

grphIcon.addEventListener('mouseleave', ()=>{
    display.style.background = `url('assets/images/about/200x200headshot.jpg')`;
    display.innerHTML = "";
    display.style.borderColor = "white";
});

listIcon.addEventListener('mouseover', ()=>{
    display.style.background = `url('assets/images/about/30op_200x200headshot.jpg')`;
    var text = 
    '<br></br> \
     <b class="b-a">I enjoy using<br></br>\
     APIs in my projects.<br></br>\
     In my last hackathon,<br></br>\
     we used the Yelp API to<br></br>\
     suggest restaurants<br></br>\
     to users.</b>';
    display.innerHTML = text;
    display.style.borderColor = "purple";
});

listIcon.addEventListener('mouseleave', ()=>{
    display.style.background = `url('assets/images/about/200x200headshot.jpg')`;
    display.innerHTML = "";
    display.style.borderColor = "white";
});

compIcon.addEventListener('mouseover', ()=>{
    display.style.background = `url('assets/images/about/30op_200x200headshot.jpg')`;
    var text = 
    '<br></br>\
     <b class="b-a">I love exploring<br></br>\
     new things, whether it\'s<br></br>\
     places or ideas. I\'m hoping<br></br>\
     to learn new languages<br></br>\
     so I can create more<br></br>\
     projects.</b>';
    display.innerHTML = text;
    display.style.borderColor = "purple";
});

compIcon.addEventListener('mouseleave', ()=>{
    display.style.background = `url('assets/images/about/200x200headshot.jpg')`;
    display.innerHTML = "";
    display.style.borderColor = "white";
});

linkIcon.addEventListener('mouseover', ()=>{
    display.style.background = `url('assets/images/about/30op_200x200headshot.jpg')`;
    var text = 
    '<br></br>\
     <b class="b-a">In my first year<br></br>\
     at McGill, I joined the<br></br>\
     Computer Task Force club.<br></br>\
     I was a part of the web and<br></br>\
     server development<br></br>\
     team.</b>'
    display.innerHTML = text;
    display.style.borderColor = "purple";
});

linkIcon.addEventListener('mouseleave', ()=>{
    display.style.background = `url('assets/images/about/200x200headshot.jpg')`;
    display.innerHTML = "";
    display.style.borderColor = "white";
});
