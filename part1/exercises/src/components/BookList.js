export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://www.beyondthebookends.com/wp-content/uploads/2022/12/The-Celebrants-by-Steven-Rowley.jpeg";
   let book2 = "https://www.beyondthebookends.com/wp-content/uploads/2023/02/The-Little-Village-of-Book-Lovers-.jpg";
   let book3 = "https://www.beyondthebookends.com/wp-content/uploads/2023/05/The-Six.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Celebrants" />
         <img src={book2} alt="The Little Village of Book Lovers" />
         <img src={book3} alt="The Six" />
      </div>      
   );
}