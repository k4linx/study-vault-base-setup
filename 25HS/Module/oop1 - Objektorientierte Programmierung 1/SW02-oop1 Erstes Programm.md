---
erstelldatum: 2026-03-04
tags:
  - erstes_programm
  - variablen
  - datentypen
  - berechnungen
  - kontrollstrukturen
Folien:
  - 02_ErstesProgramm.pdf
---

## Einführung
Dieser Foliensatz gibt eine kurze Übersicht über die ersten praktischen Schritte in Java. Es wird der Weg von imperativen Anweisungen (Schritt-für-Schritt-Rezepte) über prozedurale Elemente (ausgelagerte Funktionen) bis hin zum objektorientierten Denken aufgezeigt. Zudem werden die grundlegenden Bausteine wie Syntax-Konventionen, Variablen, Datentypen, Berechnungen und erste Kontrollstrukturen (If-Else, Schleifen) eingeführt. 

## Erstes Programm und Grundbausteine
Ein Programm ist im Kern eine Aneinanderreihung von Anweisungen an den Rechner (Algorithmus). In Java sieht das klassische Einsteigerprogramm wie folgt aus:

```java
public class HelloWorld {
    // main-Methode ist der Haupteinstiegspunkt des Programms
    public static void main(String[] args) {
        // Ausgabe auf der Konsole
        System.out.println("Hello World"); 
    }
}
```

### Wichtige Notationskonventionen in Java
- **Case-Sensitivity:** Es wird strikt zwischen Gross- und Kleinschreibung unterschieden. Klassen beginnen immer mit Grossbuchstaben, Variablen und Methoden mit Kleinbuchstaben (CamelCase).
- **Semikolon:** Jede Anweisung wird zwingend mit einem Strichpunkt `;` abgeschlossen.
- **Kommentare:** Werden mit `//` für einzeilige oder `/* ... */` für mehrzeilige Kommentare geschrieben.

**Übersetzen und Ausführen:** Der geschriebene Code (`.java`) wird mittels Compiler (`javac`) in sogenannten Byte-Code übersetzt (`.class`). Dieser wird anschliessend vom Interpreter (`java`) über die Java Virtual Machine ausgeführt.

Hilfreiche Shortcuts in der Eclipse IDE erleichtern dabei die Arbeit:

- `Ctrl + Space`: Autovervollständigung
- `Shift + Ctrl + F`: Code automatisch formatieren
- `Shift + Ctrl + O`: Import-Anweisungen organisieren

Variablen und Datentypen

Variablen dienen als "Speicherboxen" für Werte. Da Java statisch typisiert ist, muss der Datentyp bei der Deklaration eindeutig festgelegt werden.

**Primitive Datentypen:**
- `int` (32 Bit), `long` (64 Bit), `short` (16 Bit), `byte` (8 Bit) für Ganzzahlen.
- `double` (64 Bit) und `float` (32 Bit) für Kommazahlen.
- `boolean` (1 Bit) für Wahrheitswerte (`true` oder `false`).

```java
// Deklaration und direkte Wertzuweisung
int laenge = 20;
int breite = 10;
float beliebigerFloat = 12.3e23f;

// Konstanten werden mit 'final' deklariert
final double g = 9.81;
```

### Berechnungen und Type-Casting
In Java gelten die üblichen mathematischen Regeln (Punkt- vor Strichrechnung, Klammern zuerst). Besondere Vorsicht ist bei der **Ganzzahldivision** geboten: Werden zwei Integer geteilt, werden die Kommastellen abgeschnitten! Für den Rest einer Division nutzt man den Modulo-Operator `%`.
$$
Rest= Divisor \bmod 
$$

**Typkonvertierung (Type-Casting):** Möchte man beispielsweise einen `float`-Wert in eine `int`-Variable speichern, muss man dies explizit angeben, da es zu Datenverlust (Abschneiden der Kommastellen) kommt:

```java
float fWert = 3.9f;
// Explizites Casting nötig
int i = (int) fWert; // i wird 3
```

**Vorsicht bei Strings:** Der `+` Operator verbindet Strings (Concatenation).

- `System.out.println("Resultat: " + 1 + 2);` gibt `Resultat: 12` aus.
- `System.out.println("Resultat: " + (1 + 2));` gibt `Resultat: 3` aus.

Kontrollanweisungen (Fallunterscheidungen und Schleifen)

Um den Programmablauf zu steuern, werden Bedingungen (`if`, `else`) und Schleifen (z.B. `while`, `for`) eingesetzt. Bedingungen prüfen auf Wahrheitswerte, wobei auf Gleichheit mit == geprüft wird.

```java
int alter = 19;

if (alter > 18) {
    System.out.println("Sie dürfen rein.");
} else {
    System.out.println("Sorry, Sie dürfen nicht rein!");
}
```