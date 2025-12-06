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

Wenn kein Strom an den Halbleiter angeschlossen wir bildet sich am pn-Übergang eine sogenannte Sperrschicht, diese entsteht weil die überschüssigen Elektronen der [[#n-Dotierung|n-Dotierten]] Schicht langsam die Löcher in der [[#p-Dotierung|p-Dotierten]] Schicht füllen, irgendwann sind dann die Löcher soweit gefüllt dass die Elektronen nicht genug Kraft haben um die weiteren Löcher zu füllen.
### n-Dotierung
bei der n-Dotierung wird ein Halbleiter, meist Silizium oder Germanium mit elementen Verunreinigt welche 5 Atome besitzen z.B. Phosphor. Dabei bindet sich Phosphor mit den Valenzelektronen von Silizium, ein Valenzelektron vom Phospor bleibt jedoch übrig welches eine negative Ladung zur Folge hat (Elektronen Überschuss). Diese negative Ladung gibt der n-Dotierung ihren Namen
### p-Dotierung
Bei der p-Dotierung wird der Halbleiter mit Fremdatomen verunreinigt die weniger als 4 Valenzelektronen besitzen z.B. Aluminium. bei der Verbindung von Aluminium und Silizium entstehen dadurch Löcher im Elektronengitter. Das hat zur Folge das das Material Positiv geladen ist. p-Dotierung kommt von der positiven Ladung des Materials.

---
Jede Diode hat wie oben schon genannt eine Kennlinie die ideal aussieht wie ein rechter Winkel. Diese Kennlinie zeigt die Sperrspannung der Diode, bei Silizium ist diese Sperrspannung ~${0.7V}$. 

Wenn die Diode in Durchlassrichtung gepolt ist und die Sperrspannung an der Anode überschritten wird steigt der fliessende Strom rasant an. 

Schaltet man eine Diode in Sperrrichtung