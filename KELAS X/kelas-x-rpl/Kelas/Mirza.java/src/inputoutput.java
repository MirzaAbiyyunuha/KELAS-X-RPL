


import java.util.Scanner;
public class inputoutput {

   
    public static void main(String[] args) {
        Scanner inputUser = new Scanner(System.in);
        System.out.println("inputkan nama anda :");
        String nama= inputUser.nextLine();
        System.out.println("Nama yang di input : "+nama);
        
        System.out.println("nomor tanggal :");
        int tanggal= inputUser.nextInt();
        System.out.println("nomor tanggal :"+tanggal);
        
        System.out.println("nilai anda :");
        double nilai= inputUser.nextDouble();
        System.out.println("nilai anda :  "+nilai);
        
         System.out.println("berapa uang sakumu : ");
        float uang= inputUser.nextFloat();
        System.out.println(" uang sakumu : "+uang+"f");
       
        
        
        
    }
    
    
}
