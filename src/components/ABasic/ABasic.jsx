const ABasic = (props) => {
  const { testProp } = props;

  return (
    <div className="ABasic">
      ABasic
      <div data-testId="test-prop-id">{testProp}</div>
    </div>
  );
};

export default ABasic;
