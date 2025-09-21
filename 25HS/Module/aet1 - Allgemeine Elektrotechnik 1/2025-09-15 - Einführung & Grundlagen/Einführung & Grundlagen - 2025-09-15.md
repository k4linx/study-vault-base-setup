---
erstelldatum: 2025-09-15
tags: aet1
---

## ⁉️ Fragen
- [ ] Wie ist die Formel für das Coulomb Gesetz?
- [ ] Was ist die Feldstärke?
- [ ] Was ist Arbeit?
- [ ] Wie definiere ich Spannung und Potenzial?
- [ ] Was ist der Ohmsche Wiederstand?
---
## 💡 Wichtige Begriffe
- **Coulomb** - Gesetz das besagt, dass sich 2 Massen anziehen.
- **Polarität** - Vorzeichen der Ladung
- **Feldbegriff (Faraday)** - 
- **Spannung** - Unterschied der Ladung zwischen 2 Punkten
- **Potenzial** - Wert eines Punktes im Raum (im Gegensatz zu der Spannung nur ein einzelner Punkt)
- **Potenzialnullpunkt** - gewählter Punkt der ein 0-Potenzial hat.
---
## 📄 Zusammenfassung
### 2.1 Coulomb
Massen ziehen sich gegenseitig an als Beispiel der Mond und die Erde. Oder eine Tasse und die Erde (Gravitationskraft). Dieses Phänomen kann auch in die Elektrotechnik übertragen werden. Zwei Ladungen unterschiedlicher [[#Polarität|Polarität]] ziehen sich an und zwei gleicher Polarität stossen sich ab. Um die Anziehungskraft zweier Massen zu berechnen wurde folgende Gleichung gefunden:

> [!abstract] Coulomb Gleichung
> $$
> F_{g}= G \cdot \frac{m_{1} \cdot m_{2}}{a^2}
> $$
> $m_{1}$: Masse des ersten Massepunktes 
> $m_{2}$: Masse des zweiten Massepunktes
> $a$: Abstand der Massepunkte (vom Mittelpunkt der Masse)
> $G$: Gravitationskonstante $G = 6.673 \cdot 10^{-11}m^{3}/kg^{3}$

Diese Gleichung liefert nur die Kraft mit der sich die Massen/Ladungen anziehen, Die Richtung dieser Kraft. 
![[Coulombsches Kräftegesetz.png|Abb. 1: Coulombsches Kräftegesetz]]
Das Coulombsche Kraftgesetz ohne räumliche Ausdehnung für Punktladungen lautet:

> [!abstract] Coulombsches Kraftgesetz für Punktladungen
> $$
> F_{c}= \frac{1}{4\pi \cdot \varepsilon} \cdot \frac{Q_{1}\cdot Q_{2}}{a^{2}}
> $$
> $Q_{1}$: Ladung des ersten Punktes
> $Q_{2}$: Ladung des zweiten Punktes
> $a$: Abstand der Punkte
> $\varepsilon$ Permittivität des Mediums (im Vakuum und Luft setzt man $\varepsilon = \varepsilon_{0}$ ein)

#### Polarität
 **Polarität** ist die Zuordnung von Plus (+) und Minus (–) bzw. die Richtung von Spannung und Strom. Eine Ladung mit dem Vorzeichen + ist positiv geladen, und eine Ladung mit minus als Vorzeichen ist negativ geladen. 

### 2.2 Feldbegriff (Faraday)
Das Feldmodell wird verwendet um die Coulomb Gesetze zu erklären. Jede Ladung(Masse) verändert in ihrer Umgebung den Zustand so stark, dass auf andere Ladungen Krafteinwirkungen ausgeübt werden. Diesen Zustand nennt man _elektrisches Feld_ oder Gravitationsfeld. das elektrische Feld wird an jedem Punkt im Raum als [[Vektor]] $\vec{E}$ der in die Richtung der Kraft zeigt die auf eine Positive Probeladung ausgeübt wird. 
![[veranschaulichung Elektrisches Feld.png| ]]
Die abbildung zeigt wie die Positive Ladung $Q_{1}$ ihre Kraft auf die Positive Probeladung $q_{2}$ ausübt. Dabei sieht man gut dass die Kraft von $Q_{1}$ abnimmt je weiter weg von der Ladung die Probeladung $q_{2}$ platziert wird.

> [!abstract] Definition $\vec{E}$
> $$
> \vec{E} = \frac{\vec{F}}{q_2}
> $$
> $q_{2}$: positive Testladung
> $\vec{F}$: Kraftvektor der ladung $q_2$

Um die elektrische Feldstärke des Punktes Q1 zu finden kann man das Coulombsche Kraftgesetz in der obigen Definition einsetzen. Das ergibt folgende Formel:

> [!abstract] Definition $\vec{E}(\vec{r})$
> $$
> \vec{E}(\vec{r}) = \frac{Q_{1}}{4\pi\varepsilon \cdot r^{2}}\cdot \vec{e}_{r}
> $$
> $\vec{e}_{r}$: Einheitsvektor in Richtung $\vec{r}$
> $\vec{r}$: Abstand von $Q_{1}$

das elektrische Feld ist ein Kraftfeld, deshalb wird die Physikalische Grösse Kraft ($F$) für die Definition verwendet.

#### Feldlinien
Feldlinien werden als Gedankenstütze verwendet um sich elektische Felder anschaulich zu zeichnen. In der Realität existieren sie aber nicht.


### 2.3 Arbeit im Feld, Spannung und Potenzial

#### Arbeit
Um eine Ladung in einem Elektrischen Feld von A nach B zu bewegen braucht es Arbeit. In einem Potenzialfeld ist die Arbeit unabhängig vom Weg. Das heisst man kann verschieden Wege von A nach B gehen die dazu benötigte Arbeit ist immer dieselbe.
![[Ladungstransporte von A nach B.png]]

$$
W_{1}=W_{2}=W_{3}=W_{AB}
$$
Die Formel für Arbeit ist Definiert wie folgt:

> [!abstract] Definition Arbeit
> $$
> W_{AB} = \int^{B}_{A}\vec{F}\cdot d\vec{s} = q \cdot \int^{B}_{A} \vec{E} \cdot d \vec{s}
> $$
> $q$: verschobene Ladung
> $W_{AB}$: vom Feld abgegebene Arbeit 


#### Spannung
Diese Arbeit führt zur Definition der Spannung:

> [!abstract] Definition Spannung
> Spannung wird Definiert als Arbeit durch Ladung
> $$
> U_{AB}= \frac{W_{AB}}{q} = \frac{\int^{B}_{A}\vec{E}\cdot d \vec{s}}{q}
> $$
> Wenn nun mit $q$ multipliziert wird erhält man:
> $$
> U_{AB}= \int^{B}_{A}\vec{E}\cdot d \vec{s}
> 
$$

Damit kann die Arbeit in obiger Abbildung mit der Spannung ersetzt werden:
![[Arbeit ersetzt durch spannung.png]]
#### Potenzial
Das elektrische Potenzial wird im gegensatz zur Spannung nur an einem Punkt und nicht zwischen zwei Punkten angegeben. Ein Punkt im Raum muss als Nullpunkt definiert werden. Dieser Nullpunkt kann willkürlich gewählt werden. Die potenziale der anderen Punkte sind dann die Spannung der Punkte gegenüber dem Nullpunkt.
![[spannung, potenzial.png]]
Die spannung zwischen zwei punkten kann so allgemein definiert werden:

> [!abstract] Definition Spannung zwischen zwei Punkten mit Potenzial
> $$
> U_{pq}=V_{P}-V_{q}
> $$
> $V_{p}$: Potenzial von Punkt $p$
> $V_{q}$: Potenzial von Punkt $q$

Potenzial und Spannung verwenden beide die Einheit Volt.

Wenn der Potenzialnullpunkt verändert wird ändern sich die Potenziale der einzelnen Punkte aber die Spannungen bleiben gleich.
![[abc mit unterschiedlichen nullpunkt.png]]

Allgemein wird der Potenzialnullpunkt oft als die Erdoberfläche gewählt die überall das gleiche Potenzial besitzt. 

Wenn eine Ladung $q$ im Punkt $P$ mit dem potenzial $V(P)$ plaziert wird, ergibt das Resultat der Multiplikation $q \cdot V(P)$ die potenzielle Energie von $q$ gegenüber dem Nullpunkt.

### 2.4 Strom
Der Strom beschreibt die Bewegung von Ladungsträgern. elektrischer Strom ist immer die Bewegung von negativ geladenen Elektronen. Die Stromstärke wird wie folgt Definiert:

> [!abstract] Definition Stromstärke
> $$
> I = \frac{Q}{t}
> $$
> $I$: Strom in Ampère (A)
> $Q$: Ladung 
> $t$: Zeit

Die obige Formel definiert den Strom als Zeitlich konstant. Der Strom wird aber in jedem Zeitpunkt einen anderen _Momentanwert_ haben $i$:

> [!abstract] Definiton Momentanwert der Stromstärke
> $$
> i(t) = \frac{\delta q(t)}{\delta t}
> $$

> [!important] Wichtig
> **Wichtig:** Der Die Stromflussrichtung wird vom Plusspol einer Spannungsquelle zum Minuspol gezeichnet, physikalisch fliesst der Strom aber vom Minus zum Pluspol. Weil sich die Elektronen bewegen und nicht die Protonen wie oben erwähnt.


### 2.5 Wiederstand
Elektronen bewegen sich nicht reibungslos, genau so wie sich ein Auto nicht reibungslos bewegt, es gibt immer Reibung sonst könnte sich das Auto gar nicht fortbewegen. In der Elektrotechnik definiert man das als Wiederstand. 

> [!abstract] Definition Wiederstand
> $$
> R = \frac{U}{I}= \frac{1}{G}
> $$
> $R$: Wiederstand
> $G$: Leitwert
> $U$: Spannung
> $I$: Stromstärke

Der [[Ohmsche Wiederstand]] ist linear. Es gibt aber auch Wiederstände die nichtlinear sind.
![[Strom-Spannungskennlinie Wiederstände.png]]

An der Kurve $c$ sieht man dass ein Widerstand auch negativ sein kann.

Dem Widerstand wird die Einheit Ohm ($\ohm$) zugeordnet, der Leitwert hat als einheit Siemens ($S$ oder $\ohm^{-1}$)

Der elektrische Widerstand ist eine Materialgrösse das bedeutet ein Elektrischer Leiter mit einem überall gleichen Querschnitt, wird einen grösseren Widerstand haben desto länger dieser Leiter ist. 

> [!abstract] Definition Widerstand linearer Leiter
> $$
> R = \frac{\rho \cdot l}{A} = \frac{l}{\sigma \cdot A}
> $$
> $\rho$: spezifischer Widerstand ($\ohm m$)
> $\sigma$: spezifischer Leitwert ($\frac{S}{m}$ oder $\frac{1}{\ohm m}$)
> $l$: Länge des Leiters
> $A$: Querschnittfläche
> 

Der Widerstand ist Temperaturabhängig. von 20°C bis 200°C verhalten sich die meisten Widerstände Linear:
![[verhalten Widerstand & Temperatur.png]]
So kann der spezifische Widerstand eines Leiters mit folgender Funktion definiert werden.
> [!abstract] Funktion Spezifischer Wiederstand bis 200°C
> $$
> R_{W} = R_{20}\cdot(1+\alpha_{20}\cdot(T_{W}-20°C))
> $$
> $R_{20}$: Wiederstand bei 20°C
> $R_{W}$: Widerstandswert bei der Temperatur $T_{W}$
> $T_{W}$: Temperatur
> $\alpha_{20}$: Temperaturkoeffizient in $\frac{1}{°C}$

Wenn die Temperaturen höher werden wird noch ein quadratischer Term in die Funktion eingefügt:

> [!abstract] Spezifischer Widerstand ab 200°C
> $$
> R_{W} = R_{20}\cdot(1+\alpha_{20}\cdot(T_{W}-20°C)+ \beta_{20} \cdot (T_{w}-20°C)^{2})
> $$
> $\beta_{20}$: Temperaturkoeffizient in $\frac{1}{°C^{2}}$

Die Temperaturkoeffizienten werden oft auf 20°C bezogen.

Die meisten Werkstoffe in der Elektrotechnik haben einen temperaturbeiwert von $\alpha =0.004 \frac{1}{K}$. 

> [!tip] Merken
> Das heisst wenn sich die Temperatur der Widerstände um $1K$ erhöht verändert sich deren Wert um $0.4\%$

---

## ✅ ToDo

---
## 📕 Quellen
- 
