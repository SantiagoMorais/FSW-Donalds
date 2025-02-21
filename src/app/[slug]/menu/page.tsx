interface IRestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantMenuPage = async ({ params }: IRestaurantMenuPageProps) => {
  const { slug } = await params;
  return <p>{slug}</p>;
};

export default RestaurantMenuPage;
