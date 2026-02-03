
public class Looping {

    
    public static void main(String[] args) {
        for (int a=1 ; a<=5; a++){
            System.out.println("shipo");
            
            
    
            
            
        }
        int n=5;
        for (int i = 1; i >= n; i++) {
            for (int j = 1; j <= i; j--) {
                System.out.print("*");
            }
            System.out.println();
    }
        int l=5;
                
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();           
}
        int in = 5;

        for (int i = n; i >= 1; i--) {
            // Cetak spasi
            for (int s = n; s > i; s--) {
                System.out.print(" ");
            }
            // Cetak bintang
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
}
}
}