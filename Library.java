import java.util.ArrayList;
public class Library{

    ArrayList <String> listOfBook = new ArrayList<String>();

  

  public int totalNumberOfBooks(){
	return listOfBook.size();	

  }


  public String addBook(String bookTitle){
	for(String book : listOfBook){
	  if(book.equalsIgnoreCase(bookTitle))
		return "Book Already exist";
	}
	listOfBook.add(bookTitle);
	return "Book added successfully";
	}

 public String borrowBook(String bookTitle){
	for(String book : listOfBook){
	    if(book.equalsIgnoreCase(bookTitle)){
		listOfBook.remove(bookTitle);
		return "Book successfully borrowed!";
	    }
	}
	return "Book does not exist";
		

}


}