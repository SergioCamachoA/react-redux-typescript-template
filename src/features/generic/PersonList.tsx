import GenericList from "./GenericList"

export const PersonList = () => {
  return (
    <GenericList
      data={[
        { id: "0", firstName: "yes", lastName: "last" },
        { id: "1", firstName: "te", lastName: "last" },
        { id: "2", firstName: "yeefews", lastName: "last" },
        { id: "3", firstName: "weres", lastName: "last" },
      ]}
      keyExtractor={({ id }) => id}
      renderItem={({ firstName, lastName }) => (
        <>
          <h1>{firstName}</h1>
          <h2>{lastName}</h2>
        </>
      )}
    />
  )
}
