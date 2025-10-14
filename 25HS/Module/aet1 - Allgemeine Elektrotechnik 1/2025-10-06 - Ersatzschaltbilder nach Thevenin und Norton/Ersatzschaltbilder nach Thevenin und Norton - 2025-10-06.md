---
erstelldatum: 2025-10-12
tags:
  - aet1
  - thevenin
  - norton
---


## ⁉️ Fragen

---
## 💡 Wichtige Begriffe
- **Quellenkennlinie** -
- **Thevenin** -
- **Norton** - 
- **Quellenleistung** - 
- **Leistungsanpassung** -
---
## 📄 Zusammenfassung

### 5.1 Quellen, Ersatzschaltungen und Kennlinien
Bei einem beliebigen Linearen Netzwerk aus Widerständen, Spannungs- und Stromquellen sind $U_{a}$ und $I_{a}$ linear voneinander Abhängig. Es kann also eine Lineare Funktion erstellt werden.
$$
U_{a}= \alpha \cdot I_{a} + \beta
$$
#### Ersatznetzwerke
Das ziel eines Ersatznetzwerkes ist, die komplexe Schaltung so zu vereinfachen, dass sich das Ersatznetzwerk wie das komplexe Netzwerk verhält.
##### Thevenin Ersatzschaltung
Eine Thevenin Ersatzschaltung besteht aus einer Idealen Spannungsquelle mit einem in Serie geschalteten Widerstand.
![[Thevenin-ersatzschaltung.png#invert]]
##### Norton Ersatzschaltung
Die Nortonsche Ersatzschaltung besteht aus einer Idealen Stromquelle und einem parallel geschalteten Widerstand.
![[norton-ersatzschaltung.png#invert]]

Thevenin und Norton Quellen können ineinander umgewandelt werden. Dabei bleibt der Innenwiderstand $R_{qe}$ gleich und die Fehlende Grösse wird entsprechend berechnet. 
>[!tip] Beispiel
>Um eine Thevenin Quelle zu einer Norton Quelle umzuwandeln muss $I_{qe}$ berechnet werden.
> Folgende Angaben gegeben:
> $U_{qe}=5V$
> $R_{qe}=10\ohm$
>$$
>I_{qe}=\frac{U_qe}{R_{qe}}= \frac{5V}{10\ohm} = 0.5A = 500mA
>$$
>


#### Quellenkennlinie
An einer Quellenkennlinie (kurz **QKL**) kann man die Leerlaufspannung und den Kurzschlussstrom ablesen. 
![[QKL-mit-Ull-und-Iks.png#invert]]

##### Leerlaufspannung
Die Leerlaufspannung $U_{LL}$ kann man messen wenn die Klemmen offen gelassen werden. Der strom ist dabei $0A$
![[leerlaufspannung-bestimmung.png#invert]]
##### Kurzschlussstrom
Der Kurzschlusstrom wird wie der Name schon sagt gemessen wenn die Klemmen kurz geschlossen werden. dann ist die Spannung theoretisch $0V$
![[kurzschlussstrom-bestimmung.png#invert]]
#### Abschalten von Quellen
Werden Quellen abgeschaltet wird die Quelle durch ihren Innenwiderstand ersetzt bei einer Spannungsquelle bedeutet dies $R=0 \ohm$ und bei der Stromquelle $R=\infty \ohm$
![[abschalten-von-quellen.png#invert]]

#### Bestimmung $U_{qe} \ I_{qe} \ R_{qe}$ 
Mit der Bestimmung der Leerlaufspannung, dem Kurzschlussstrom und dem Abschalten der Quellen haben wir 3 Experimente um die Werte für die Ersatzschaltungen zu bestimmen, da $U_{qe}= I_{qe}*R_qe$ gilt (**Achtung:** Das ist nicht das Ohm'sche Gesetz).
![[experimente--bestimmung ersatzschaltbilder.png#invert]]

#### Quelle und Last
Sowohl Quelle und Last haben eine Kennlinie. In einem Modell eines Ohm'schen Widerstandes ist die Lastkennlinie Linear also gerade.
![[quellen_last_kennlinie.png#invert]]
Die Lastkennlinie hat eine Positive Steigung und die Quellenkennlinie eine Negative Steigung mit Schnittpunkten der beiden Koordinatenachsen. Somit werden sich die beiden Geraden Schneiden. Dieser Schnittpunkt nennt man den Betriebspunkt (operating point). Am Betriebspunkt kann man herausfinden wieviel Strom und Spannung eine Quelle bei einem gegebenen Lastwiderstand liefern kann.


Um diesen Betriebspunkt zu finden kann man beide Gleichungen nach $U$ Gleichsetzen. Und erst nach dem Betriebsstrom $I_{op}$ auflösen
$$
\begin{align} \\
1) \quad U & =U_{qe}-R_{qe} \cdot I_{op} \\
2) \quad U & =R \cdot I \\
R_{L} \cdot I_{op} & = U_{qe}-R_{qe}\cdot I_{op} \\
I_{op} &= \frac{U_{qe}}{R_{L}+R_{qe}} = \frac{1}{R_{L}+R_{qe} \cdot U_{qe}}
\end{align}
$$
Danach kann die neu erhaltene gleichung in $2)$ einsetzen und erhält $U_{op}$
$$
U_{op}= R_{L}\cdot I_{op}= R_{L}\cdot \frac{1}{R_{qe}+R_{L}}*U_{qe}
$$
#### Quellen zusammenschalten
Man kann Quellen zusammenschalten. dabei gibt es 6 Möglichkeiten. 
1. Ideale U-Quelle in Serie mit Idealer U-Quelle
	- Dabei werden die Spannungen Addiert $U_{1}+U_{2}$
	- Der Strom Kurzschlusstrom bleibt gleich da $I_{qe} = \infty$ bei einer Idealen Quelle wenn sie abgeschaltet wird 
2. 
3. 

---
## ✅ ToDo

---
## 📕 Quellen
- 
