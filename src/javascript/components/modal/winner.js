import showModal from './modal';
import { createFighterImage } from '../fighterPreview';
import  createElement  from '../../helpers/domHelper';


export function showWinnerModal(fighter) {
  // call showModal function

  const title = `${fighter.name.toUpperCase()} WIN!`;
  const bodyElement = createElement({ tagName: 'img', className: 'modal-body', attributes: { src: fighter.source } });
  showModal({ title, bodyElement, onClose: () => (location.href = location.href) });
}