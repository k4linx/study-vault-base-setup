---
erstelldatum: 2025-09-30
tags: aet1
---
## ⁉️ Fragen
- [ ] Was ist eine Serieschaltung?
- [ ] Was ist eine Parallelschaltung?
- [ ] Was ist ein Ersatzwiderstand?
- [ ] Wie wird eine Ideale Stromquelle definiert?
- [ ] Wie wird eine Ideale Spannungsquelle definiert?

---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung

### 4.2 Einfache Schaltungen von Widerständen
#### 4.2.1 Serieschaltung (Spannungsteilung)

In einer Serieschaltung werden die Bauelemente hintereinander angehängt. Dabei wird die Spannung proportional zum Widerstandswert verringert
![[Serieschaltung mit ersatzwiderstand.png]]
Mit dem [[Der einfache Gleichstromkreis 1 - 2025-09-22#Maschensatz|Maschensatz]] ist definiert:
$$
U = U_{1}+U_{2}+U_{3}+U_{4}
$$
Wobei:
$$
U_{n}=R_{n}*I
$$
Damit können alle $U_{n}$ ersetzt werden:
$$
U = R_{1}\cdot I + ... R_{4}\cdot I 
$$
bzw:
$$
U = I \cdot (R_{1}+...+R_{4})
$$
Die Widerstände $R_{n}$ können zusammengefasst werden zu einem Ersatzwiderstand $R_{E}$ dann kann das [[Der einfache Gleichstromkreis 1 - 2025-09-22#3.2 Ohm'sches Gesetz|Ohm'sche Gesetz]] angewendet werden.
$$
U = R_{E} \cdot I
$$
Bei dieser Methode werden aber alle Zwischenspannungen wegrationalisiert das heisst man erhält nur die Endspannung.

> [!important] Wichtig
> Wenn ein Knoten in der Schaltung vorhanden ist können die Widerstände nicht mehr einfach in einem Ersatzwiderstand zusammengefasst werden

Die Spannungsteilung in einer Serienschaltung wird folgend gemacht:
$$
\frac{U_{Rn}}{U} = \frac{R_{n}}{R}
$$
Damit kann man die Spannung über den Wegrationalisierten Widerständen herausfinden. 
#### Parallelschaltung (Stromteilung)
Bei einer Parallelschaltung wird der Gesamtstrom über die Widerstände aufgeteilt.
![[Parallelschaltung mit Ersatzwiderstand.png]]
Mit dem Knotensatz ist definiert:
$$
I = I_{1}+I_{2}+I_{3}
$$
Das Ohmsche Gesetz für $I$:
$$
\begin{align}
I=\frac{U}{R}  \\
I = U \cdot G
\end{align}
$$
Daraus:
$$
I = U \cdot (G_{1}+G_{2}+G_{3})
$$
$G$ kann in einem Ersatzleitwert zusammengefasst werden:
$$
G_{E} = G_{1}+...+G_{3} \longleftrightarrow \frac{1}{R_{E}}= \frac{\frac{1}{R_{1}}+...+1}{R}
$$


---
## ✅ ToDo

---
## 📕 Quellen
- 
