/* Copyright © 2020 Dave Bakker. All rights reserved. */

/* SMOOTH SCROLLING */
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
  {
    anchor.addEventListener('click', function(drop)
    {
        drop.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView ({ behavior: 'smooth' });
    });
});
