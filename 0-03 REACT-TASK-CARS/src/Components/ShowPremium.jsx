const ShowPremium = ({ showPremium, onShowPremium }) => {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="checkbox"
        checked={showPremium}
        onChange={() => onShowPremium(isTrue => !isTrue)}
      />
      <label>ShowPremium</label>
    </div>
  );
};

export default ShowPremium;
