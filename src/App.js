import logo from './logo.svg';
import './App.css';
import { books } from './books'
import Book from './Book'


function App() {
  return (
    <div>
      <div className='btribute'><marquee>Small Tribute To Bhagat Singh "इनकलाब जिंदाबाद"</marquee></div>
      <section className='quatelist'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </div>
  );
}

export default App;
