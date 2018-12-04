const choices = {
  gold: [
    "I'm adventurous.",
    "I like being a part of a team.",
    "I do my job with accuracy and efficiency.",
    "I'm always having fun.",
    "I'm personable.",
    "I'm a visionary.",
    "I care about what's right.",
    "People sometimes think I'm too strict.",
    "I welcome new challenges.",
    "I could be less standoffish.",
    "I often worry.",
    "I enjoy relating to others.",
    "I must get it done asap.",
    "I need time to myself.",
    "Safety & security is important to me."
  ],
  green: [
    "I'm responsible.",
    "I like to plan things out.",
    "I pay close attention to deadlines.",
    "I'm always on time.",
    "I'm organized.",
    "I'm resourceful.",
    "I care about what makes sense.",
    "People sometimes think I'm a know-it-all.",
    "I think work is play.",
    "I could be more upfront with people.",
    "I often avoid conflict.",
    "I enjoy competing.",
    "I must think things through.",
    "I need stability.",
    "Solving problems is important to me."
  ],
  blue: [
    "I'm curious.",
    "I like being spontaneous.",
    "I thrive in highly communicative environments.",
    "I prefer working alone.",
    "I'm unpredictable.",
    "I'm a concerned helper.",
    "I care about people.",
    "People sometimes feel I'm too considerate.",
    "I thrive on interaction.",
    "I could be more considerate of people.",
    "I often struggle to make decisions.",
    "I enjoy learning.",
    "I must talk it out.",
    "I need to win.",
    "Going on new adventures is important to me."
  ],
  orange: [
    "I'm relational.",
    "I like to invent new ways to do things.",
    "I often take risks.",
    "I'm attentive to the needs of others.",
    "I'm knowledgeable.",
    "I'm flexible.",
    "I care about the experience.",
    "People sometimes feel I'm too impulsive.",
    "I'm detail oriented.",
    "I could be more relaxed.",
    "I often step on others toes.",
    "I enjoy serving others.",
    "I must plan ahead.",
    "I need to be creative.",
    "Honesty and openness is important to me."
  ]
};

