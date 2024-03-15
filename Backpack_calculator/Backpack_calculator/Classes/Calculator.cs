using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;
using Backpack_calculator.Classes;

namespace Backpack_calculator.Classes
{
    public class Calculator
    {

        // want user to be able to to change their weight therefor its a set; too. 
        public double AmountEntered { get; set; } 

        public Calculator(double amountEntered)
        {

            AmountEntered = amountEntered;
        }

        public double CalcutorOfBodyWeight()
        {
            // take the 20% of their weight
            double percentage = 20.0;
            double backpackWeight = (percentage / 100) * AmountEntered;


            return backpackWeight;
        }

        public double PoundsToGram()

        {
            // making constant from pounds to gramm 
            const double AMOUNT_TO_GRAMS = 453.59237;
            // calculate from pounds to grams:
            double measurement = AmountEntered * AMOUNT_TO_GRAMS;
            // calculate given percentage into grams 
            double bpWeightInGrams = CalcutorOfBodyWeight() * AMOUNT_TO_GRAMS;



            return bpWeightInGrams;
        }


    }
}
