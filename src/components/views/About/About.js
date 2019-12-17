import React from 'react';
import styles from './About.module.scss';
import {NavbarWithLogo} from '../../common/Navbar/Navbar';
import {Link} from 'react-router-dom';
import {mainRoutes} from '../../../routes';
import {Footer} from '../../common/Footer/Footer';

const About = props => {

  const {root} = mainRoutes;

  return (
    <>
      <NavbarWithLogo/>
      <h1 className={styles.title}>About Reactive Restaurant</h1>
      <p className={styles.text}>
        Zamawianie jedzenia nigdy nie było tak
        proste. Przede wszystkim: za
        wygodę.
        Zamawianie jedzenia przez internet to proces szybki i
        nieskomplikowany,
        a by się o tym przekonać, wystarczy odwiedzić stronę Reactive
        Restaurant.
        Twoim oczom ukaże się lista potraw, które dostęne są z dowozem w
        okolicy.
        Masz ochotę na hamburgera, a może na domowy obiad jak u mamy?
        W bogatej ofercie restauracji z pewnością znajdziesz coś dla siebie.
        Wybierz potrawy, na jakie masz ochotę, po czym przejdź do płatności.
        Pozostaje tylko czekać na dostawcę. Jakie dodatkowe korzyści niesie z
        sobą zamawiania online?
        Możesz zamówić również przez aplikację mobilną.
        Zamawianie online to już nie przyszłość, a teraźniejszość. Bardzo
        komfortowa.
        Wystarczy kilka kliknięć myszką, by zyskać dostęp do menu restauracji,
        a następnie zamówić potrawy i zaspokoić kulinarne pragnienia.
        Zaplanuj kolejny posiłek z Reactive Restaurant i przekonaj się,
        że zamawianie online wejdzie Ci w nawyk. Przynajmniej do czasu
        wprowadzenia kolejnych udogodnień na rynku dostawy jedzenia.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
        consequatur deserunt dolorum earum et eveniet excepturi expedita illo
        inventore laudantium nam pariatur possimus quibusdam quisquam saepe
        sint tempora ut, voluptates?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut
        autem blanditiis consequatur, culpa cum esse illo ipsa iste minima
        nihil possimus praesentium quibusdam repellendus repudiandae soluta
        tempora vel voluptates.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
        alias aliquam, delectus maiores obcaecati omnis quam saepe! Aliquam
        doloribus exercitationem, fugiat neque non quae quas recusandae
        tempora totam voluptatem!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        harum, nostrum. Aliquid asperiores distinctio excepturi laudantium,
        officiis provident sit! At ex facere nemo tempore voluptate! Ad beatae
        ipsa maiores sunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        eum, nam. Consectetur deleniti dicta fuga laudantium nemo unde?
      </p>
      <Link to={root} className={styles.backToStart}>
        Back to start
      </Link>
      <Footer/>
    </>
  );

};

export default About;
