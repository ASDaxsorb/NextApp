import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const url = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();

  return (
    <li>
      <Link href={`/${url}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Home({ pokemons }) {
  return (
    <div>
      <p>Pokemons</p>
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    return {
      props: { pokemons: data.results },
    };
  } catch (error) {
    console.log(error);
  }
};