const results = {
  gold: {
    style: "Parent",
    strength: "Duty",
    esteem: "Behaving Responsibly",
    1: [
      "If your highest score is parent, you value order and cherish the traditions of home and family. You provide for and support the structure of society.",
      "Steadfastness and loyalty are your trademarks. Generous and parental by nature, you show you care by making everyone do the right thing.",
      "To disregard responsibility of any kind never occurs to you."
    ],
    2: [
      "Be prepared is the motto of those with parent as their highest score. They enjoy the status and security that being prepared represents.",
      "They have an instinct for keeping the product in production, for maintaining the structure, and for supporting the rules.",
      "They have a strong awareness of right and wrong, with respect for the shoulds and should nots.",
      "They are symbolized by the pillars of strength, the flag, the preservation of honored institutions, and the purity of home and family."
    ],
    3: [
      "Generosity",
      "Work ethic",
      "Parental nature",
      "Ceremony",
      "A sense of history",
      "Dignity, culture",
      "Perpetuating heritage",
      "Steadfastness",
      "A value of order",
      "Predictability",
      "Home and family",
      "Establishing and organizing",
      "Institutions"
    ],
    4: [
      "Dream of: Assets, wealth, influence, status security ",
      "Value: Dependability, accountability, responsibility",
      "Regard: Service, dedication  ",
      "Dislike: Disobedience, non-conformity Insubordination",
      "Express: Concern, stability, purpose",
      "Foster:  Institutions and traditions",
      "Respect: Loyalty and obligation",
      "Promote: Groups, ties, bonds, associationsorganizations"
    ]
  },
  orange: {
    style: "Pro",
    strength: "Skillfulness",
    esteem: "Being Adventurous",
    1: [
      "If your highest score is pro, you need freedom to take immediate action!",
      "A zest for life and a desire to test the limits best express your nature.",
      "You take pride in being highly skilled in a variety of fields.",
      "You are a master negotiator. Adventure is your middle name.",
      "You prefer a hands-on approach to problem solving and a direct line of reasoning creates the excitement and immediate results that you admire."
    ],
    2: [
      "People with pro as their highest score see life as one big party to enjoy.",
      "They live in here and now, for who knows what tomorrow may bring?",
      "They are always ready for a business deal or a deal of any sort, loving competition and never missing an opportunity.",
      "The impulsiveness drives everything they do.",
      "They are symbolized by the flight of the eagle, the sensation of riding a motorcycle, the roaring of the rapids, and the skillfulness of a virtuoso."
    ],
    3: [
      "The impulse to really live",
      "Testing the limits",
      "The need of variation",
      "Excitement and light-heartedness",
      "Charged adventure",
      "Being a natural entertainer",
      "Spontaneous relationships",
      "Taking off for somewhere else",
      "Being able to act in a crisis",
      "A love of tools",
      "Charm, wit, and fun",
      "Taking defeats only temporarily",
      "Consider waiting as emotional death"
    ],
    4: [
      "Dream of: Being free, spontaneity, impetuousness",
      "Value: Skills, grace, finesse, and charisma",
      "Regard: Opportunities, options, and competition",
      "Dislike: Rigidness, authority, and forcefulness",
      "Express: Optimism, impatience, eagerness, and confidence",
      "Foster: Recreation, fun, and enjoyment",
      "Respect: Skill and artistic expression",
      "Promote: Stimulation and risk"
    ]
  },
  green: {
    style: "Professor",
    strength: "Knowledge",
    esteem: "Utilizing Ingenuity",
    1: [
      "If your highest score is professor, you feel best about yourself when you are solving problems and when your ideas are recognized, especially when you feel innovative.",
      "You seek to express yourself through your ability to be an expert in everything. ",
      "Your idea of a great day is to use your know-how like a laser to create solutions, in that you are a complex individualist with great analytical ability. ",
      "Although you do not express you emotions openly, you do experience deep feelings."
    ],
    2: [
      "People with professor as their highest score have curious minds. They explore every facet of a problem or an idea to control the realities of life. ",
      "They are global by nature, always seeking universal truth.",
      "They acquire skills and perfect any product or system on which they choose to focus.",
      "They are symbolized by the abstract thinker, the unknown challenge of outer space, the complexity and simplicity in design, and the symmetry of forms."
    ],
    3: [
      "Developing models",
      "Abstract thinking",
      "Analytical processes",
      "Exploring ideas",
      "A variety of interests",
      "Striving for competency",
      "Admiring intelligence",
      "Storing wisdom and knowledge",
      "Being a perfectionist",
      "Despising redundancy ",
      "Utilizing precise language",
      "Handling complexity"
    ],
    4: [
      "Dream of: Truth, perfection, accuracy",
      "Value: Answers, resolutions, intelligence, explanations",
      "Regard: Efficiency, increased output, reduced waste",
      "Dislike: Injustice and unfairness",
      "Express: Coolness, calm, and collected reservation",
      "Foster:  Inventions and technology",
      "Respect: Knowledge and capability",
      "Promote: Effectiveness, competence, and know-how"
    ]
  },
  blue: {
    style: "Pal",
    strength: "Authenticity",
    esteem: "Being Sincere and Sympathetic",
    1: [
      "If your highest score is pal, you seek to express the inner you. Authenticity and honesty are valued above all other characteristics.",
      "You are sensitive to subtlety and – with great flair – you create roles in life’s drama. You enjoy close relationships with those you love and you possess a strong spirituality in your nature.",
      "Making a difference in the world is easy for you because you cultivate the potential in yourself and in others."
    ],
    2: [
      "People with pal as their highest score are persons of peace and love. They are the natural romantics in life, idealizing, the perfect moment and gestures love.",
      "They are most satisfied when nurturing the potential in others, bringing out the best in them. They are facilitators of human potential. ",
      "They are symbolized by the dove of peace, the romantic ballad, the drama of life, and the importance of a simple touch or handshake."
    ],
    3: [
      "Authenticity as a standard",
      "Seeking reality",
      "Devotion in relationships",
      "Cultivating potential in others ",
      "Assuming creative roles in life’s drama",
      "Writing and speaking with poetic flair",
      "Self-searching",
      "Having a life of significance",
      "Sensitivity of subtlety",
      "Spirituality",
      "Making a difference in the world",
      "Seeking harmony"
    ],
    4: [
      "Dream of: Love, affection, authenticity  ",
      "Value: Compassion, sympathy, rapport",
      "Regard: Meaning, significance, identity",
      "Dislike: Hypocrisy, deceptive, insincerity ",
      "Express: Vivacity, enthusiasm, inspiration ",
      "Foster:  Potential growth in people, harmony",
      "Respect: Nurturing, empathy, sharing of feelings",
      "Promote: Growth and development in others"
    ]
  }
};

const title = "Rank the statements as they relate to yourself with 1 being most like you and 4 being least like you.";

const order = [];

