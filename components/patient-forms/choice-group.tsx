export function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  columns = 1,
}: {
  label: string
  options: { value: string; label: string }[]
  value: string | undefined
  onChange: (value: string) => void
  columns?: 1 | 2
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-800 mb-2.5">{label}</p>
      <div className={columns === 2 ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"}>
        {options.map((option) => {
          const selected = value === option.value
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={selected}
              className={`min-h-[48px] w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                selected
                  ? "border-green-600 bg-green-50 text-green-800"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 active:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
