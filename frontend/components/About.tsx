import Link from 'next/link';

export default function About() {
  return (
    <section className="relative py-20 overflow-hidden transition-all duration-500">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/about.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Bollygrad Studioz
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Empowering performing arts enthusiasts since 2012
          </p>
        </div>

        <div className="mt-20">
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p className="lead">
              Bollygrad Studioz is an Indian Production house under the banner of Bhashahome Services India LLP, which facilitates the performing arts enthusiasts under the guidance of professionals of various departments.
            </p>
            <p>
              Founded in 2012 by Dr. Ramendra Kumar Chakarwarti and Dr. Rajkumar Yadav, Bollygrad Studioz is based in New Delhi. Our professionals at BFTI impart creative education to aspiring artists.
            </p>
            <p>
              BFTI is a registered organisation under the banner of Bhashahome Services India LLP, which facilitates the performing arts enthusiasts under the guidance of professionals of various wizardries. From acting to various forms of dances, from imbibing the detailed minutiae of singing to training the nuances of instrumental music, we cover it all.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300"
            >
              Learn More
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}