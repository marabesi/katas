package com.kata.bags;

import java.util.ArrayList;
import java.util.HashMap;

public interface Bag {

    public static int BACKPACK = 0;
    public static int METALS = 1;
    public static int CLOTHES = 2;
    public static int WEAPONS = 3;
    public static int HERBS = 4;

    public void stash(Item item) throws AllBagsFull;

    public ArrayList<Item> retrieveStashedItems(int bag) throws UnknownBag;

    public HashMap<Integer, ArrayList<Item>> organizingSpell();
}
