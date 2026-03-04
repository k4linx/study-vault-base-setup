---
erstelldatum: 2026-03-04
tags:
  - variablen
  - datentypen
  - gui
  - kontrollanweisungen
Folien:
  - 05_VariablenundBerechnungen.pdf
  - 07_Kontrollanweisungen_.pdf
---
## Einführung
Dieser Abschnitt behandelt die verschiedenen primitiven Datentypen, das Verhalten bei Typumwandlungen (Type-Casting) sowie die Einbindung von ersten grafischen Elementen wie Textfeldern. Zudem werden die wichtigsten Kontrollanweisungen zur Steuerung des Programmablaufs erklärt.

## Variablen, Datentypen und Berechnungen
Java unterscheidet verschiedene primitive Datentypen. Für Ganzzahlen gibt es `byte` (8 Bit), `short` (16 Bit), `int` (32 Bit) und `long` (64 Bit). Für Gleitkommazahlen werden `float` (32 Bit) und `double` (64 Bit) verwendet, welche nach dem IEEE Standard 754 gespeichert werden. Für logische Operationen (Wahrheitswerte) steht `boolean` zur Verfügung.

Bei allen Berechnungen gilt immer die klassische Regel "Punkt vor Strich". 

### Type Casting (Typumwandlung)
Mischen sich Datentypen in einer algebraischen Operation, wird das Resultat implizit zum präziseren Typ gewandelt (z.B. von `int` zu `double`). Bei der Umwandlung von einem grösseren in einen kleineren Datentyp muss jedoch explizit gecastet werden, da Kommastellen abgeschnitten werden und dies potenziell verlustbehaftet ist.

![[type_casting.png]]

Besondere Vorsicht gilt bei der Ganzzahldivision:
```java
int n = 7, N = 5;

// Resultat ist 1.0, da N und n vom Typ int sind und zuerst eine Ganzzahldivision stattfindet
double rFalsch = n / N; 

// Resultat ist 1.4 durch den expliziten Cast in double VOR der Division
double rKorrekt = (double) n / N; 
````

### Erweiterte Zuweisung

Operatoren wie `+=` oder `*=` sind Kurzschreibweisen. Sie beinhalten netterweise automatisch auch einen Type-Cast zum Zieltypen. Mathematisch ausgedrückt: a += b \quad \text{entspricht} \quad a = a + b

### String-Operationen

Zeichenketten werden in Java mit dem Operator `+` verbunden (Concatenation). Sobald ein Operand ein String ist, wird die andere Seite automatisch in einen String gewandelt. Das Setzen von runden Klammern ist hier wichtig, falls noch gerechnet werden soll.

```java
int zahl = 42;
System.out.println("The answer is " + (zahl + 1)); // Gibt 43 aus
```

### Erste GUI-Elemente

Um interaktive Eingaben und Ausgaben zu ermöglichen, bietet das Swing-Toolkit Klassen wie `JTextField` und `JLabel`. Da ein Textfeld Eingaben immer nur als Text (Strings) liefert, müssen numerische Werte für Berechnungen konvertiert (geparst) werden.

```java
// Text auslesen und in eine Fliesskommazahl umwandeln
double amp = Double.parseDouble(tfAmp.getText());

// Ergebnis wieder als String verketten und ins Textfeld schreiben
tfAmp.setText("" + amp);
```

## Kontrollanweisungen

Kontrollstrukturen erlauben es, bestimmte Code-Blöcke nur unter fest definierten Bedingungen auszuführen.

### If-Else und logische Verknüpfungen

Die `if`-Anweisung prüft eine Bedingung auf `true` oder `false`. Über `else` kann eine Alternative für den False-Fall definiert werden. Die Bedingungen können über logische Operatoren wie `&&` (UND), `||` (ODER) oder `!` (NICHT) verknüpft werden. **Wichtig:** Während primitive Datentypen mit == verglichen werden, müssen Strings zwingend mit der Methode `equals()` verglichen werden!

```java
int alter = 12;

if ((alter > 6) && (alter <= 16)) {
    g.drawString("halber Preis", 100, 100);
} else {
    g.drawString("voller Preis", 100, 100);
}
```

### Switch-Case Anweisung

Bei einer Auswahl aus vielen konkreten Sprungzielen (z. B. auf Ganzzahlen oder Strings geprüft) ist die `switch`-Anweisung oft eleganter als viele verschachtelte If-Anweisungen. Ein `break` am Ende eines Falls ist essenziell, damit nicht auch die folgenden Anweisungen nach einem Treffer durchlaufen werden.

```java
String sorte = "Feldschlösschen";

switch (sorte) {
    case "Feldschlösschen":
        System.out.println(sorte + " schmeckt gut");
        break;
    case "Ueli":
        System.out.println(sorte + " schmeckt besser");
        break;
    default:
        System.out.println("Bin Teetrinker");
}
```