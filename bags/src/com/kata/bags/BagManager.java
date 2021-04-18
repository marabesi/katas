package com.kata.bags;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class BagManager implements Bag {
    private HashMap<Integer, ArrayList<Item>> availableBags = new HashMap<>();

    private int[][] bagsRule = new int[][] {
            { Bag.BACKPACK, 8 },
            { Bag.METALS, 4 },
            { Bag.CLOTHES, 4 },
            { Bag.WEAPONS, 4 },
            { Bag.HERBS, 4 },
    };

    public BagManager() {
        availableBags.put(Bag.BACKPACK, new ArrayList<>());
        availableBags.put(Bag.METALS, new ArrayList<>());
        availableBags.put(Bag.CLOTHES, new ArrayList<>());
        availableBags.put(Bag.WEAPONS, new ArrayList<>());
        availableBags.put(Bag.HERBS, new ArrayList<>());
    }

    public void stash(Item item) throws AllBagsFull {
        Iterator<Map.Entry<Integer, ArrayList<Item>>> bags = availableBags.entrySet().iterator();

        while(bags.hasNext()) {
            Map.Entry<Integer, ArrayList<Item>> entry = bags.next();
            Integer bag = entry.getKey();
            ArrayList<Item> currentBag = entry.getValue();

            if (currentBag.size() < bagsRule[bag][1]) {
                currentBag.add(item);
                return;
            }
        }
        throw new AllBagsFull();
    }

    @Override
    public ArrayList<Item> retrieveStashedItems(int bag) throws UnknownBag {
        try {
            if (bagsRule[bag] != null) { }
        } catch (IndexOutOfBoundsException error) {
            throw new UnknownBag();
        }

        return availableBags.get(bag);
    }

    public HashMap<Integer, ArrayList<Item>> organizingSpell() {

        return availableBags;
    }
}
