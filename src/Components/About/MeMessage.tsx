import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

function MeMessage() {
  return (
    <FadeIn>
      <h1>
        Prazer, esse sou eu!
      </h1>
      <p>
        - Disciplina e colaboração são os meus mantras!
      </p>
      <p>
      - Completamente apaixonado por astronomia
      </p>
      <p>
      - Adoro animes séries e filmes, a proposito, me recomende alguma coisa pra assistir.
      </p>
      <button>
        Recomendar Série/Anime/Filme
      </button>
    </FadeIn>
  );
};

export default MeMessage;
