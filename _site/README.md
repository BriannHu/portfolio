copy paste this to change color of header from white to gradient:

(in h1)
background: -webkit-linear-gradient(#ff512f, #dd2476)
-webkit-background-clip: text
-webkit-text-fill-color: transparent

#title::before
        content: "before"
        background: white
        font-size: 5px
        color: white
        display: block
        width: 100%

    #title::after
        content: "after"
        background: white
        font-size: 5px
        display: block
        color: white
        width: 100%

(in span)
span 
            display: inline-block
            padding: 0.2em 0.5em
            border: 5px solid white

border: 6px solid transparent
border-image: linear-gradient(#aa076b, #61045f)
border-image-slice: 1

DIFFERENT GRADIENTS:

About Me: celestial
background: -webkit-linear-gradient(#c33764, #1d2671)

Skills: bloody mary
background: -webkit-linear-gradient(#ff512f , #dd2476)

Education: lush green
background: -webkit-linear-gradient(#a8e063, #56ab2f)

Projects: scooter
background: -webkit-linear-gradient(#36d1dc, #5b86e5)

Contact: can you feel the love tonight
background: -webkit-linear-gradient(#4568dc, #b06ab3)

#link1.active, #link1:hover
    background: -webkit-linear-gradient(#c33764, #1d2671)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

#link2.active, #link2:hover
    background: -webkit-linear-gradient(#ff512f , #dd2476)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

#link3.active, #link3:hover
    background: -webkit-linear-gradient(#7b4397, #dc2430)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

#link4.active, #link4:hover
    background: -webkit-linear-gradient(#36d1dc, #5b86e5)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

#link5.active, #link5:hover
    background: -webkit-linear-gradient(#4568dc, #b06ab3)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

