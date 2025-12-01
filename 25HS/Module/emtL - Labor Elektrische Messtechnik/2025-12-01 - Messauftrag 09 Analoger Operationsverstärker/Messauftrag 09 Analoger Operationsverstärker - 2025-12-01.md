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
**Aufgabe 1**

| Frequenz | $R_{1} \ [k\ohm]$ | $R_{2} \ [k\ohm]$ | $\frac{R2}{R1}$ | $U_{1} \ [V]$ | $U_{2} \ [V]$ | Verstärkung |
| -------- | ----------------- | ----------------- | --------------- | ------------- | ------------- | ----------- |
| 1        | 1                 | 1                 | 1               | 0.0875        | 0.086         | 0           |
| 3        | 1                 | 1                 | 1               | 0.097         | 0.093         | 0           |
| 10       | 1                 | 1                 | 1               | 0.097         | 0.093         | 0           |
| 30       | 1                 | 1                 | 1               | 0.099         | 0.095         | 0           |
| 100      | 1                 | 1                 | 1               | 0.097         | 0.096         | 0           |
| 300      | 1                 | 1                 | 1               | 0.095         | 0.0916        | 0           |
| 1000     | 1                 | 1                 | 1               | 0.098         | 0.093         | 0           |
| 3000     | 1                 | 1                 | 1               | 0.0967        | 0.093         | 0           |
| 10000    | 1                 | 1                 | 1               | 0.096         | 0.091         | 0           |
| 30000    | 1                 | 1                 | 1               | 0.097         | 0.091         | -1          |
| 100000   | 1                 | 1                 | 1               | 0.1           | 0.101         | 0           |
| 300000   | 1                 | 1                 | 1               | 0.101         | 0.094         | -1          |
| 1000000  | 1                 | 1                 | 1               | 0.101         | 0.082         | -2          |
| 10000000 | 1                 | 1                 | 1               | 0.09          | 0.0033        | -29         |
| 1        | 1                 | 10                | 10              | 0.088         | 0.94          | 21          |
| 3        | 1                 | 10                | 10              | 0.088         | 0.943         | 21          |
| 10       | 1                 | 10                | 10              | 0.087         | 0.933         | 21          |
| 30       | 1                 | 10                | 10              | 0.089         | 0.947         | 21          |
| 100      | 1                 | 10                | 10              | 0.088         | 0.968         | 21          |
| 300      | 1                 | 10                | 10              | 0.087         | 0.924         | 21          |
| 1000     | 1                 | 10                | 10              | 0.088         | 0.935         | 21          |
| 3000     | 1                 | 10                | 10              | 0.085         | 0.947         | 21          |
| 10000    | 1                 | 10                | 10              | 0.088         | 0.942         | 21          |
| 30000    | 1                 | 10                | 10              | 0.089         | 0.922         | 20          |
| 100000   | 1                 | 10                | 10              | 0.09          | 0.87          | 20          |
| 300000   | 1                 | 10                | 10              | 0.096         | 0.556         | 15          |
| 1000000  | 1                 | 10                | 10              | 0.096         | 0.18          | 5           |
| 10000000 | 1                 | 10                | 10              | 0.092         | 0.012         | -17.692     |
^m1a1


```chart
type: line
id: m1a1
layout: columns
width: 100%
beginAtZero: true
select: ["Frequenz", "Verstärkung"]
```

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
##### Invertierender OpAmp
![[Schema_opamp_invertierend_M1.png#invert]]


##### Nicht-invertiernder OpAmp
![[Nichtinvertierender_opamp_M2.png#invert]]

#### 3.1.2 Beschreibung
die beiden Versuchsaufbauten aus den [[#1. Invertierender Verstärker|Versuch 1]] und [[#2. Invertierender Verstärker|Versuch 2]] wurden zur klarheit erneut dargestellt. In diesem Kapitel werden nun auf den [[#1. Invertierender Verstärker|Versuchen 1]] und [[#2. Invertierender Verstärker|2]] aufbauend  berechnungen gemacht **TODO: erklärung was berechnet wird**

### 3.2 Berechnungen

#### 3.2.3 Interpretation
