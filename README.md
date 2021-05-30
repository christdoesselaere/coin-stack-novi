# Coin Stack

Coin Stack is er voor kleine beleggingsgroepjes die op het platform Binance actief zijn.
Door gebruik te maken van Coin Stack kan niet alleen de beheerder van het vermogen maar ook de aandere deelnemers inzicht krijgen wat er gebeurd op Binance.
En dit zonder te hoeven inloggen op Binance.

![coin-stack-preview](./images/coin-stack-preview.PNG)

De beheerder vult eenmalig de API keys in welke in Binance zijn aangemaakt, let hierbij op dat je de keys aanmaakt met de 'read-only' en 'futures trading' opties geactiveerd.
Vervolgens deelt de beheerder de inloggegevens met de deelnemers. 

Coin Stack haalt de data via de Binance API op en geeft deze in een makkelijk overzicht weer op zowel pc als mobiel.
In de huidige versie zijn alleen de spot assets en futures zichtbaar. Bij de futures word de marktwaarde (Mark) en winst of werlies (PnL) iedere 5 seconde bijgewerkt.

Binnenkort zijn hier ook de openstaande orders, historie en totale waardes van alle bezitten in te zien. Later worden ook grafieken toegevoegd welke per asset of future te bekijken zijn.

Uiteindelijk moet ook iedere deelnemer apart kunnen inloggen met een eigen account, de beheerder kan dan toestemming geven met wie de gegevens gedeeld worden.

### Instalatie

Instaleer de node modules door het volgende commande in de terminal te runnen:

`npm install`

Instaleer React Router Dom met het volgende commando:

`npm install react-router-dom`

Instaleer vervolgens de Binance node api met het volgende commando in te terminal:

`npm install node-binance-api`

Instaleer Firebase voor de authenticatie:

`npm install firebase`

Start vervolgens de app met het volgende commando:

`npm start`

### Inlog en API gegevens

Gebruik de volgende gegevens om in te loggen:

Email:          user@coin-stack.nl
Wachtwoord:     welkom1

### Limitaties

Door het CORS (Cross-origin resource sharing) beleid wat Binance hanteerd is op en moment een browser met een uitgeschakeld web-security nodig.
Er word nog gewerkt aan een oplossing, echter weet ik nog weinig hoe ik CORS moet implementeren/omzeilen.

Om de app nu werkend te zien moet je chrome opstarten met de volgende startoptie:

`--user-data-dir="C://Chrome dev session" --disable-web-security`

Op Windows voer de volgende handelingen uit om chrome op te starten zonder web-security:

Rechtermuis op het windowslogo.<br>
![step 1](./images/step-1.png)

Kies voor 'uitvoeren'.<br>
![step 2](./images/step-2.png)

Kopieer de volgende regel en plak deze in het vak 'Openen:', klik vervolgens op 'OK'.<br>
`chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`

![step 3](./images/step-3.png)

Chrome is nu opgestart zonder web-security.

Als de app gestart is via `npm start` ga naar [http://localhost:3000/futures](http://localhost:3000/futures)