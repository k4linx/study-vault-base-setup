---
erstelldatum: 2025-12-03
tags:
---
## Wichtige Formeln
$$

$$

## Definitionen
### Interval
$$
\begin{align}
& [-2;2) \rightarrow \ \text{Interval mit -2 ohne 2} \\
& (-2;2) \rightarrow \ \text{Interval ohne -2 ohne 2}
\end{align}
$$
### Ungleichungen
$$
\begin{align*}
4x + 1 &< 7x + 3 \tag{1}\\
-2 &< 3x \tag{2}\\
\frac{2}{3} &< -x \tag{3}\\
x &> -\frac{2}{3} \tag{4}
\end{align*}
$$

>[!important] Wichtig
>Vorzeichenwechsel dreht auch das Ungleichheitszeichen um. $(3)\rightarrow(4)$

### Konvergenz, Divergenz und Grenzwert

#### Grenzwert
Der Grenzwert einer Funktion nähert sich $a^{*}$ beliebig nahe an. $a^{*}$ ist dabei eine Reelle Zahl. $a^{*}$ definiert man als Grenzwert. den Grenzwert schreibt man wie folgt:
$$
a^{*} = \lim_{n\rightarrow \infty} a_{n}
$$
##### Vorgehen Grenzwerte
Um einen Grenzwert zu berechnen soll ein Term so umgeformt werden das ein Term entsteht welcher einzelne Terme hat die gegen 0 gehen.
$$
a_{n}= \frac{n}{n+1} \Rightarrow \frac{1}{1+\frac{1}{n}} \tag{1} \xrightarrow{n \rightarrow \infty} \frac{1}{1+0} = 1
$$
$(1) \ n$ geht gegen unendlich daher wird der Bruch immer kleiner. $\frac{1}{1}, \frac{1}{2}, \frac{1}{3} \dots \frac{1}{n}; n\rightarrow \infty$

##### Erweiterung mit Binomischer Formel
einen Grenzwert in folgender form $a_{n}= \sqrt{n+1}-\sqrt{n}$ kann mit der 3. Binomischen Formel erweitert werden um die $n$ unter der wurzel wegheben zu können. 
$$
\begin{align}
\sqrt{n+1} - \sqrt{n} &= \frac{\sqrt{n+1}-\sqrt{n} \cdot \sqrt{n+1}+\sqrt{n}}{\sqrt{n+1}+\sqrt{n}} \tag{1} \\
&= \frac{n+1-n}{\sqrt{n+1}-\sqrt{n}}  \tag{2}\\
&= \frac{1}{\sqrt{n+1}-\sqrt{n}} \rightarrow 0, \ \text{da} \ \sqrt{n+1}-\sqrt{n} = \rightarrow \infty \tag{3} \\
&\Rightarrow \lim_{n \rightarrow \infty} \sqrt{n+1}-\sqrt{n}= 0
\end{align}
$$
>[!hint] Erklärung
>$(1)$ Erweiterung mit 3. Binomischer Formel
>$(2)$ Binom auflösen
>$(3)$ $n-n = 0$

##### Konvergenz
Wenn eine Folge einen eindeutigen Grenzwert hat konvergiert diese bzw. es liegt Konvergenz vor.
> [!hint] Beispiel
> $a_{n}= \frac{14n^{2}-200n-5}{10-100n+7n^{2}}$ hat einen Grenzwert $2$.

##### Divergenz
Hat eine Folge keinen eindeutigen Grenzwert divergiert sie bzw. es liegt Divergenz vor.
> [!hint] Beispiel
> Eine exponentielle Funktion $a_{n}=\frac{5^{n}}{4^{n}} = (\frac{5}{4})^{n}$ hat beispielsweise keinen Grenzwert.

#### Funktionen

##### Lineare Funktion (Gerade)

##### Quadratische Funktion (Parabel)

#### Weitere Themen
- 
