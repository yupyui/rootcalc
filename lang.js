const translations = {
    en: {
        h1: "Hello, this is a site for taking the square root of a number!",
        pargr: "Enter the number in the line below",
        bb: "Extract the root",
        mail: "Mail for questions/suggestions",
        result: "Answer:"
    },
    ru: {
        h1: "Привет, это сайт для извлечения квадратного корня из числа!",
        pargr: "Введи число в строку ниже",
        bb: "Извлечь корень",
        mail: "Почта для вопросов/предложений",
        result: "Ответ:"
    },
    esp: {
        h1: "Hola, ¡este es un sitio para sacar la raíz cuadrada de un número!",
        pargr: "Ingrese el número en la línea a continuación",
        bb: "extraer la raíz",
        mail: "Correo para preguntas/sugerencias",
        result: "Respuesta: "
    },
    kzh: {
        h1: "Сәлеметсіз бе, бұл санның квадрат түбірін алуға арналған сайт!",
        pargr: "Төмендегі жолға нөмірді енгізіңіз",
        bb: "Түбірді шығарып алыңыз",
        mail: "Сұрақтар/ұсыныстар үшін пошта",
        result: "Жауап:"
    }
}

const languageSelectop = document.querySelector("select");
let h1 = document.getElementById("h1");
let pargr = document.getElementById("pargr");
let bb = document.getElementById("bb");
let mail = document.getElementById("mail");
let result = document.getElementById("result");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "ru") {
        h1.innerText = translations.ru.h1;
        pargr.innerText = translations.ru.pargr;
        bb.innerText = translations.ru.bb;
        mail.innerText = translations.ru.mail;
        result.innerText = translations.ru.result;

    } else if (language == "en") {
        h1.innerText = translations.en.h1;
        pargr.innerText = translations.en.pargr;
        bb.innerText = translations.en.bb;
        mail.innerText = translations.en.mail;
        result.innerText = translations.en.result;
    }
    else if (language == "esp") {
        h1.innerText = translations.esp.h1;
        pargr.innerText = translations.esp.pargr;
        bb.innerText = translations.esp.bb;
        mail.innerText = translations.esp.mail;
        result.innerText = translations.esp.result;
    }
    else if (language == "kzh") {
        h1.innerText = translations.kzh.h1;
        pargr.innerText = translations.kzh.pargr;
        bb.innerText = translations.kzh.bb;
        mail.innerText = translations.kzh.mail;
        result.innerText = translations.kzh.result;
    }
}