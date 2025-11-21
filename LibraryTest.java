import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class LibraryTest{


	Library library;
	
	@BeforeEach
	void setup(){
	   library = new Library();
	}
	

	@Test
	public void testThatLibraryHasNoBook(){
	// Arrange 


	// Act
	int result = library.totalNumberOfBooks();
	 
	//Assert
	assertEquals(result, 0);
	}

	@Test
	public void testThatOneBookIsAddedToTheLibraryAndTheTotalNumberOfBooksIsOne(){

	//Arrange
	
	//Act 
	String response = library.addBook("Things Fall Apart");
	
	//Assert
	assertEquals(response, "Book added successfully");	
	}


	@Test
	public void testThatOneBookIsAddedToTheLibraryAndTheTotalNumberOfBookIsOne(){

	//Arrange
	
	
	//Act
	library.addBook("Independence by Sarah Ladipo Manyika");

	int result = library.totalNumberOfBooks();
	
	//Assert
	assertEquals(result, 1);
	}


	@Test
	public void testThatWeCanAddMultipleBooks(){

	//Arrange
	
	//Act
	library.addBook("Independence by Sarah Ladipo Manyika");
	library.addBook("Subtle art of not giving a f**K");
	library.addBook("Nearly all the Men in Lagos are Mad.");

	int result = library.totalNumberOfBooks();
	
	//Assert
	assertEquals(result, 3);	

	}

	@Test
	public void testThatYouCantAddTheSameBookTwice() {
	
	library.addBook("Eniife is so cool.");
	library.addBook("Eniife is so cool.");

	int result = library.totalNumberOfBooks();

	assertEquals(result,1);

	}

	@Test
	public void testThatYouCanBorrowBook(){
	
	library.addBook("Independence by Sarah Ladipo Manyika");
	library.borrowBook("Independence by Sarah Ladipo Manyika");
	
	int result = library.totalNumberOfBooks();

	assertEquals(result, 0);

	}

	@Test
	public void testThatYouCanNotBorrowABookThatDoesNotExist() {
	
	String actual = library.borrowBook("Eniife");
	
	assertEquals(actual, "Book does not exist");
	}


























}