---
erstelldatum: 2026-03-04
tags:
  - grafik
  - bibliotheken
  - objekte
  - methoden
Folien:
  - 03_GrafikEinfuehrung.pdf
  - 03bWasBisherGeschah.pdf
  - 04_MethodenundParameter.pdf
---
## Einführung
Dieser Abschnitt behandelt die Grundlagen der Grafikausgabe in Java, wie man vorgefertigte Bibliotheken nutzt und instanziiert. Darauf aufbauend wird das Konzept der Methoden eingeführt, welches zur Strukturierung und Wiederverwendbarkeit von Code essenziell ist.

## Grafikeinführung und Bibliotheken
Java stellt über seine Libraries nützliche, bereits vorgefertigte Klassen zur Verfügung. Diese sind in sogenannten Packages strukturiert.
*   `java.lang`: Enthält allgemeine Klassen wie `System` oder `Math` und wird automatisch eingebunden.
*   `javax.swing`: Ein Toolkit für Grafik und GUI-Klassen.
*   Um spezifische Klassen nutzen zu können, müssen diese importiert werden (z.B. `import java.awt.Color;`).

Um Grafiken zu zeichnen, nutzt man das `Graphics`-Objekt (meist als Variable `g` übergeben), welches wie eine digitale Kreide funktioniert:
*   `g.setColor(Color.yellow)` setzt die Zeichenfarbe.
*   `g.drawRect(...)` und `g.fillRect(...)` zeichnen leere bzw. gefüllte Rechtecke.
*   `g.fillOval(...)` zeichnet einen gefüllten Kreis/Oval.
*   `g.drawString("Text", x, y)` schreibt Text auf den Bildschirm.

Für mathematische Berechnungen steht die statische `Math`-Bibliothek bereit. Man kann ihre Funktionen direkt aufrufen, ohne ein Objekt erstellen zu müssen:

$$
y = x^5
$$

```java
// Berechnung mit der Math-Bibliothek
double y = Math.pow(x, 5.0);
double zufall = Math.random(); // Zahl zwischen 0 und 1
````

### Primitive Datentypen vs. Objekte

Während primitive Datentypen (wie `int`) einfach nur einen bestimmten Speicherplatz (z.B. 32 Bit) reservieren und direkt den Wert halten, sind Objekte komplexere Datentypen. Ein Objekt muss nach seinem Bauplan (der Klasse) erst instanziiert werden. Dies geschieht mit dem Schlüsselwort `new`:

```java
// Primitiver Datentyp (Deklaration und Zuweisung)
int x = 0;

// Objekt (Typ, Name, und Zuweisung/Instanziierung über Konstruktor)
HelloWorldPanel view = new HelloWorldPanel();
```

### Methoden und Parameter

Methoden sind prozedurale Elemente, die Code-Blöcke zusammenfassen. Sie reduzieren Redundanzen (Copy-Paste-Fehler), machen den Code modularer und erhöhen die Abstraktionsebene.

#### Methodenkopf und Methodenkörper

Eine Methode besteht immer aus zwei Teilen:

1. **Methodenkopf (Signatur):** Definiert die Zugriffsrechte (_Access specifier_), den Rückgabetyp (_Return Type_), den Namen der Methode und die zu übergebenden Parameter (_Arguments_).
2. **Methodenkörper:** In geschweiften Klammern `{ ... }` steht die eigentliche Programmlogik. Hier deklarierte Variablen leben nur lokal innerhalb der Methode auf dem sogenannten Stack und werden danach gelöscht.

```java
// Access Specifier (public), Return Type (double), Name (berechneBMI), Parameter (gewicht, groesse)
public double berechneBMI(double gewicht, double groesse) {
    // Methodenkörper
    return gewicht / (groesse * groesse); 
}
```

Rückgabewerte (Return Value) und Überladung

- **Mit Rückgabewert:** Das Schlüsselwort `return` gibt das Resultat an die aufrufende Stelle zurück und beendet die Methode sofort.
- **Ohne Rückgabewert:** Erledigt eine Methode nur eine Aufgabe (z.B. etwas zeichnen), wird als Return Type `void` deklariert. Ein `return` ist dann nicht nötig.
- **Methoden überladen:** Eine Methode kann denselben Namen wie eine andere haben, solange sich die Parameter (Anzahl oder Datentyp) unterscheiden. Der Compiler weiss dann anhand der übergebenen Argumente, welche Methode aufgerufen werden soll.

```java
// Methode ohne Rückgabewert (void)
public void zeigeNachricht(Graphics g) {
    g.drawString("Hallo!", 50, 50);
}

// Überladene Methode (gleicher Name, aber mit zusätzlichem Parameter)
public void zeigeNachricht(Graphics g, String text) {
    g.drawString(text, 50, 50);
}
```