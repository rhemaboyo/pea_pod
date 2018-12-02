//
// const dragStart = (event) => {
//   event.dataTransfer.setData("text/plain", event.target.id);
// };
//
// const allowDrop = (event) => {
//   event.preventDefault();
//   event.currentTarget.style.background = '#7f8082';
// };
//
// const drop = (event) => {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text/plain");
//   const element = document.querySelector(`#${data}`);
//   event.currentTarget.style.background = 'white';
//   try {
//     event.target.appendChild(element);
//   } catch (error) {
//     console.warn("you can't move the item to the same place");
//   }
// };
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
            <select class="choice-num-select"  color=${option.color}>
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
  // Array.from(document.getElementsByClassName('choice-box')).forEach(el => {
  //   el.addEventListener('mouseover', (event) => {
  //     if (!dragging) {
  //       if ($(event.target).is("div")) {
  //         event.target.style.cssText = "background-color: lightgrey";
  //       } else {
  //         const parent = event.target.parentElement;
  //         parent.style.cssText = "background-color: lightgrey";
  //       }
  //     }
  //   });
  //   el.addEventListener('mouseout', (event) => {
  //     if ($(event.target).is("div")) {
  //       event.target.style.cssText = "background-color: white";
  //     } else {
  //       const parent = event.target.parentElement;
  //       parent.style.cssText = "background-color: white";
  //     }
  //   });
  // });
  // document.getElementById('done').addEventListener('click', () => {
  //   const counts = {gold: 0, green: 0, blue: 0, orange: 0};
  //   const index = { 1: 4, 2: 3, 3: 2, 4: 1 };
  //   Array.from(document.getElementsByClassName('choice-num-select')).forEach( el => {
  //     const int = index[parseInt(el.value)];
  //     if (int) a[el.getAttribute('color')] += int;
  //   });
  //   document.getElementById('first-page').remove();
  //   document.getElementById('root').insertAdjacentHTML( 'beforeend', `
  //     <div class="subheader">
  //       Your Communications Style is Professor!
  //     </div>
  //   `);
  // });
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
