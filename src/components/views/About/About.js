import React, {Component} from 'react';
import styles from './About.module.scss';

export default class About extends Component {
  render() {
    return (
      <>
       <div className={styles.top}>  
       <li className={styles.logo}>
       <a className={styles.logo_a}
       href="/src/components/Home/Home.js">Reactive Restaurant</a>
       </li>
       </div>
      
      
        <div className={styles.app_name}>
          <h1>About Reactive Restaurant</h1>
      </div>    
    
        <h4>Zamawianie jedzenia nigdy nie było tak proste. Przede wszystkim: za wygodę. 
          Zamawianie jedzenia przez internet to proces szybki i nieskomplikowany, 
          a by się o tym przekonać, wystarczy odwiedzić stronę Reactive Restaurant.
          Twoim oczom ukaże się lista potraw, które dostęne są z dowozem w okolicy. 
          Masz ochotę na hamburgera, a może na domowy obiad jak u mamy? 
          W bogatej ofercie restauracji z pewnością znajdziesz coś dla siebie. 
          Wybierz potrawy, na jakie masz ochotę, po czym przejdź do płatności. 
          Pozostaje tylko czekać na dostawcę. Jakie dodatkowe korzyści niesie z sobą zamawiania online?
          Możesz zamówić również przez aplikację mobilną.
          Zamawianie online to już nie przyszłość, a teraźniejszość. Bardzo komfortowa. 
          Wystarczy kilka kliknięć myszką, by zyskać dostęp do menu restauracji,
          a następnie zamówić potrawy i zaspokoić kulinarne pragnienia. 
          Zaplanuj kolejny posiłek z Reactive Restaurant i przekonaj się, 
          że zamawianie online wejdzie Ci w nawyk. Przynajmniej do czasu 
          wprowadzenia kolejnych udogodnień na rynku dostawy jedzenia.
        </h4>
        <li className={styles.nav_bar_li}>
              <a className={styles.nav_bar_a}
                 href="/src/components/Home/Home.js">Back to Home</a>
            </li>
        <div className={styles.bottom}>
        </div>
      </>
    );
  }
}



