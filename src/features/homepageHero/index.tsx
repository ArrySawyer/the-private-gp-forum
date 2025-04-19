import Section from "@/components/section";
import Heading from "@/components/ui/Heading";
import Search from "./search";

const HomepageHero = () => {
  return (
    <Section className="pt-2 pb-0" containerSize="full">
      <div className="bg-gradient-green rounded-3xl px-4 pt-32 sm:pt-40 pb-[200px]">
        <Heading size="lg">The mouthpiece for private GPs</Heading>
        <p className="text-center mt-6">
          Welcome to The Private GP Forum, the home for the latest industry
          news, resources and systems for private general practice.
        </p>
        <Search />
      </div>
    </Section>
  );
};

export default HomepageHero;
