// Import stylesheets
import './styles/reset.css';
import './styles/layout.css';
import './styles/app.css';

class App {

  /**
	 * Main Containers
	 */
	containerHeader = null;
	containerBody = null;

  constructor(containerId) {
    this.containerHeader = document.createElement('header');
		this.containerHeader.id = containerId + '-header';

		this.containerBody = document.createElement('main');
		this.containerBody.id = containerId + '-body';

    const container = document.getElementById(containerId);
		container.appendChild(this.containerHeader)
		container.appendChild(this.containerBody);

    console.log(this);
  }

}

const app = new App('my-app');

// for (const card of [
// 			{code: 'bell'},
// 			{code: 'bug'},
// 			{code: 'wifi'},
// 			{code: 'coffee'},
// 			{code: 'diamond'},
// 			{code: 'rocket'},
// 		]) {
//       const newCard = document.createElement('div');
//       newCard.className = 'card';

//       const frontSide = document.createElement('div');
//       frontSide.className = 'card-front';
       
//        const backSide = document.createElement('div');
//        backSide.className = 'card-back';

//        const backSideIcon = document.createElement('i');
//        backSideIcon.className = 'fa fa-' + card.code;

//        backSide.appendChild(backSideIcon);

//        newCard.appendChild(frontSide);
//        newCard.appendChild(backSide);

//       document.getElementById('my-app').appendChild(newCard);
//     }

// const cards = document.getElementsByClassName('card');

// console.log(cards);

// for(const element of cards) {
//   element.addEventListener('click', () => {
//     element.classList.toggle('card-revealed');
//   });
// }