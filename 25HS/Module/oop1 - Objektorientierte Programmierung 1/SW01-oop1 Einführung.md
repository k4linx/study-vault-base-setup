---
erstelldatum: 2026-03-05
tags:
  - einführung
  - java
  - eclipse
  - jvm
Folien:
  - 00_EclipseHS25.pdf
  - 01_Einfuehrung.pdf
---

## Einführung
Diese Zusammenfassung gibt eine kurze Übersicht über die Einrichtung der Entwicklungsumgebung (IDE) Eclipse und erläutert die grundlegenden Konzepte, Besonderheiten sowie die Funktionsweise der Programmiersprache Java.

## Eclipse IDE

### Einrichtung und Workspaces
Für die Programmierung in Java wird die Entwicklungsumgebung Eclipse verwendet. Eclipse arbeitet mit sogenannten Workspaces, in denen die Projekte und Übungen abgelegt werden. Eine integrierte OpenJDK stellt dabei den Compiler und die Java Virtual Machine (JVM) zur Verfügung. 

Damit es bei den vorgefertigten Übungsprojekten nicht zu Fehlern kommt, ist es essenziell, das Compiler Compliance Level in den Einstellungen korrekt zu setzen (z. B. auf Version 21).

![[eclipse_compiler_settings.png]]

### Projekte importieren
Bestehende Projekte (meist als `.zip` Archiv) können ganz einfach über `File -> Import... -> General -> Existing Projects into Workspace` geladen und entpackt werden.

## Grundlagen der Programmierung

Ein Programm ist im Kern eine Folge von Anweisungen, die definieren, was der Rechner tun soll. Da die eigentliche Maschinensprache für den Menschen schwer lesbar ist, wird der Code in einer Hochsprache wie Java geschrieben. Die zunehmende Komplexität von Problemen erfordert dabei eine zunehmende Abstraktion.

### Compiler und Java Virtual Machine (JVM)
In traditionellen Sprachen (wie C oder C++) wird der Code direkt für ein spezifisches Betriebssystem in Maschinensprache kompiliert. Java wählt hier einen anderen Weg, um plattformunabhängig zu sein:

1. **Kompilieren:** Der geschriebene Quellcode (`.java`) wird vom Compiler (z.B. `javac.exe`) in plattformunabhängigen **Bytecode** (`.class`) übersetzt.
2. **Ausführen:** Die plattformabhängige **Java Virtual Machine (JVM)** nimmt diesen Bytecode und übersetzt ihn erst zur Laufzeit in die maschinenspezifischen Befehle des jeweiligen Betriebssystems (Windows, macOS, Linux).

![[java_compiler_jvm.png]]

Ein klassisches, rudimentäres Java-Programm sieht vor der Kompilierung so aus:

```java
public class Hallo {
    // Haupteinstiegspunkt des Programms
    public static void main(String[] args) { 
        System.out.println("Hallo Leute"); 
    }
}
````

### Besonderheiten von Java

Neben der **Plattformunabhängigkeit** ("Write once, run everywhere") zeichnet sich Java durch weitere wichtige Eigenschaften aus:

- **Vollständig Objektorientiert:** Im Gegensatz zu C++ wurde Java von Beginn an objektorientiert konzipiert. Dies zwingt Entwickler von Anfang an zu einem guten und sauberen Programmierstil.
- **Robustheit & Einfachheit:** Typische Fehlerquellen wie Pointer-Arithmetik oder manuelle Speicherfreigabe fehlen in Java bewusst. Ein automatischer **Garbage Collector** übernimmt die Entsorgung von nicht mehr benötigten Objekten, was Programmabstürzen und Ressourcenverschwendung vorbeugt.
- **Multithreading:** Java bietet von Haus aus eine sehr gute Unterstützung für parallel ausführbare Pfade (Threads). Dadurch können aufwendige Berechnungen in den Hintergrund ausgelagert werden, sodass das Programm bedienbar bleibt.