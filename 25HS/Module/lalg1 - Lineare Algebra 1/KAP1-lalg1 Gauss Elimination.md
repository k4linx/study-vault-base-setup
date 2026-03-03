---
erstelldatum: 2026-02-26 
tags:
- lalg1
- gauss-elimination
- lineare-abhaengigkeit
Folien: Eliminationsverfahren I
---

**Analytische Einleitung:** Das Gauss-Verfahren ist weit mehr als ein rein algorithmischer Rechenweg; es fungiert als fundamentales Werkzeug zur Dekonstruktion komplexer linearer Abhängigkeiten innerhalb technischer Systeme. Für Ingenieure – etwa in der Baustatik oder Systemanalyse – ist die Fähigkeit, ein System in die Dreiecksform zu überführen, essenziell, um die strukturelle Integrität von Modellen zu prüfen und effiziente Lösungen für hochdimensionale Gleichungssysteme zu finden.

## Wichtige Formeln

### Linearkombination

Eine Linearkombination einer Menge von Vektoren $\{\vec{a}_1, \dots, \vec{a}_N\}$ ist definiert als die Summe: $$x_1\vec{a}_1 + x_2\vec{a}_2 + \dots + x_N\vec{a}_N = \sum_{i=1}^{N} x_i\vec{a}_i$$ 
wobei die Skalare $x_1, x_2, \dots$ als Koeffizienten $(x_i \in \mathbb{R})$ bezeichnet werden.

### Lineare Abhängigkeit

Eine Menge von Vektoren ist linear abhängig, wenn der Nullvektor durch eine nicht-triviale Linearkombination darstellbar ist: \sum_{i=1}^{N} x_i\vec{a}_i = \vec{0} \text{ mit mindestens einem } x_i \neq 0

## Definitionen

- **Kollinear:** Zwei Vektoren \vec{a} und \vec{b} heißen kollinear, wenn sie parallel oder antiparallel verlaufen, d. h. \vec{a} = \lambda\vec{b} für ein \lambda \in \mathbb{R}.
- **Komplanar:** Drei oder mehr Vektoren im \mathbb{R}^3 werden als komplanar bezeichnet, wenn sie in derselben Ebene liegen und somit linear abhängig sind.
- **Dreiecksform (Zeilenstufenform):** Ein Zustand eines Gleichungssystems, bei dem alle Koeffizienten unterhalb der Hauptdiagonale verschwinden.

## Herleitungen

- **Gauss-Verfahren:** Die systematische Elimination von Komponenten erfolgt durch Zeilenoperationen. Dabei wird eine Pivot-Zeile ausgewählt, um die darunterliegenden Einträge derselben Spalte zu annullieren.
- **Rückwärtseinsetzen:** Sobald die Dreiecksform erreicht ist, wird das System gelöst, indem die unterste Gleichung nach der ersten Unbekannten aufgelöst und dieser Wert sukzessive von unten nach oben substituiert wird.

**Wichtige Anmerkung:**

>[!IMPORTANT] Beim Gauss-Verfahren gilt strikt: Die Zeile, die im aktuellen Schritt zur Elimination in anderen Zeilen genutzt wird, darf selbst nicht verändert werden.

**Überleitung:** Nachdem die Grundlagen der Elimination etabliert sind, erweitert das nächste Kapitel den Fokus auf die strukturellen Eigenschaften des [[KAP2-lalg1 Der Vektorraum|Vektorraums]].
