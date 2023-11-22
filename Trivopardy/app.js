const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
let score = 0;

const catagories = [
    {
        genre: "LOTR", 
        questions: [
            {
                question: "Where do Hobbits live?",
                answers: ["The shire","Mordor"], 
                correct: "The shire", 
                level: "100"
            },

            {
                question: "What animal saves Frodo and Sam from Mount Doom?",
                answers: ["Eagles","Dragons"], 
                correct: "Eagles", 
                level: "200"
            },
            
            {
                question: "How many rings were given to the race of Men?",
                answers: ["Seven","Nine"], 
                correct: "Nine", 
                level: "300"
            },
            {
                question: "Who is responsible for healing Merry of the Black Breath?",
                answers: ["Aragon","Gandalf"], 
                correct: "Aragon", 
                level: "400"
            },
            {
                question: "What was the name of Sam's favorite pony?",
                answers: ["Paul","Bill"], 
                correct: "Bill", 
                level: "500"
            },

        ]

        
    },

    {
        genre: "STAR WARS", 
        questions: [
            {
                question: "Where did Obi-Wan take Luke after his birth?",
                answers: ["Tatooine","Naboo"], 
                correct: "Tatooine", 
                level: "100"
            },

            {
                question: " Who was Anakin Skywalker's Padawan?",
                answers: ["Ahsoka Tano","Ezra Bridger"], 
                correct: "Ahsoka Tano", 
                level: "200"
            },
            
            {
                question: "What year did the first Star Wars movie come out?",
                answers: ["1974","1977"], 
                correct: "1977", 
                level: "300"
            },
            {
                question: " What's the name of Boba Fett's ship?",
                answers: ["Slave I","Solar Sailer"], 
                correct: "Slave I", 
                level: "400"
            },
            {
                question: "Who adopted Anakin and Padmé's daughter?",
                answers: ["Bail Organa","Barriss Offee"], 
                correct: "Bail Organa", 
                level: "500"
            },

        ]

        
    },

    {
        genre: "STAR TREK", 
        questions: [
            {
                question: "what species is worf",
                answers: ["Vulcan","Klingon"], 
                correct: "Klingon", 
                level: "100"
            },

            {
                question: "What is Sulu’s primary position on the U.S.S. Enterprise?",
                answers: ["Engineering","Helmsman"], 
                correct: "Helmsman", 
                level: "200"
            },
            
            {
                question: "Which Star Trek captain has an artificial heart?",
                answers: ["Captain Kirk","Jean-Luc Picard"], 
                correct: "Jean-Luc Picard", 
                level: "300"
            },
            {
                question: "What is Deanna Troi’s favorite food?",
                answers: ["Chocolate","Strawberry"], 
                correct: "Chocolate", 
                level: "400"
            },         {
                question: "Who was originally cast as Captain Janeway?",
                answers: ["Kate Mulgrew","Geneviève Bujold"], 
                correct: "Geneviève Bujold", 
                level: "500"
            },

        ]

        
    },

    {
        genre: "DUNE", 
        questions: [
            {
                question: "Who wrote Dune?",
                answers: ["Denis Villeneuve","Frank Herbert"], 
                correct: "Frank Herbert", 
                level: "100"
            },

            {
                question: "What resource is abundant on the planet Arrakis?",
                answers: ["Paul Atreides","Duke Leto"], 
                correct: "Paul Atreides", 
                level: "200"
            },
            
            {
                question: "What is a muad’dib?",
                answers: ["Species of mouse in the desert"," Worms in the desert"], 
                correct: "Species of mouse in the desert", 
                level: "300"
            },      {
                question: "What happens to the body of a Fremen after their death?",
                answers: ["It is left for the sandworms","It is rendered down for the water"], 
                correct: "It is rendered down for the water", 
                level: "400"
            },      {
                question: " What does the word “Sietch” mean in the Fremen term?",
                answers: ["A village","The desert"], 
                correct: "A village", 
                level: "500"
            },



        ]

        
    },

    {
        genre: "HARRY POTTER", 
        questions: [
            {
                question: "Who wrote Harry Potter?",
                answers: ["Jk R","JRR T"], 
                correct: "Jk R", 
                level: "100"
            },

            {
                question: "What is Lord Voldemort's full, real name?",
                answers: ["Tom Marvolo Riddle","Tom Riddle"], 
                correct: "Tom Marvolo Riddle", 
                level: "200"
            },
            
            {
                question: "What is Hermione’s patronus?",
                answers: ["An otter","A cat"], 
                correct: "An otter", 
                level: "300"
            },           {
                question: "Where was Harry Potter born?",
                answers: ["Little Whinging","Godric's Hollow"], 
                correct: "Godric's Hollow",
                level: "400"
            },           {
                question: "How many players are on a Quidditch team?",
                answers: ["Seven","Nine"], 
                correct: "Seven", 
                level: "500"
            },

        ]

        
    }
] 

