function calculateNetSalary(basicSalary, benefits) {
    // Calculate the gross salary by adding basic salary and benefits.
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Income Tax) based on income brackets.
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
        paye = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
    } else {
         paye = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + (grossSalary - 800000) * 0.35;
    }

    // Calculate NHIF deduction based on income brackets.
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    // Calculate NSSF contribution based on income brackets.
    let nssfContribution = 0;
    if (grossSalary <= 6000) {
         nssfContribution = grossSalary * 0.06;
    } else if (grossSalary <= 18000) {
      nssfContribution = grossSalary * 0.06;
    }

    // Calculate net salary by subtracting PAYE, NHIF deduction, and NSSF contribution from the gross salary.
    const netSalary = grossSalary - (paye + nhifDeduction + nssfContribution);

    // Return the calculated values as an object.
    return {
        grossSalary,
        paye,
        nhifDeduction,
        nssfContribution,
        netSalary
    };
}

// Example usage:
const basicSalary = 53000; // Replace with the actual basic salary
const benefits = 200;   // Replace with the actual benefits
const result = calculateNetSalary(basicSalary, benefits);

// Display the results.
console.log("Gross Salary:", result.grossSalary);
console.log("PAYE (Tax):", result.paye);
console.log("NHIF Deduction:", result.nhifDeduction);
console.log("NSSF Contribution:", result.nssfContribution);
console.log("Net Salary:", result.netSalary);