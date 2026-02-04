import TopHome from './Components/TopHome';

const App = () => {
  const itemList = [
    { id: crypto.randomUUID(), value: 'Home' },
    { id: crypto.randomUUID(), value: 'About' },
    { id: crypto.randomUUID(), value: 'Contact' },
    { id: crypto.randomUUID(), value: 'Footer' },
  ];

  console.log(itemList);

  const arr = [];
  itemList.forEach(item => {
    const liList = <li key={item.id}>{item.value}</li>;
    arr.push(liList);
  });

  return (
    <>
      <TopHome />
    </>
  );
};

export default App;
