type Params = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "second-post" },
    { slug: "hello-world" },
    { slug: "next-js-tutorial" },
    { slug: "react-tips" },
  ];
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return (
    <>
      <h1>Slug: {slug}</h1>
      <p>Hello world2!</p>
    </>
  );
}
