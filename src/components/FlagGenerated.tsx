import pochiSvg from '/pochi.svg'
const FlagGenerated = ({ size = 8 }: { size?: number}) => {
  return (
    <div className="tooltip tooltip-right" data-tip="PochiPo generated">
      <img className={`w-${size.toString()}`} src={pochiSvg} alt="Pochi" />
    </div>
  )
}

export default FlagGenerated
