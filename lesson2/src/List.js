function List() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const cars = [
    {
      id: 1,
      name: 'BMW',
      topSpeed: 226,
      color: 'black',
    },
    {
      id: 2,
      name: 'Mercedes',
      topSpeed: 325,
      color: 'white',
    },
    {
      id: 3,
      name: 'Tesla',
      topSpeed: 250,
      color: 'red',
    },
    {
      id: 4,
      name: 'Chevrolet',
      topSpeed: 196,
      color: 'silver',
    },
  ];

  return (
    <div className="container__center grey">
      <h2>Array list</h2>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h2>Object list</h2>
      {cars.map((car) => (
        <p key={car.id}>
          #{car.id}: {car.name} {car.topSpeed}km/h, {car.color}
        </p>
      ))}
    </div>
  );
}

export default List;
