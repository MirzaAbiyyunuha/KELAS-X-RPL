
package mirzaoverloading;

/**
 *
 * @author Local PC
 */
public class Overloading {

    int perkalian (int a, int b){
        int hasil= a*b;
        return hasil;
    }
    
    int perkalian (int a, int b, int c){
        int hasil= a*b*c;
        return hasil;
    }
    
    int perkalian (int a, int b, int c, int d){
        int hasil= a*b*c*d;
        return hasil;
    }
    
    int perkalian(int a, int b, String penjelasan){
        System.out.println("Hasil perkalian dua bilangan " + penjelasan);
        int hasil = a * b;
        return hasil;
    }
    public static void main(String[] args) {
        // TODO code application logic here
    }
    
}
