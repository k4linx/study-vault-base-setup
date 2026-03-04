---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - determinanten
  - sarrus
  - spatprodukt
  - dreiecksmatrix
  - cramer-regel
  - linearität
Folien: Determinanten
---
## Wichtige Formeln
### Determinante in $\mathbb{R}^{2 \times 2}$
Für eine $2 \times 2$-Matrix $\mathbf{A}$ berechnet sich die Determinante über Kreuz:
$$ \det(\mathbf{A}) = a_{11} \cdot a_{22} - a_{12} \cdot a_{21} $$

### Determinante in $\mathbb{R}^{3 \times 3}$ (Regel von Sarrus)
Für eine $3 \times 3$-Matrix berechnet man die Determinante, indem man die Produkte der Hauptdiagonalen addiert und die Produkte der Nebendiagonalen subtrahiert:
$$ \det(\mathbf{A}) = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{31}a_{22}a_{13} - a_{32}a_{23}a_{11} - a_{33}a_{21}a_{12} $$
![[Pasted image 20260304120524.png]]
Alternativ entspricht dies exakt dem [[KAP6-lalg1 Vektorprodukt#Spatprodukt|Spatprodukt]] der drei Spaltenvektoren: $\det(\mathbf{A}) = [\vec{a}, \vec{b}, \vec{c}]$.

### Determinante einer Dreiecksmatrix
Sind alle Einträge unterhalb der Hauptdiagonalen Null, ist die Determinante schlicht das Produkt der Diagonalelemente:
$$ \det(\mathbf{A}) = a_{11} \cdot a_{22} \cdot \dots \cdot a_{NN} $$

### Multiplikationssatz und Inverse
Für zwei quadratische Matrizen $\mathbf{A}$ und $\mathbf{B}$ gilt:
$$ \det(\mathbf{A} \odot \mathbf{B}) = \det(\mathbf{A}) \cdot \det(\mathbf{B}) $$
Für die inverse Matrix gilt:
$$ \det(\mathbf{A}^{-1}) = \frac{1}{\det(\mathbf{A})} $$

### Regel von Cramer
Ein reguläres lineares Gleichungssystem $\mathbf{A}\vec{x} = \vec{b}$ kann gelöst werden, indem man für jede Unbekannte $x_k$ die $k$-te Spalte von $\mathbf{A}$ durch den Lösungsvektor $\vec{b}$ ersetzt und die Determinanten dividiert:
$$ x_k = \frac{\det(\vec{A}_1, \dots, \vec{b}, \dots, \vec{A}_n)}{\det(\mathbf{A})} $$

## Definitionen
### Geometrische Bedeutung
Die Determinante berechnet den (orientierten) Flächeninhalt (in 2D), das Volumen (in 3D) oder Hypervolumen (in $N$D), das von den Spaltenvektoren der Matrix aufgespannt wird, inklusive eines Vorzeichens.
![[KAP12-lalg1 Determinanten_flaeche.png#invert]]

### Linearität der Determinante
Die Determinante ist linear in Bezug auf jede einzelne Spalte (oder Zeile). Das bedeutet:
- **Homogenität:** Wird eine Spalte mit $\lambda$ multipliziert, skaliert sich die gesamte Determinante um $\lambda$.
- **Additivität:** $\det(\vec{a}+\vec{c}, \vec{b}) = \det(\vec{a}, \vec{b}) + \det(\vec{c}, \vec{b})$

### Zeilen- und Spaltenoperationen
- **Vertauschen:** Vertauscht man zwei Spalten (oder Zeilen), ändert die Determinante ihr Vorzeichen.
- **Addition:** Addiert man ein Vielfaches einer Spalte zu einer anderen, verändert sich die Determinante **nicht**.

## Herleitungen & Beispiele
### Beispiel zur Regel von Cramer
Gegeben ist das System:
$5x_1 + 3x_2 = 2$
$-x_1 + 2x_2 = 3$
Die Koeffizientenmatrix ist $\mathbf{A} = \begin{pmatrix} 5 & 3 \\ -1 & 2 \end{pmatrix}$ mit $\det(\mathbf{A}) = 5 \cdot 2 - 3 \cdot (-1) = 13$. Der Lösungsvektor ist $\vec{b} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.
Lösung für $x_1$:
$$ x_1 = \frac{\det \begin{pmatrix} 2 & 3 \\ 3 & 2 \end{pmatrix}}{13} = \frac{2 \cdot 2 - 3 \cdot 3}{13} = \frac{-5}{13} $$

### Effiziente Berechnung durch Elimination
Für Matrizen ab $3 \times 3$ ist das [[KAP8-lalg1 Lösungen von linearen Gleichungssystemen#Elementare Zeilenoperationen|Gauss-Verfahren]] am effizientesten: Man bringt die Matrix auf Dreiecksform und multipliziert die Diagonalelemente. 
Man muss sich nur einen Vorfaktor $f$ (zu Beginn $f=1$) merken:
- Werden zwei Zeilen getauscht, rechnet man $f' = f \cdot (-1)$.
- Wird eine Zeile mit $\lambda$ skaliert, rechnet man $f' = f \cdot \frac{1}{\lambda}$.
Am Ende gilt: $\det(\mathbf{A}) = f_{ende} \cdot (a_{11} \cdot a_{22} \cdot a_{33})$.