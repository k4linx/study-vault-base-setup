---
erstelldatum: 2026-03-02
tags:
  - v-t
  - a-t
  - x-t
  - ort
  - geschwindigkeit
  - beschleunigung
Folien:
  - 3_Kinematik_1D
---
## Wichtige Formeln
### Beschleunigung
$$
a(t) = \frac{\triangle v}{\triangle t}
$$
### Geschwindigkeit
$$
v(t) = \frac{\triangle x}{\triangle t}
$$
### Ort
$$
x(t) = 
$$
## Definitionen
### Der Ort $x(t)$
Der Ort beschreibt die Position zu einem Zeitpunkt $t$. In einem x-t-Diagramm kann der Ort in Abhängigkeit von der Zeit dargestellt werden. 
![[SW03-mech Kinematik 1D_xt_diagram.png#invert|373]]
#### Die Verschiebung
Im obigen Diagramm sieht man die Position $x_{1}(2.00s)$ bei $11.3 cm$ und die Position $x_{2}(4.26s)$ bei $-2.1cm$. um nun die Verschiebung zu berechnen wird $x_{2}-x_{1}$ gerechnet. das ergibt delta $\triangle$:
$$
\triangle x = -2.1 - 11.3 = 13.4cm
$$
Wenn Richtungsänderungen auftreten, beeinflusst dies die Verschiebung.
#### Die Strecke $s$
Die Strecke wird von Richtungsänderungen nicht beeinflusst. Um die zurückgelegte Strecke zu berechnen wird der Weg aufsummiert. 

### Die Geschwindigkeit $v$
Die Geschwindigkeit ist die Änderung des Ortes Pro Zeit. deren Einheit ist $\frac{m}{s}$ 

>[!hint] Die Maximale Geschwindigkeit ist die **Lichtgeschwindigkeit** $c = 2.998 \cdot 10^{8} \frac{m}{s}$. Das heisst berechnete Geschwindigkeiten sind immer kleiner als die Lichtgeschwindigkeit. Also eine einfache Kontrolle ob die Berechnung richtig ist :) 

#### Die mittlere Geschwindigkeit $\langle v \rangle$
Die Mittlere Geschwindigkeit ist das Verhältnis der Verschiebung $x$ zur Zeit $t$ im Interval $[t_{1}, t_{2}]$ 
$$
\langle v \rangle = \frac{\triangle x}{\triangle t}
$$
#### Die Momentangeschwindigkeit $v(t)$
Die Momentangeschwindigkeit zeigt den zeitlichen Verlauf der Geschwindigkeit. 
$$
v(4.26) = \frac{x_{2}-x_{1}}{t_{2}-t_{1}} = \frac{\triangle x}{\triangle t} = \frac{7.4cm}{0.26s} = 28.5 \frac{cm}{s}
$$
Das ist gleich die Steigung des Dreiecks aus $\triangle x$ und $\triangle t$ je kleiner der Abstand zum Punkt $t_{2}$ desto genauer wird die Momentangeschwindigkeit. Die Momentangeschwindigkeit ist also die [[Ableitung]] des Ort $x$ nach der Zeit $t$.

### Die Schnelligkeit $\dot{s}$
#### Die Mittlere Schnelligkeit $\langle \dot{s} \rangle$
Die Mittlere Schnelligkeit ist das Verhältnis der zurückgelegten Strecke $\triangle s$ und der Zeit $\triangle t$ im Zeit Intervall $[t_{1}, t_{2}]$. Die Einheit ist $\frac{m}{s}$
$$
\langle \dot{s} \rangle = \frac{\triangle s}{\triangle t}
$$
#### Die momentane Schnelligkeit $\dot{s}$
Die Schnelligkeit ist nichts anderes als der Betrag der Geschwindigkeit:
$$
\dot{s}(t) = |v(t)|
$$
Die Einheit ist $\frac{m}{s}$

### Die Beschleunigung $a$
Die Beschleunigung ist die Änderung pro Zeit der Geschwindigkeit. Die Einheit der Beschleunigung ist $\frac{m}{s^{2}}$. 

#### Die Momentanbeschleunigung $a(t)$
Die Momentanbeschleunigung ist die [[Ableitung]] der Momentangeschwindigkeit $v(t)$
$$
a(t) = \frac{dv}{dt}(t) = v'(t) = x''(t)
$$
#### Die mittlere Beschleunigung $\langle a \rangle$
Die Mittlere Beschleunigung ergibt sich aus dem $\triangle v$ und $\triangle t$:
$$
\langle a \rangle = \frac{v(t_{2})-v(t_{1})}{t_{2}-t_{1}} = \frac{\triangle v}{\triangle t}
$$
