interface Props<T> {
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string
  data: T[]
}

const GenericList = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
}: Props<T>) => {
  return (
    <div>
      {data.map((item) => (
        <div key={keyExtractor(item)} className="items">
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}

export default GenericList
