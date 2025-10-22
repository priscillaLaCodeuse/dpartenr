// ----MENU RESPONSIVE----

// initialisation du menu fermé au chargement de la page
let windowHeightMin = window.innerWidth <= 760;

function windowLoad() {
  windowHeightMin === true
    ? window.addEventListener("load", closeNav(), false)
    : window.addEventListener("load", openNav(), true);
}

//constantes du menu

const openIcon = document.querySelector("#open-icon");
const closeIcon = document.querySelector("#close-icon");
const navList = document.querySelector(".menuNav");
const navListLi = navList.querySelector(".liNav");

//fonction ouverture du menu
function openNav() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  navList.style.display = "block";
}

//fonction fermeture du menu
function closeNav() {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  navList.style.display = "none";
}

// ----CHATBOT----

//ouverture du chatbot
const chatbot = document.querySelector(".chatbot");
const iconChat = document.getElementById("iconChat");

function openChat() {
  chatbot.style.display = "block";
  iconChat.style.display = "none";
}

//fermeture du chatbot

function closeChat() {
  chatbot.style.display = "none";
  iconChat.style.display = "block";
}

// Liste de questions et réponses
const qaPairs = [
  {
    question: "Faites-vous des formations sur mesure ?",
    keywords: [
      "formations sur mesure",
      "formation sur mesure",
      "formation spécifique",
    ],
    answer: "Oui, nous proposons des formations sur mesure.",
  },
  {
    question: "Faites-vous des préparations aux diplômes ?",
    keywords: [
      "préparations aux diplômes",
      "préparation aux diplômes",
      "préparation au diplôme",
      "préparations au diplôme",
    ],
    answer: "Oui, nous proposons des préparations aux diplômes.",
  },
  {
    question:
      "Faites-vous des formations préparant à l’attestation de capacité ?",
    keywords: [
      "formations préparant à l’attestation de capacité",
      "formation attestation de capacité",
      "attestation de capacité",
    ],
    answer:
      "Oui, nous proposons des formations préparant à l’attestation de capacité.",
  },
  {
    question: "Faites-vous des formations en distanciel ?",
    keywords: [
      "formations en distanciel",
      "formation distanciel",
      "formation en distanciel",
      "formation à distance",
      "formation en visio",
      "formations en visio",
      "formation visio",
    ],
    answer: "Oui, nous proposons des formations en distanciel.",
  },
  {
    question: "Faites-vous des formations en présentiel ?",
    keywords: [
      "formations en présentiel",
      "formation en présentiel",
      "formation présentiel",
      "formation sur place",
      "formation en présence",
      "formation en entreprise",
      "formation dans l'entreprise",
    ],
    answer: "Oui, nous proposons des formations en présentiel.",
  },
  {
    question: "Faites-vous des formations dans toute la France ?",
    keywords: [
      "formations dans toute la France",
      "formations dans toute la france",
      "formation France",
      "formation france",
      "dans toute la France",
      "dans toute la france",
    ],
    answer: "Oui, nous proposons des formations dans toute la France.",
  },
  {
    question: "Faites-vous les FCO ?",
    keywords: [
      "FCO",
      "Formation Continue Obligatoire",
      "formation continue obligatoire",
    ],
    answer: "Non, nous ne faisons pas les FCO.",
  },
  {
    question: "Pouvons nous faire un entretien technique ?",
    keywords: ["entretien technique", "entretien préalable"],
    answer:
      "Oui, pour demander votre entretien technique veuillez remplir le formulaire ci-dessous :",
  },
  {
    question: "Faites-vous des audits ou diagnostics ?",
    keywords: ["audits", "diagnostics", "audit", "diagnostic"],
    answer: "Oui, nous proposons des audits ou diagnostics.",
  },
  {
    question: "Faites-vous de l’accompagnement ou conseil ?",
    keywords: ["accompagnement", "conseil", "conseils"],
    answer: "Oui, nous proposons de vous accompagner et de vous conseiller.",
  },
  {
    question: "Quels sont vos tarifs ?",
    keywords: ["tarif", "tarifs", "prix"],
    answer:
      "Cela dépend de la mission, du contenu, de la durée, etc. Pour obtenir un devis personnalisé, veuillez remplir le formulaire de contact ci-dessous :",
  },
  {
    question: "Êtes-vous certifié Qualiopi ?",
    keywords: [
      "certifié Qualiopi",
      "Qualiopi",
      "qualiopi",
      "certifié qualiopi",
    ],
    answer: "Oui, nous sommes certifiés Qualiopi.",
  },
  {
    question: "Quelles sont vos références ?",
    keywords: ["références", "clients", "references"],
    answer:
      "Nos références sont des grands groupes comme Carrefour, Fedex, Saint Gobain, mais aussi de nombreuses TPE et PME.",
  },
  {
    question: "Combien de temps durent les formations ?",
    keywords: [
      "durée formations",
      "combien de temps formations",
      "durée",
      "temps",
    ],
    answer:
      "En entreprise, nos formations durent généralement de 1 à 3 jours. Pour les préparations au diplômes, de quelques jours à plusieurs semaines ou mois. Dans tous les cas, nous nous adaptons aux besoins.",
  },
  {
    question:
      "Combien de temps dure une mission de conseil et/ou d’accompagnement ?",
    keywords: ["mission de conseil", "mission d'accompagnement"],
    answer:
      "Il y a d’abord une phase de diagnostic qui dure de 1 à 5 jours qui permet de déterminer ensuite les besoins et la durée de la mission.",
  },
];

