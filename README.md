# IM 5 – Projekt
 
Mein IM5-Projekt

ReadMe mit Offenlegung von Quellen / Arbeitsmittel / Methodik (z.B. Chat GPT)


## Filter-Funktion
Am Ursprung stand die Idee, eine Art Podcast-Katalog zu erstellen, der filterbar ist. Mit dieser Idee machte ich mich auf die Suche nach Beispielen und Tutorials, wo eine Filter-Funktion mit HTML, CSS und JS umgesetzt wird.

Ich begann bei diesem [Tutorial](https://www.w3schools.com/howto/howto_js_portfolio_filter.asp). Hier wird nur mit einem Filter gearbeitet, ausserdem ist es etwas veraltet (es wird noch var statt const/let verwendet). Ich bat ChatGPT um Tipps, wie der Code des Tutorials verbessert werden kann, was gut klappte. Danach fragte ich ChatGPT, wie der Code angepasst werden muss, damit mit mehreren Filtern gearbeitet werden kann. Die Daten sollten ausserdem aus einer separaten Datei kommen und nicht wie im Tutorial im HTML stehen.

## Daten
In einem JS-Objekt speicherte ich einige Beispiel-Daten von Podcasts, die dann mit JavaScript ins HTML DOM eingefügt wurden. Nun wollte ich aber gut 40 Podcasts in den Katalog aufnehmen. Um nicht alles von Hand zusammenzutragen und mangels einer API die ich mit Vanilla JS anzapfen konnte, scrapete ich die Daten zusammen. Dafür arbeitete ich mit Python (das hatten wir im Major Journalismus am MAZ gelernt). So konnte ich die benötigten Infos vom jeweiligen Podcast auf der Plattform «Apple Podcasts» abgreifen und gesammelt in einem CSV speichern. Das CSV wandelte ich in ein JS-Objekt um, das die Beispiel-Daten von vorher ersetzte.

## Styling

## Wie hilfreich war ChatGPT?
