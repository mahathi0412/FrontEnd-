const url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
  .then(response => response.json())
  .then(characters => {
    const section = document.querySelector('section');

    characters.forEach(character => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');

      div.classList.add('col-sm-6', 'col-md-3', 'col-lg-3', 'mb-4', 'text-center');
      img.src = character.imageUrl;
      img.alt = character.fullName;
      div.style.height = "400px";
      img.style.height = "300px";
      img.style.width = "100%";
      img.classList.add('img-fluid', 'rounded-0', 'shadow');
      h2.textContent = character.fullName;
      h2.classList.add('h4', 'text-dark', 'text-center');
      p.textContent = character.title;
      p.classList.add('h6', 'text-dark', 'text-center');

      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(p);
      section.appendChild(div);

      div.addEventListener('mouseenter', () => {
        div.classList.add('shadow-lg');
      });
      div.addEventListener('mouseleave', () => {
        div.classList.remove('shadow-lg');
      });
    });
  })
  .catch(error => console.error(error));