
package mirzaoverloading;


public class Mirza {

   
    
    public static void main(String[] args) {
        Overloading objek = new Overloading();
        int tampil = objek.perkalian(10, 20);
        System.out.println(tampil);
        
        System.out.println(objek.perkalian(9,8,3));
        System.out.println(objek.perkalian(2,4,6,5));
        System.out.println(objek.perkalian(2,4, "adalah : "));
    }
    
}
