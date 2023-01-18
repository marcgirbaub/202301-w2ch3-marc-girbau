"use strict";

const questions = [
  [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ],
  [
    {
      letter: "a",
      answer: "array",
      status: 0,
      question:
        "CON LA A. Una colección o agrupación de elementos en una misma variable, también conocida como vector",
    },
    {
      letter: "b",
      answer: "boolean",
      status: 0,
      question:
        "CON LA B. Un dato lógico que solo puede tener los valores true o false",
    },
    {
      letter: "c",
      answer: "concatenar",
      status: 0,
      question:
        "CON LA C. Elegante palabra de la programación que significa: 'unir'",
    },
    {
      letter: "d",
      answer: "default",
      status: 0,
      question:
        "CON LA D. Palabra clave (caso) utilizado en la sentencia switch.",
    },
    {
      letter: "e",
      answer: "error",
      status: 0,
      question: "CON LA E. Sinonimo de equivocación o inexactitud.",
    },
    {
      letter: "f",
      answer: "function",
      status: 0,
      question: "CON LA F. Se ejecuta cuando 'algo' la invoca (lo llama)",
    },
    {
      letter: "g",
      answer: "global",
      status: 0,
      question:
        "CON LA G. Se dice que una variable está en el este tipo de scope cuando está declarada fuera de una función o de un bloque.",
    },
    {
      letter: "h",
      answer: "hoisting",
      status: 0,
      question:
        "CON LA H. Manera general de referirse a cómo funcionan los contextos de ejecución en JS.",
    },
    {
      letter: "i",
      answer: "iteracion",
      status: 0,
      question: "CON LA I. Cada repetición de un bucle ",
    },
    {
      letter: "j",
      answer: "JavaScript",
      status: 0,
      question:
        "CON LA J. Lenguaje de programación inventado por Brendan Eich en 1995",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando los viernes el merge ",
    },
    {
      letter: "l",
      answer: "let",
      status: 0,
      question:
        "CON LA L. Variable local de ambito de bloque que deja cambiar su valor durante el programa",
    },
    {
      letter: "m",
      answer: "map",
      status: 0,
      question:
        "CON LA M. Método de arrays, para iterar a través de los elementos dentro de una colección de arreglos",
    },
    {
      letter: "n",
      answer: "null",
      status: 0,
      question: "CON LA N. Tipo de dato que devuelve el 'Cancel' del prompt()",
    },
    {
      letter: "o",
      answer: "objecto",
      status: 0,
      question: "CON LA O. Entidad independiente con propiedades y tipos",
    },
    {
      letter: "p",
      answer: "prompt",
      status: 0,
      question:
        "CON LA P. Método que permite al usuario introducir datos con los que el código puede interactuar",
    },
    {
      letter: "q",
      answer: "qwerty",
      status: 0,
      question: "CON LA Q. Distribución de teclado más común",
    },
    {
      letter: "r",
      answer: "return",
      status: 0,
      question:
        "CON LA R. Una instrucción que termina la ejecución de una función.",
    },
    {
      letter: "s",
      answer: "string",
      status: 0,
      question:
        "CON LA S. Dato que devuelve prompt aunque le introduzcas un número",
    },
    {
      letter: "t",
      answer: "typeof",
      status: 0,
      question:
        "CON LA T. Operador con el cual podemos conocer qué tipo de dato es el de una variable",
    },
    {
      letter: "u",
      answer: "undefined",
      status: 0,
      question:
        "CON LA U. If you want to create a property now and assign it a value later,  you can create it with a value of undefined",
    },
    {
      letter: "v",
      answer: "valores",
      status: 0,
      question: "CON LA V. Los objetos tienen proriedades y ... .",
    },
    {
      letter: "w",
      answer: "while",
      status: 0,
      question:
        "CON LA W. Bucle utilizado para repetir un bloque de código específico hasta que se cumpla una condición",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: "CONTIENE LA X. ",
    },
    {
      letter: "y",
      answer: "symbol",
      status: 0,
      question: "Contiene Y. Tipo de dato primitivo.",
    },
    {
      letter: "z",
      answer: "zero",
      status: 0,
      question: "CON LA Z. Primer índice del array.",
    },
  ],
  [
    {
      letter: "a",
      answer: "ahorrar",
      status: 0,
      question:
        "CON LA A. Guardar dinero como previsión para necesidades futuras",
    },
    {
      letter: "b",
      answer: "beca",
      status: 0,
      question: "CON LA B. Subvención para realizar estudios o investigaciones",
    },
    {
      letter: "c",
      answer: "culpar",
      status: 0,
      question: "CON LA C. Atribuir o echar la culpa a alguien",
    },
    {
      letter: "d",
      answer: "deportar",
      status: 0,
      question:
        "CON LA D. Desterrar a alguien de algún lugar, por lo regular extranjero, y confinarlo allí",
    },
    {
      letter: "e",
      answer: "error",
      status: 0,
      question: "CON LA E. Equivocación",
    },
    {
      letter: "f",
      answer: "frenar",
      status: 0,
      question: "CON LA F. Moderar o parar el movimiento de algo",
    },
    {
      letter: "g",
      answer: "global",
      status: 0,
      question:
        "!!!!!CON LA G. Todos los scripts y funciones de una página web pueden acceder a ella. Se puede acceder a las variables globales desde cualquier lugar en un programa de JavaScrip",
    },
    {
      letter: "h",
      answer: "hoisting",
      status: 0,
      question: "CON LA H. Palabra friki de programación ",
    },
    {
      letter: "i",
      answer: "iteracion",
      status: 0,
      question: "CON LA I. Cada repetición de un bucle ",
    },
    {
      letter: "j",
      answer: "JavaScript",
      status: 0,
      question:
        "CON LA J. Lenguaje de programación inventado por Brendan Eich en 1995",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando los viernes el merge ",
    },
    {
      letter: "l",
      answer: "let",
      status: 0,
      question:
        "CON LA L. Variable local de ambito de bloque que deja cambiar su valor durante el programa",
    },
    {
      letter: "m",
      answer: "map",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "null",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "o",
      answer: "object",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "prompt",
      status: 0,
      question:
        "CON LA P. Método que permite al usuario introducir datos con los que el código puede interactuar",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    {
      letter: "r",
      answer: "raton",
      status: 0,
      question: "CON LA R. Roedor",
    },
    {
      letter: "s",
      answer: "string",
      status: 0,
      question:
        "CON LA S. Dato que devuelve prompt aunque le introduzcas un número",
    },
    {
      letter: "t",
      answer: "typeof",
      status: 0,
      question:
        "CON LA T. Operador con el cual podemos conocer qué tipo de dato es el de una variable",
    },
    {
      letter: "u",
      answer: "undefined",
      status: 0,
      question:
        "CON LA U. If you want to create a property now and assign it a value later,  you can create it with a value of undefined",
    },
    {
      letter: "v",
      answer: "valor",
      status: 0,
      question: "valor de los objetos",
    },
    {
      letter: "w",
      answer: "while",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "proxy",
      status: 0,
      question:
        "CONTIENE LA X. Objeto que se crea con los parámetros targer y handler",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question: "CON LA Z. Estado de meditación japonesa",
    },
  ],
  [
    {
      letter: "a",
      answer: "agenda",
      status: 0,
      question:
        "Con la A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer.",
    },
    {
      letter: "b",
      answer: "bonanza",
      status: 0,
      question: "Con la B. Prosperidad.",
    },
    {
      letter: "c",
      answer: "caracol",
      status: 0,
      question:
        "Con la C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse.",
    },
    {
      letter: "d",
      answer: "dormir",
      status: 0,
      question:
        "Con la D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios.",
    },
    {
      letter: "e",
      answer: "entrecot",
      status: 0,
      question:
        "Con la E. Trozo de carne sacado de entre costilla y costilla de la res.",
    },
    {
      letter: "f",
      answer: "farhadi",
      status: 0,
      question:
        "Con la F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017.",
    },
    {
      letter: "g",
      answer: "gorgorito",
      status: 0,
      question:
        "Con la G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar.",
    },
    {
      letter: "h",
      answer: "hidroavion",
      status: 0,
      question:
        "Con la H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua.",
    },
    {
      letter: "i",
      answer: "inapetencia",
      status: 0,
      question: "Con la I. Falta de gana de comer.",
    },
    {
      letter: "j",
      answer: "jardineria",
      status: 0,
      question: "Con la J. Arte y oficio del jardinero.",
    },
    {
      letter: "k",
      answer: "kilogramo",
      status: 0,
      question: "Con la K. Unidad de masa del Sistema Internacional.",
    },
    {
      letter: "l",
      answer: "lobera",
      status: 0,
      question: "Con la L. Guarida de lobos.",
    },
    {
      letter: "m",
      answer: "mentira",
      status: 0,
      question:
        "Con la M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída.",
    },
    {
      letter: "n",
      answer: "nativo",
      status: 0,
      question:
        "Con la N. Se aplica al que ha nacido en el lugar de que se trata.",
    },
    {
      letter: "o",
      answer: "organo",
      status: 0,
      question:
        "Con la O. De las partes del pulpo, animal o vegetal que ejercen una función.",
    },
    {
      letter: "p",
      answer: "plotino",
      status: 0,
      question:
        "Con la P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría.",
    },
    {
      letter: "q",
      answer: "queja",
      status: 0,
      question:
        "Con la Q. Resentimiento o disgusto que se tiene por la actuación o el comportamiento de alguien.",
    },
    {
      letter: "r",
      answer: "rafaga",
      status: 0,
      question: "Con la R. Viento fuerte, resentido y de corta duración.",
    },
    {
      letter: "s",
      answer: "simple",
      status: 0,
      question: "Con la S. Se aplica a lo que no tiene complicación.",
    },
    {
      letter: "t",
      answer: "trece",
      status: 0,
      question: "Con la T. Número cardinal equivalente a 10 + 3.",
    },
    {
      letter: "u",
      answer: "uderzo",
      status: 0,
      question:
        "Con la U. Apellido del dibujante y guionista francés autor de la serie Asterix.",
    },
    {
      letter: "v",
      answer: "verde",
      status: 0,
      question:
        "Con la V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda.",
    },
    {
      letter: "w",
      answer: "waterpolo",
      status: 0,
      question:
        "Con la W. Deporte parecido al futbol, practicado en una piscina.",
    },
    {
      letter: "x",
      answer: "xilofono",
      status: 0,
      question:
        "Con la X. Instrumento musical de percusión formado por diversas láminas específicamente afinadas.",
    },
    {
      letter: "y",
      answer: "yunque",
      status: 0,
      question:
        "Con la Y. Bloque de hierro sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo.",
    },
    {
      letter: "z",
      answer: "zoodiacal",
      status: 0,
      question: "Con la Z. Perteneciente o relativo al zoodíaco.",
    },
  ],
];

const TIME_OUT = "TIME OUT";
const END = "END";
const NEXT = "NEXT";
const ALLOWED_SECONDS = 130000;

const getName = () => {
  let userName;

  do {
    userName = prompt(
      "¡WELCOME TO THE PASAPALABRA GAME!\n\nPlease type your name below:"
    );
  } while (!userName);

  return userName;
};

const isWordCorrect = (answer, word) => {
  if (word.toLowerCase() === answer) {
    return true;
  }

  return false;
};

const checkStatusQuestion = (status) => {
  if (status === 0) {
    return true;
  }

  return false;
};

const isTimeValid = (initialTime) => {
  const currentTime = Date.now();
  const validTime = initialTime + ALLOWED_SECONDS;

  if (currentTime <= validTime) {
    return true;
  }

  return false;
};

const askQuestionAndCheckAnswer = (questions, initialTime) => {
  let userAnswer = "";
  let i = 0;

  while (areQuestionsRemaining(questions)) {
    const currentQuestion = questions[i].question;
    const currentCorrectAnswer = questions[i].answer;
    const currentStatus = questions[i].status;

    if (checkStatusQuestion(currentStatus)) {
      do {
        userAnswer = prompt(currentQuestion);
      } while (!userAnswer || !isNaN(Number(userAnswer)));

      if (!isTimeValid(initialTime)) {
        return TIME_OUT;
      }

      if (userAnswer.toUpperCase() === "END") {
        return END;
      }

      if (isWordCorrect(currentCorrectAnswer, userAnswer)) {
        alert("¡Correct answer!");
        questions[i].status = 1;
      } else if (userAnswer.toLowerCase() !== "pasapalabra") {
        alert("¡Wrong answer!");
        questions[i].status = 2;
      }
    }

    if (i === questions.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  return NEXT;
};

const checkCorrectAnswers = (questions) => {
  let correctAnswers = 0;

  questions.forEach((question) => {
    if (question.status === 1) {
      correctAnswers++;
    }
  });

  return correctAnswers;
};

const checkWrongAnswers = (questions) => {
  let wrongAnswers = 0;

  questions.forEach((question) => {
    if (question.status === 2) {
      wrongAnswers++;
    }
  });

  return wrongAnswers;
};

const areQuestionsRemaining = (questions) => {
  let remainingQuestions = 0;

  questions.forEach((question) => {
    if (question.status === 0) {
      remainingQuestions++;
    }
  });

  if (remainingQuestions === 0) {
    return false;
  }

  return true;
};

const printScore = (correctAnswers, wrongAnswers, remainingQuestions) => {
  if (remainingQuestions === 0) {
    alert(
      `The games has finished. Your score is the following:\n\nCorrect answers: ${correctAnswers}\nWrong answers: ${wrongAnswers} `
    );
  } else {
    alert(
      `The games has finished. Your score is the following:\n\nCorrect answers: ${correctAnswers}\nWrong answers: ${wrongAnswers}\nRemaining questions: ${remainingQuestions} `
    );
  }
};

const usersRankingAndPrint = (
  userName,
  correctAnswers,
  wrongAnswers,
  allUsersRanking
) => {
  const user = {
    userName,
    correctAnswers,
    wrongAnswers,
  };

  allUsersRanking.push(user);

  allUsersRanking.sort((a, b) => a.correctAnswers - b.correctAnswers);

  console.log(allUsersRanking);
};

const askToPlayAgain = () => {
  const wishToPlayAgain = confirm("Do you want to play again?");

  if (wishToPlayAgain) {
    return true;
  }

  return false;
};

const restartStatus = (questionsArray) => {
  questionsArray.forEach((questions) => {
    questions.forEach((question) => {
      question.status = 0;
    });
  });
};

const rankingList = [];
let indexQuestions = 0;

const pasapalabra = (questionsArray) => {
  const questions = questionsArray[indexQuestions];
  const userName = getName();
  let wishToEnd = false;
  const initialTime = Date.now();
  let isTimeValid = true;

  const askQuestions = askQuestionAndCheckAnswer(questions, initialTime);

  if (askQuestions === END) {
    wishToEnd = true;
  }

  if (askQuestions === TIME_OUT) {
    isTimeValid = false;
  }

  if (!isTimeValid) {
    alert("Time is over!");
  }

  const correctAnswers = checkCorrectAnswers(questions);
  const wrongAnswers = checkWrongAnswers(questions);
  const remainingQuestions = questions.length - (correctAnswers + wrongAnswers);

  printScore(correctAnswers, wrongAnswers, remainingQuestions);

  if (!wishToEnd) {
    usersRankingAndPrint(userName, correctAnswers, wrongAnswers, rankingList);
  }

  if (askToPlayAgain()) {
    if (indexQuestions === questionsArray.length - 1) {
      indexQuestions = 0;
    } else {
      indexQuestions++;
    }

    restartStatus(questionsArray);
    pasapalabra(questionsArray);
  } else {
    alert("Thanks for playing!");
  }
};

pasapalabra(questions);
