using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backpack_calculator.Classes;

namespace Backpack_calculator.Classes
{
    public class UI
    {
        public double BackpackWeight { get; set; } 
        public double BpWeightInGrams { get; set; }

        //public UI(double backpackWeight, double bpWeightInGrams)
        //{
        //    BackpackWeight = backpackWeight;
        //    BpWeightInGrams = bpWeightInGrams;
        //}

        
        public void WeightQuestions()
        {
            // ask person what is their weight
            Console.WriteLine(" Please enter your weight in pounds: ");
            // input from user
            string inputOfWeight = Console.ReadLine();
            // answer needs to be converted from string to double
            double amountEntered = double.Parse(inputOfWeight);
            // show user entered amount in lbs
            Console.WriteLine($"You entered {amountEntered} in pounds."); 
            // Tell user their weight of backpack should not exceed 20% of their body weight
            Console.WriteLine(" A loaded backpack should not weight more than 20% of your body weight. Here is a suggestion how much your backpack should weight: ");
            // show them the result

            // instensiate a calculatingweight object
            Calculator calculatingWeight = new Calculator(amountEntered);
            BackpackWeight = calculatingWeight.CalcutorOfBodyWeight();
            BpWeightInGrams = calculatingWeight.PoundsToGram();

            Console.WriteLine($"Your backpack should weight no more than {BackpackWeight}# or {BpWeightInGrams} grams.");
            
        }
    }
}
