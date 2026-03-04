---
erstelldatum: 2026-03-04
tags:
  - Einführung
  - Java
  - Eclipse
Folien:
  - 00_EclipseHS25.pdf
  - 01_Einfuehrung.pdf
---

## Einführung
Diese ersten Folien geben eine kurze Übersicht über die Einrichtung der Entwicklungsumgebung (IDE) Eclipse und erläutern die grundlegenden Konzepte sowie die Besonderheiten der Programmiersprache Java. Es wird gezeigt, wie Probleme abstrahiert und in Form von maschinenlesbaren Programmen gelöst werden.

## Eclipse IDE
Für die Programmierung wird die Entwicklungsumgebung Eclipse in Kombination mit einem integrierten OpenJDK verwendet. Das OpenJDK stellt dabei essenzielle Werkzeuge wie den Compiler, die Virtual Machine (VM) und das Java Development Kit (JDK) zur Verfügung. In Eclipse werden Projekte in sogenannten **Workspaces** verwaltet, in welche vorgefertigte Übungen einfach importiert werden können.

## Grundlagen der Programmierung und Java
Ein Programm ist eine Folge von Anweisungen, die definieren, was der Rechner tun soll. Da die eigentliche Maschinensprache aus reinen Zahlen besteht und für Menschen kaum lesbar ist, schreiben wir den Code in einer für Menschen verständlichen Hochsprache. Abstraktion hilft dabei, komplexe Probleme zu lösen, indem unwichtige Details in der Umsetzung ignoriert werden können.

### Compiler und Java Virtual Machine (JVM)
In Java wird der Quellcode nicht direkt in Maschinensprache übersetzt. Der Übersetzungsprozess verläuft in zwei Schritten:
1.  **Compilieren:** Der Compiler übersetzt den für Menschen lesbaren Code (z.B. `Hallo.java`) in plattformunabhängigen **Bytecode** (`Hallo.class`).
2.  **Ausführen:** Die **Java Virtual Machine (JVM)** nimmt diesen Bytecode und übersetzt ihn erst während der Laufzeit in die maschinenspezifischen Befehle des jeweiligen Betriebssystems. Das macht Java extrem portabel.

![[SW01-oop1 Einführung_bytecode_jvm.png]]


**Codebeispiel: Ein einfaches Java-Programm**
Ein rudimentärer Programmablauf (als Snippet), bevor er vom Compiler übersetzt wird:

```java
public class HelloWorld {
    // Einstiegspunkt des Programms
    public static void main(String[] args) {
        System.out.println("Hello World"); 
    }
}
```

## Besonderheiten von Java

- **Vollständig Objektorientiert:** Java wurde von Anfang an objektorientiert entwickelt, was eine gute Orientierung bietet, um sauberes Software-Design (OOP) zu erlernen.
- **Robustheit & Einfachheit:** Typische Fehlerquellen wie Pointer-Arithmetik gibt es in Java nicht. Ein besonderes Merkmal ist der **Garbage Collector**. Er übernimmt die automatische Entsorgung von nicht mehr benötigten Objekten. Das verhindert Ressourcenverschwendung und Programmabstürze.
- **Multithreading:** Java bietet gute Unterstützung für parallel ausführbare Pfade (Threads). Dadurch können aufwendige Berechnungen im Hintergrund ablaufen, ohne dass die grafische Benutzeroberfläche einfriert.