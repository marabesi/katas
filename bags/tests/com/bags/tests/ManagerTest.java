package com.bags.tests;

import com.kata.bags.*;
import org.junit.jupiter.api.*;

import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class ManagerTest {

    @Test
    public void stash_an_item_without_category_into_backpack() throws AllBagsFull, UnknownBag {
        Item iron = new Item("Rose", Bag.HERBS);
        BagManager manager = new BagManager();
        manager.stash(iron);

        Item stashed = manager.retrieveStashedItems(Bag.BACKPACK).get(0);

        Assertions.assertSame(stashed, iron);
    }

    @Test
    public void stash_an_item_with_category_into_empty_backpack() throws AllBagsFull, UnknownBag {
        Item iron = new Item("Rose", Bag.HERBS);
        BagManager manager = new BagManager();
        manager.stash(iron);

        Item stashed = manager.retrieveStashedItems(Bag.BACKPACK).get(0);

        Assertions.assertSame(stashed, iron);
    }

    @Test
    public void not_allow_to_use_unknown_bag() {
        BagManager manager = new BagManager();
        assertThrows(UnknownBag.class, () -> {
            manager.retrieveStashedItems(99999999).get(0);
        });
    }

    @Test
    public void bags_starts_empty() throws UnknownBag {
        BagManager manager = new BagManager();
        Assertions.assertEquals(0, manager.retrieveStashedItems(Bag.BACKPACK).size());
        Assertions.assertEquals(0, manager.retrieveStashedItems(Bag.METALS).size());
        Assertions.assertEquals(0, manager.retrieveStashedItems(Bag.CLOTHES).size());
        Assertions.assertEquals(0, manager.retrieveStashedItems(Bag.WEAPONS).size());
        Assertions.assertEquals(0, manager.retrieveStashedItems(Bag.HERBS).size());
    }

    @Nested
    public class WhenBackpackIsFullTest {
        private BagManager manager;

        private Item[] items = {
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
                new Item("Rose", Bag.HERBS),
        };

        @BeforeEach
        void setUp() throws AllBagsFull {
            manager = new BagManager();
            for (Item item: items) {
                manager.stash(item);
            }
        }

        @AfterEach
        void tearDown() {
            manager = null;
        }

        @Test
        public void stash_eight_items_in_the_backpack_and_one_in_the_extra_bag() throws AllBagsFull, UnknownBag {
            manager.stash(new Item("Leather", Bag.CLOTHES));
            Assertions.assertEquals(1, manager.retrieveStashedItems(Bag.METALS).size());
        }

        @Test
        public void stash_into_second_extra_bag_when_first_one_is_full() throws AllBagsFull, UnknownBag {
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            Assertions.assertEquals(1, manager.retrieveStashedItems(Bag.CLOTHES).size());
        }

        @Test
        public void stash_into_third_extra_bag_when_first_second_is_full() throws AllBagsFull, UnknownBag {
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            Assertions.assertEquals(1, manager.retrieveStashedItems(Bag.WEAPONS).size());
        }

        @Test
        public void stash_into_fourth_extra_bag_when_first_third_is_full() throws AllBagsFull, UnknownBag {
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            manager.stash(new Item("Coffee", Bag.METALS));
            Assertions.assertEquals(1, manager.retrieveStashedItems(Bag.HERBS).size());
        }

        @Test
        public void do_not_allow_to_stash_items_when_all_bags_are_full() throws AllBagsFull {
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));
            manager.stash(new Item("Coffee", Bag.WEAPONS));

            assertThrows(AllBagsFull.class, () -> {
                manager.stash(new Item("Coffee", Bag.BACKPACK));
            });
        }
    }
}
