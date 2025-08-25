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

 Wenn die Basis im obigen Beispiel negativ wäre würde die Funktion exponentiel abnehmen. **Bsp2**
 

### Eulersche Zahl als Basis von Exponentialfunktionen
Die eulersche Zahl $e$ wird oft als basis für eine Exponentialfunktion verwendet.

um die 

### Satz des Pythagoras


### Ähnlichkeit/Strahlensatz

---
## ✅ ToDo

---
## 📕 Quellen
![[AuffrischungskursAufgabenHS25.pdf#page=14]] 