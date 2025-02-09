import pochiSvg from '/pochi.svg'
const FlagGenerated = () => {
  return (
    <div className="tooltip tooltip-right" data-tip="PochiPo generated">
      <img className={`w-8`} src={pochiSvg} alt="Pochi" />
    </div>
  )
}

export default FlagGenerated
