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
Massen ziehen sich gegenseitig an als Beispiel der Mond und die Erde. Oder eine Tasse und die Erde (Gravitationskraft). Dieses Phänomen kann auch in die Elektrotechnik übertragen werden. Zwei Ladungen unterschiedlicher [[Polarität (+/-)]] ziehen sich an und zwei gleicher Polarität stossen sich ab. Um die Anziehungskraft zweier Massen zu berechnen wurde folgende Gleichung gefunden:

> [!abstract] Coulomb Gleichung
> $$
> F_{g}= G \times \frac{m_{1} \times m_{2}}{a^2}
> $$
> $m_{1}$: Masse des ersten Massepunktes 
> $m_{2}$: Masse des zweiten Massepunktes
> $a$: Abstand der Massepunkte (vom Mittelpunkt der Masse)
> $G$: Gravitationskonstante $G = 6.673 \times 10^{-11}m^{3}/kg^{3}$

Diese Gleichung liefert nur die Kraft mit der sich die Massen/Ladungen anziehen, Die Richtung dieser Kraft. 
![[Coulombsches Kräftegesetz.png]]
Das Coulombsche Kraftgesetz ohne räumliche Ausdehnung für Punktladungen lautet:

> [!abstract] Coulombsches Kraftgesetz für Punktladungen
> $$
> F_{c}= \frac{1}{4\pi * \varepsilon} \times \frac{Q_{1}\times Q_{2}}{a^{2}}
> $$
> $Q_{1}$: Ladung des ersten Punktes
> $Q_{2}$: Ladung des zweiten Punktes
> $a$: Abstand der Punkte
> $\varepsilon$ Permittivität des Mediums (im Vakuum und Luft setzt man $\varepsilon = \varepsilon_{0}$ ein)

### 2.2 Feldbegriff (Faraday)
Das Feldmodell wird verwendet um die Coulomb Gesetze zu erklären. Jede Ladung(Masse) verändert in ihrer Umgebung den Zustand so stark, dass auf andere Ladungen Krafteinwirkungen ausgeübt werden. Diesen Zustand nennt man _elektrisches Feld_ oder Gravitationsfeld. das elektrische Feld wird an jedem Punkt im Raum als [[Vektor]] $\vec{E}$ der in die Richtung der Kraft zeigt die auf eine Positive Probeladung ausgeübt wird. 
![[veranschaulichung Elektrisches Feld.png]]
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
> \vec{E}(\vec{r}) = \frac{Q_{1}}{4\pi\varepsilon * r^{2}}* \vec{e}_{r}
> $$
> $\vec{e}_{r}$: Einheitsvektor in Richtung $\vec{r}$
> $\vec{r}$: Abstand von $Q_{1}$

das elektrische Feld ist ein Kraftfeld, deshalb wird die Physikalische Grösse Kraft ($F$) für die Definition verwendet.

#### Feldlinien
Feldlinien werden als Gedankenstütze verwendet um sich elektische Felder anschaulich zu zeichnen. In der Realität existieren sie aber nicht.


### 2.3 Arbeit im Feld, Spannung und Potenzial
Um eine Ladung in einem Elektrischen Feld von A nach B zu bewegen braucht es Arbeit. In einem Potenzialfeld ist die Arbeit unabhängig vom Weg. Das heisst man kann verschieden Wege von A nach B gehen die dazu benötigte Arbeit ist immer dieselbe.
![[Ladungstransporte von A nach B.png]]

$$
W_{1}=W_{2}=W_{3}=W_{AB}
$$
Diese Arbeit führt zur Definition der Spannung 
> [!abstract] Definition Spannung
> Spannung wird Definiert als Arbeit durch Ladung
> $$
> U_{AB}= \frac{W_{AB}}{q}
$$



---
## ✅ ToDo

---
## 📕 Quellen
- 
