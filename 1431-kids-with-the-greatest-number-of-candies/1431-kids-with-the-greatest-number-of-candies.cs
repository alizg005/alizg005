public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) 
{
               
                int maxCandies = candies.Max();

         List<bool> result = new List<bool>();

        foreach (int kidCandies in candies) {
            result.Add(kidCandies + extraCandies >= maxCandies);
        }

        return result;
}
}