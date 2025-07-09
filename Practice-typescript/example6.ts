// ! git add . && git commit -m 'typescript-example6-02' && git push

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