---
erstelldatum: 2026-02-23
tags:
---

## Wichtige Formeln


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
Anders wenn sie Parallel verschoben werden. Dies ist **verboten** denn dann ändert sich die Wirkung.
![[SW01-mech-kräfte-und-drehmomente_wirklinie.png#invert]]
### Vektorprodukt Drehmoment
Das Drehmoment wirkt an einem Punkt P mit einer Kraft die nicht senkrecht auf diesem Punkt wirkt. **(überarbeiten)**
![[SW01-mech-kräfte-und-drehmomente_erklärung_drehmoment.png#invert]]
![[SW01-mech-kräfte-und-drehmomente_erklärung_drehmomente_3d.png#invert]]

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

