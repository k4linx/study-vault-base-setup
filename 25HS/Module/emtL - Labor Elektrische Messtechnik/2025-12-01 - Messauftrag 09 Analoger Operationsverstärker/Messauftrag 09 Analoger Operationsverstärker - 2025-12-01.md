---
erstelldatum: 2025-12-01
tags:
  - analog
  - opamp
---
## Vorbereitungsarbeiten
### Netzgerät aus Serie Betrieb schalten
CH1 und CH2 müssen mittels brücke von CH1(-) zu CH2(+) geschaltet werden. CH1(+) wird zu $V_{cc+}$, CH2(-) wird zu $V_{cc-}$.
Zusätzlich muss die Serieschaltung der CH1 & 2 eingeschaltet werden.
### Versorgungsspannung einstellen
Die Versorgungsspannung des OpAmp muss auf $\pm 12V$ eingestellt werden. Dazu wird ein Messgerät (siehe Tabelle 1) direkt am Labornetzgerät angeschlossen und die Versorgungsspannung direkt gemessen.

| Messgrösse | Einheit | Messgerät            |
| ---------- | ------- | -------------------- |
| $U_{BATT}$ | V       | UNI-T UT61B (IADM06) |
## 1. Invertierender Verstärker
### 1.1 Messaufbau
#### 1.1.1 Schema
![[Schema_opamp_invertierend_M1.png#invert]]
#### 1.1.2 Beschreibung
Messaufbau gemäss Schema
##### Messgrössen & Messgeräte

| Messgrösse | Einheit | Messgerät           | Farbe |
| ---------- | ------- | ------------------- | ----- |
| $U_{2}$    | V       | tektronix MDO34 CH1 | Gelb  |
| $U_{1}$    | V       | tektronix MDO34 CH2 | Blau  |
##### Variablen & Quellen

| Frequenz        | Funktionsform | Gerät             |
| --------------- | ------------- | ----------------- |
| $1Hz$ - $10MHz$ | Sinus         | Tektronik AFG1062 |
### 1.2 Messungen
#### 1.2.1 Messerwartungen
Der Invertierende OpAmp sollte die gegebene Eingangsspannung selber korrigieren welches eine um $180°$ verschobene Sinuskurve zur folge hat. Dieses Resultat wird sich bis zu einer bestimmten Frequenz $\pm$ wiederholen. Aufgrund der Technischen Limiten des OpAmps, wird eine Phasenverschiebung stattfinden weil der OpAmp nicht schnell genug korrigieren kann. Dadurch wird der Verstärkungsfaktor nicht mehr stimmen.

**Aufgabe 1**
Der Verstärkungsfaktor $V_{u}=\frac{-R_{2}}{R_{1}}$ bei $R_{1}=R_{2}=1k\ohm$ ist $-1$. Das hat zur folge das die um $180°$ verschobene Sinuskurve die gleiche Amplitude hat wie das Eingangssignal.

**Aufgabe 2**
Bei $R_{2}=10k\ohm$ ist der Verstärkungsfaktor $-10$. Das hat zur folge das die um $180°$ verschobene Sinuskurve eine um den Faktor $10$ grössere Amplitude hat als das Eingangssignal.

**Aufgabe 3**
Ab der Versorgungsspannung werden erste Verzerrungen des Signals erwartet.
#### 1.2.2 Messresultate

#### 1.2.3 Interpretation


## Berechnungsrezept Verstärkungsfaktor
$$
\begin{align}
U_{(+)}=0 \\
U_{(-)}=\frac{U_{a}}{2} \\ 
U_{(-)} = U_{a}-I\cdot R_{2}= U_{e} + I \cdot R_{1} \\
I=\frac{U_{a}-U_{e}}{R_{1}+R_{2}} \\
U_{(-)} = U_{a}-R_{2}\cdot \frac{U_{a}-U_{e}}{R_{1}+R_{2}} \\
 \\
0V = U_{a}-R_{2} \cdot \frac{U_{a}-U_{e}}{R_{1}+R_{2}}
 \\
 \frac{U_{a}}{U_{e}} = V_{u} \\
\end{align}
$$
## 2. Invertierender Verstärker
### 1.1 Messaufbau
#### 1.1.1 Schema
![[Nichtinvertierender_opamp_M2.png#invert]]
#### 1.1.2 Beschreibung
Messaufbau gemäss Schema.
##### Messgrössen & Messgeräte

| Messgrösse | Einheit | Messgerät           |
| ---------- | ------- | ------------------- |
| $U_{2}$    | V       | tektronix MDO34 CH1 |
| $U_{1}$    | V       | tektronix MDO34 CH1 |
##### Variablen

| Frequenz        | Funktionsform | Gerät             |
| --------------- | ------------- | ----------------- |
| $1Hz$ - $10MHz$ | Sinus         | Tektronik AFG1062 |
### 1.2 Messungen
#### 1.2.1 Messerwartungen
Der Nichtinvertierende OpAmp sollte das Eingangssignal um den Verstärkungsfaktor $V_{u} = 1 + \frac{R_{2}}{R_{1}}$ verstärken.

**Aufgabe 1**
Bei $R_{1}=R_{2}= 1k\ohm$ ist der Verstärkungsfaktor $V_{u} =2$. Daraus folgt das die Amplitude des Ausgangssignals um den Faktor $2$ grösser ist als das Eingangssignal.
Wie bei vorherigen Messungen gibt es erste Phasenverschiebungen bei $100kHz$.

**Aufgabe 2**
Bei $R_{1}=1k\ohm$ und $R_{2}= 10k\ohm$ ist $V_{u} = 11$. Daraus folgt, die Amplitude ist um den Faktor $11$ grösser als das Eingangssignal. 
Wie bei vorherigen Messungen gibt es erste Phasenverschiebungen bei $100kHz$.
#### 1.2.2 Messresultate

#### 1.2.3 Interpretation


## 3. Verstärkungsbetrag und Phasenlage bei 1kHz
### 3.1 Messaufbau
#### 3.1.1 Schema
![[Schema_opamp_invertierend_M1.png#invert|Invertierender OpAmp]]


![[Nichtinvertierender_opamp_M2.png#invert]]

#### 3.1.2 Beschreibung

| Messgrösse | Einheit | Messgerät           |
| ---------- | ------- | ------------------- |
| $U_{2}$    | V       | tektronix MDO34 CH1 |
| $U_{1}$    | V       | tektronix MDO34 CH1 |

|     | Gerät             |
| --- | ----------------- |
|     | Tektronik AFG1062 |


### 3.2 Messungen
#### 3.2.1 Messerwartungen

#### 3.2.2 Messresultate

#### 3.2.3 Interpretation
