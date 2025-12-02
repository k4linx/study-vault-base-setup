---
erstelldatum: 2025-12-01
tags:
  - analog
  - opamp
authors: Joël Oppliger, Noah Ludin, Anna Illic
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
<div class="page-break" style="page-break-before: always;"></div>

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

**Teil 1**
Der Verstärkungsfaktor $V_{u}=\frac{-R_{2}}{R_{1}}$ bei $R_{1}=R_{2}=1k\ohm$ ist $-1$. Das hat zur folge das die um $180°$ verschobene Sinuskurve die gleiche Amplitude hat wie das Eingangssignal.

**Teil 2**
Bei $R_{2}=10k\ohm$ ist der Verstärkungsfaktor $-10$. Das hat zur folge das die um $180°$ verschobene Sinuskurve eine um den Faktor $10$ grössere Amplitude hat als das Eingangssignal.

**Teil 3**
Ab der Versorgungsspannung werden erste Verzerrungen des Signals erwartet.

<div class="page-break" style="page-break-before: always;"></div>

#### 1.2.2 Messresultate
##### Messdaten Teil 1


| Frequenz (Hz) | $V_{u} \ 1k\ohm$<br> | $U_{1} \ [V]$ | $U_{2} \ [V]$ | Verstärkung R2 1kohm(dB) | $V_{u} \ 10k\ohm$ | $U_{1} \ [V]$ | $U_{2} \ [V]$ | Verstärkung R2 10kohm(dB) |
| ------------- | -------------------- | ------------- | ------------- | ------------------------ | ----------------- | ------------- | ------------- | ------------------------- |
| 1             | -1                   | 0.0875        | 0.086         | 0                        | -10               | 0.088         | 0.94          | 21                        |
| 3             | -1                   | 0.097         | 0.093         | 0                        | -10               | 0.088         | 0.943         | 21                        |
| 10            | -1                   | 0.097         | 0.093         | 0                        | -10               | 0.087         | 0.933         | 21                        |
| 30            | -1                   | 0.099         | 0.095         | 0                        | -10               | 0.089         | 0.947         | 21                        |
| 100           | -1                   | 0.097         | 0.096         | 0                        | -10               | 0.088         | 0.968         | 21                        |
| 300           | -1                   | 0.095         | 0.0916        | 0                        | -10               | 0.087         | 0.924         | 21                        |
| 1000          | -1                   | 0.098         | 0.093         | 0                        | -10               | 0.088         | 0.935         | 21                        |
| 3000          | -1                   | 0.0967        | 0.093         | 0                        | -10               | 0.085         | 0.947         | 21                        |
| 10000         | -1                   | 0.096         | 0.091         | 0                        | -10               | 0.088         | 0.942         | 21                        |
| 30000         | -1                   | 0.097         | 0.091         | -1                       | -10               | 0.089         | 0.922         | 20                        |
| 100000        | -1                   | 0.1           | 0.101         | 0                        | -10               | 0.09          | 0.87          | 20                        |
| 300000        | -1                   | 0.101         | 0.094         | -1                       | -10               | 0.096         | 0.556         | 15                        |
| 1000000       | -1                   | 0.101         | 0.082         | -2                       | -10               | 0.096         | 0.18          | 5                         |
| 10000000      | -1                   | 0.09          | 0.0033        | -29                      | -10               | 0.092         | 0.012         | -17.692                   |

^m1a1

<div class="page-break" style="page-break-before: always;"></div>

```chart
type: line
id: m1a1
layout: columns
width: 100%
beginAtZero: true
select: [Verstärkung R2 1kohm(dB), Verstärkung R2 10kohm(dB)]
xTitle: Frequenz [Hz]
yTitle: Verstärkung [dB]
```
##### Messungen Oszilloskop $R_{2}= 1k\ohm$
**1Hz**
![[m1a1-1.png]]
**100kHz**
![[m1a1-100k.png]]
**1Mhz**
![[m1a1-1M.png]]
**10MHz**
![[m1a1-10M.png]]
##### Messungen Oszilloskop $R_{2}= 10k\ohm$ 
**10Hz**
![[m1a2-10.png]]
Der OpAmp korrigiert das gegebene Eingangssignal mit dem Faktor $11$ zu $0$ zurück.

**100kHz**
![[m1a2-100k.png]]
Erste Anzeichen das der OpAmp nicht schnell genug korrigieren kann werden bei 100kHz sichtbar. es zeichnet sich eine schwache Phasenverschiebung ab.

**10MHz**
![[m1a2-10M.png]]
Bei 10MHz kann der OpAmp das Eingangssignal nicht mehr richtig korrigieren. Deshalb wird die Sinuskurve auch fast flach.

#### 1.2.3 Interpretation
Die Messresultate der Teile 1 und zwei decken sich mit den Messerwartungen. Die Frequenz an welcher der OpAmp das Signal nicht mehr perfekt korrigieren kann liegt bei $100kHz$. 

Beim Teil 3 ist das Resultat $5.5V$ unter dem erwarteten Resultat von $24V$ bei $18.5V$.

<div class="page-break" style="page-break-before: always;"></div>

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

**Teil 1**
Bei $R_{1}=R_{2}= 1k\ohm$ ist der Verstärkungsfaktor $V_{u} =2$. Daraus folgt dass die Amplitude des Ausgangssignals um den Faktor $2$ grösser ist als das Eingangssignal.
Wie bei vorherigen Messungen gibt es erste Phasenverschiebungen bei $100kHz$.

