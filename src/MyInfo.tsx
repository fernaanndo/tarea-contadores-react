export function MyInfo() {
  const name = "Esteban";
  const lastName = "Vilches";

  const favoriteAnimes: string[] = [
    "Naruto",
    "Attack on Titan",
    "the apothecary Diaries",
  ];

  const address = {
    zipCode: "ABC-12345",
    city: "Santiago",
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>

      <h2>Animes Favoritos</h2>
      <ul>{favoriteAnimes.join(" -> ")}</ul>

      <span>{JSON.stringify(address)}</span>
    </>
  );
}
