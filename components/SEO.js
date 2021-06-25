import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const SEO = ({
  BaseTitle = 'Next js and tailwind advanced starter',
  description = 'Next js and tailwind advanced starter which contains absolute import, SEO, Performance and Blog',
  imageUrl = 'https://nextjs-tailwind-advanced-starter.vercel.app/SEO.png',
  slug,
}) => {
  const title = BaseTitle;
  const baseUrl = process.env.NEXT_PUBLIC_HOSTED_URL;
  const url = slug ? `${baseUrl}${slug}` : baseUrl;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title: `${title}`,
        description: `${description}`,
        images: [{ url: imageUrl }],
      }}
    />
  );
};
SEO.propTypes = {
  BaseTitle: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
};
export default SEO;
