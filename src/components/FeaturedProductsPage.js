import React from 'react';

const FeaturedProductsPage = () => {
  return (
    <main className="container">
      <h1>Nos Produits type "pad"</h1>
      
      {/* Anker PowerWave Pad (A2503) */}
      <section className="product">
        <div className="row">
          <div className="col-md-6">
            <div className="product-description">
              <h2>Anker PowerWave Pad (A2503)</h2>
              <p>L'Anker PowerWave Pad (A2503) est un chargeur sans fil de haute qualité qui offre une expérience de recharge pratique et efficace pour une variété d'appareils compatibles Qi. Voici quelques-unes de ses caractéristiques et avantages :</p>
              <ul>
                <li><strong>Compatibilité universelle :</strong> Le PowerWave Pad est compatible avec une large gamme d'appareils prenant en charge la recharge sans fil, y compris les smartphones, les écouteurs sans fil et d'autres gadgets électroniques.</li>
                <li><strong>Recharge rapide :</strong> Ce chargeur offre une recharge rapide grâce à sa technologie avancée, permettant aux utilisateurs de recharger leurs appareils rapidement et efficacement.</li>
                <li><strong>Design élégant et compact :</strong> Le PowerWave Pad est doté d'un design élégant et compact qui s'intègre parfaitement à tout environnement, que ce soit à la maison, au bureau ou en déplacement.</li>
                <li><strong>Sécurité garantie :</strong> Anker intègre des mesures de sécurité avancées pour protéger vos appareils contre la surchauffe, la surtension et les courts-circuits, assurant ainsi une expérience de recharge sûre et fiable.</li>
                <li><strong>Excellent rapport qualité-prix :</strong> Avec un prix abordable et des performances de recharge de haute qualité, le PowerWave Pad offre un excellent rapport qualité-prix pour les utilisateurs recherchant une solution de recharge sans fil fiable.</li>
              </ul>
              <p>En résumé, l'Anker PowerWave Pad (A2503) est un choix idéal pour ceux qui recherchent un chargeur sans fil fiable, rapide et élégant pour leurs appareils compatibles Qi.</p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="product-image">
              <img src="img/anker-powerwave.jpg" alt="Anker PowerWave Image" className="product-img-right custom-image-size" />
            </div>
          </div>
          <a href="https://amzn.to/3I0beQl"><button className="btn btn-primary">Acheter sur Amazon</button></a>
        </div>
      </section>

      {/* Apple Chargeur MagSafe */}
      <section className="product">
        <div className="row">
          <div className="col-md-6">
            <div className="product-description">
              <h2>Apple Chargeur MagSafe</h2>
              <p>Le Chargeur MagSafe est une solution de recharge sans fil innovante conçue par Apple pour les utilisateurs d'iPhone. Voici quelques-unes de ses caractéristiques et avantages :</p>
              <ul>
                <li><strong>Compatibilité étendue :</strong> Le Chargeur MagSafe est compatible avec tous les modèles d'iPhone prenant en charge la technologie MagSafe, offrant ainsi une solution de recharge universelle.</li>
                <li><strong>Recharge rapide et efficace :</strong> Grâce à sa conception innovante et à sa technologie avancée, le Chargeur MagSafe permet une recharge rapide et efficace de votre iPhone, vous permettant de rester connecté en tout temps.</li>
                <li><strong>Design élégant et minimaliste :</strong> Conçu avec le souci du détail, le Chargeur MagSafe arbore un design élégant et minimaliste qui s'intègre parfaitement à votre environnement, que ce soit à la maison ou au bureau.</li>
                <li><strong>Fiabilité et durabilité :</strong> Fabriqué par Apple, le Chargeur MagSafe est synonyme de qualité et de durabilité, garantissant une performance optimale et une longue durée de vie.</li>
                <li><strong>Facilité d'utilisation :</strong> Avec le Chargeur MagSafe, la recharge de votre iPhone est aussi simple que de le placer sur le chargeur. Pas de fils emmêlés ni de branchements compliqués, juste une recharge sans fil pratique.</li>
              </ul>
              <p>En résumé, l'Apple Chargeur MagSafe offre une expérience de recharge sans fil supérieure, associant des performances rapides, un design élégant et une facilité d'utilisation inégalée.</p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="product-image">
              <img src="img/apple-magsafe.jpg" alt="Apple MagSafe Image" className="product-img-right custom-image-size" />
            </div>
          </div>
          <a href="https://amzn.to/42xecVY"><button className="btn btn-primary">Acheter sur Amazon</button></a>
        </div>
      </section>
    </main>
  );
}

export default FeaturedProductsPage;
