export function RatingScale({
  label,
  min,
  max,
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  label: string
  min: number
  max: number
  value: number | undefined
  onChange: (value: number) => void
  lowLabel?: string
  highLabel?: string
}) {
  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i)

  return (
    <div>
      <p className="text-sm font-semibold text-gray-800 mb-2.5">{label}</p>
      <div className="flex gap-1.5 sm:gap-2">
        {options.map((n) => {
          const selected = value === n
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              aria-pressed={selected}
              className={`flex-1 min-h-[44px] rounded-lg border text-sm font-semibold transition-colors ${
                selected
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 active:bg-gray-50"
              }`}
            >
              {n}
            </button>
          )
        })}
      </div>
      {(lowLabel || highLabel) && (
        <div className="flex justify-between mt-1.5 text-[11px] text-gray-400">
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      )}
    </div>
  )
}
