function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let h_meter = height / 100;
  let BMI = weight / (h_meter * h_meter);
  alert(`Your BMI result is :${BMI}`);
  {
    if (BMI < 18.5) {
      alert("BMI state: Underweight, download Talabat");
    } else if (BMI >= 18.5 && BMI < 24.9) {
      alert("BMI state: Healthy weight");
    } else if (BMI >= 25 && BMI < 29.9) {
      alert("BMI state: Over weight");
    } else {
      alert("BMI state: obesity (You look great anyway <3)");
    }
  }

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert("noraml weight for your age");
  } else if (age > 24 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert("noraml weight for your age");
  } else if (age > 34 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert("noraml weight for your age");
  } else if (age > 44 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert("noraml weight for your age");
  } else if (age > 54 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert("noraml weight for your age");
  } else if (age > 65 && BMI >= 20 && BMI <= 25) {
    alert("noraml weight for your age");
  } else if (BMI < 18.5) {
    alert("BMI state: Underweight for all ages");
  } else if (BMI >= 18.5 && BMI < 24.9) {
    alert("BMI state: Healthy weight for all ages");
  } else if (BMI >= 25 && BMI < 29.9) {
    alert("BMI state: Over weight for all ages");
  } else {
    alert("BMI state: Handsome for all ages");
  }
}
