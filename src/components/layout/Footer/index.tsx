"use client";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import LogoSvg from "@/svgs/Logo";
import NextLink from "next/link";

declare global {
  interface Window {
    UC_UI: {
      showSecondLayer: () => void;
      // other properties/methods as needed
    };
  }
}

export default function Footer() {
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.UC_UI) {
      window.UC_UI.showSecondLayer();
    }
  };
  return (
    <footer className="bg-slate">
      <div className="flex flex-col items-center gap-6 pt-20 max-w-screen-lg mx-auto px-5">
        <Heading size="lg" type="h2" className="text-white">
          No waiting. No faff. Find a clinician you click with.
        </Heading>
        <p className="text-center text-white">Get seen by a doctor today.</p>
        <Button as="a" href="/location-search">
          Book now
        </Button>
      </div>
      <div className="h-20 bg-[linear-gradient(180deg,#232424_0%,#191919_100%)]"></div>
      <div className="bg-coal py-10">
        <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-5 md:grid-cols-8 max-w-screen-lg mx-auto px-5">
          <div className="flex flex-col justify-between">
            <NextLink
              href="/"
              className="brightness-[10]"
              aria-label="Go to homepage via site logo"
            >
              <LogoSvg />
            </NextLink>

            <div className="flex flex-col gap-1 text-pale text-xs">
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="#"
                onClick={handleClick}
              >
                Privacy Settings
              </NextLink>

              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/cookies-policy"
              >
                Cookie and privacy policy
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/terms-and-conditions"
              >
                Terms & conditions
              </NextLink>
            </div>
          </div>

          <div className="sm:col-start-3 md:col-start-6">
            <h3 className="text-white text-[18px] font-medium">Services</h3>
            <div className="mt-2 flex flex-col items-start gap-1 text-pale text-xs">
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/location-search?service=1"
              >
                Standard consultation
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/location-search?service=2"
              >
                Extended consultation
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/location-search?service=3"
              >
                Blood test
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/location-search?service=4"
              >
                Sexual health
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/location-search?service=5"
              >
                Annual medical
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/location-search?service=6"
              >
                Video consultation
              </NextLink>
            </div>
          </div>

          <div>
            <h3 className="text-white text-[18px] font-medium">
              For Practices
            </h3>
            <div className="mt-2 flex flex-col items-start gap-1 text-pale text-xs">
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="https://herohealth.net/admins/sign-in"
              >
                Sign in
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="https://www.herohealthsoftware.net/private-care/pricing"
                target="_blank"
              >
                Pricing
              </NextLink>
            </div>
          </div>

          <div>
            <h3 className="text-white text-[18px] font-medium">
              How We Can Help
            </h3>
            <div className="mt-2 flex flex-col items-start gap-1 text-pale text-xs">
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/what-is-a-private-gp"
              >
                What is a private GP
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="/about-find-a-private-gp"
              >
                About Find A Private GP
              </NextLink>
              <NextLink
                className="opacity-60 hover:opacity-100"
                href="our-vision"
              >
                Our vision
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
