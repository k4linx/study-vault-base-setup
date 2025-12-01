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
Der Invertierende OpAmp sollte die gegebene Eingangsspannung selber korrigieren welches eine um $180°$ verschobene Sinuskurve zur folge hat. Ab einer bestimmten Frequenz 
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

| Messgrösse | Einheit | Messgerät           |
| ---------- | ------- | ------------------- |
| $U_{2}$    | V       | tektronix MDO34 CH1 |
| $U_{1}$    | V       | tektronix MDO34 CH1 |

|     | Gerät             |
| --- | ----------------- |
|     | Tektronik AFG1062 |


### 1.2 Messungen
#### 1.2.1 Messerwartungen

#### 1.2.2 Messresultate

#### 1.2.3 Interpretation


## 3. Verstärkungsbetrag und Phasenlage bei 1kHz
### 1.1 Messaufbau
#### 1.1.1 Schema
![[Nichtinvertierender_opamp_M2.png#invert]]
#### 1.1.2 Beschreibung

| Messgrösse | Einheit | Messgerät           |
| ---------- | ------- | ------------------- |
| $U_{2}$    | V       | tektronix MDO34 CH1 |
| $U_{1}$    | V       | tektronix MDO34 CH1 |

|     | Gerät             |
| --- | ----------------- |
|     | Tektronik AFG1062 |


### 1.2 Messungen
#### 1.2.1 Messerwartungen

#### 1.2.2 Messresultate

#### 1.2.3 Interpretation
