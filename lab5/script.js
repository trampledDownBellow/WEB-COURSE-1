function convertTextToImage() {
    const inputText = document.getElementById("source-text").value;
    const outputImage = document.getElementById("result-text");

    const charMap = {
        'A': './images/A.png',
        'B': './images/B.png',
        'C': './images/C.png',
        'D': './images/D.png',
        'E': './images/E.png',
        'F': './images/F.png',
        'G': './images/G.png',
        'H': './images/H.png',
        'I': './images/I.png',
        'J': './images/J.png',
        'K': './images/K.png',
        'L': './images/L.png',
        'M': './images/M.png',
        'N': './images/N.png',
        'O': './images/O.png',
        'P': './images/P.png',
        'Q': './images/Q.png',
        'R': './images/R.png',
        'S': './images/S.png',
        'T': './images/T.png',
        'Y': './images/Y.png',
        'V': './images/V.png',
        'W': './images/W.png',
        'X': './images/X.png',
        'Y': './images/Y.png',
        'Z': './images/Z.png',
        'U': './images/U.png',

        'a': './images/small_a.png',
        'b': './images/small_b.png',
        'c': './images/small_c.png',
        'd': './images/small_d.png',
        'e': './images/small_e.png',
        'f': './images/small_f.png',
        'g': './images/small_g.png',
        'h': './images/small_h.png',
        'i': './images/small_i.png',
        'j': './images/small_j.png',
        'k': './images/small_k.png',
        'l': './images/small_l.png',
        'm': './images/small_m.png',
        'n': './images/small_n.png',
        'o': './images/small_o.png',
        'p': './images/small_p.png',
        'q': './images/small_q.png',
        'r': './images/small_r.png',
        's': './images/small_s.png',
        't': './images/small_t.png',
        'y': './images/small_y.png',
        'v': './images/small_v.png',
        'w': './images/small_w.png',
        'x': './images/small_x.png',
        'y': './images/small_y.png',
        'z': './images/small_z.png',
        'u': './images/small_u.png',
    };

    let result = '';
    let currentIndex = 0;
    const delay = 300; // Затримка в мілісекундах між кожною буквою

    function appendNextChar() {
        if (currentIndex < inputText.length) {
            const char = inputText[currentIndex];
            if (char in charMap) {
                result += `<img src="${charMap[char]}" alt="${char}">`;
            } else {
                result += char;
            }
            outputImage.innerHTML = result;
            currentIndex++;
            setTimeout(appendNextChar, delay);
        }
    }

    appendNextChar();
}

document.getElementById("go").addEventListener("click", convertTextToImage);