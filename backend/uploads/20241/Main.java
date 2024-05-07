/**
 * Main
 */


 class Solution {
  
    public String getWrongAnswers(int N, String C) {
      // Write your code here
      for(int i=0;i<C.length();i++){
        if(C.charAt(i)=='A'){
            C.replace('A', 'B');
        }else{
            C.replace('B', 'A');
        }
      }
      return "";
    }
    
  }
  

public class Main {

    public static void main(String[] args) {

    }
}