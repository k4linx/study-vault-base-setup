---
erstelldatum: 2025-12-01
tags:
  - analog
  - opamp
---

## 1. Invertierender Verstärker
### 1.1 Messaufbau
#### 1.1.1 Schema
![[Schema_opamp_invertierend_M1.png#invert]]
#### 1.1.2 Beschreibung

| Messgrösse | Messgerät |
| ---------- | --------- |
|            |           |

### 1.2 Messungen
#### 1.2.1 Messerwartungen

#### 1.2.2 Messresultate

#### 1.2.3 Interpretation


## Berechnungsrezept 
$$
\begin{align}
U_{(+)}=0 \\
U_{(-)}=\frac{U_{a}}{2} \\ 
U_{(-)} = U_{a}-I\cdot R_{2}= U_{e} + I \cdot R_{1} \\
I=\frac{U_{a}-U_{e}}{R_{1}+R_{2}} \\
U_{(-)} = U_{a}-R_{2}\cdot \frac{U_{a}-U_{e}}{R_{1}+R_{2}} \\
 \\
0V = U_{a}-R_{2} \cdot \frac{U_{a}-U_{e}}{R_{1}+R_{2}}
 \\
 \frac{U_{a}}{U_{e}} = V_{u} \\
\end{align}
$$