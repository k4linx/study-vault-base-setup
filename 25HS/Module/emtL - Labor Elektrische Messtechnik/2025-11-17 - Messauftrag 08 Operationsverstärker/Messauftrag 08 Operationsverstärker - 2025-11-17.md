---
erstelldatum: 2025-11-17
tags:
  - emtL
  - digital
  - opamp
  - optokoppler
---
## 1. OpAmp als Komparator
### 1.1 Messaufbau
#### 1.1.1 Schema
![[opamp_as_comparator.png#invert]]
#### 1.1.2 Beschreibung
Messaufbau gemäss Schema

| Messgrösse | Messgerät   |
| ---------- | ----------- |
| $U_{aus}$  | UNI-T UT61B |
| $U_{ein}$  | HP 34410A   |
| $U_{1}$    | UNI-T UT61B |

| Widerstände | Wert      |
| ----------- | --------- |
| R1          | $10k\ohm$ |
| R2          | $10k\ohm$ |
### 1.2 Messungen
#### 1.2.1 Messerwartungen
Der OpAmp sollte eine Maximale Ausgangsspannung von ~12V ausgeben.

#### 1.2.2 Messresultate

| U_ein (V)Messpunkt | 1     | 2     | 3     | 4     | 5    | 6     | 7     | 8     | 9     | 10    |
| ------------------ | ----- | ----- | ----- | ----- | ---- | ----- | ----- | ----- | ----- | ----- |
| U_ein (V)          | 1.09  | 2.18  | 3.098 | 4.31  | 5.26 | 6.05  | 6.29  | 6.388 | 7.32  | 11.58 |
| U_1 (V)            | 6.27  | 6.27  | 6.27  | 6.27  | 6.27 | 6.27  | 6.27  | 6.27  | 6.27  | 6.27  |
| U_aus (V)          | 1.381 | 1.373 | 1.373 | 1.373 | 1.36 | 1.418 | 4.104 | 12.07 | 12.07 | 12.07 |
^m1

```chart
type: line
id: m1
layout: rows
width: 100%
beginAtZero: true
select: [U_ein (V), U_1 (V), U_aus (V)] 
yTitle: Spannung (V)
```

#### 1.2.3 Interpretation
Works as Intended ISSUE CLOSED

## 2. Schmitt-Trigger mit OpAmp
### 2.1 Messaufbau
#### 2.1.1 Schema
![[opamp_schmitt-trigger.png#invert]]
#### 2.1.2 Beschreibung
Messaufbau gemäss Schema

| Messgrösse | Messgerät   |
| ---------- | ----------- |
| $U_{aus}$  | UNI-T UT61B |
| $U_{ein}$  | HP 34410A   |
| $U_{1}$    | UNI-T UT61B |

| Widerstände | Wert       |
| ----------- | ---------- |
| R1          | $10k\ohm$  |
| R2          | $10k\ohm$  |
| R3          | $1.2M\ohm$ |
| R4          | $100k\ohm$ |
### 2.2 Messungen
#### 2.2.1 Messerwartungen
Der OpAmp sollte eine Maximale Ausgangsspannung von 12V ausgeben. im falle einer kleinen Veränderung der Eingansspannung $U_{ein}$, sollte sich die Ausgangsspannung $U_{aus}$ nicht verändern.
#### 2.2.2 Messresultate
| Messpunkt    | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     | 10    |
| ------------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| U_ein_zu (V) | 0     | 1.138 | 2.71  | 3.91  | 5.4   | 6.14  | 6.51  | 7.01  | 8.02  | 11.18 |
| U_aus_zu (V) | 1.448 | 1.374 | 1.368 | 1.368 | 1.359 | 1.412 | 11.43 | 11.45 | 11.44 | 11.47 |
| U_ein_ab (V) | 0     | 1.61  | 3.26  | 4.76  | 5.46  | 6.41  | 7.36  | 8.98  | 10.83 | 11.32 |
| U_aus_ab (V) | 1.444 | 1.364 | 1.365 | 1.365 | 1.357 | 11.43 | 11.44 | 11.45 | 11.47 | 11.49 |
| U_1 (V)      | 6.01  | 6.01  | 6.01  | 6.01  | 6.01  | 6.01  | 6.01  | 6.01  | 6.01  | 6.01  |
^m2

```chart
type: line
id: m2
layout: rows
width: 100%
beginAtZero: true
yTitle: Spannung (V)
```

#### 2.2.3 Interpretation
Der Op


## 3 Optokoppler
### 3.1 Messaufbau
#### 3.1.1 Schema
![[optokoppler.png#invert]]
#### 3.1.2 Beschreibung
Messaufbau gemäss Schema

| Messgrösse | Messgerät   |
| ---------- | ----------- |


| Widerstände | Wert   |
| ----------- | ------ |
| R berechnet | 15kOhm |

### 3.2 Messungen
#### 3.2.1 Messerwartungen
Der OpAmp sollte eine Maximale Ausgangsspannung von 12V ausgeben. im falle einer kleinen erhöhung der Eingansspannung $U_{ein}$, sollte sich die Ausgangsspannung $U_{aus}$ nicht verändern.
#### 3.2.2 Messresultate
| Messpunkt  | 1   | 2    | 3    | 4   | 5     | 6    | 7    | 8     | 9     | 10    |
| ---------- | --- | ---- | ---- | --- | ----- | ---- | ---- | ----- | ----- | ----- |
| U_LED (V)  | 0   | 1.5  | 2.25 | 2.9 | 3.427 | 5.07 | 6.03 | 7.11  | 10.03 | 11.57 |
| I_C (uA)   | 0   | 2    | 8    | 21  | 35    | 84   | 115  | 149   | 237   | 280   |
| I_LED (mA) | 0   | 0.08 | 1.22 | 2.5 | 3.5   | 6.97 | 8.94 | 11.17 | 17.23 | 20.43 |
^m3

```chart
type: line
id: m3
layout: rows
width: 100%
beginAtZero: true
yTitle: Spannung (V)
```
#### 3.2.3 Interpretation
