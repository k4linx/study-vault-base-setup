---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - python
  - numpy
  - sympy
  - matplotlib
  - arrays
  - slicing
Folien: Python
---
## Wichtige Formeln (bzw. Befehle)
### Grundoperationen (NumPy)
Für numerische Berechnungen wird die Bibliothek `numpy` (oft als `np` importiert) verwendet:
- **Konstanten:** `np.pi` ($\pi$), `np.exp(1)` ($e$)
- **Wurzel & Betrag:** `np.sqrt(x)` ($\sqrt{x}$), `np.abs(x)` ($|x|$)
- **Trigonometrie:** `np.sin(x)`, `np.cos(x)`, `np.arccos(x)` (alles im Bogenmass, siehe [[KAP4-lalg1 Funktionen und Trigonometrie|Trigonometrie]])

### Vektor- und Matrixoperationen
- **Vektor / Matrix erstellen:** `v = np.array([1-3])` oder `A = np.array([[1, 2], [1]])`
- **[[KAP5-lalg1 Skalarprodukt#Skalarprodukt|Skalarprodukt]]:** `np.dot(v, w)`
- **[[KAP6-lalg1 Vektorprodukt#Vektorprodukt (Kreuzprodukt)|Kreuzprodukt]]:** `np.cross(v, w)`
- **Norm (Länge):** `np.linalg.norm(v)`
- **[[KAP9-lalg1 Matrixalgebra#Matrix-Produkt (Falk-Schema)|Matrixprodukt]]:** `np.dot(A, B)` (Achtung: `A * B` rechnet nur elementweise!)
- **Transponierte Matrix:** `A.T`
- **Inverse Matrix:** `np.linalg.inv(A)` (Konzept aus [[KAP13-lalg1 Umkehrabbildung und inverse Matrix|Inverse Matrix]])

## Definitionen
### Slicing
Slicing beschreibt den gezielten Zugriff auf bestimmte Elemente, Zeilen oder Spalten eines Arrays (Matrix). 
Ist `A` eine Matrix, greift man folgendermassen zu (die Zählung beginnt bei 0):
- `A[1]` $\rightarrow$ Element in der 1. Zeile, 2. Spalte
- `A[1, :]` $\rightarrow$ Ganze 2. Zeile
- `A[:, 1]` $\rightarrow$ Ganze 2. Spalte
- `A[-1, 1]` $\rightarrow$ Element in der letzten Zeile, 2. Spalte

### Spezielle Matrizen initialisieren
- `np.eye(3)` $\rightarrow$ Einheitsmatrix der Dimension $3 \times 3$
- `np.zeros([2, 4])` $\rightarrow$ Nullmatrix mit 3 Zeilen und 2 Spalten
- `np.ones([2, 4])` $\rightarrow$ Matrix voller Einsen

### Symbolisches Rechnen (SymPy)
Mit der Bibliothek `sympy` können Variablen als abstrakte mathematische Symbole behandelt werden, ohne ihnen feste Zahlenwerte zuzuweisen. Das ist nützlich, um Gleichungen symbolisch zu lösen.

## Herleitungen & Beispiele
### LGS lösen mit eigenen Funktionen
Um ein [[KAP8-lalg1 Lösungen von linearen Gleichungssystemen|Lineares Gleichungssystem (LGS)]] effizient zu lösen, stellt die Vorlage zwei spezielle Funktionen bereit:
- `mrref(A)`: Führt die Gauss-Jordan-Elimination durch und liefert die Zeilenstufenform (sowie den Aufpunkt / die partikuläre Lösung).
- `mnull(A)`: Bestimmt den Nullraum (Kern) einer Matrix, was dem Richtungsvektor der homogenen Lösung entspricht.

**Beispiel:**
```python
# LGS als erweiterte Koeffizientenmatrix
Ae = np.array([[0, 3, -2, 3],
               [3, 0, -1, 6],
               [-2, 1, 0, -3]])

Aes = mrref(Ae)         # Liefert die partikuläre Lösung
riv = mnull(Ae[:,0:-1]) # Nimmt nur die Koeffizienten (ohne Konstanten) für den Richtungsvektor
````

Gleichungen symbolisch lösen

Wir wollen die Gleichung $−90+15x+15x2=0$ lösen:

```python
import sympy as sym
x = sym.Symbol('x', real=True)
loesung = sym.solve(-90 + 15*x + 15*x**2, x, dict=True)
# Resultat: [{x: -3}, {x: 2}]
```
