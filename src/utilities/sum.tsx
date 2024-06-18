// Utility: محاسبه مجموع دو عدد
import React from 'react';
export interface SumProps{
    num1: number;
    num2: number;
}
const Sum = ({ num1, num2 }:SumProps) => {
    const sum = num1 + num2;
    return <div>مجموع: {sum}</div>;
};

export default Sum;