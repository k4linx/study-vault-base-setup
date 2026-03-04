---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - lösungsmengen
  - zeilenstufenform
  - homogen
  - inhomogen
  - nullraum
  - pivot-variablen
Folien: Lösungen von linearen Gleichungssystemen
---
## Wichtige Formeln
### Struktur der allgemeinen Lösung
Die allgemeine Lösung eines linearen Gleichungssystems (LGS) setzt sich aus einer partikulären Lösung $\vec{x}_p$ (Aufpunkt) und der homogenen Lösung $\vec{x}_h$ (Richtungsvektoren) zusammen:
$$ \vec{x} = \vec{x}_p + \lambda \cdot \vec{x}_h $$
Gibt es mehrere freie Variablen, kommen entsprechend weitere Richtungsvektoren mit weiteren Parametern ($\mu, \nu, \dots$) hinzu.

### Elementare Zeilenoperationen
Um ein LGS ohne Veränderung der Lösungsmenge umzuformen (meist in die Zeilenstufenform wie in [[KAP1-lalg1 Eliminationsverfahren I#Lineares Gleichungssystem (Dreiecksform)|Eliminationsverfahren I]] beschrieben), sind drei Operationen erlaubt:
1. Vertauschen von zwei Gleichungen: $L_i \leftrightarrow L_j$
2. Multiplikation einer Gleichung mit einer Zahl $k \neq 0$: $L_i \rightarrow L_i \cdot k$
3. Addition eines Vielfachen einer Gleichung zu einer anderen: $L_i \rightarrow L_i + L_j \cdot k$

## Definitionen
### Homogene und inhomogene LGS
Ein LGS heisst **homogen**, wenn alle Konstanten auf der rechten Seite der Gleichungen Null sind (z. B. $A\vec{x} = \vec{0}$). Eine Lösung ist hierbei immer der Nullvektor $\vec{0}$ (triviale Lösung). Sind nicht alle Konstanten Null, nennt man das LGS **inhomogen**.

### Konsistente und inkonsistente LGS
Ein LGS ist **inkonsistent**, wenn es bei der Umformung auf einen Widerspruch stösst (z. B. in der Form $0 \cdot x = b$ mit $b \neq 0$). Es besitzt dann keine Lösung. Alle anderen LGS heissen **konsistent** und haben entweder genau eine Lösung oder unendlich viele Lösungen.

### Pivot-Variablen und freie Variablen
Wird ein LGS von links nach rechts betrachtet, heisst die erste Variable einer Zeile mit einem Koeffizienten ungleich 0 **Pivot-Variable**. Alle anderen Variablen, nach denen man das System nicht direkt auflösen kann, heissen **freie Variablen**. Sie können als Parameter ($\lambda, \mu$) frei gewählt werden.

### Nullraum (Kern)
Der Nullraum einer Koeffizientenmatrix umfasst alle Vektoren $\vec{x}$, welche das homogene Gleichungssystem $A\vec{x} = \vec{0}$ lösen. Er beschreibt die Richtungsvektoren der Lösungsmenge.

## Herleitungen
### Ermittlung von partikulärer und homogener Lösung
Gegeben sei folgendes Gleichungssystem mit zwei Ebenen im Raum (siehe dazu auch [[KAP7-lalg1 Ebenen in R3#Koordinatenform der Ebene|Ebenen im Raum]]):
$2x - z = 3$
$4y + z = 0$
Hier sind $x$ und $y$ die Pivot-Variablen und $z$ ist eine freie Variable.

**1. Partikuläre Lösung (Aufpunkt) bestimmen:**
Wir setzen alle freien Variablen auf Null, also $z = 0$.
Durch Einsetzen erhalten wir: 
$2x = 3 \implies x = 1.5$
$4y = 0 \implies y = 0$
Die partikuläre Lösung lautet somit: $\vec{x}_p = \begin{pmatrix} 1.5 \\ 0 \\ 0 \end{pmatrix}$.

**2. Homogene Lösung (Richtungsvektor) bestimmen:**
Wir betrachten das homogene System (rechte Seite auf $0$ gesetzt) und wählen für die freie Variable den Wert $z = 1$:
$2x - 1 = 0 \implies x = 0.5$
$4y + 1 = 0 \implies y = -0.25$
Der zugehörige Richtungsvektor ist somit $\vec{x}_h = \begin{pmatrix} 0.5 \\ -0.25 \\ 1 \end{pmatrix}$.

**Zusammengesetzte Lösung:**
Die vollständige Lösungsmenge beschreibt eine Schnittgerade und lautet:
$$ \vec{x} = \begin{pmatrix} 1.5 \\ 0 \\ 0 \end{pmatrix} + \lambda \cdot \begin{pmatrix} 0.5 \\ -0.25 \\ 1 \end{pmatrix} $$