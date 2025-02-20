import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface IRestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: IRestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  return (
    <div>
      <h1>{restaurant?.name}</h1>;
    </div>
  );
};

export default RestaurantPage;
