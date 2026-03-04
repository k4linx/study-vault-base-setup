---
erstelldatum: 2026-03-05
tags:
  - erstes programm
  - variablen
  - datentypen
  - kontrollanweisungen
Folien:
  - 02_ErstesProgramm.pdf
---

## Erstes Programm und Grundbausteine

### Was ist ein Programm?
Ein Programm ist im Grunde eine Art Rezept, also eine Aneinanderreihung von Anweisungen, die dem Rechner sagen, was er tun soll (Algorithmus). Dabei bedient man sich imperativer Sprachelemente. Wenn sich wiederholende Vorgänge in Unterprogramme, Funktionen oder Methoden ausgelagert werden, spricht man von prozeduralen Sprachelementen.

### Hello World und Notationskonventionen
Jedes Java-Programm benötigt zwingend mindestens eine Klasse, welche als Bauplan dient. Um das Programm auszuführen, wird zudem die `main`-Methode als Haupteinstiegspunkt benötigt.

```java
public class HelloWorld {
    // Haupteinstiegspunkt des Programms
    public static void main(String[] args) {
        // Textausgabe auf der Konsole
        System.out.println("Hello World"); 
    }
}
````

Die Programmierung in Java unterliegt strengen Notationskonventionen:

- **Case-Sensitivity:** Gross- und Kleinschreibung wird strikt unterschieden.
- **Namensgebung:** Klassen beginnen immer mit einem Grossbuchstaben. Objekte, Variablen und Methoden beginnen mit Kleinbuchstaben (üblicherweise im CamelCase-Format). Die Namen dürfen Ziffern und Underscores enthalten, müssen aber mit einem Buchstaben beginnen.
- **Semikolon:** Jeder Befehl (Statement) wird mit einem Strichpunkt `;` abgeschlossen.
- **Kommentare:** Einzeilige Kommentare werden mit `//` eingeleitet, mehrzeilige Blöcke mit `/* ... */`.

Übersetzen und Ausführen

Der in einer für Menschen lesbaren Sprache verfasste Quellcode (`.java`) wird vom Compiler (dem Befehl `javac`) in einen plattformunabhängigen Byte-Code (`.class` Datei) übersetzt. Der Interpreter (Befehl `java`) startet anschliessend die Java Virtual Machine (JVM), welche diesen Byte-Code ausführt. IDEs wie Eclipse erleichtern diese Arbeitsschritte extrem und bieten zudem hilfreiche Tastenkürzel (z. B. `Shift + Ctrl + F` zum automatischen Formatieren des Codes).

Variablen und Berechnungen

Deklaration und Primitive Datentypen

Variablen fungieren als Platzhalter oder "Speicherboxen" für Werte. Weil Java statisch typisiert ist, muss der Datentyp einer Variablen bereits während der Compilierzeit eindeutig feststehen. Zu den wichtigsten primitiven Datentypen gehören:

- **Ganzzahlen:** `int` (32 Bit) und `long` (64 Bit). Sie werden im Zweierkomplement gespeichert.
- **Gleitkommazahlen:** `float` (32 Bit) und `double` (64 Bit, Standard in Java).
- **Wahrheitswerte:** `boolean` (1 Bit, `true` oder `false`).

```java
// Variablendeklaration
int laenge, breite, flaeche;

// Wertzuweisung
double kommaZahl = 42.42;

// Konstanten werden mit dem Keyword 'final' deklariert
final double g = 9.81;
```

Typkonvertierung (Type-Casting) und Konsolenausgabe

Wenn ein Datentyp in einen anderen mit einem kleineren Wertebereich umgewandelt wird (z. B. von `float` zu `int`), muss dies **explizit** angegeben werden. Dieser Vorgang ist oft verlustbehaftet, da Kommastellen einfach abgeschnitten werden.

```
float fWert = 3.9f;
// Explizites Casten ist hier zwingend notwendig
int i = (int) fWert; // Das Resultat ist 3
```

Bei Konsolenausgaben mit `System.out.println` werden Variablen und Strings mit einem `+` Zeichen verknüpft (Concatenation). Soll dazwischen jedoch mathematisch gerechnet werden, müssen zwingend Klammern gesetzt werden!

- Ohne Klammern: `"Resultat: " + 1 + 2` führt zur Ausgabe `Resultat: 12`
- Mit Klammern: `"Resultat: " + (1 + 2)` führt zur korrekten Ausgabe `Resultat: 3`

Kontrollanweisungen

If-Else Bedingung

Kontrollstrukturen erlauben es, bestimmte Programmteile nur dann auszuführen, wenn definierte Bedingungen (Conditions) erfüllt sind. Das einfachste Konstrukt hierfür ist die `if-else` Anweisung. **Achtung:** Um primitive Variablen auf exakte Gleichheit zu prüfen, verwendet man das doppelte Gleichheitszeichen `==` (ein einfaches `=` ist rein für Wertzuweisungen reserviert).

```
int alter = 19;

if (alter > 18) {
    System.out.println("Sie dürfen rein.");
} else {
    System.out.println("Sorry, Sie dürfen nicht rein!");
}
```

![[uml_aktivitaetsdiagramm_if_else.png]]