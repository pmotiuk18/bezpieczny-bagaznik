import Image from "next/image";

import HeroBg from "../../../../public/images/2025-01-31.jpg";

const PrivacyPolicy = () => {
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
          alt="Privacy Policy Background"
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
                <h1 className="h1 font-red-hat-display mb-4">Privacy Policy</h1>
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
                  This Privacy Policy describes how THE MADRAS SPÓŁKA Z
                  OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ (hereinafter "Madras Bistro,"
                  "we," "us," or "our"), with Tax ID: 6793219296, collects,
                  uses, and shares information about you when you visit our
                  website www.madrasbistro.pl, use our online ordering system,
                  or interact with us in any other way.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  This policy complies with the Polish Personal Data Protection
                  Act and the General Data Protection Regulation (GDPR) of the
                  European Union.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  2. Information We Collect
                </h4>
                <div className="pl-4">
                  <h5 className="h5 font-black text-xl font-red-hat-display mb-3">
                    2.1 Information You Provide to Us
                  </h5>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    When you use our website and online ordering system, you may
                    provide us with:
                  </p>
                  <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-6">
                    <li className="mb-2">
                      Personal identification information (name, email address,
                      phone number, delivery address)
                    </li>
                    <li className="mb-2">
                      Payment information (processed by Stripe)
                    </li>
                    <li className="mb-2">Order history and preferences</li>
                    <li className="mb-2">
                      Any other information you choose to provide, such as
                      dietary requirements or special instructions
                    </li>
                  </ul>

                  <h5 className="h5 font-black text-xl font-red-hat-display mb-3">
                    2.2 Information We Collect Automatically
                  </h5>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                    <li className="mb-2">
                      Usage information (pages visited, time spent on the
                      website, click-through data)
                    </li>
                    <li className="mb-2">
                      Device information (IP address, browser type, operating
                      system)
                    </li>
                    <li className="mb-2">
                      Location data (based on your IP address)
                    </li>
                  </ul>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    This information is collected using Google Analytics.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  3. How We Use Your Information
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8">
                  <li className="mb-2">
                    Processing and fulfilling your orders
                  </li>
                  <li className="mb-2">
                    Communicating with you about your orders
                  </li>
                  <li className="mb-2">Improving our website and services</li>
                  <li className="mb-2">Personalizing your experience</li>
                  <li className="mb-2">
                    Sending promotional offers (with your consent)
                  </li>
                  <li className="mb-2">Complying with legal obligations</li>
                  <li className="mb-2">
                    Protecting our rights and preventing fraud
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  4. Legal Basis for Processing
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  We process your personal data based on:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8">
                  <li className="mb-2">
                    Performance of a contract (when you place an order)
                  </li>
                  <li className="mb-2">
                    Your consent (for marketing communications)
                  </li>
                  <li className="mb-2">
                    Our legitimate interests (improving our services, security
                    purposes)
                  </li>
                  <li className="mb-2">
                    Legal obligations (tax and accounting requirements)
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  5. Sharing Your Information
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  We may share your information with:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">Stripe (our payment processor)</li>
                  <li className="mb-2">
                    Service providers who help us operate our business
                  </li>
                  <li className="mb-2">
                    Legal authorities when required by law
                  </li>
                </ul>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  6. Data Retention
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  We retain your personal data for as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy, unless a
                  longer retention period is required by law. Order information
                  is kept for 5 years to comply with Polish tax regulations.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">7. Your Rights</h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  Under Polish law and the GDPR, you have the right to:
                </p>
                <ul className="text-xl text-gray-600 dark:text-gray-400 list-disc pl-8 mb-4">
                  <li className="mb-2">Access your personal data</li>
                  <li className="mb-2">Rectify inaccurate data</li>
                  <li className="mb-2">Request erasure of your data</li>
                  <li className="mb-2">Restrict or object to processing</li>
                  <li className="mb-2">Data portability</li>
                  <li className="mb-2">Withdraw consent at any time</li>
                  <li className="mb-2">
                    Lodge a complaint with the Polish Data Protection Authority
                    (Urząd Ochrony Danych Osobowych)
                  </li>
                </ul>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  To exercise these rights, please contact us using the details
                  provided below.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  8. Cookies and Similar Technologies
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  Our website uses cookies and similar technologies to enhance
                  your browsing experience. We use Google Analytics to collect
                  information about how you use our website.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  You can manage your cookie preferences through your browser
                  settings. Disabling cookies may affect the functionality of
                  our website.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  9. Data Security
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  10. Children's Privacy
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Our services are not directed to individuals under the age of
                  16. We do not knowingly collect personal information from
                  children. If you believe we have collected information from a
                  child, please contact us.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  11. Changes to This Privacy Policy
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  We may update this Privacy Policy from time to time. The
                  updated version will be indicated by an updated "Last Updated"
                  date. We encourage you to review this Privacy Policy
                  periodically.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">12. Contact Us</h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
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

              <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-4">
                  13. Data Controller
                </h4>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  The data controller for your personal information is:
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  THE MADRAS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
                  <br />
                  Tax ID: 6793219296
                  <br />
                  Plac Bohaterów Getta 2
                  <br />
                  30-547 Kraków
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export { PrivacyPolicy };
