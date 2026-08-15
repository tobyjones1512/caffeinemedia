import { ActionLink } from "@/components/link-arrow";
import { Container, SlateLabel } from "@/components/section";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-[72px]">
      <div aria-hidden className="blueprint pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative py-24">
        <SlateLabel>Error 404 &mdash; no such reel</SlateLabel>
        <h1 className="display-xl mt-8 max-w-[16ch] text-[clamp(2.6rem,8vw,6.5rem)] text-bone">
          This page never made the <em className="text-crema italic">cut</em>.
        </h1>
        <p className="mt-8 max-w-md text-base leading-[1.8] text-bone-dim">
          The link is broken or the page has moved. Everything the group does is
          one click away from the homepage.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ActionLink href="/" variant="solid">
            Back to the start
          </ActionLink>
          <ActionLink href="/contact">Contact</ActionLink>
        </div>
      </Container>
    </section>
  );
}
