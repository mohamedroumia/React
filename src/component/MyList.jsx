function MyListItem({ item }) {
  return (
    <li>
      <p>{item.name}</p>
    </li>
  );
}

export function MyLiat({ items = [] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <MyListItem key={index} item={item} />
      ))}
    </ul>
  );
}
