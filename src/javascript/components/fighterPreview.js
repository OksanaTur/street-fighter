import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    
    if (fighter) {
    const fighterName = createElement({ tagName: 'div', className: 'fighterName' });
    fighterName.innerText = `${fighter.name}`;
    fighterElement.appendChild(fighterName);

    const fighterInfo = createElement({ tagName: 'div', className: 'fighterInfo' });
    for (const key in fighter) {
      if (key !== '_id' && key !== 'source' && key !== 'name') {
        const infoElement = createElement({ tagName: 'div', className: 'fighterInfo' });
        infoElement.innerText = `${key.toUpperCase()} : ${fighter[key]}`;
        fighterInfo.appendChild(infoElement);
      }
    }
    fighterElement.appendChild(createFighterImage(fighter));
    fighterElement.appendChild(fighterInfo);
  }

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}

