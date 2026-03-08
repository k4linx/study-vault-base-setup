---
erstelldatum: 2026-03-08
tags:
  - boolsche_algebra
Folien:
  - slides_dt1_5_kombinatorik1
---
## Wichtige Formeln
### Assoziativgesetz
$$

$$

## Schaltfunktion
Die Schaltfunktion ist die Algebraische Darstellung der Schaltung. 
$$
Y = f(A,B,C)
$$
Die obige [[Funktion]] hat 3 eingangsvariablen $A, B, C$ und eine Ausgangsvariable $Y$. 
## Funktionstabelle (Wahrheitstabelle)
Die Wahrheitstabelle zeigt die Kombination der Eingänge und deren Ausgangswert.
![[SW03-dt1 Kombinatorik_wahrheitstabelle.png#invert|254]]

## Schaltzeichen
Das Schaltzeichen ist die Grafische Darstellung der Schaltung. Es gibt 2 verschiedene Normen.

| IEC Norm                                      | ANSI Norm                                  |
| --------------------------------------------- | ------------------------------------------ |
| ![[SW03-dt1 Kombinatorik_und_iec.png#invert]] | ![[SW03-dt1 Kombinatorik_ANSI.png#invert]] |
## Schaltfunktionen
### Grundfunktionen
![[SW03-dt1 Kombinatorik_grundfunktionen.png#invert]]
### Abgeleitete Funktionen
![[SW03-dt1 Kombinatorik_abgeleitete_funktionen.png#invert]]

### Stufigkeit
Eine logische Schaltung hat stufen die eine Auskunft über die Komplexität gibt.
>[!info] Die Stufe gibt an wieviele Operationen verkettet werden. Invertierte Ein-/Ausgänge werden nicht als Stufe gezählt.
- **Einstufig:** $Y = \overline{A}\cdot \overline{B} \cdot C$
- **Zweistufig:** $Y = (\overline{A} \cdot \overline{B}) + (A \cdot B)$
- **Dreistufig:** $Y = ((\overline{A} \cdot \overline{B})+ (A \cdot B)) \cdot C$

## Rechenregeln der Schaltalgebra
### Prioritäten der Operatoren
1. Invertierung
2. UND-Verknüpfung
3. ODER-Verknüpfung
4. EXOR, EXNOR und Implikationen

### Boolsche Axiome
- Eine ODER Funktion liefert genau dann 0 wenn alle Eingänge 0 sind.
- Eine UND Funktion liefert genau dann 1 wenn alle Eingänge 1 sind.

### Rechenregeln
#### Doppelte Negation
Eine Doppelte Negation ergibt wieder den Ursprünglichen Wert:
$$
A = \overline{\overline{A}}
$$
#### Absorptionsgesetze