Object.keys(choices).forEach( color => {
  choices[color].forEach( (choice, i) => {
    if (order[i]) {
      order[i].push({choice: choice, color: color});
    } else {
      order[i] = [{choice: choice, color: color}];
    }
  });
});

let dragging = false;

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('body-main');
  order.forEach( (set, i) => {
    main.insertAdjacentHTML( 'beforeend', `
      <div class="directions">
        ${i + 1}. ${title}
      </div>
      <div class="choices-container" id="choice-container${i + 1}">
      ${
        set.map( (option, j) => {
          return `
          <div class="choice-box ${option.color}" id="choice_id_${i}${j}" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondragover="dragOver(event)">
            <img class="choice-bullets" draggable="false" src="assets/images/choice-bullets-max.png">
            <select class="choice-num-select" color="${option.color}">
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <p class="choice-text">${option.choice}</p>
          </div>
          `;
        }).join("\n")
      }
      </div>
    `);
  });
  Array.from(document.getElementsByClassName('choice-box')).forEach(el => {
    el.addEventListener('mouseover', (event) => {
      if (!dragging) {
        if ($(event.target).is("div")) {
          event.target.style.cssText = "background-color: lightgrey";
        } else {
          const parent = event.target.parentElement;
          parent.style.cssText = "background-color: lightgrey";
        }
      }
    });
    el.addEventListener('mouseout', (event) => {
      if ($(event.target).is("div")) {
        event.target.style.cssText = "background-color: white";
      } else {
        const parent = event.target.parentElement;
        parent.style.cssText = "background-color: white";
      }
    });
  });
  document.getElementById('done').addEventListener('click', () => {
    const counts = { gold: 0, green: 0, blue: 0, orange: 0 };
    const index = { 1: 4, 2: 3, 3: 2, 4: 1 };
    const opts = document.getElementsByClassName('choice-num-select');
    console.log(opts.length)
    Array.from(opts).forEach( el => {
      const int = index[parseInt(el.value)];
      if (int) {
        console.log(el.getAttribute('color'), int)
        counts[el.getAttribute('color')] += int;
      }
    });
    let max = 0;
    let maxColor;
    Object.keys(counts).forEach( key => {
      if (counts[key] >= max) {
        max = counts[key];
        maxColor = key;
      }
    });
    console.log(counts);
    document.getElementById('first-page').remove();
    document.getElementById('root').insertAdjacentHTML( 'beforeend', `
      <div class="results-header">
        Your Communication Style is ${results[maxColor].style}!
      </div>
      <div class="result-section">
        Your strength is ${results[maxColor].strength}
      </div>
      <ul>
        ${
          results[maxColor][1].map( bullet => {
            return `<li class="result-bullets">${bullet}</li>`;
          }).join('\n')
        }
      </ul>
      <div class="result-section">
        You Esteem Yourself by ${results[maxColor].esteem}
      </div>
      <ul>
        ${
          results[maxColor][2].map( bullet => {
            return `<li class="result-bullets">${bullet}</li>`;
          }).join('\n')
        }
      </ul>
      <div class="result-section">
        Your Key to Personal Success
      </div>
      <ul>
        ${
          results[maxColor][3].map( bullet => {
            return `<li class="result-bullets">${bullet}</li>`;
          }).join('\n')
        }
      </ul>
      <div class="result-section">
        With ${results[maxColor].style} As Your Highest Score, You Tend To
      </div>
        <ul>
        ${
          results[maxColor][4].map( bullet => {
            return `<li class="result-bullets">${bullet}</li>`;
          }).join('\n')
        }
        </ul>
    `);
  });
});


const dragStart = (event) => {
  dragging = true;
  if (!event.target.ondragstart) return;
  setTimeout(function(){
    event.target.classList.add('hide');
  });
};

const dragEnd = (event) => {
  dragging = false;
  if (!event.target.ondragend) return;
  event.srcElement.classList.remove('hide');
  const parent = event.srcElement.parentElement;
  const opts = parent.getElementsByClassName("choice-num-select");
  Array.from(opts).forEach( (option, i) => {
    option.value = i + 1;
  });
};

const dragOver = (event) => {
  if (!event.target.ondragover) return;

  var choice = $(`#${event.target.id}`);
  var prev = choice.prev();
  var prevClass = prev.attr('class');

  if (prevClass && prevClass.includes('hide')) {
    prev.insertAfter(choice);
  } else {
    var next = choice.next();
    var nextClass = next.attr('class');

    if (nextClass && nextClass.includes('hide')) {
      next.insertBefore(choice);
    }
  }
};
