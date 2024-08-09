import { Container, Title, Categories, SortPopup } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />

        <div className="flex justify-between">
          <Categories />

          <SortPopup />
        </div>
      </Container>
    </>
  );
}
