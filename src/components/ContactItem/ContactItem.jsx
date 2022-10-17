export const ContactItem = ({ id, name, number }) => {
  return (
    <div>
      <p>
        {name} : {number}
      </p>
    </div>
  );
};
