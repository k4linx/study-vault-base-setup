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
a(t) = \frac{v(t)-v(t_{1})}{t-t_{1}}=\frac{dv}{dt}(t)
$$
### Geschwindigkeit
$$
v(t) = \lim_{t_{1}\rightarrow t} = \frac{x(t)-x(t_{1})}{t-t_{1}} = \lim_{\triangle t \rightarrow 0} \frac{\triangle x}{\triangle t} = \frac{dx}{dt}(t)
$$
$$
v(t) = \int a(t) dt + v_{0}
$$
### Ort
$$
x(t) = \int v(t) dt + x_{0}
$$
>[!summary] 
>1. Um von einem bekannten Ort zur Beschleunigung zu kommen muss die Ortsfunktion 2 mal [[Ableitung|abgeleitet]] werden. 
>2. Um von einer bekannten Geschwindigkeit zum Ort zu kommen muss die Funktion einmal [[Integral|integriert]] werden.
>3. Um von einer bekannten Geschwindigkeit zur Beschleunigung zu kommen muss die Funktion einmal [[Ableitung|abgeleitet]] werden.
>4. Um von der Beschleunigung zum Ort zu kommen muss die Funktion zweimal [[Integral|integriert]] werden.
>

## Definitionen
### Der Ort $x(t)$
Der Ort beschreibt die Position zu einem Zeitpunkt $t$. In einem x-t-Diagramm kann der Ort in Abhängigkeit von der Zeit dargestellt werden. 
![[SW03-mech Kinematik 1D_xt_diagram.png#invert|373]]
Ist nun eine Beschleunigung oder eine Geschwindigkeit bekannt und daraus muss der Ort berechnet werden so kann dies mit einem [[Integral]] berechnet werden
$$
y(t) = \int v(t)dt + C 
$$
Die Integrationskonstante $C$ ist hierbei $y_{0}$ daraus folgt das fertige Integral
$$
y(t) = \int v(t) dt + y_{0}
$$
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

Ist nun die Beschleunigung bekannt kann die Geschwindigkeit $v(t)$ mithilfe eines [[Integral|Integrals]] berechnet werden
$$
v(t) = \int a(t) dt + C
$$
Nun muss noch die Konstante $C$ berechnet werden wobei diese die Anfangsgeschwindigkeit $v_{0}$ ist. Also sieht unser Integral folgendermassen aus:
$$
v(t) = \int a(t) dt + v_{0}
$$

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
Wenn die zweite [[Ableitung]] $\frac{d^{2}x}{dt^{2}} > 0$ ist hat x eine Konvexe Krümmung.
![[SW03-mech Kinematik 1D_konvex.png#invert|282]]
Ist die Ableitung $\frac{d^{2}x}{dt^{2}} < 0$ hat x eine Konkave Krümmung.
![[SW03-mech Kinematik 1D_konkave.png#invert]]
An folgendem Graph sind die Krümmungsarten gut ersichtlich:
![[SW03-mech Kinematik 1D_konkav_konvex.png#invert]]
