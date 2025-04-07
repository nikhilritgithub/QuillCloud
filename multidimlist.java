import java.util.*;
public class multidimlist {
    public static void main(String args[]){
        ArrayList<ArrayList<Integer>> mainList = new ArrayList<>();
        ArrayList<Integer> list1 = new ArrayList<>();
        list1.add(2); list1.add(7); list1.add(4);
        mainList.add(list1);

        ArrayList<Integer> list2 = new ArrayList<>();
        list2.add(5); list2.add(6);
        mainList.add(list2);

        ArrayList<Integer> list3 = new ArrayList<>();
        list3.add(11); list3.add(14);
        mainList.add(list3);

        System.out.println(mainList);

        ArrayList<String> l1 = new ArrayList<>();

        l1.add("mango");
        l1.add("Apple");
        l1.add("Ape");
        l1.add("Banana");
        l1.add("Lemon");
        l1.add("Cherry");

        Collections.sort(l1);
        System.out.println(l1);

    }
}
