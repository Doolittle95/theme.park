
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  ___                _   _   _     _     _       
 |   \   ___   ___  | | (_) | |_  | |_  | |  ___ 
 | |) | / _ \ / _ \ | | | | |  _| |  _| | | / -_)
 |___/  \___/ \___/ |_| |_|  \__|  \__| |_| \___|
                                                 
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
