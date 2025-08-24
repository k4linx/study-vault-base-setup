## ⁉️ Fragen
- [ ] Wie löse ich eine Potenzgleichung?
- [ ] Was ist eine Wurzel?
- [ ] Was ist ein Logarithmus?
- [ ] Wie kann ich eine Exponentialgleichung am besten lösen?
- [ ] Was sind die Logarithmengesetze?
---
## 💡 Wichtige Begriffe
- **Wurzel** - $y = \sqrt[n]{a}$  :  $n$-te Wurzel von $a$, wobei immer $a>0$. Die positive zahl für die $y^{n}=a$ gilt.
- **Logarithmus** - $x= \log_b{a}$  : $b$ hoch wieviel ist $a$ 
---
## 📄 Zusammenfassung
### Wurzeln & Potenzen mit rationalen Exponenten
Wurzeln werden verwendet um rationale Exponenten besser darstellen zu können.
Dazu ein paar Definitionen:

$$
a^{\frac{m}{n}} = \sqrt[n]{a^{m}}
$$
Weiterhin gelten die [[2025-08-21 Mathematik Auffrischungskurs#Potenzgesetze|Potenzgesetze]]. solange $m,n \in \mathbb{Q}$ Das bedeutet solange $m,n$ Bruchzahlen sind.
**Beispiel:**
$$\sqrt[3]{\sqrt[4]{a^{7}}}= \sqrt[3]{a^{\frac{7}{4}}} = a^{\frac{\frac{7}{4}}{3}} =a^{\frac{7}{4}*\frac{1}{3}} = a^{\frac{7}{12}}$$

### Potenzgleichungen
Potenzgleichungen enthalten Potenzen in der Gleichung die zuerst aufgelöst werden müssen:
**Beispiel:**
$$
\begin{align}
x^{3} &= 7*\sqrt{x} \\
x^{3} &= 7*x^{\frac{1}{2}} \quad && |\ :x^\frac{1}{2} \\
\frac{x^{3}}{x^{\frac{1}{2}}} &= 7 \\
x^{3-\frac{1}{2}} &= 7 \\
x^{\frac{5}{2}} &= 7 \quad &&| \ \text{mit Kehrwert der Potenz multiplizieren}\\
(x^{\frac{5}{2}})^{\frac{2}{5}} &= 7^{\frac{2}{5}}  \\
x &= 7^{\frac{2}{5}}
\end{align}
$$
**Wichtig:** um $x^1$ zu erhalten wird die Gleichung mit dem Kehrwert der Potenz multipliziert.
### Wurzelgleichungen
Wurzelgleichungen enthalten 1 oder mehrere Terme unter der Wurzel. Wenn diese Terme Quadriert werden Kann es vorkommen dass Scheinlösungen entstehen. Deshalb ist es wichtig die erhaltenen Resultate in der Gleichung einzusetzen und zu kontrollieren.

$$
\begin{align}
\sqrt{x+4} &= \sqrt{5x} - 2 && | (...)^{2} \\
x+4 &= (\sqrt{5x}-2)^{2} && | \text{Binom ausmultiplizieren}\\
x+4&= 5x-4\sqrt{5x}+4 &&| -4-5 \\
-4x &= -4\sqrt{5x} \\
x&=\sqrt{5x} && | (...)^{2} \\
x^{2}&=5x \\
x^{2}-5x&=0 \\
x(x-5)&=0 \\ \\
x_{1}&=0 \\
x_{2}&=5 \rightarrow \text{Kontrolle} \\
\end{align}
$$
Um eine Kontrolle Durchzuführen werden die Ergebnisse für $x$ in der Uhrsprünglichen Gleichung eingesetzt:
$$
\begin{align}
\text{Fall 1:}\ x&=0 \\
\sqrt{0+4}&=\sqrt{5*0}-2 \\
2 &\not= -2 
\\
\\
\text{Fall 2:} \ x&=5 \\
\sqrt{9}&=\sqrt{25}-2 \\
3&=5-2 \\
3&=3 & \checkmark\\
\end{align}
$$
### Logarithmen & Exponentialfunktionen
Der logarithmus berechnet den Exponent einer Potenz
Beispiel:
$$
\begin{align}
\log_{2}(16)&=x \\
2^x&=16 \\
\log_{2}(16)&=4 \\
 \\
\log_{2}(16) &= \log_{2}(2^{4})= 4
\end{align}
$$
Folgender Merksatz hilft beim Vertändnis des Beispiels: 

>2 hoch wieviel ist 16?

Oder: 

> wie lässt sich 16 als 2er Potenz schreiben?

Die Allgemeine Form des Logarithmus lautet:
$$
\begin{align}
x &= \log_{b}(a) \\
b^{x}&= a && b>0
\end{align}
$$

Legende:
- $b$ = Basis der Potenz
- $x$ = gesuchter Exponent
- $a$ = $b^x$ 


> # Wichtig: 
> Falls der TR keine Funktion hat dem Logarithmus log die Basis zu wechseln rechnet der TR immer mit dem 10er Logarithmus $\lg_{10}(a)$. Um trotzdem mit dem TR einen Logarithmus anderer Basis rechnen zu können muss man anstatt $\log_{b}(a)$, $\frac{\ln(a)}{ln(b)}$ in den TR eingeben.
$$
\log_{b}(a) \leftrightarrow \frac{ln(a)}{ln(b)}
$$

Folgend noch zwei weitere Beispiele mit anderen Fällen:

$$
\begin{align}
\log_{4}\left( \frac{1}{16} \right) &= x \\
\log_{4}\left( \frac{1}{16} \right) &=\log_{4}\left( \frac{1}{4^{2}} \right) = \log_{4}(4^{-2}) =-2
\end{align}
$$
$$
\begin{align}
\log_{125}(5) &= x && 125^{x}&=5 \\
\log_{125}(5)&=\frac{1}{3} && 125^{\frac{1}{3}} &\Leftrightarrow \sqrt[3]{125}
\end{align}

$$
#### Logarithmengesetze
mit den Logarithmusgesetzen können Komplexe Logarithmusterme umgeformt werden.

**L1:**
$$
\log_{b}(x*y) = \log_{b}(x)+log_{b}(y)
$$
**L2:**
$$
\log_{b}\left( \frac{x}{y} \right)=\log_{b}(x)-\log_{b}(y)
$$**L3:**
$$log_{b}(x^{y})=y*\log_{b}(x)$$

Zusammenhang zwischen Logarithmusgesetze und Potenzgesetze erklären.

#### Logarithmus abschätzen
Beim logarithmen abschätzen geht es darum sich näherungsweise dem logarithmus zu nähern und nur ganze Zahlen zu verwenden
**Beispiel:**
$$
\begin{gather} \\
? <&\log_{10}(73452)&< ? \\
&\text{10 hoch was gibt < 73452} \\
&10^{4}=10000, \quad \log_{10}(10^{4})=4 \\
 &\text{10 hoch was gibt > 73452}  \\
&10^{5}=100000, \quad \log_{10}(10^{5})=5 \\
4 <&\log_{10}(73452)&<5 \\
\end{gather}
$$
Ein zweites Beispiel:
$$
\begin{gather}
?<&\log_{5}(0.4) &< ? \\
0.2=\frac{1}{5}=5^{-1} <& 0.4 &< 5^{0}=1 \\
-1 <& \log_{5}(0.4) &< 1
\end{gather}
$$
#### Exponentialgleichung
Eine Exponentialgleichung hat Terme mit unbekannten Exponenten (Hochzahlen). Diese Gleichungen löst man mit der Anwendung von Logarithmen

**Beispiel:**
$$
\begin{align}
6^{x}= 12 &\Leftrightarrow \log_{12}(6)=x \\
x&=1.387
\end{align}
$$
**Beispiel 2:**
$$
\begin{align}
\frac{4^{x}}{5^{x}}&=7 \\
\left( \frac{4}{5} \right)^{x}&=7  \\
x&=\log_{\frac{4}{5}}(7) \\
x=-8.720
\end{align}
$$
Weitere Aufgaben im Verlinkten Dossier

---
## ✅ ToDo

---
## 📕 Quellen
![[AuffrischungskursAufgabenHS25.pdf#page=10]]

### Lösungen
- [[4PotenzgesetzeUndWurzeln.pdf]]
- [[5LogarithmenUndExponentialfunktionenBis5-5.pdf]]