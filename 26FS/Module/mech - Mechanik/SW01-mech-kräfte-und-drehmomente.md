---
erstelldatum: 2026-02-23
tags:
  - drehmoment
  - kraft
  - vektoren
Folien: 1_Kräfte und Drehmomente
---

## Wichtige Formeln
### Kraftkomponenten am Rechtwinkligen 3-Eck
$$
\begin{align}
\sin\alpha &= \frac{F_y}{F_{1}} = \frac{\text{Gegenkathete}}{\text{Hypothenuse}} \rightarrow F_{y}= F_{1}\cdot \sin \alpha \\
\cos \alpha &= \frac{F_{x}}{F_{1}} = \frac{\text{Ankathete}}{\text{Hypothenuse}}\rightarrow F_{x}=F_{1}\cdot \cos \alpha \\
\alpha &= \arctan \frac{F_{y}}{F_{x}}
\end{align}
$$
### Drehmoment
$$
\begin{align}
\vec{M} = d \cdot F \\
\vec{M} = r \cdot F \cdot \sin \varphi
\end{align}
$$
## Definitionen
### Kraft
Die Kraft wird aus der Wirkung einer Aktion auf einen Körper definiert. Diese ist nur die Auswirkung von z.B. einem Stoss an einem Wagen der den Wagen ins Rollen bringt.
Eine Kraft ist ein Vektor und hat immer eine Richtung.
$$
\begin{align}
\vec{F} &= \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} 
= F_{x}\cdot \vec{e}_{x}+ F_{y}\cdot \vec{e}_{y}+ F_{z}\cdot \vec{e}_{z} \\
\vec{F} &= \begin{pmatrix}
F_{x} \\
F_{y}
\end{pmatrix} = |\vec{F}| = \begin{pmatrix}
\cos\varphi \\
\sin \varphi
\end{pmatrix} = F_{x}\cdot \vec{e}_{x}+F_{y}\cdot \vec{e}_{y} \\
\end{align}
$$
Um einen Vektor vollständig zu beschreiben brauchen wir die Länge
$$
|\vec{F}| = \sqrt{F_{x}^{2}+F_{y}^{2}+F_{z}^{2}}
$$
die Richtung (Richtungsvektor):
$$
\frac{\vec{F}}{|\vec{F}|}
$$
und die Wirkungslinie
![[SW01-mech-kräfte-und-drehmomente_beschreibung_vektor.png#invert]]

### Wirklinie
Kräfte dürfen entlang der Wirklinie verschoben werden, Die Wirkung der Kraft ändert sich nicht.
Anders wenn sie Parallel verschoben werden. Dies ist **verboten** denn dann ändert sich die Wirkung der Kraft auf den Körper.
![[SW01-mech-kräfte-und-drehmomente_wirklinie.png#invert]]
### Vektorprodukt Drehmoment
Das Drehmoment ist die Kraft multipliziert mit deren Hebelarm $d$. Der Hebelarm ist die Kürzeste Verbindung der Wirkungslinie einer Kraft mit dem Drehpunkt $P$. $d$ schneidet die Wirklinie in einem $90°$ Winkel.
$$
\begin{align}
\vec{M} &= \vec{r} \times \vec{F}  \\
\vec{M} &= r \cdot F \cdot \sin \varphi = d \cdot F
\end{align}
$$
Die Einheit des Drehmoments ist $Nm$ 

In der Statik ist das Drehmoment immer 0, das bedeutet die Summe aus den Kräften $F$ multipliziert mit den Hebelarmen $d$ ist 0. Ist das Drehmoment nicht $0$ dreht sich der Körper um den Drehpunkt.
$$
\sum M_{P}=0 = F\cdot d- F_{2}\cdot d_{2}
$$
![[SW01-mech-kräfte-und-drehmomente_erklärung_drehmoment.png#invert|300]]![[SW01-mech-kräfte-und-drehmomente_erklärung_drehmomente_3d.png#invert|300]]
### Rechte Hand Regel
Mithilfe der Rechten Hand Regel kann man bestimmen ob eine Kraft ein positives ($+$) oder negatives ($-$) Vorzeichen hat. Auf dem Bild rechts ist der Wirksinn des Drehmoments an der Rechten Hand gezeichnet. Wirkt die Kraft nun im Gegenuhrzeigersinn ist deren Vorzeichen positiv und umgekehrt.
![[SW01-mech-kräfte-und-drehmomente_rechte_hand_regel_1.png#invert|300]]![[SW01-mech-kräfte-und-drehmomente_rechte_hand_regel_2.png#invert|300]]
## Herleitungen
Am Rechtwinkligen Dreieck kann man den Vektor einer Kraft mithilfe $\sin$ & $\cos$ bestimmen.
![[SW01-mech-kräfte-und-drehmomente_vektor_am_r_dreieck.png#invert]]
$$
\begin{align}
\vec{F} &= \begin{pmatrix}
F_{x} \\
F_{y}
\end{pmatrix} = |\vec{F}| = \begin{pmatrix}
\cos\alpha \\
\sin\alpha
\end{pmatrix} = F_{x}\cdot \vec{e}_{x}+F_{y}\cdot \vec{e}_{y} \\ \\
\sin\alpha &= \frac{F_y}{F_{1}} = \frac{\text{Gegenkathete}}{\text{Hypothenuse}} \rightarrow F_{y}= F_{1}\cdot \sin \alpha \\
\cos \alpha &= \frac{F_{x}}{F_{1}} = \frac{\text{Ankathete}}{\text{Hypothenuse}}\rightarrow F_{x}=F_{1}\cdot \cos \alpha \\
\alpha &= \arctan \frac{F_{y}}{F_{x}}
\end{align}
$$