**Teil 2**
Bei $R_{1}=1k\ohm$ und $R_{2}= 10k\ohm$ ist $V_{u} = 11$. Daraus folgt, die Amplitude ist um den Faktor $11$ grösser als das Eingangssignal. 
Wie bei vorherigen Messungen gibt es erste Phasenverschiebungen bei $100kHz$.
<div class="page-break" style="page-break-before: always;"></div>

#### 1.2.2 Messresultate


##### Messdaten Teil 1
| Frequenz (Hz) | $V_{u} \ 1k\ohm$ | $U_{1} \ [V]$ | $U_{2} \ [V]$ | Verstärkung R2 1kohm(dB) | $V_{u} \ 10k\ohm$ | $U_{1} \ [V]$ | $U_{2} \ [V]$ | Verstärkung R2 10kohm(dB) |
| ------------- | ---------------- | ------------- | ------------- | ------------------------ | ----------------- | ------------- | ------------- | ------------------------- |
| 1             | 2                | 0.1           | 0.193         | 6                        | 11                | 0.1           | 1.06          | 21                        |
| 3             | 2                | 0.102         | 0.195         | 6                        | 11                | 0.1           | 1.06          | 21                        |
| 10            | 2                | 0.102         | 0.195         | 6                        | 11                | 0.101         | 1.076         | 21                        |
| 30            | 2                | 0.102         | 0.196         | 6                        | 11                | 0.101         | 1.075         | 21                        |
| 100           | 2                | 0.102         | 0.196         | 6                        | 11                | 0.1           | 1.068         | 21                        |
| 300           | 2                | 0.101         | 0.194         | 6                        | 11                | 0.098         | 1.051         | 21                        |
| 1000          | 2                | 0.1           | 0.192         | 6                        | 11                | 0.1           | 1.056         | 20                        |
| 3000          | 2                | 0.101         | 0.195         | 6                        | 11                | 0.099         | 1.059         | 21                        |
| 10000         | 2                | 0.102         | 0.196         | 6                        | 11                | 0.101         | 1.067         | 20                        |
| 30000         | 2                | 0.101         | 0.192         | 6                        | 11                | 0.102         | 1.048         | 20                        |
| 100000        | 2                | 0.11          | 0.201         | 5                        | 11                | 0.108         | 0.98          | 19                        |
| 300000        | 2                | 0.107         | 0.197         | 5                        | 11                | 0.106         | 0.607         | 15                        |
| 1000000       | 2                | 0.116         | 0.17          | 3                        | 11                | 0.105         | 0.188         | 5                         |
| 10000000      | 2                | 0.099         | 0.023         | -13                      | 11                | 0.118         | 0.038         | -10                       |
^m2a1

```chart
type: line
id: m2a1
layout: columns
width: 100%
select: [Verstärkung R2 1kohm(dB), Verstärkung R2 10kohm(dB)]
xTitle: Frequenz [Hz]
yTitle: Verstärkung [dB]
legend: true
```
##### Messungen Oszilloskop $R_{2}=1k\ohm$

**1Hz**
![[m2a1-1.jpeg|100% ]]
**100kHz**
![[m2a1-100k.png]]
**1MHz**
![[m2a1-1M.png]]
**10MHz**
![[m2a1-10M.jpeg]]

##### Messungen Oszilloskop $R_{2}=10k\ohm$
**1Hz**
![[m2a2-1.png|1080x]]
**100kHz**
![[m2a2-100k.png]]
**1MHz**
![[m2a2-1M.jpeg]]
**10MHz**
![[m2a2-10M.jpeg]]

#### 1.2.3 Interpretation
Die Messerwartungen decken sich mit den Gemessenen Resultaten. Auch die Frequenz von $100kHz$ bei welcher wir erste Phasenverschiebungen erwartet haben stimmt mit unseren Messungen überein.
<div class="page-break" style="page-break-before: always;"></div>
## 3. Verstärkungsbetrag und Phasenlage bei 1kHz
#### 3.1.1 Schema
##### Invertierender OpAmp
![[Schema_opamp_invertierend_M1.png#invert]]


##### Nicht-invertiernder OpAmp
![[Nichtinvertierender_opamp_M2.png#invert]]

#### 3.1.2 Beschreibung
die beiden Versuchsaufbauten aus den [[#1. Invertierender Verstärker|Versuch 1]] und [[#2. Invertierender Verstärker|Versuch 2]] wurden zur Klarheit erneut dargestellt. In diesem Kapitel werden nun auf den [[#1. Invertierender Verstärker|Versuchen 1]] und [[#2. Invertierender Verstärker|2]] aufbauend  die Beträge der Gemessenen Resultate bei $1kHz$ dargestellt.

| Schaltung      | Invertierend (R2=1kΩ) | Invertierend (R2=10kΩ) | Nichtinvertierend (R2=1kΩ) | Nichtinvertierend (R2=10kΩ) |
| -------------- | --------------------- | ---------------------- | -------------------------- | --------------------------- |
| U2/U1 [dB]     | 0                     | 21                     | 6                          | 20                          |
| Phasenlage [°] | 180                   | 180                    | 0                          | 0                           |
#### 3.2.3 Interpretation
Beim Invertierenden Verstärker, ist unabhängig welcher Verstärkungsfaktor die Phasenlage um $180°$ gedreht und beim Nichtinvertierenden Verstärker ist die Phasenlage $0°$ verschoben.


# Anhang

