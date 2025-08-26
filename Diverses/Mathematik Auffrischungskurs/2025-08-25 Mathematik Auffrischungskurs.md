## ⁉️ Fragen

---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung
Exponentialgleichung bis Satz des Pythagoras

### Exponentialgleichung
Exponentialgleichungen sind Gleichungen mit Termen die einen Exponenten also eine Hochzahl haben.

Um diese Gleichungen zu lösen gibt es 2 Strategien. Das ziel ist es eine Lineare Gleichung zu erhalten die durch Logarithmen ausgedrückt wird.

#### Strategie 1
Die Gleichung kann mit den [[2025-08-21 Mathematik Auffrischungskurs#Potenzgesetze|Potenzgesetzen]] umgeformt werden.


> [!math-example] Beispiel
> $$
> \begin{align} \\
> 5^{2x}&=2*7^{3x} \\ \\
> \frac{5^{2x}}{7^{3x}}&=2  \\
> \frac{(5^{2})^{x}}{(7^{3})^{x}}&=2 \\
> (\frac{5^{2}}{7^{3}})^{x}&=2 \\
> x &= \log_{\frac{5^{2}}{7^{3}}}(2) \\
> \end{align}
> $$

#### Strategie 2
Wenn die Exponentialgleichung auf beiden Seiten positiv ist kann auf beiden Seiten der gleiche [[2025-08-22 Mathematik Auffrischungskurs#Logarithmen & Exponentialfunktionen|Logarithmus]] zur gleichen Basis angewendet werden. z.B. $\log_{10}(x)$

$$
\begin{align} \\
5^{2x}=2*7^{3x} \\
\end{align}
$$
Logarithmus $\log_{10}$ anwenden
$$
\begin{align}
\log_{10}(5^{2x})=\log_{10}(2*7^{3x}) \\
\end{align}
$$
[[2025-08-22 Mathematik Auffrischungskurs#Logarithmengesetze|Logarithmengesetze]] anwenden:
$$
\begin{align}
\log_{10}(5^{2x}) &= \log_{10}(2) + \log_{10}(7^{3x}) \\
2x * \log_{10}(5) &= \log_{10}(2) + 2x * \log_{10}(7) \\
\end{align}
$$

> [!hint] Hinweis
> Nun hat die Gleichung die gleiche Struktur wie:
> $$
> 2x*9=1+3x*4
> $$

Die gleichung kann jetzt mittels Äquivalenzumformung umgeformt werden

> [!important] Wichtig
> Logarithmus $\log$ wird als Zahl angeschaut

$$
\begin{align}
2x*log_{10}(5)-3x*\log_{10}(7)&=\log_{10}(2) \\
x(2*\log_{10}(5)-3*\log_{10}(7))&=\log_{10}(2) \\
x&= \frac{\log_{10}(2)}{2\log_{10}(5)-3\log_{10}(7)}\\
x&= \frac{\log_{10}(2)}{\log_{10}\left( \frac{5^{2}}{7^{3}}\right)}\\
\end{align}
$$
Noch etwas eleganter hingeschrieben:
$$
x= \log_{\frac{5^{2}}{7^{3}}}(2) 
$$

> [!abstract] Definition
> Das kann man so schreiben weil die folgende Definition wahr ist
> $$
> \log_{b}(a)=\frac{\log_{10}(a)}{\log_{10}(b)}
> $$

### Exponentialfunktion
Eine exponentialfunktion wird in der Technik verwendet um Dämpfungen, Entladungskurven von Kondensatoren usw. zu berechnen. Ein Praktisches Beispiel wäre die Dämpfung eines Soft-close Toilettendeckel.

> [!abstract] Grundform
> $$
> y= f(t)=a*b^t
> $$
> Legende:
> $a$ = Anfangsbestand
> $b$ = Basis, Vergrösserungs/Verkleinerungsfaktor pro Zeit
> $t$ = Zeiteinheit
> y = Bestand nach Zeit
> 

> [!math-example] Beispiel
> Eine Bakterienkultur auf einer Glasscheibe bedeckt zu beginn $2cm^{2}$ vom Glas. Pro Stunde wächst die Fläche um 32%. 
> $$
> \begin{align}
> f(0) &= 2  \\
> f(1) &= 2* 1.32 = 2.64\\
> f(2) &= f(1)*1.32 = 2*1.32^{2}= 3.484  \\
> f(3) &= f(2)*1.32 =2*1.32^{3}=4.599 \\
> ... \\
> f(t)&=2*1.32^{t}
> \end{align}
> $$
> ```tikz
> \usepackage{pgfplots}
> 
> \begin{document}
>   \begin{tikzpicture}
> 	\begin{axis}[
> 	no markers,
> 	grid=both,
> 	grid style={gray},
> 	axis equal,
> 	axis lines=center,
> 	axis line style={-latex, thick},
>     xlabel=$x$,
>     ylabel=$y$,
>     xtick distance=5,
> 	ytick distance=5,
>     enlargelimits=true,clip=true]
>     \addplot[color=red, domain=-1:10] {2*1.32^x} node[ anchor=west] {$y=2*1.32^{t}$};
> 	\end{axis}
>   \end{tikzpicture}
> \end{document}
> ```

> [!important] Wichtig
>
> 1. Wenn die Basis grösser wäre würde die Funktion schneller steigen
> 2. Wenn die basis kleiner wäre würde die Funktion langsamer steigen



### Exponentielle Abnahme
Wenn die Basis $b<1$ ist nimmt die Funktion exponentiell ab, dann spricht man von einer exponentiellen Abnahme
 

> [!math-example] Beispiel
> Eine Tasse Kaffe enthält 80mg Koffein, in 4h Stunden wird die Hälfte im Körper abgebaut.
> $$
> \begin{align}
> a&=80mg \\
> b&=\frac{1}{2} \\
> y&=\text{Menge nach Zeiteinheit}\\
> t&=\text{zeit in h} \\
> y&=f(t) \\ \\
> 
> f(0)&=80 \\
> f(4)&=40=80*\frac{1}{2} \\
> f(8)&=20=80* \left( \frac{1}{2} \right)^2 \\
> f(12)&=10=80* \left( \frac{1}{2} \right)^3 \\
> f(t)&= 80* \left( \frac{1}{2} \right)^{\frac{t}{4}}=80*\left(\left( \frac{1}{2} \right)^{\frac{1}{4}}\right)^{t} \\
> f(t)&=80*0.84^{t} \\
> \end{align}
> $$
> 
> ```tikz
> \usepackage{pgfplots}
> 
> \begin{document}
>   \begin{tikzpicture}
> 	\begin{axis}[
> 	no markers,
> 	grid=both,
> 	grid style={gray},
> 	axis equal,
> 	axis lines=center,
> 	axis line style={-latex, thick},
>     xlabel=$x$,
>     ylabel=$y$,
>     xtick distance=10,
> 	ytick distance=10,
>     enlargelimits=true,clip=true]
>     \addplot[color=red, domain=-1:40] {80*(1/2)^(x/4)} node[ anchor=south] {$80*(\frac{1}{2})^{\frac{t}{4}}$};
> 	\end{axis}
>   \end{tikzpicture}
> \end{document}
> ```

### Eulersche Zahl als Basis von Exponentialfunktionen
Die eulersche Zahl $e$ wird oft als basis für eine Exponentialfunktion verwendet.

$$
e = \mathop {\lim }\limits_{n \to \infty } \left( {1 + \frac{1}{n}} \right)^n =2.71828
$$

um eine existierende Funktion zu Basis $e$ umschreiben zu können muss man folgende Schritte machen

$$
\begin{align} \\
f(t) &= 2*1.32^{t} \\
&= 2(e^{\lambda})^{t} & 1.32&=e^{\lambda} \\
&=2*e^{\lambda*t} & \lambda &= \ln(1.32) = 0.277 \\
2*e^{0.277*t}
\end{align}
$$
Und schon ist die Funktion zur Basis $e$ umgewandelt.

### Exponentialfunktion durch 2 Punkte

Wenn man 2 Punkte gegeben hat die auf einer Exponentialfunktion liegen kann man die Punkte ganz einfach in die Funktion einfügen um $a$ und $\lambda$ herauszufinden.

$$
\begin{align}
A(1|10) \\
B(5|2) \\
 \\
y=a*b^{t} \\
bzw. \\
y=a*e^{\lambda*t} \\
\end{align}
$$
Punkte einsetzen wobei $x$ in $t$ eingesetzt wird.
$$
\begin{align}
&A(1|10) \Rightarrow &10&=a*e^{\lambda*1} \\
&B(5|2)  \Rightarrow &2&=a*e^{\lambda5} \\
\end{align}
$$
Nun kann man die untere durch die obere Gleichung dividieren.
$$
\frac{2}{10}=\frac{a*e^{5*\lambda}}{a*e^{\lambda}}
$$
$a$ kann nun gekürzt werden. $e$ kann mit den [[2025-08-21 Mathematik Auffrischungskurs#Potenzgesetze|Potenzgesetze]] umgeformt werden. 

$$
\begin{align}
\frac{1}{5}=e^{5\lambda-\lambda} \\
\frac{1}{5} =e^{4\lambda} \\
4\lambda=\ln\left( \frac{1}{5} \right) \\
\lambda=\frac{1}{4} \ln\left( \frac{1}{5} \right) \\
\lambda=-0.4024 \\
\end{align}

$$
Um a zu finden wird nun die Funktionsgleichung nach a umgestellt und berechnet.
$$\begin{align}
10=a*e^{-0.4024} \\
a=\frac{10}{e^{-0.4024}} \\
a=14.9575
\end{align}$$

### Halbwertszeit
Die Halbwertszeit ist die Zeit die es braucht bis nurnoch die Hälfte des Anfangsbestandes vorhanden ist.
$$
e^{\lambda*t}=\frac{1}{2}
$$
### Satz des Pythagoras
Der Satz des Pythagoras besagt dass die Hypothenuse $c$ eines Dreiecks mit einem Rechten Winkel berechnet werden kann indem man die Katheten $a$ & $b$ hoch zwei rechnet und addiert:
$$
c^{2}=a^{2}+b^{2}
$$


### Ähnlichkeit/Strahlensatz

---
## ✅ ToDo

---
## 📕 Quellen
![[AuffrischungskursAufgabenHS25.pdf#page=14]] 