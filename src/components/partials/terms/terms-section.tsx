import Image from "next/image";
import Link from "next/link";

import HeroBg from "../../../../public/images/2025-01-31.jpg";

const Terms = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content z-10">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={HeroBg}
          width={1440}
          height={577}
          priority
          alt="Terms and Conditions Background"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-20">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              <div className="text-center md:text-left">
                <h1 className="h1 font-red-hat-display mb-4">
                  Terms and Conditions
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Last Updated: {currentDate}
                </p>
              </div>
            </header>

            <div>
              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  1. Introduction
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  Welcome to Madras Bistro. These Terms and Conditions govern
                  your use of www.madrasbistro.pl and the services provided by
                  THE MADRAS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, including
                  our online food ordering system. By accessing our website or
                  placing an order, you agree to these terms.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  2. Ordering and Payment
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  When placing an order through our website:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    You must provide accurate and complete information
                  </li>
                  <li className="mb-2">
                    All prices are in PLN and include VAT
                  </li>
                  <li className="mb-2">
                    Payment is processed securely through Stripe
                  </li>
                  <li className="mb-2">
                    Orders are subject to acceptance and availability
                  </li>
                  <li className="mb-2">
                    We reserve the right to refuse service
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  3. Delivery and Collection
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  For delivery orders:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    Delivery is available within specified zones in Kraków
                  </li>
                  <li className="mb-2">
                    Delivery times are estimates and may vary based on
                    circumstances
                  </li>
                  <li className="mb-2">
                    Additional delivery charges may apply based on distance
                  </li>
                  <li className="mb-2">
                    Minimum order values may apply for delivery
                  </li>
                </ul>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  For collection orders:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    Please collect from our restaurant at the specified time
                  </li>
                  <li className="mb-2">
                    Orders not collected within 30 minutes of the specified time
                    may be disposed of
                  </li>
                  <li className="mb-2">
                    No refund will be provided for uncollected orders
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  4. Food Allergies and Dietary Requirements
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  While we take care to accurately describe our dishes:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    All dishes may contain traces of allergens
                  </li>
                  <li className="mb-2">
                    It is your responsibility to inform us of any allergies
                  </li>
                  <li className="mb-2">
                    We cannot guarantee an allergen-free environment
                  </li>
                  <li className="mb-2">
                    Please contact us directly for detailed allergen information
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  5. Cancellations and Refunds
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  Our cancellation policy:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    Orders can be cancelled before preparation begins
                  </li>
                  <li className="mb-2">
                    Once preparation has started, cancellation is not possible
                  </li>
                  <li className="mb-2">
                    Refunds will be processed through the original payment
                    method
                  </li>
                  <li className="mb-2">
                    Processing time for refunds may vary by payment provider
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  6. Quality and Complaints
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  We strive to provide high-quality food and service. If you are
                  unsatisfied:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    Contact us immediately with any issues
                  </li>
                  <li className="mb-2">
                    Provide order details and specific concerns
                  </li>
                  <li className="mb-2">
                    We will address complaints within 14 business days
                  </li>
                  <li className="mb-2">
                    Compensation, if applicable, will be decided case by case
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">7. Website Use</h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  When using our website:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">Do not attempt to breach security</li>
                  <li className="mb-2">Do not use it for unlawful purposes</li>
                  <li className="mb-2">
                    Content remains our intellectual property
                  </li>
                  <li className="mb-2">
                    We may modify or withdraw the service at any time
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  8. Limitation of Liability
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  We are not liable for:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">
                    Delivery delays due to circumstances beyond our control
                  </li>
                  <li className="mb-2">Technical issues with the website</li>
                  <li className="mb-2">Indirect or consequential losses</li>
                  <li className="mb-2">
                    Issues arising from incorrect order information
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  9. Changes to Terms
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting to the
                  website. Your continued use of our services after any changes
                  indicates acceptance of the modified terms.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  10. Governing Law
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  These terms are governed by Polish law. Any disputes will be
                  subject to the exclusive jurisdiction of the Polish courts.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  11. Contact Information
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  For any questions about these Terms and Conditions, please
                  contact us at:
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  THE MADRAS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
                  <br />
                  Plac Bohaterów Getta 2<br />
                  30-547 Kraków
                  <br />
                  Email: contact@madrasbistro.pl
                  <br />
                  Phone: +48 570 135 862
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export { Terms };