// Fonction pour envoyer une question
function sendQuestion() {
  const bienvenue = document.getElementById("bienvenue");
  const responseContainer = document.getElementById("response");

  // Disparition du message de Bienvenue
  bienvenue.style.display = "none";

  // Faire apparaître la question de l'utilisateur
  const questionContainer = document.getElementById("question-user");
  const questionUser = questionContainer.value.toLowerCase();
  const newElement = document.createElement("p");
  newElement.textContent = questionUser;
  newElement.classList.add("bubble-right");
  responseContainer.appendChild(newElement);

  // Icône de chargement en attendant la réponse
  const chargement = document.createElement("i");
  chargement.classList.add("fa-solid", "fa-spinner");
  chargement.id = "chargement";
  responseContainer.appendChild(chargement);
  chargement.style.display = "block";

  // Le chatBot répond après un délai
  setTimeout(() => {
    // Supprime l'icône de chargement
    chargement.style.display = "none";

    // Prépare la réponse
    const newResponse = document.createElement("p");
    const formChat = document.getElementById("formulaireChat");

    // Vérifie la question et trouve la réponse appropriée
    let responseText =
      "Je ne connais pas encore la réponse à votre question. Veuillez remplir le formulaire ci-dessous et vous serez recontacté dans les plus brefs délais :";
    formChat.style.display = "block";

    for (let i = 0; i < qaPairs.length; i++) {
      const pair = qaPairs[i];
      for (let j = 0; j < pair.keywords.length; j++) {
        if (questionUser.includes(pair.keywords[j])) {
          responseText = pair.answer;
          if (
            responseText.includes(
              "veuillez remplir le formulaire de contact ci-dessous"
            )
          ) {
            formChat.style.display = "block";
          } else {
            formChat.style.display = "none";
          }
          break;
        }
      }
      if (
        responseText !==
        "Je ne connais pas encore la réponse à votre question. Veuillez remplir le formulaire ci-dessous et vous serez recontacté dans les plus brefs délais :"
      ) {
        break;
      }
    }

    // Ajoute la classe et renvoi la réponse
    newResponse.textContent = responseText;
    newResponse.classList.add("bubble-left");
    responseContainer.appendChild(newResponse);

    // Efface la réponse de l'input
    questionContainer.value = "";
  }, 2000);
}

// Ajout de l'écouteur d'événement pour la touche "Entrée"
const questionInput = document.getElementById("question-user");
questionInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendQuestion();
  }
});
