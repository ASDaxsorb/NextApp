import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Pokemon = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <h1>
        {data.name} #{data.id}
      </h1>
      <Image
        src={data.sprites.front_default}
        height={300}
        width={300}
        alt={`${data.name} sprite`}
      />
      <Link href="/">Back</Link>
    </div>
  );
};

export default Pokemon;

// export const getServerSideProps = async ({ params }) => {
//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${params.id}`
//     );
//     const data = await response.json();

//     return { props: { data } };
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getStaticProps = async ({ params }) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    const data = await response.json();

    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }];

  return {
    paths,
    fallback: "blocking",
  };
};
