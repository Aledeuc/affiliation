import React from 'react';

const WorkingSection = () => {
  return (
    <section className="product">
      <h2>Le fonctionnement de la recharge à induction </h2>
      <p>La recharge à induction est une méthode de charge sans fil qui utilise un champ magnétique pour transférer de l'énergie entre un chargeur et un appareil compatible. Voici comment cela fonctionne :</p>
        <ul>
            <li>Le chargeur à induction génère un champ magnétique alternatif à une fréquence spécifique.</li>
            <li>Cet champ magnétique induit un courant électrique dans la bobine de réception de l'appareil compatible.</li>
            <li>Le courant électrique est ensuite converti en courant continu pour recharger la batterie de l'appareil.</li>
        </ul>
        <p>La recharge à induction offre plusieurs avantages, notamment la commodité, la sécurité et la durabilité, ce qui en fait une option populaire pour recharger une variété d'appareils électroniques.</p>
    </section>
  );
}

export default WorkingSection;
