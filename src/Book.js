import './App.css';
const Book = (props) => {
    const { img, title, quate, } = props;
    return (
        <article className='book'>
            <img id="image" src={img} alt='' />
            <h3 id="title">{title}</h3>
            <h2 id="quate">{quate}</h2>

        </article>
    );
}
export default Book;