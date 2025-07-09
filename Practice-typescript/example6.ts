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
