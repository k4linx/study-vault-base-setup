---
tags:
  - emtL
  - dioden
  - bipolartransistoren
  - MOSFET
  - OpAmp_digital
  - OpAmp_Analog
erstelldatum: 2025-12-06
---
# Diode
Eine Diode ist ein zweipol deren Widerstand von der Polarität und der Angelegten Spannung abhängt. In der mechanik kann die Diode mit einem Kugelventil verglichen werden (Bild Links). Ein Ideales Kugelventil macht eine rechtwinklige Kennlinie (Bild Rechts). 
![[kugelventil_schematische_darstellung.png#invert|300]] ![[kugelventil_kennlinie.png#invert|300]]

Auch eine Ideale Diode hat eine kennlinie wie im Bild oben Rechts
Eine Ideale Diode
- verhält sich wie ein Kurzschluss von Anode zu Kathode
- verhält sich wie ein Unterbruch von Kathode zu Anode
![[diode_schema.png#invert|400]]
## pn-Halbleiter
Ein pn-Halbleiter besteht aus einer seite die p-Dotiert ist und einer anderen Seite die n-Dotiert ist. 

Wenn kein Strom an den Halbleiter angeschlossen wir bildet sich am pn-Übergang eine sogenannte Sperrschicht/Grenzschicht, diese entsteht weil die überschüssigen Elektronen der [[#n-Dotierung|n-Dotierten]] Schicht langsam die Löcher in der [[#p-Dotierung|p-Dotierten]] Schicht füllen, irgendwann sind dann die Löcher soweit gefüllt dass die Elektronen nicht genug Kraft haben um die weiteren Löcher zu füllen.
### n-Dotierung
bei der n-Dotierung wird ein Halbleiter, meist Silizium oder Germanium mit elementen Verunreinigt welche 5 Atome besitzen z.B. Phosphor. Dabei bindet sich Phosphor mit den Valenzelektronen von Silizium, ein Valenzelektron vom Phospor bleibt jedoch übrig welches eine negative Ladung zur Folge hat (Elektronen Überschuss). Diese negative Ladung gibt der n-Dotierung ihren Namen
### p-Dotierung
Bei der p-Dotierung wird der Halbleiter mit Fremdatomen verunreinigt die weniger als 4 Valenzelektronen besitzen z.B. Aluminium. bei der Verbindung von Aluminium und Silizium entstehen dadurch Löcher im Elektronengitter. Das hat zur Folge das das Material Positiv geladen ist. p-Dotierung kommt von der positiven Ladung des Materials.

---
### Diodenkennlinie
![[diodenkennlinie_germanium_silizium.png#invert]]
#### Sperrspannung
Die Sperrspannung einer Diode ist die Spannung die in Sperrrichtung an der Diode anliegt $(U_{R})$. Wenn die Maximale Sperrspannung erreicht wird kommt es zum Durchbruch und der Zerstörung der Diode.
#### Sperrstrom
Eine Diode die in Sperrrichtung betrieben wird verhält sich nicht zu 100% wie ein Unterbruch es fliesst immer ein minimaler Sperrstrom. Wenn die [[#Sperrspannung]] überschritten wird, steigt der Sperrstrom rasant an und die Diode geht kaputt.

#### Durchlassspannung
Jede Diode hat wie oben schon genannt eine Kennlinie die ideal aussieht wie ein rechter Winkel. Diese Kennlinie zeigt die Sperrspannung der Diode, bei Silizium ist diese Sperrspannung ~${0.7V}$.  Bei Germanium ~$0.3V$ 
### Sperr- und Durchlassbereich
Wird eine Diode in Sperrrichtung gepolt, vergrössert sich die Sperrschicht $\rightarrow$ Die Der Widerstand der Diode steigt.
Ungekehrt, wenn die Diode in Durchlassrichtung gepolt wird verkleinert sich die Sperrschicht $\rightarrow$ Der Widerstand sinkt. Wenn die Spannung grösser wird als das Elektrische Feld der Diode leitet die Diode.

## Ermittlung der Diodenkennlinie
#### Durchlassbereich
Eine Stromfehlerschaltung wird zur Messung einer Diode in Durchlassrichtung verwendet.
![[Stromfehlerschaltung_diode.png#invert]]

#### Sperrbereich
Eine Spannungsfehlerschaltung wird zur Messung einer Diode im Sperrbereich verwendet.
![[spannungsfehlerschaltung_diode.png#invert]]

# Bipolartransistor
Ein Bipolartransistor ist eigentlich nur zwei Dioden die gegeneinander gepolt wurden. Es gibt jedoch ein paar unterschiede zur Diode. Ein Bipolartransistor kann zur Verstärkung oder als Schalter verwendet werden.
![[bipolartransistor_schichtenmodell.png#invert|200]]![[bipolartransistor_schema.png#invert|200]]![[bipolartransistor_diodendarstellung.png#invert|200]]

| Anschluss | Name      | Beschreibung          | Dotierungsstärke    |
| --------- | --------- | --------------------- | ------------------- |
| E         | Emitter   | Sendet Ladungsträger  | stark dotiert       |
| B         | Basis     |                       | mittelstark dotiert |
| C         | Collector | Sammelt Ladungsträger | schwach dotiert     |
Es gibt zwei verschiedene Arten von bipolartransistoren

## npn Transistor
![[npn_transistor.png#invert]]
Beim npn Transistor ist der Emitter und der Collector jeweils n-dotiert und die Basis p-dotiert. Die Spannung am npn Transistor ist positiv. **VZS**

## pnp Transistor
![[pnp Transistor.png#invert]]

Beim pnp Transistor ist der emitter und Collector jeweils p-dotiert und die Basis n-dotiert. Die Spannung am pnp Transistor ist negativ. **EZS**


---
![[bipolartransistor_erklärung.png#invert]]
Der Bipolartransistor wird über eine Steuerspannung $U_{BE}=0.7V$ gesteuert. Wenn diese Spannung anliegt wird die diode von der Basis zum Emitter in Durchlassrichtung geschaltet. Dabei werden wenige Elektronen von  der n-Schicht des Emitters von der Basis angezogen und es fliesst ein kleiner Basisstrom $I_{B}$. der grösste Teil der Elektronen fliessen aber zum Collector dieser wird leitend und es fliesst $I_{C}$

### Kennlinien bipolartransistor
![[bipolartransistor_kennlinien.png#invert]]
Die Eingangskennlinie ist wie die einer [[#Diode]]. 

Die an der Übertragungskennlinie kann der Verstärkungsfaktor $B$ abgelesen werden. die Formel lautet.
$$
B= \frac{I_{C}}{I_{B}}
$$
Die Ausgangskennlinie beschreibt den Collectorstrom $I_{C}$ bei einem bestimmten  Basisstrom $I_{B}$ Der Anstieg der Kennlinie an einem bestimmten Punkt nennt man differentiellen Ausgangswiderstand $r_{CE}$ 
$$
r_{CE} = \frac{\Delta U_{CE}}{\Delta I_{C}} = \frac{U_{CE2}-U_{CE1}}{I_{C2}-I_{C1}}
$$
Der Sättigungsbereich befindet sich auf der linken seite der Ausgangskennlinie (im Bild) von $0-2V$ 

Der Verstärkungsbereich ist auf der rechten Seite der Ausgangskennlinie wo die Kennlinien fast linear sind. Er ist in 

# Feldeffekt Transistor
Der Feldeffekt Transistor wird im gegensatz zum Bipolar Transistor mit einer Steuerspannung betrieben. 



Die Steuerkennlinie lässt sich als Parabel beschreiben:
$$
I_{D}=I_{DSS}\left( 1- \frac{U_{GS}}{U_{P}} \right)^{2}
$$
Für Verstärker-Anwendungen wird die Steilheit verwendet
$$
s=\frac{\Delta I_{D}}{\Delta U_{GS}} = - \frac{2I_{DSS}}{U_{P}}\left( 1- \frac{U_{GS}}{U_{P}} \right)
$$
$$
s= \frac{-2}{U_{P}}\cdot \sqrt{I_{D}\cdot I_{DSS}}
$$
Die Abschnürung eines FETs entsteht dadurch dass am Gate Pin eine Spannung angelegt wird. Diese Spannung führt dazu dass sich eine Sperrschicht (schwarz im Bild) von der p-dotierten Schicht bildet und so den Widerstand im Transistor erhöht bis der Strom nicht mehr fliessen kann.
![[bildung der Sperrschicht.png#invert]]
## Schwellenspannung
$U_{P}$ beschreibt die Schwellenspannung, solange die Gatespannung kleiner als die Schwellenspannung ist leitet der Transistor abhängig davon wie gross $U_{GS}$ ist. Ist $U_{GS}= U_{P}$ findet eine Abschnürung statt, das bedeutet der Transistor sperrt und es kann kein Strom mehr fliessen.
![[Kennlinienfeld_n-kanal-FET.png]]

### Arten von FETs
![[FET_arten_Tabelle.png#invert]]


# OpAmp

Ein OpAmp verstärkt das Eingangssignal um einen Faktor ~$1'000'000$.
Der OpAmp hat 2 Eingänge und
![[opamp_schema_erklärung.png#invert]]

$(+)$: Nicht invertierender Eingang
$(-)$: Invertierender Eingang
$(+V_s)$: Versorgungsspannung Positiv
$(-V_{S})$: Versorgungsspannung negativ
$(A)$: (rechts) Ausgang

---
Es fliesen keine Ströme in die Eingänge 
$$
I_{p}=I_{N}= 0
$$
Die Ausgangsspannung ist proportional zur Spannungsdifferenz zwischen den Eingängen $U_{e}= U_{P}-U_{N}$. gilt aber nur solange wie die Ausgangsspannung $U_{a}$ zwischen $U_{a,max}$ und $U_{a,min}$ liegt. Beim Idealen OpAmp zwischen $V_{cc+}$ und $V_{cc-}$.
$$
U_{a} = A \cdot U_{e} = A \cdot (U_{P}-U_{N})
$$
in die Eingänge fliessen keine Ströme:
$$
I_{P}=I_{N}= 0
$$
![[uebertragungskennlinie_opamp.png#invert|400]]

## Digital (Komparator)
Der Digitale OpAmp auch Komparator genannt ist ein OpAmp ohne Gegenkopplung so wird am Ausgang entweder High oder Low geschaltet. Die Kennlinie eines Komparators sieht eher wie folgt aus
![[komarator_uebertragungskennlinie.png#invert|400]]
## Analog
Ein Analoger OpAmp ist meistens mit Gegenkopplung vorzufinden, um Unerwünschte Effekte wie Rückkopplung bei einem Mikrofon das an einem Audio Verstärker angeschlossen ist zu verhindern.

### Invertierender OpAmp
![[Schema_opamp_invertierend_M1.png#invert]]
Der Verstärkungsfaktor $V_{u}$ wird beim Invertierenden Verstärker wie folgt berechnet:
$$
V_{u} = \frac{-R_{2}}{R_{1}}
$$
### Nichtinvertiernder OpAmp
![[Nichtinvertierender_opamp_M2.png#invert]]

Beim Nichtinvertierenden OpAmp wird $V_{u}$ wie folgt berechnet:
$$
V_{u}=1+ \frac{R_{2}}{R_{1}}
$$
