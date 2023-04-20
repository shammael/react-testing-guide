const Person = ({ name }: { name: string }) => {
  return (
    <div id="test" data-testid="name">
      Name is {name}
    </div>
  );
};

export default Person;
