
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
 _    _        _                               
| |  | |      | |                              
| |  | |  ___ | |  ___   ___   _ __ ___    ___ 
| |/\| | / _ \| | / __| / _ \ | '_ ` _ \  / _ \
\  /\  /|  __/| || (__ | (_) || | | | | ||  __/
 \/  \/  \___||_| \___| \___/ |_| |_| |_| \___|
                                               </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
