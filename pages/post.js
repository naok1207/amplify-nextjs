import Head from "next/head";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
  console.log("================== check env");
  console.log(process.env);
  // this query grabs the data!
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
  return { props: { posts } };
};

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Amplify Hosting + Prisma!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Prisma!</h1>
        <div className={styles.grid}>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.card}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
