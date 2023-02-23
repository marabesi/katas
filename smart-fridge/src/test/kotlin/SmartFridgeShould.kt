import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import java.time.Instant

class SmartFridgeShould {
    val output = FridgeWriter()

    @Test
    fun `open and close fridge with different items`() {
        val now = Instant.parse("2018-10-21T00:00:00Z")
        val output = FridgeWriter()
        val repository = InMemoryRepository()

        val fridge = SmartFridge(now, output, repository)

        fridge.open()
        fridge.add(Item("Milk", Instant.parse("2021-10-21T00:00:00Z"), "sealed"))
        fridge.add(Item("Cheese", Instant.parse("2021-11-18T00:00:00Z"), "sealed"))
        fridge.add(Item("Beef", Instant.parse("2021-10-20T00:00:00Z"), "sealed"))
        fridge.add(Item("Lettuce", Instant.parse("2021-10-22T00:00:00Z"), "sealed"))
        fridge.close()
        fridge.dayOver()

        fridge.open()
        fridge.close()

        fridge.open()
        fridge.close()

        fridge.open()
        fridge.remove("Milk")
        fridge.close()

        fridge.open()
        fridge.add(Item("Milk", Instant.parse("2021-10-26T00:00:00Z"), "opened"))
        fridge.add(Item("Peppers", Instant.parse("2021-10-23T00:00:00Z"), "opened"))
        fridge.close()

        fridge.dayOver()

        fridge.open()
        fridge.remove("Beef")
        fridge.remove("Lettuce")
        fridge.close()

        fridge.open()
        fridge.add(Item("Lettuce", Instant.parse("2021-10-22T00:00:00Z"), "opened"))
        fridge.close()

        fridge.open()
        fridge.close()

        fridge.dayOver()

        fridge.summary()

        Assertions.assertEquals(
            """
> Set Current Date - "18/10/2021"

> Fridge Door Opened
> Item added - name: "Milk", expiry: "21/10/21", condition: "sealed"
> Item added - name: "Cheese", expiry: "18/11/21", condition: "sealed"
> Item added - name: "Beef", expiry: "20/10/21", condition: "sealed"
> Item added - name: "Lettuce", expiry: "22/10/21", condition: "sealed"
> Fridge Door Closed

> (Day Over)

> Fridge Door Opened
> Fridge Door Closed

> Fridge Door Opened
> Fridge Door Closed

> Fridge Door Opened
> Item removed - name: "Milk"
> Fridge Door Closed

> Fridge Door Opened
> Item added - name: "Milk", expiry: "26/10/21", condition: "opened"
> Item added - name: "Peppers", expiry: "23/10/21", condition: "opened"
> Fridge Door Closed

> (Day Over)

> Fridge Door Opened
> Item removed - name: "Beef"
> Item removed - name: "Lettuce"
> Fridge Door Closed

> Fridge Door Opened
> Item added - name: "Lettuce", expiry: "22/10/21", condition: "opened"
> Fridge Door Closed

> Fridge Door Opened
> Fridge Door Closed

> (Day Over)

EXPIRED:

Cheese    - 27 days remaining
Milk      - 4 days remaining
Peppers   - 1 day remaining
Lettuce   - 0 days remaining
            """.trimIndent(),
            output.read()
        )
    }
}