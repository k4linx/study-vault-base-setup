---
erstelldatum: 2026-03-04
tags:
Folien:
  - algWoche03
---

## Wichtige Formeln
### Phasenverschiebung
$$
\begin{align}
\varphi = \frac{-2\pi}{T} \cdot t_{0} \\
\frac{\varphi}{2\pi} = \frac{-t_{0}}{T}
\end{align}
$$
### Rotierender Zeiger
$$
\begin{align}
\underline{y}(t) &= A \cdot e^{i(\omega t+ \varphi)} \\
\underline{y}(t) &= A \cdot e^{i \varphi} \cdot e^{i \omega t} = \underline{A} \cdot e^{i \omega t}
\end{align}
$$
### Harmonische Schwingung 
$$
y(t) = Im(\underline{y}(t))
$$
### Komplexe Amplitude (Festzeiger)
$$
\underline{A} = a \cdot e^{i \varphi}
$$

### Impedanz
#### Widerstand R
$$
R = \underline{Z} = \frac{\underline{U}}{\underline{I}}
$$
#### Kondensator
$$
\underline{Z} = \frac{1}{i \omega C} = -\frac{i}{\omega C}
$$
#### Spule
$$
\underline{Z} = i \omega L
$$
#### Serienschaltung
![[SW03 Zeiger und Wechselstromkreise_serienschaltung_impedanz.png#invert|637]]
$$
\underline{Z}_{AB}= \underline{Z}_{1}+\underline{Z}_{2}
$$
#### Parallelschaltung
![[SW03 Zeiger und Wechselstromkreise_parallelschaltung_impedanz.png#invert|460]]
$$
\frac{1}{\underline{Z}_{AB}} = \frac{1}{\underline{Z}_{1}} + \frac{1}{\underline{Z}_{2}} \Leftrightarrow \underline{Z_{AB}} = \frac{\underline{Z}_{1}+\underline{Z}_{2}}{\underline{Z}_{1}+\underline{Z}_{2}}
$$

## Definitionen
### harmonische Schwingung
Mit der [[SW02-alg Komplexe Wurzeln, Eulersche Formel#Eulersche Formel|Eulerschen Formel]] kann eine Harmonische Schwingung zu einer Komplexen Schwingung aufgeblasen, zum rechnen ist dies aber oft einfacher. dies nennt man den [[#Rotierender Zeiger|rotierenden Zeiger]] kurz Zeiger.
$$
y(t) = A \cdot cis(\omega t + \varphi) = Im(A \cdot e^{i \omega t+ \varphi})
$$
erweitert man den rotierenden Zeiger erhält man die Komplexe Amplitude $\underline{A} = A \cdot e^{i \varphi}$
$$
\underline{y}(t) = A \cdot e^{i \omega t + \varphi} = A \cdot e^{i \omega t} \cdot e^{i \varphi} = \underline{A} \cdot e^{i \omega t}
$$
Wird der Sinus verwendet so ist $y(t)$ der imaginärteil des Zeigers $Im(\underline{y}(t))$ beim Cosinus ist es der Realteil $Re(\underline{y}(t))$.
### Gleichfrequente Schwingungsüberlagerung
Überlagerung heisst Addition der Schwingungen. 
Da wir nur die Amplituden der Schwingungen Addieren müssen ist es am einfachsten die beiden Zeiger zu addieren bzw. die beiden Komplexen Amplituden.
$$
\underline{u}_{1}(t)+ \underline{u}_{2}(t) = \underline{A}_{1}\cdot e^{i \omega t} + \underline{A}_{2}\cdot e^{i \omega t} = (\underline{A}_{1}+\underline{A}_{2}) \cdot e^{i \omega t}
$$
**Beispiel:**
$$
\begin{align} \\
&u_{1}(t) = 2 \cdot \sin\left( \omega t + \frac{\pi}{3} \right) \quad
u_{2}(t) = 5 \cdot \sin\left( \omega t + \frac{7}{5}\pi \right) \\
&\underline{u}_{1}(t) = 2 \cdot e^{i \frac{\pi}{3}} \cdot e^{i \omega t} \quad \underline{u}_{2}(t) = 5 \cdot e^{i \frac{7}{5}\pi} \cdot e^{i \omega t}  \\ 
\underline{u}_{1}(t) + \underline{u}_{2}(t) &= \left(  2 \cdot e^{i \frac{\pi}{3} }+ 5 \cdot e^{i\frac{7}{5}\pi} \right) \\
&= \left(2\cos\left( \frac{\pi}{3}\right) + 2 \sin\left( \frac{\pi}{3} \right)i + 5 \cos\left( \frac{7}{5} \pi\right) + 5 \sin\left( \frac{7}{5}\pi \right)i \right) \cdot e^{i \omega t} \\
&= \left(2\cos\left( \frac{\pi}{3}\right) + 5 \cos\left( \frac{7}{5} \pi\right) + 2 \sin\left( \frac{\pi}{3} \right)i + 5 \sin\left( \frac{7}{5}\pi \right)i\right) \cdot e^{i \omega t} \\
&= ( \underset{a}{-0.5451} \underset{b}{-3.0232}i) \cdot e^{i \omega t} \\
\end{align}
$$
Nun muss der [[SW01-alg Komplexe Zahlen#Betrag und Argument|Betrag und Argument]] der komplexen Zahl berechnet werden, das ergibt $A_{1}+A_{2}$ und $\varphi$ (im [[SW02-alg Komplexe Wurzeln, Eulersche Formel#Grad $ Leftrightarrow$ Bogenmass|Gradmass]]) also unsere [[#Komplexe Amplitude (Festzeiger)]]
$$
\underline{u}_{1}(t) + \underline{u}_{2}(t) = 3.072 \cdot e^{-1.7492i} \cdot e^{i \omega t} 
$$
Daraus kann nun unsere überlagerte Schwingung umgeformt werden:
$$
u_{1}(t) + u_{2}(t) = 3.072 \cdot \sin(\omega t - 1.7492)
$$
### Zeiger in der Wechselstromtechnik
In der Wechselstromtechnik werden bei der Anwendung von [[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen#Knotensatz|Kontensatz]] und [[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen#Maschensatz|Maschensatz]] benutzt. Damit kann der Widerstand in der Wechselstromtechnik auf Kondensatoren und Spulen verallgemeinert werden dies nennt man [[Impedanz]]. 
#### Widerstand und Impedanz
Das [[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen#Ohmsches Gesetz|Ohmsche Gesetz]] in der Wechselstromtechnik folgende Funktionen:
$$
I(t) = Î \cdot \sin(\omega t + \varphi) \Rightarrow U(t) =  Û\cdot R \cdot \sin(\omega t + \varphi)
$$
Daraus ergibt sich $Û = R \cdot Î$ in der Zeigerdarstellung $\underline{U} = R\cdot \underline{I} \Rightarrow R = \frac{\underline{U}}{\underline{I}} = \underline{Z}$. Dieses $\underline{Z}$ nennt man die [[Impedanz]] 
#### Impedanz des Kondensators
Die Impedanz des Kondensators berechnet sich aus den Zeigerdarstellungen von $U(t) = Û \sin(\omega t + \varphi)$ und $I(t) = C Û \omega \sin\left( \omega t + \varphi + \frac{pi}{2} \right)$
$$
\underline{U}(t) = Û \cdot e^{i \varphi} \cdot e^{i \omega t} \ \text{und} \ \underline{I}(t) = C \cdot Û \cdot e^{i \varphi} \cdot e^{i \omega t} \cdot e^{i \frac{\pi}{2}}
$$
Wobei zu erkennen ist dass der Strom der Spannung $90°$ vorauseilt. 
Daraus ergeben sich die [[#Komplexe Amplitude (Festzeiger)|Komplexen Amplituden]]
$$
\underline{U} = Û \cdot e^{i \varphi} \ \text{und} \ \underline{I} = C \cdot Û \cdot i \omega \cdot e^{i \varphi}
$$
Da der Widerstand $R = Z = \frac{\underline{U}}{\underline{I}}$  definiert ist kann nun gekürzt werden daraus ergibt sich die Impedanz des Kondensators $\underline{Z}$:
$$
\underline{Z} = \frac{\underline{U}}{\underline{I}}=\frac{1}{i \omega C} = - \frac{i}{\omega C}
$$
#### Impedanz der Spule
Die Impedanz der Spule berechnet sich ebenfalls aus den Zeigerdarstellungen von $I(t) = Î \sin(\omega t + \varphi)$ und $U(t) = L Î \omega \sin\left( \omega t + \varphi + \frac{pi}{2} \right)$
$$
\underline{I} = Î \cdot e^{i \varphi} \ \text{und} \ \underline{U} = L \cdot Î \cdot e^{i \varphi} \cdot e^{i \omega t} \cdot e^{i \frac{\pi}{2}}
$$
Daraus leiten sich analog zum Kondensator die [[#Komplexe Amplitude (Festzeiger)|Festzeiger]] ab:
$$
\underline{I} = Î \cdot e^{i \varphi} \ \text{und} \ \underline{U} = L \cdot Î \cdot i \omega \cdot e^{i \varphi}
$$
und die Impedanz ebenfalls analog zum Kondensator
$$
\underline{Z} = \frac{\underline{U}}{\underline{I}} = i \omega L
$$
### Ableitung der harmonische Schwingung
Aus der Analysis kennen wir die [[Ableitung|Ableitungsregeln]] der Sinus Cosinus Schwingungen. Auch wissen wir das der Cosinus eine um $\frac{pi}{2}$ nach links verschobene Sinusschwingung ist. mit diesem Wissen können wir entsprechend ableiten und umwandeln.
$$
\frac{d}{dt}\sin(\omega t + \varphi) = \omega \cos(\omega t + \varphi)= \omega \sin\left( \omega t + \varphi + \frac{pi}{2} \right)
$$
[[Ableitung|Ableiten]] einer Harmonischen Schwingung bedeutet die Amplitude mit der Kreisfrequenz $\omega$ multiplizieren und mit der Phase $\frac{pi}{2}$ erhöhen.
Anders ausgedrückt:
Die Amplitude wächst um den Faktor $\omega$ und die Phase verschiebt sich um $\frac{pi}{2}$
