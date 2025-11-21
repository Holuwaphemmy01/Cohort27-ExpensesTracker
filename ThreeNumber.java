import java.util.Scanner;
public class ThreeNumber{
    
    public static void main(String []args){

    Scanner scanner = new Scanner(System.in);
  	
	int sum = 0;

    System.out.print("Enter first number:");
	
	int firstNumber = scanner.nextInt();

    System.out.print("Enter second number:");
	
     	int secondNumber = scanner.nextInt();

    System.out.print("Enter third number:");
	
	int thirdNumber = scanner.nextInt();

	sum = firstNumber + secondNumber+ thirdNumber;

    System.out.print(sum);
    
    }

}
 




	 










