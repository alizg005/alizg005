public class Solution {
    public string MergeAlternately(string word1, string word2) {

        string mergedString = "";
        for (int i = 0; i < word1.Length + word2.Length; i++){
            if( i < word1.Length){
                mergedString += word1[i];
            }

            if(i < word2.Length){
                mergedString+=word2[i];
            }
            

        }
        return mergedString;
    }
}