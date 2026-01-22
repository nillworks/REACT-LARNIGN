const BookDetails = ({ title, author }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <h2 className="text-gray-500">{author}</h2>
    </div>
  );
};

export default BookDetails;
