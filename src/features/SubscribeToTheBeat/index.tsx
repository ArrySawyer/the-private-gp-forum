import Section from "@/components/section";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const SubscribeToTheBeat = () => {
  return (
    <Section containerSize="lg" className="pt-0 -translate-y-[calc(50%-30px)]" containerClassName="max-w-[calc(var(--screen-lg)+var(--spacing)*8)] px-4">
      <div className="bg-dark-purple text-white rounded-3xl py-10 px-8 xs:px-12 flex flex-col gap-6 items-start justify-between xs:flex-row xs:items-center">
        <div>
          <Heading center={false} size="md" type="h2">
            Subscribe to The Beat
          </Heading>
          <p className="mt-5 leading-[150%] tracking-[-0.32px]">
            Our 1-minute monthly newsletter, direct to your inbox.
          </p>
        </div>
        <Button variant="secondary" as="a" href="/subscribe">Subscribe</Button>
      </div>
    </Section>
  );
};

export default SubscribeToTheBeat;
