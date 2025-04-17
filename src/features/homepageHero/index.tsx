import Section from "@/components/section";
import Heading from "@/components/ui/Heading";
import Search from "./search";

const HomepageHero = () => {
  return (
    <Section
      background="gradientGreen"
      className="pt-32 pb-16  sm:pt-40 sm:pb-[200px]"
      containerSize="xs"
    >
      <Heading size="lg">The mouthpiece for private GPs</Heading>
      <p className="text-center mt-6">
        Welcome to The Private GP Forum, the home for the latest industry news,
        resources and systems for private general practice.
      </p>
      <Search />
    </Section>
  );
};

export default HomepageHero;
