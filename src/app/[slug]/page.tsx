interface IRestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: IRestaurantPageProps) => {
  const { slug } = await params;
  return <h1>{slug}</h1>;
};

export default RestaurantPage;
