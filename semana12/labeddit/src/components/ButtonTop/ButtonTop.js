import React from 'react'



const ButtonTop = () => {
    let mybutton = document.getElementsByClassName("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            mybutton[0].style.display = 'block'
        } else {
            mybutton[0].style.display = 'none'
        }
    }

    function topFunction() {
        window.scrollTo(0, 0)
    }

    return (
    <button onClick={topFunction} className="myBtn" title="Go to top">Top</button>
    )
}
  export default ButtonTop