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


// 2] 

class Course {
  constructor(name, duration, fee) {
    this.name = name;
    this.duration = duration;
    this.fee = fee;
  }

  print() {
    document.write(`<b>Name:</b> ${this.name}<br>`);
    document.write(`<b>Duration:</b> ${this.duration}<br>`);
    document.write(`<b>Fee:</b> ${this.fee.toFixed(2)}<br><br>`);
  }

  getTotalFee() {
    return this.fee;
  }
}

class PartTimeCourse extends Course {
  constructor(name, duration, fee, timing) {
    super(name, duration, fee);
    this.timing = timing;
  }

  print() {
    super.print();
    document.write(`<b>Timing:</b> ${this.timing}<br>`);
  }

  getTotalFee() {
    return this.fee * 0.90;
  }
}

class OnsiteCourse extends Course {
  constructor(name, duration, fee, companyName, numCandidates) {
    super(name, duration, fee);
    this.companyName = companyName;
    this.numCandidates = numCandidates;
  }

  print() {
    super.print();
    document.write(`<b>Company Name:</b> ${this.companyName}<br>`);
    document.write(`<b>Number of Candidates:</b> ${this.numCandidates}<br>`);
  }

  getTotalFee() {
    return this.fee * 1.10;
  }
}

const partTimeCourse = new PartTimeCourse('Web Development', '6 months', 1000, 'Evenings');
partTimeCourse.print();
document.write(`<b>Total Fee:</b> $${partTimeCourse.getTotalFee().toFixed(2)} <br>`);

const onsiteCourse = new OnsiteCourse('Data Science', '3 months', 1500, 'Tech Corp', 20);
onsiteCourse.print();
document.write(`<b>Total Fee:</b> $${onsiteCourse.getTotalFee().toFixed(2)}<br>`);

document.write("----------------------------------------------------<br><br>");

