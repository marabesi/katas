import io.mockk.mockk
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import java.time.Instant

class SmartFridgeTest {

    private val repository: SmartFridgeRepository = mockk()

    @Test
    fun `should open fridge`() {
        val now = Instant.now()
        val output = FridgeWriter()

        val fridge = SmartFridge(now, output, repository)
        fridge.open()

        Assertions.assertEquals("> Fridge Door Opened", output.read())
    }
}