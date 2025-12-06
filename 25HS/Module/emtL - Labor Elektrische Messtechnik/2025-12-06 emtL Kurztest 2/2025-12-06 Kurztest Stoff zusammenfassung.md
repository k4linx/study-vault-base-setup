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
Eine Diode die in sperrrichtung betrieben wird verhält sich nicht zu 100% wie ein Unterbruch es fliesst immer ein minimaler Sperrstrom. Wenn die [[#Sperrspannung]] überschritten wird, steigt der Sperrstrom rasant an und die Diode geht kaputt.

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
Ein Bipolartransistor ist eigentlich nur zwei Dioden die gegeneinander gepolt wurden. Es gibt jedoch ein paar unterschiede zur Diode.
![[bipolartransistor_schichtenmodell.png#invert|200]]![[bipolartransistor_schema.png#invert|200]]![[bipolartransistor_diodendarstellung.png#invert|200]]

| Anschluss | Name      | Beschreibung          | Dotierungsstärke    |
| --------- | --------- | --------------------- | ------------------- |
| E         | Emitter   | Sendet Ladungsträger  | stark dotiert       |
| B         | Basis     |                       | mittelstark dotiert |
| C         | Collector | Sammelt Ladungsträger | schwach dotiert     |
Es gibt zwei verschiedene Arten von bipolartransistoren

## npn Transistor
Beim npn Transistor ist der Emitter und der Collector jeweils n-dotiert und die Basis p-dotiert.

## pnp Transistor
Beim pnp Transistor ist der emitter und Collector jeweils p-dotiert und die Basis n-dotiert.

---
![[bipolartransistor_erklärung.png#invert]]
Der Bipolartransistor wird über eine Steuerspannung $U_{BE}=0.7V$ gesteuert. Wenn diese Spannung anliegt wird die diode von der Basis zum Emitter in Durchlassrichtung geschaltet. Dabei werden wenige Elektronen von  der n-Schicht des Emitters von der Basis angezogen und es fliesst ein kleiner Basisstrom $I_{B}$. der grösste Teil der Elektronen fliessen aber zum Collector dieser wird leitend und es fliesst $I_{C}$

# Feldeffekt Transistor
