export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }

      <p className="Person__partner">
        { marriedLine(isMarried, partnerName, sex) }
      </p>
    </section>
  );
};

const marriedLine = (isMarried, partnerName, sex) => (
  isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : `I am not married`
);