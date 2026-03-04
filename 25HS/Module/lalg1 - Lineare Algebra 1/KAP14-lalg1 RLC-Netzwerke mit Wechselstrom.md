---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - rcl-netzwerke
  - wechselstrom
  - impedanz
  - admittanz
  - zeigerdarstellung
  - maschenregel
Folien: RCL-Netzwerke mit Wechselstrom
---
## Wichtige Formeln
### Kirchhoff'sche Maschenregel
Die Summe der Spannungsabfälle an den einzelnen Elementen entspricht der anliegenden Quell-Spannung $u_q(t)$:
$$ \sum_i u_i(t) = u_q(t) $$

### Impedanzen der linearen Elemente (Zeigerdarstellung)
In der Basisvektor-Darstellung mit $\vec{e}_1 \hat{=} \cos(\omega t)$ und $\vec{e}_2 \hat{=} \sin(\omega t)$ werden Impedanzen als $2 \times 2$ Matrizen dargestellt:
- **Widerstand ($R$):** 
  $$ \mathbf{Z}_R = \begin{pmatrix} R & 0 \\ 0 & R \end{pmatrix} $$
- **Induktivität ($L$):** 
  $$ \mathbf{Z}_L = \begin{pmatrix} 0 & \omega L \\ -\omega L & 0 \end{pmatrix} $$
- **Kapazität ($C$):** 
  $$ \mathbf{Z}_C = \begin{pmatrix} 0 & -\frac{1}{\omega C} \\ \frac{1}{\omega C} & 0 \end{pmatrix} $$

### Gesamt-Impedanz
Impedanzen werden in Netzwerken analog zu ohmschen Widerständen zusammengefasst (hierfür wird oft die [[KAP13-lalg1 Umkehrabbildung und inverse Matrix#Inverse einer $2 times 2$ Matrix|Inverse Matrix]] benötigt):
- **Serienschaltung:** $\mathbf{Z}_{tot} = \mathbf{Z}_1 + \mathbf{Z}_2$
- **Parallelschaltung:** $\mathbf{Z}_{tot} = \left[ (\mathbf{Z}_1)^{-1} + (\mathbf{Z}_2)^{-1} \right]^{-1}$

## Definitionen
### Transiente und stationäre Lösung
Wird ein Wechselstromkreis eingeschaltet, gibt es einen Einschwingvorgang (die **transiente Lösung**), der nach kurzer Zeit exponentiell abklingt. Danach schwingen Strom und Spannung stabil mit der Frequenz der Quelle weiter. Diesen Dauerzustand nennt man **stationäre Lösung**.
![[KAP14-lalg1 RLC-Netzwerke mit Wechselstrom_transient_stationär.png#invert]]

### Impedanz und Admittanz
Die **Impedanz $\mathbf{Z}(\omega)$** (Wechselstromwiderstand) ist die Verallgemeinerung des ohmschen Widerstands für Wechselstrom und verknüpft Spannung und Strom:
$$ \vec{u} = \mathbf{Z}(\omega) \odot \vec{i} $$
Die **Admittanz $\mathbf{Y}(\omega)$** ist der Kehrwert der Impedanz (der Wechselstromleitwert):
$$ \mathbf{Y}(\omega) = \mathbf{Z}(\omega)^{-1} $$

## Herleitungen & Beispiele
### Zeigerdarstellung
Ein harmonischer Wechselstrom $i(t) = a \cdot \cos(\omega t) + b \cdot \sin(\omega t)$ (wie in [[KAP4-lalg1 Funktionen und Trigonometrie#Überlagerung gleichfrequenter Schwingungen|Funktionen und Trigonometrie]] behandelt) wird als Spaltenvektor $\vec{i} = \begin{pmatrix} a \\ b \end{pmatrix}$ notiert.
![[KAP14-lalg1 RLC-Netzwerke mit Wechselstrom_zeigerdarstellung.png#invert]]

### Beispiel: Strom in einer Serienschaltung berechnen
Gegeben sei eine Serienschaltung aus Widerstand $R_1 = 0.5 \, \Omega$ und Induktivität $L = 0.8 \text{ H}$. Die Quellspannung ist $u_q(t) = 6 \cdot \cos(\omega t)$ V mit $\omega = \frac{2\pi}{6} \text{ s}^{-1} \approx 1.047 \text{ s}^{-1}$.

**1. Vektor der Spannung und Matrix der Einzel-Impedanzen aufstellen:**
Spannung $\vec{u} = \begin{pmatrix} 6 \\ 0 \end{pmatrix}$. 
Wir berechnen $\omega L = \frac{2\pi}{6} \cdot 0.8 \approx 0.83 \, \Omega$.

**2. Gesamtimpedanz addieren:**
$$ \mathbf{Z}_{tot} = \mathbf{Z}_{R1} + \mathbf{Z}_L = \begin{pmatrix} 0.5 & 0 \\ 0 & 0.5 \end{pmatrix} + \begin{pmatrix} 0 & 0.83 \\ -0.83 & 0 \end{pmatrix} = \begin{pmatrix} 0.5 & 0.83 \\ -0.83 & 0.5 \end{pmatrix} \, \Omega $$

**3. Strom $\vec{i}$ berechnen:**
Durch Invertieren von $\mathbf{Z}_{tot}$ erhalten wir den Stromvektor:
$$ \vec{i} = (\mathbf{Z}_{tot})^{-1} \odot \vec{u} = \begin{pmatrix} 0.53 & -0.88 \\ 0.88 & 0.53 \end{pmatrix} \odot \begin{pmatrix} 6 \\ 0 \end{pmatrix} = \begin{pmatrix} 3.18 \\ 5.30 \end{pmatrix} \text{ A} $$

**4. Als Zeitsignal schreiben:**
$$ i(t) = 3.18 \cdot \cos(\omega t) + 5.30 \cdot \sin(\omega t) \text{ A} $$