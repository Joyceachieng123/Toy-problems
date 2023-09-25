function studentGrade() {
    // The user to input the student's mark.
    const input = "Enter student's marks";
    // Parse the input into a floating-point number.
    const mark = parseFloat(input);
   // Check if the input is not a number or is outside the valid range (0-100) and return invalid input if out f range.
    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid Input");
        return;
    }
// Declare a variable to store the grade.
    let grade;
// Determine the grade based on the mark using conditional statements.
    if (mark > 79) {
        grade = "A";
    } else if (mark >= 60 && mark <= 79) {
        grade = "B";
    } else if (mark >= 50 && mark <= 59) {
        grade = "C";
    } else if (mark >= 40 && mark <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }
// output the calculated grade
    console.log(`The student's grade is: ${grade}`);
}
// call the studentGrade function.
studentGrade();