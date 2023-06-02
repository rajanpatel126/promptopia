import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="w-full flex-col flex-center">
        <h1 className="text-center head_text">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="text-center orange_gradient">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Promptopia is an open-source AI prompting tool for moden world to
          discover , create and share creative prompts
        </p>

        <Feed />
      </section>
    </>
  );
};

export default Home;
