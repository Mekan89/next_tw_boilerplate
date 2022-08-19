import Layout from "components/Layout";
import ThemeToggler from "components/ThemeToggler";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="next_tw_starter">
      <ThemeToggler />
      <h1 className="text-3xl font-bold">Next Tailwind Boilerplate</h1>
      <p className="text-slate-800 dark:text-slate-300">This is some text.</p>
    </Layout>
  );
};

export default Home;
