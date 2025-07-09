// ! git add . && git commit -m 'typescript-example6-05' && git push

// 🟡 S — Single Responsibility Principle (SRP)
// "Una clase debe tener una única responsabilidad o razón para cambiar."
class Invoice {
  constructor(public amount: number) {}

  calculateTotal(): number {
    return this.amount * 1.19; // IVA 19%
  }
}

class InvoicePrinter {
  print(invoice: Invoice): void {
    console.log(`Total: ${invoice.calculateTotal()}`);
  }
}
// 👉 Aquí Invoice solo calcula y InvoicePrinter imprime. Cada uno tiene su única responsabilidad.
// *------------------------------------------------------------
// 🔵 O — Open/Closed Principle (OCP)
// "Las clases deben estar abiertas para extensión, pero cerradas para modificación."
interface Discount {
  apply(price: number): number;
}

class NoDiscount implements Discount {
  apply(price: number): number {
    return price;
  }
}

class PercentageDiscount implements Discount {
  constructor(private percentage: number) {}

  apply(price: number): number {
    return price - price * (this.percentage / 100);
  }
}

class PriceCalculator {
  constructor(private discount: Discount) {}

  finalPrice(price: number): number {
    return this.discount.apply(price);
  }
}
// 👉 Puedes agregar nuevos descuentos sin modificar PriceCalculator.
// *--------------------------------------------------------------------
// 🔴 L — Liskov Substitution Principle (LSP)
// "Las clases hijas deben poder sustituir a sus clases padres sin alterar el comportamiento esperado."
class Bird {
  fly(): void {
    console.log('Flying...');
  }
}

class Eagle extends Bird {}
class Parrot extends Bird {}

// ❌ Incorrecto:
class Penguin extends Bird {
  fly(): void {
    throw new Error("Penguins can't fly!");
  }
}
// 👉 El Penguin rompe el principio, ya que no puede comportarse como un Bird.
// *--------------------------------------------------------------------------------
// 🟢 I — Interface Segregation Principle (ISP)
// "Los clientes no deben estar forzados a depender de interfaces que no usan."

// ❌ Mala práctica:
interface Animal {
  walk(): void;
  fly(): void;
  swim(): void;
}

/*
class Dog4 implements Animal {
  walk() {}
  fly() {} // no tiene sentido
  swim() {}
}
*/
// ✅ Buena práctica:
interface Walkable {
  walk(): void;
}

interface Swimmable {
  swim(): void;
}

class Dog4 implements Walkable, Swimmable {
  walk() {}
  swim() {}
}
// 👉 Se crean interfaces más pequeñas y específicas.
// *------------------------------------------------------------
// 🟣 D — Dependency Inversion Principle (DIP)
// "Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones."

// ✅ Correcto:
interface ILogger {
  log(message: string): void;
}

class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(`Log: ${message}`);
  }
}

class App {
  constructor(private logger: ILogger) {}

  run(): void {
    this.logger.log('Aplicación iniciada');
  }
}

const logger = new ConsoleLogger();
const app = new App(logger);
app.run();
// 👉 App depende de una abstracción (ILogger), no de una implementación concreta (ConsoleLogger).
// *------------------------------------------------------------------------------------------------

/**✅ Conclusión
Los principios SOLID en TypeScript te permiten:

Escribir código más limpio y modular

Facilitar pruebas y mantenimiento

Escalar tus aplicaciones sin dolor */
