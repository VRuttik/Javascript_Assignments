// 1] 

class Student {
  static serviceTax = 12.3; 

  constructor(rollNo, name, course) {
    this.rollNo = rollNo;
    this.name = name;
    this.course = course;
    this.feePaid = 0;

    if (course === 'C#') {
      this.courseFee = 2000;
    } else if (course === 'ASP.NET') {
      this.courseFee = 3000;
    } else {
      throw new Error('Invalid course');
    }
  }

  payment(amount) {
    if (amount <= 0) {
      throw new Error('Payment amount must be positive');
    }
    this.feePaid += amount;
  }

  print() {
    document.write(`<b>Roll No:</b> ${this.rollNo}  <br>`);
    document.write(`<b>Name:</b> ${this.name} <br>`);
    document.write(`<b>Course:</b> ${this.course} <br>`);
    document.write(`<b>Fee Paid:</b> ${this.feePaid} <br>`);
    document.write(`<b>Total Fee:</b> ${this.totalFee} <br>`);
    document.write(`<b>Due Amount:</b> ${this.dueAmount} <br><br>`);
  }

  get dueAmount() {
    return this.totalFee - this.feePaid;
  }

  get totalFee() {
    return this.courseFee + (this.courseFee * Student.serviceTax / 100);
  }

  static get serviceTaxRate() {
    return Student.serviceTax;
  }

  static set serviceTaxRate(value) {
    if (value < 0) {
      throw new Error('Service tax rate cannot be negative');
    }
    Student.serviceTax = value;
  }
}


const student1 = new Student(1, 'John Doe', 'C#');
student1.payment(500);
student1.print();

Student.serviceTaxRate = 15.0; 
const student2 = new Student(2, 'Jane Smith', 'ASP.NET');
student2.payment(1000);
student2.print();
