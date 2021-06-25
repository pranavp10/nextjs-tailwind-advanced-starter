import SEO from '@/components/SEO';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SEO />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out">
                Next js and tailwind css template
              </h1>
              <div className="max-w-3xl mx-auto">
                <h2
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150">
                  This template will help you to start the development faster without thinking of
                  setting all the aspect of frontend development
                </h2>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300">
                  <div>
                    <a
                      className="p-3 font-mono text-lg bg-gray-100 rounded-md"
                      href="https://github.com/pranavp10/nextjs-tailwind-advanced-starter"
                      target="_blank"
                      rel="noreferrer">
                      <code>Get it now</code>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <p className="mt-3 text-2xl">You get out of the box</p>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <a
                href="https://github.com/wesbos/eslint-config-wesbos"
                className="p-6 mt-6 text-left bg-gray-100 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                target="_blank"
                rel="noreferrer">
                <h3 className="text-2xl font-bold">Eslint and Prettier Setup &rarr;</h3>
                <p className="mt-4 text-xl">Find and fix problems in your JavaScript code</p>
              </a>
              <a
                href="https://nextjs.org/docs/advanced-features/module-path-aliases"
                className="p-6 mt-6 text-left bg-gray-100 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                target="_blank"
                rel="noreferrer">
                <h4 className="text-2xl font-bold">Absolute Imports &rarr;</h4>
                <p className="mt-4 text-xl">
                  Absolute imports instead of relative imports [import '@fileName']
                </p>
              </a>
              <a
                href="https://typicode.github.io/husky/#/"
                className="p-6 mt-6 text-left bg-gray-100 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                target="_blank"
                rel="noreferrer">
                <h4 className="text-2xl font-bold">Husky Pre commit hook &rarr;</h4>
                <p className="mt-4 text-xl">Husky improves your commits and more 🐶 woof!</p>
              </a>
              <Link href="/blog">
                <a className="p-6 mt-6 text-left bg-gray-100 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                  <h4 className="text-2xl font-bold">Blog Support &rarr;</h4>
                  <p className="mt-4 text-xl">Markdown/MDX blog built in support</p>
                </a>
              </Link>
              <p className="p-6 mt-6 text-left bg-gray-100 w-96 rounded-xl">
                <h4 className="text-2xl font-bold">SEO</h4>
                <ul className="list-disc mt-4 text-xl list-inside">
                  <li>Google Analytics support</li>
                  <li>Auto Sitemap generation</li>
                  <li>OpenGraph Tags</li>
                  <li>Twitter Tags (Twitter Cards)</li>
                </ul>
              </p>
            </div>
          </main>
          <footer className="flex items-center justify-center w-full h-24 border-t mt-12">
            <a
              className="flex items-center justify-center"
              href="https://pranavp10.me"
              target="_blank"
              rel="noopener noreferrer">
              Built by <span className="text-blue-600">Pranav</span>
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}
