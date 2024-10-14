import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Us

Project Jaagrukta is an Indian organization dedicated to increasing public awareness on vital issues. Our goal is to educate and empower citizens, addressing challenges unique to India. Through targeted campaigns and community involvement, we work to build an informed and proactive society. Join us in making awareness a collective effort for a brighter future.`;

export async function generateMetadata() {
  return {
    title: "About Project Jaagrukta",
    description: "Learn more about Project Jaagrukta and its mission",
    openGraph: {
      title: "About Project Jaagrukta",
      description: "Learn more about Project Jaagrukta and its mission",
      images: [
        signOgImageUrl({
          title: "Project Jaagrukta",
          label: "About Us",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
