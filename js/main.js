fetch('data/poemas.json')
  .then(res => res.json())
  .then(poems => {
    const container = document.getElementById('poems-container');

    poems.forEach(poem => {
      const card = document.createElement('div');
      card.className = 'poem-card';

      card.innerHTML = `
        <div class="poem">${poem.text}</div>
        <div class="footer">${poem.date}</div>
        <div class="cats-bg">🐱 🐾 🐱</div>
      `;

      container.appendChild(card);
    });

    // aplicar Twemoji solo a contenido
    twemoji.parse(document.querySelector(".content"));
  });