function TriangleArea_Sides() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    document.getElementById("result_Sides").textContent = `Площа трикутника: ${area}`;
}

function TriangleArea_Sides_Angle() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const angle = parseFloat(document.getElementById("angle").value);

    const area = 0.5 * side1 * side2 * Math.sin((angle * Math.PI) / 180);
    document.getElementById("result_Sides_Angle").textContent = `Площа трикутника: ${area}`;
}

function TriangleArea_Side_Height() {
    const side = parseFloat(document.getElementById("side").value);
    const height = parseFloat(document.getElementById("height").value);

    const area = 0.5 * side * height;
    document.getElementById("result_Side_Height").textContent = `Площа трикутника: ${area}`;
}


function TriangleArea_Sides_Radius() {
    const sideA = parseFloat(document.getElementById("sideA2").value);
    const sideB = parseFloat(document.getElementById("sideB2").value);
    const sideC = parseFloat(document.getElementById("sideC2").value);
    const radius = parseFloat(document.getElementById("radius").value);

    const area = (sideA * sideB * sideC) / (4 * radius);
    document.getElementById("result_Sides_Radius").textContent = `Площа трикутника: ${area}`;
}

function Palindrome() {
    const inputText = document.getElementById("input_Palindrome").value.toLowerCase().replace(/\s/g, "");
    const reversedText = inputText.split("").reverse().join("");
    const isPalindrome = inputText === reversedText;
    document.getElementById("palindrome_Result").textContent = isPalindrome ? "Це паліндром" : "Це не паліндром";
}


function Anagram() {
    const word1 = document.getElementById("word1").value.toLowerCase();
    const word2 = document.getElementById("word2").value.toLowerCase();

    const sortedWord1 = word1.split("").sort().join("");
    const sortedWord2 = word2.split("").sort().join("");
    const isAnagram = sortedWord1 === sortedWord2;

    document.getElementById("anagram_Result").textContent = isAnagram ? "Анаграма" : "Не анаграма";
}

function find_Fibonacci() {
    const index = parseInt(document.getElementById("fibIndex").value);

    let a = 1;
    let b = 1;

    for (let i = 3; i <= index; i++) {
        const c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("fibonacci_Result").textContent = `Число Фібоначчі: ${b}`;
}

function check_Fibonacci() {
    const number = parseInt(document.getElementById("fibCheck").value);

    let a = 1;
    let b = 1;

    while (b < number) {
        const c = a + b;
        a = b;
        b = c;
    }

    const isFibonacci = b === number;
    document.getElementById("fibonacci_Check_Result").textContent = isFibonacci ? "Це число належить послідовності Фібоначчі" : "Це число не належить послідовності Фібоначчі";
}
