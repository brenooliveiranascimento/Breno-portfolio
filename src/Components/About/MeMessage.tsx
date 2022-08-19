import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

function MeMessage() {
  return (
    <FadeIn>
      <h1>
        Prazer, esse sou eu!
      </h1>
      <p>
        - Atualmente estudando na Trybe desenvolvimento web na Trybe, o programa conta com mais de 1500 horas de aulas e aborda introdução
          ao desenvolvimento de software, front-end, back-end, ciência da computação,
          engenharia de software, metodologias ágeis e habilidades comportamentais.
      </p>
      <p>
        - Disciplina e colaboração são os meus mantras!
      </p>
      <p>
      - Completamente apaixonado por astronomia
      </p>
      <p>
      - Amante de animes séries e filmes
      </p>

    </FadeIn>
  );
};

export default MeMessage;