function addCategory(category)
{
    const column = document.createElement('div');
    column.classList.add('genre-column');

    const genreTitle = document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerHTML= category.genre; 

    column.appendChild(genreTitle);
    game.append(column);

    category.questions.forEach(question => 
        {
            const card = document.createElement('div');
            card.classList.add('card');
            column.append(card);

            if(question.level === '100')
            {
                card.innerHTML = 100;
    
            }
            else if(question.level === '200')
            {
                card.innerText = 200;
            }
            else if(question.level === '300')
            {
                card.innerText = 300;
            }
            else if(question.level === '400')
            {
                card.innerText = 400;
            }
            else if(question.level === '500')
            {
                card.innerText = 500;
            }

            card.setAttribute('data-question',question.question);
            card.setAttribute('data-answer-1', question.answers[0]);
            card.setAttribute('data-answer-2', question.answers[1]);
            card.setAttribute('data-correct', question.correct);
            card.setAttribute('data-value', card.getInnerHTML());

            card.addEventListener('click',flipCard);



        })


}

// make it for tablet and for phone too;

catagories.forEach(category => addCategory(category));

function flipCard()
{
this.innerHTML= "";
this.style.fontSize = "15px";
this.style.lineHeight = "30px";
const display= document.createElement('div');
display.classList.add('card-text');
display.innerHTML=this.getAttribute('data-question');

const fistButton = document.createElement('button');
const secondButton = document.createElement('button');
fistButton.classList.add('first-button');
secondButton.classList.add('second-button');

fistButton.addEventListener('mouseover', () => {
    fistButton.style.backgroundColor = 'white';
  });
  fistButton.addEventListener('mouseout', () => {
    fistButton.style.backgroundColor = 'rgb(130, 99, 255)';
  });

  secondButton.addEventListener('mouseover', () => {
    secondButton.style.backgroundColor = 'white';
  });
  secondButton.addEventListener('mouseout', () => {
    secondButton.style.backgroundColor = 'rgb(130, 99, 255)';
  });

fistButton.innerHTML = this.getAttribute('data-answer-1');
secondButton.innerHTML = this.getAttribute('data-answer-2');
fistButton.addEventListener('click',getResult);

secondButton.addEventListener('click',getResult);
this.append(display,fistButton,secondButton);


const allCards = Array.from(document.querySelectorAll('.card'));
allCards.forEach(card => card.removeEventListener('click', flipCard));

}

function getResult ()
{

const allCards = Array.from(document.querySelectorAll('.card'));

allCards.forEach(card => card.addEventListener('click',flipCard));

 const cardButton = this.parentElement;

 if (cardButton.getAttribute('data-correct') == this.innerHTML)
 {
    score = score + parseInt(cardButton.getAttribute('data-value'));
    scoreDisplay.innerHTML = score;

    cardButton.classList.add('correct-answer');
    setTimeout(() => 
    {
        while(cardButton.flipCard)
        {
            cardButton.removeChild(cardButton.lastChild);
        }

        cardButton.innerHTML='Correct';
  

    },100)
 
 }
 else
 {
    cardButton.classList.add('wrong-answer');
    setTimeout(() =>
    {
        while(cardButton.flipCard)
        {
            cardButton.removeChild(cardButton.lastChild);
        }
        cardButton.innerHTML = 'Incorrect'; 
    }, 100)
 }

 cardButton.removeEventListener('click',flipCard);

};
