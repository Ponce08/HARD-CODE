type Employee = {
  name: string;
  age: number;
};

type Statuss = {
  working: boolean;
  sex: 'Masculine' | 'Femenine';
};

type TypeEmployee = Employee & Statuss;

function typeUser(obj: TypeEmployee): void {
  console.log(`My name is ${obj.name} and i'm ${obj.age} years old. My sex is ${obj.sex}`);
}

typeUser({ name: 'Yonathan', age: 35, sex: 'Masculine', working: true });
