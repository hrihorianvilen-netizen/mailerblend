import Link from "next/link";
import { Container, Section } from "@/components/ui";
import { ChevronDown } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue/40 to-blue/60 text-white">
        <Container>
          <div className="text-center py-12 sm:py-16 md:py-20 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 sm:mb-6">GDPR Resources</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              The new data protection legislation is in effect! Are you compliant?
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base"
            >
              Download GDPR Box Kit
            </Link>
          </div>
        </Container>
      </Section>

      {/* Security Features Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-0">
            {securityFeatures.map((feature, index) => {
              const isBlueIcon = [1, 2, 5, 6, 9].includes(index);
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-400 rounded-2xl p-6 sm:p-8 security-card-shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto ${
                    isBlueIcon ? 'bg-blue' : 'bg-[#A8DADC]'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-light-cyan/30">
        <Container>
          <div className="py-8 sm:py-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-3 sm:space-y-4 max-w-8xl mx-auto">
              {faq.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <summary className="font-semibold text-sm sm:text-base text-gray-900 flex justify-between items-center cursor-pointer">
                    {item.question}
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-2" />
                  </summary>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-900 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// Data
const securityFeatures = [
  {
    icon: <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.5625 10.9375C26.5625 9.6943 27.0564 8.50201 27.9354 7.62294C28.8145 6.74386 30.0068 6.25 31.25 6.25H43.75C44.9932 6.25 46.1855 6.74386 47.0646 7.62294C47.9436 8.50201 48.4375 9.6943 48.4375 10.9375H53.125C54.3682 10.9375 55.5605 11.4314 56.4396 12.3104C57.3186 13.1895 57.8125 14.3818 57.8125 15.625V39.0625H54.6875V15.625C54.6875 15.2106 54.5229 14.8132 54.2299 14.5201C53.9368 14.2271 53.5394 14.0625 53.125 14.0625H48.4375C48.4375 15.3057 47.9436 16.498 47.0646 17.3771C46.1855 18.2561 44.9932 18.75 43.75 18.75H31.25C30.0068 18.75 28.8145 18.2561 27.9354 17.3771C27.0564 16.498 26.5625 15.3057 26.5625 14.0625H21.875C21.4606 14.0625 21.0632 14.2271 20.7701 14.5201C20.4771 14.8132 20.3125 15.2106 20.3125 15.625V59.375C20.3125 59.7894 20.4771 60.1868 20.7701 60.4799C21.0632 60.7729 21.4606 60.9375 21.875 60.9375H40.625V64.0625H21.875C20.6318 64.0625 19.4395 63.5686 18.5604 62.6896C17.6814 61.8105 17.1875 60.6182 17.1875 59.375V15.625C17.1875 14.3818 17.6814 13.1895 18.5604 12.3104C19.4395 11.4314 20.6318 10.9375 21.875 10.9375H26.5625ZM31.25 9.375C30.8356 9.375 30.4382 9.53962 30.1451 9.83265C29.8521 10.1257 29.6875 10.5231 29.6875 10.9375V14.0625C29.6875 14.4769 29.8521 14.8743 30.1451 15.1674C30.4382 15.4604 30.8356 15.625 31.25 15.625H43.75C44.1644 15.625 44.5618 15.4604 44.8549 15.1674C45.1479 14.8743 45.3125 14.4769 45.3125 14.0625V10.9375C45.3125 10.5231 45.1479 10.1257 44.8549 9.83265C44.5618 9.53962 44.1644 9.375 43.75 9.375H31.25ZM35.9375 25V29.6875H31.25V32.8125H35.9375V37.5H39.0625V32.8125H43.75V29.6875H39.0625V25H35.9375ZM43.75 42.1875C43.3356 42.1875 42.9382 42.3521 42.6451 42.6451C42.3521 42.9382 42.1875 43.3356 42.1875 43.75V54.3578C42.1876 56.1583 42.6321 57.931 43.4817 59.5184C44.3314 61.1059 45.5597 62.459 47.0578 63.4578L52.2578 66.9266C52.5146 67.0979 52.8163 67.1893 53.125 67.1893C53.4337 67.1893 53.7354 67.0979 53.9922 66.9266L59.1922 63.4578C60.6901 62.4592 61.9183 61.1063 62.7679 59.5191C63.6175 57.932 64.0622 56.1596 64.0625 54.3594V43.75C64.0625 43.3356 63.8979 42.9382 63.6049 42.6451C63.3118 42.3521 62.9144 42.1875 62.5 42.1875H43.75ZM58.9172 51.1047L52.6672 57.3547C52.3742 57.6476 51.9768 57.8122 51.5625 57.8122C51.1482 57.8122 50.7508 57.6476 50.4578 57.3547L47.3328 54.2297L49.5422 52.0203L51.5625 54.0406L56.7078 48.8953L58.9172 51.1047Z" fill="black"/>
      </svg>,
    title: "Data security is a priority",
    description: "Our server infrastructure is operated from world-class data centers to ensure the utmost levels of security, connectivity, and availability at all times.",
  },
  {
    icon: <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.875 42.1875V57.4219C46.875 61.875 49.4531 66.0938 53.6719 67.9688L58.5938 70.3125L63.5156 67.9688C67.5 66.0938 70.3125 61.875 70.3125 57.4219V42.1875H46.875ZM65.625 57.4219C65.625 60.2344 63.9844 62.5781 61.6406 63.75L58.5938 65.1562L55.5469 63.75C53.2031 62.5781 51.5625 60 51.5625 57.4219V46.875H65.625V57.4219ZM37.5 46.875C32.3438 46.875 28.125 42.6562 28.125 37.5C28.125 32.3438 32.3438 28.125 37.5 28.125C42.6562 28.125 46.875 32.3438 46.875 37.5H42.1875C42.1875 34.9219 40.0781 32.8125 37.5 32.8125C34.9219 32.8125 32.8125 34.9219 32.8125 37.5C32.8125 40.0781 34.9219 42.1875 37.5 42.1875V46.875Z" fill="white"/>
      <path d="M37.5 58.5938C25.7812 58.5938 16.4062 49.2188 16.4062 37.5C16.4062 25.7812 25.7812 16.4062 37.5 16.4062C49.2188 16.4062 58.5938 25.7812 58.5938 37.5H53.9062C53.9062 28.3594 46.6406 21.0938 37.5 21.0938C28.3594 21.0938 21.0938 28.3594 21.0938 37.5C21.0938 46.6406 28.3594 53.9062 37.5 53.9062V58.5938Z" fill="white"/>
      <path d="M37.5 70.3125C19.4531 70.3125 4.6875 55.5469 4.6875 37.5C4.6875 19.4531 19.4531 4.6875 37.5 4.6875C55.5469 4.6875 70.3125 19.4531 70.3125 37.5H65.625C65.625 22.0312 52.9688 9.375 37.5 9.375C22.0312 9.375 9.375 22.0312 9.375 37.5C9.375 52.9688 22.0312 65.625 37.5 65.625V70.3125Z" fill="white"/>
      </svg>,
    title: "Enterprise data center security",
    description: "We use state-of-the-art web servers facilitated by Amazon Web Services (AWS). AWS utilities leading security technology to guard its server centers.",
  },
  {
    icon: 
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.1777 10.4626H5.35631C4.6459 10.4626 3.9646 10.7449 3.46227 11.2472C2.95994 11.7495 2.67773 12.4308 2.67773 13.1412V55.9984C2.67773 56.7088 2.95994 57.3901 3.46227 57.8924C3.9646 58.3947 4.6459 58.6769 5.35631 58.6769H69.642C70.3524 58.6769 71.0337 58.3947 71.5361 57.8924C72.0384 57.3901 72.3206 56.7088 72.3206 55.9984V38.7537M32.142 58.6769L26.7849 72.0698M42.8563 58.6769L48.2134 72.0698M21.4277 72.0698H53.5706" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M71.9453 27.3858C71.9453 28.6715 70.9006 29.7162 69.6149 29.7162H44.0613C43.4442 29.7148 42.8528 29.4686 42.417 29.0317C41.9811 28.5949 41.7363 28.0029 41.7363 27.3858V5.26081C41.7363 4.64276 41.9818 4.05003 42.4189 3.613C42.8559 3.17597 43.4486 2.93046 44.0667 2.93046H52.6595C53.1914 2.91478 53.7127 3.08161 54.1366 3.40323C54.5606 3.72484 54.8617 4.18186 54.9899 4.69831L55.6435 7.59117H69.6149C70.232 7.59117 70.8239 7.83595 71.2608 8.27182C71.6977 8.70769 71.9438 9.29905 71.9453 9.91617V27.3858Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    title: "Australian hosted data storage",
    description: "Our servers are Geo-locked  to Australia. Your data remains within Australia, and is thereby bound by Australian privacy law–not foreign legislation.",
  },
  {
    icon: 
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.3586 22.1828V52.8172L37.5008 69.5312L9.64453 52.8172V22.1828L37.5008 5.46875L65.3586 22.1828Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M37.5008 53.2234L51.3492 44.9812V30.0187L37.5008 21.7765L23.6523 30.0187V44.9812L37.5008 53.2234ZM37.5008 53.2234L24.0586 61.3421M51.4211 30.0718L65.3586 38.4203M23.6523 29.9656V13.8171" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30.875 44.1171V35.8296C30.875 34.7358 31.4286 34.189 32.5359 34.189H42.3375C43.5292 34.189 44.125 34.7358 44.125 35.8296V44.1171C44.125 45.2265 43.5714 45.7806 42.4641 45.7796H32.5359C31.4286 45.7796 30.875 45.2254 30.875 44.1171Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34.1989 34.1907C33.3567 27.5657 41.6442 27.5657 40.802 34.1907M37.5004 37.4922C38.8676 37.4922 39.9817 38.6063 39.9817 39.9735C39.9817 41.3407 38.8676 42.4563 37.5004 42.4563C36.1332 42.4563 35.0192 41.3407 35.0192 39.9735C35.0192 38.6063 36.1332 37.4922 37.5004 37.4922Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    title: "Regular penetration tests",
    description: "We perform third-party penetration tests every 6 months, to ensure platform vulnerabilities are patched and can stand up to emerging security threats.",
  },
  {
    icon: 
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.3586 22.1828V52.8172L37.5008 69.5312L9.64453 52.8172V22.1828L37.5008 5.46875L65.3586 22.1828Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M37.5008 53.2234L51.3492 44.9812V30.0187L37.5008 21.7765L23.6523 30.0187V44.9812L37.5008 53.2234ZM37.5008 53.2234L24.0586 61.3421M51.4211 30.0718L65.3586 38.4203M23.6523 29.9656V13.8171" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30.875 44.1171V35.8296C30.875 34.7358 31.4286 34.189 32.5359 34.189H42.3375C43.5292 34.189 44.125 34.7358 44.125 35.8296V44.1171C44.125 45.2265 43.5714 45.7806 42.4641 45.7796H32.5359C31.4286 45.7796 30.875 45.2254 30.875 44.1171Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34.1989 34.1907C33.3567 27.5657 41.6442 27.5657 40.802 34.1907M37.5004 37.4922C38.8676 37.4922 39.9817 38.6063 39.9817 39.9735C39.9817 41.3407 38.8676 42.4563 37.5004 42.4563C36.1332 42.4563 35.0192 41.3407 35.0192 39.9735C35.0192 38.6063 36.1332 37.4922 37.5004 37.4922Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    title: "Data ownership",
    description: "You maintain full control and ownership of your data. Full stop. You'll find this in black and white, in section 17 of our terms and conditions.",
  },
  {
    icon:
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_129_262)">
        <path d="M18.75 9.375H46.8438V14.0625H18.75V9.375ZM9.34375 18.75H14.0312V23.4375H9.34375V18.75ZM9.34375 9.375H14.0312V14.0625H9.34375V9.375ZM9.34375 28.1562H14.0625V32.8438H9.34375V28.1562Z" fill="white"/>
        <path d="M14.0625 37.5H4.6875V4.65625H51.5625V18.75H56.25V6.25C56.25 4.5924 55.5915 3.00269 54.4194 1.83058C53.2473 0.65848 51.6576 0 50 0L6.25 0C4.5924 0 3.00269 0.65848 1.83058 1.83058C0.65848 3.00269 0 4.5924 0 6.25L0 35.875C0 37.5326 0.65848 39.1223 1.83058 40.2944C3.00269 41.4665 4.5924 42.125 6.25 42.125H14.0625V37.5Z" fill="white"/>
        <path d="M68.75 23.4375H25C23.3424 23.4375 21.7527 24.096 20.5806 25.2681C19.4085 26.4402 18.75 28.0299 18.75 29.6875V59.375C18.75 61.0326 19.4085 62.6223 20.5806 63.7944C21.7527 64.9665 23.3424 65.625 25 65.625H42.2812V70.4063H37.5V75H56.25V70.3438H51.5625V65.625H68.75C70.4076 65.625 71.9973 64.9665 73.1694 63.7944C74.3415 62.6223 75 61.0326 75 59.375V29.6875C75 28.0299 74.3415 26.4402 73.1694 25.2681C71.9973 24.096 70.4076 23.4375 68.75 23.4375ZM70.3438 60.9375H23.4688V28.125H70.3438V60.9375Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_129_262">
        <rect width="75" height="75" fill="white"/>
        </clipPath>
        </defs>
      </svg>,
    title: "Staff background checks",
    description: "We perform thorough background checks as part of our hiring process. All staff have been required to provide national police checks as well.",
  },
  {
    icon:
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.125 21.875V15.625C28.125 13.1386 29.1127 10.754 30.8709 8.99587C32.629 7.23772 35.0136 6.25 37.5 6.25C39.9864 6.25 42.371 7.23772 44.1291 8.99587C45.8873 10.754 46.875 13.1386 46.875 15.625V21.875M42.1875 59.375L32.8125 68.75M32.8125 59.375L42.1875 68.75M65.625 59.375L56.25 68.75M56.25 59.375L65.625 68.75M18.75 59.375L9.375 68.75M9.375 59.375L18.75 68.75M42.1875 21.875H32.8125C26.9187 21.875 23.975 21.875 22.1437 23.7062C20.3125 25.5375 20.3125 28.4812 20.3125 34.375V35.9375C20.3125 41.8313 20.3125 44.775 22.1437 46.6062C23.975 48.4375 26.9187 48.4375 32.8125 48.4375H42.1875C48.0813 48.4375 51.025 48.4375 52.8562 46.6062C54.6875 44.775 54.6875 41.8313 54.6875 35.9375V34.375C54.6875 28.4812 54.6875 25.5375 52.8562 23.7062C51.025 21.875 48.0813 21.875 42.1875 21.875Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    title: "Log in security",
    description: "A few conditions must be met when setting a secure password. We recommend every user login then own log in and offer secure password reset functionality.",
  },
  {
    icon: 
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70.3125 44.5312H60.9375V35.1562H56.25V56.25H18.75V18.75H39.8438V14.0625H30.4688V4.6875H25.7812V14.0625H18.75C17.5068 14.0625 16.3145 14.5564 15.4354 15.4354C14.5564 16.3145 14.0625 17.5068 14.0625 18.75V25.7812H4.6875V30.4688H14.0625V44.5312H4.6875V49.2188H14.0625V56.25C14.0625 57.4932 14.5564 58.6855 15.4354 59.5646C16.3145 60.4436 17.5068 60.9375 18.75 60.9375H25.7812V70.3125H30.4688V60.9375H44.5312V70.3125H49.2188V60.9375H56.25C57.4926 60.9356 58.6838 60.4412 59.5625 59.5625C60.4412 58.6838 60.9356 57.4926 60.9375 56.25V49.2188H70.3125V44.5312Z" fill="black"/>
        <path d="M49.2188 49.2188H25.7812V25.7812H49.2188V49.2188ZM30.4688 44.5312H44.5312V30.4688H30.4688V44.5312ZM72.6562 30.4688H67.9688C67.9625 24.2546 65.4913 18.2968 61.0972 13.9028C56.7032 9.50875 50.7454 7.03745 44.5312 7.03125V2.34375C51.988 2.35182 59.137 5.31757 64.4097 10.5903C69.6824 15.863 72.6482 23.012 72.6562 30.4688Z" fill="black"/>
        <path d="M60.9375 30.4688H56.25C56.2463 27.3619 55.0104 24.3833 52.8135 22.1865C50.6167 19.9896 47.6381 18.7537 44.5312 18.75V14.0625C48.8806 14.0687 53.0499 15.7992 56.1254 18.8746C59.2008 21.9501 60.9313 26.1194 60.9375 30.4688Z" fill="black"/>
      </svg>,
    title: "Platform security",
    description: "We've developed a library of technologies and security techniques to secure our platform. Many clients are government or financial organizations.",
  },
  {
    icon:
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M47.3582 7.16719L37.5004 0L27.6426 7.16719L15.4551 7.1625L11.7004 18.75L1.83789 25.9125L5.60664 37.5L1.83789 49.0875L11.6957 56.25L15.4598 67.8422L27.6473 67.8375L37.5004 75L47.3582 67.8328L59.5457 67.8375L63.3051 56.2453L73.1629 49.0875L69.3941 37.5L73.1629 25.9125L63.3051 18.75L59.541 7.15781L47.3582 7.16719ZM54.4363 14.1984H45.066L43.2145 12.8531L37.5004 8.69531L31.7816 12.8531L29.9301 14.1984H20.5645L18.3848 20.925L17.6816 23.1L15.8301 24.4453L10.102 28.5984L12.291 35.325L12.9988 37.5L12.2957 39.675L10.0973 46.4062L15.8254 50.5594L17.677 51.9047L18.3801 54.0797L20.5645 60.8109L27.6379 60.8063H29.9254L31.777 62.1516L37.4957 66.3094L43.2145 62.1516L45.066 60.8063H54.4316L56.6113 54.0797L57.3145 51.9047L59.166 50.5594L64.8941 46.4062L62.7051 39.6797L62.002 37.5L62.7051 35.325L64.8941 28.5984L59.1754 24.4453L57.3191 23.1L56.616 20.925L54.4316 14.1938L54.4363 14.1984ZM42.1879 51.5625C42.1879 52.8057 41.694 53.998 40.815 54.8771C39.9359 55.7561 38.7436 56.25 37.5004 56.25C36.2572 56.25 35.0649 55.7561 34.1858 54.8771C33.3068 53.998 32.8129 52.8057 32.8129 51.5625C32.8129 50.3193 33.3068 49.127 34.1858 48.2479C35.0649 47.3689 36.2572 46.875 37.5004 46.875C38.7436 46.875 39.9359 47.3689 40.815 48.2479C41.694 49.127 42.1879 50.3193 42.1879 51.5625ZM41.016 22.2656C41.016 21.3332 40.6456 20.439 39.9863 19.7797C39.327 19.1204 38.4328 18.75 37.5004 18.75C36.568 18.75 35.6738 19.1204 35.0145 19.7797C34.3552 20.439 33.9848 21.3332 33.9848 22.2656V38.6719C33.9848 39.6043 34.3552 40.4985 35.0145 41.1578C35.6738 41.8171 36.568 42.1875 37.5004 42.1875C38.4328 42.1875 39.327 41.8171 39.9863 41.1578C40.6456 40.4985 41.016 39.6043 41.016 38.6719V22.2656Z" fill="black"/>
      </svg>,
    title: "No spam policy",
    description: "We have a zero spam tolerance policy. We carefully vet clients of their email marketing intentions, and have a server reputation score to prove us.",
  },
  {
    icon: 
      <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.7188 29.6875V21.0938C36.7187 18.4001 35.6487 15.8169 33.7441 13.9122C31.8394 12.0075 29.2561 10.9375 26.5625 10.9375C23.8689 10.9375 21.2856 12.0075 19.3809 13.9122C17.4763 15.8169 16.4063 18.4001 16.4062 21.0938V29.6875M29.6875 29.6875H23.4375C16.1063 29.6875 12.4438 29.6875 9.91875 31.625C9.26847 32.1239 8.68642 32.706 8.1875 33.3562C6.25 35.8812 6.25 39.5438 6.25 46.875C6.25 54.2062 6.25 57.8688 8.1875 60.3938C8.68642 61.044 9.26847 61.6261 9.91875 62.125C12.4438 64.0625 16.1063 64.0625 23.4375 64.0625H29.6875C37.0187 64.0625 40.6813 64.0625 43.2063 62.125C43.8565 61.6261 44.4386 61.044 44.9375 60.3938C46.875 57.8688 46.875 54.2062 46.875 46.875C46.875 39.5438 46.875 35.8812 44.9375 33.3562C44.4386 32.706 43.8565 32.1239 43.2063 31.625C40.6813 29.6875 37.0187 29.6875 29.6875 29.6875Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56.2503 29.6877C56.2503 30.3093 56.4972 30.9054 56.9367 31.345C57.3763 31.7845 57.9724 32.0314 58.594 32.0314C59.2156 32.0314 59.8118 31.7845 60.2513 31.345C60.6909 30.9054 60.9378 30.3093 60.9378 29.6877H56.2503ZM53.1284 27.3439C52.8206 27.3435 52.5158 27.4037 52.2313 27.5212C51.9467 27.6386 51.6881 27.8109 51.4702 28.0282C51.2523 28.2456 51.0793 28.5037 50.9611 28.7879C50.843 29.0721 50.7819 29.3768 50.7815 29.6846C50.7811 29.9924 50.8413 30.2972 50.9587 30.5817C51.0761 30.8662 51.2484 31.1248 51.4658 31.3428C51.6831 31.5607 51.9413 31.7337 52.2255 31.8518C52.5097 31.97 52.8144 32.031 53.1222 32.0314L53.1284 27.3439ZM53.1222 61.7189C52.5006 61.7198 51.9047 61.9675 51.4658 62.4076C51.0268 62.8477 50.7807 63.4442 50.7815 64.0658C50.7824 64.6874 51.0301 65.2832 51.4702 65.7222C51.9103 66.1611 52.5068 66.4073 53.1284 66.4064L53.1222 61.7189ZM42.6659 10.0002C42.393 10.1426 42.1508 10.3374 41.9532 10.5734C41.7556 10.8094 41.6063 11.082 41.5141 11.3756C41.4218 11.6693 41.3882 11.9783 41.4154 12.2849C41.4425 12.5915 41.5298 12.8898 41.6722 13.1627C41.8146 13.4356 42.0093 13.6778 42.2453 13.8754C42.4813 14.0731 42.7539 14.2223 43.0476 14.3145C43.3413 14.4068 43.6502 14.4404 43.9568 14.4132C44.2635 14.3861 44.5618 14.2988 44.8347 14.1564L42.6659 10.0002ZM66.4065 46.8752C66.4065 50.5939 66.4034 53.1877 66.1784 55.1752C65.9597 57.1127 65.5565 58.1814 64.9534 58.9689L68.6722 61.8221C70.0065 60.0846 70.5722 58.0564 70.8378 55.6971C71.0972 53.3908 71.094 50.4846 71.094 46.8752H66.4065ZM64.9534 58.9689C64.5783 59.4548 64.1424 59.8907 63.6565 60.2658L66.5097 63.9846C67.3263 63.3575 68.0472 62.6367 68.6722 61.8221L64.9534 58.9689ZM71.094 46.8752C71.094 43.2658 71.0972 40.3596 70.8378 38.0502C70.5722 35.6939 70.0065 33.6658 68.6722 31.9283L64.9534 34.7814C65.5565 35.5689 65.9597 36.6377 66.1784 38.5752C66.4034 40.5627 66.4065 43.1564 66.4065 46.8752H71.094ZM63.6565 33.4846C64.1461 33.8617 64.5784 34.2939 64.9534 34.7814L68.6722 31.9283C68.0451 31.1117 67.3242 30.3908 66.5097 29.7658L63.6565 33.4846ZM60.9378 29.6877V21.0939H56.2503V29.6877H60.9378ZM60.9378 21.0939C60.9378 17.7787 59.6208 14.5993 57.2766 12.2551C54.9324 9.91091 51.753 8.59395 48.4378 8.59395V13.2814C50.5098 13.2814 52.4969 14.1045 53.9621 15.5697C55.4272 17.0348 56.2503 19.0219 56.2503 21.0939H60.9378ZM53.1222 32.0314C56.3034 32.0377 58.5472 32.0752 60.2753 32.3127C61.9565 32.5377 62.9253 32.9252 63.6565 33.4846L66.5097 29.7658C64.9003 28.5314 63.0409 27.9533 60.9034 27.6658C58.8128 27.3846 56.2472 27.3502 53.1284 27.3439L53.1222 32.0314ZM53.1284 66.4064C56.2503 66.4002 58.8159 66.3689 60.9034 66.0846C63.044 65.7971 64.9003 65.2189 66.5097 63.9846L63.6565 60.2658C62.9253 60.8252 61.9565 61.2127 60.2753 61.4408C58.5472 61.6752 56.3034 61.7127 53.119 61.7189L53.1284 66.4064ZM44.8347 14.1564C45.9097 13.5939 47.1347 13.2814 48.4378 13.2814V8.59395C46.3597 8.59395 44.3972 9.1002 42.6659 10.0002L44.8347 14.1564Z" fill="white"/>
        <path d="M18.75 46.875C18.75 46.875 21.875 48.4375 23.4375 53.125C23.4375 53.125 28.125 43.75 34.375 40.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    title: "Two-factor authentication",
    description: "Two-factor authentication can be activated to require users to verify their authenticity via log-in credentials and SMS verification.",
  },
];

const faq = [
  {
    question: "Does the free plan require a credit card?",
    answer: "No, there is no credit card required for the free plan at sign up. You can send up to 6,000 emails per month (with a sending maximum of 200 emails per day). To access more features and increase sending volume you will be required to upgrade.",
  },
  {
    question: "Do the featured prices include VAT?",
    answer: "Unless otherwise mentioned, all the prices featured on our website do not include VAT and are subject to the French VAT. European companies can be exempt from it if they provide an intra-Community VAT number when they sign up.",
  },
  {
    question: "Can I stop my subscription at anytime?",
    answer: "Yes, if you choose one of our monthly plans. They are without engagement, so you can switch to our free plan at any time.",
  },
  {
    question: "What payment methods do you offer?",
    answer: "In addition to credit card payments, Mail jet also accepts wire transfers. You can subscribe to a prepaid account (the minimum deposit is $50USD). When your plan is renewed, the fee will be taken from your prepaid account. We do not accept cheques.",
  },
  {
    question: "What if I go over my plan's limit?",
    answer: "If you run out of email credit, you can still send more emails, but these will be billed. See price per additional 1,000 emails beyond plan limit.",
  },
  {
    question: "What happened to my unused email credits?",
    answer: "Email credits don’t roll over from one month to another and unused emails expire at the end of each billing cycle. You can upgrade or downgrade at anytime, to adjust your plan according to your needs.",
  },
];
