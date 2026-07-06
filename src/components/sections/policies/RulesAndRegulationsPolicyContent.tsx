import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const companyObjects = [
  "Primary and secondary distribution of finished products.",
  "Management training / consultancy.",
  "Offering internship training opportunities.",
] as const;

const workingHours = [
  { period: "Arrival / Registration / Administration", time: "7:00 – 7:30am" },
  { period: "Management Walk Around", time: "7:30am – 8:00am" },
  { period: "Break Period", time: "12:30pm – 2:00pm" },
  { period: "Afternoon Working Hours", time: "2:00 – 5:00pm" },
] as const;

const oosaRates = [
  { duration: "Return same day", junior: "3,000", supervisors: "5,000", management: "7,000", ceo: "As per expense receipts" },
  { duration: "Overnight", junior: "15,000", supervisors: "18,000", management: "22,000", ceo: "As per expense receipts" },
] as const;

const paidPermissionDays = [
  { occasion: "Wedding", days: "3 days" },
  { occasion: "Paternity leave", days: "3 days" },
  { occasion: "Wedding of the worker's child", days: "1 day" },
  { occasion: "Death of spouse, child, or parents", days: "3 days" },
] as const;

const staffFileDocuments = [
  "Job Application",
  "Employment Letter",
  "Job Responsibilities",
  "Work Contract",
  "Identity Card / Birth Certificate",
  "School Certificates",
  "Motivation / Disciplinary Letters",
  "NSIF Registration",
  "Annual leave letters and absences",
] as const;

const disciplinaryMatrix = [
  {
    type: "Simple Misconduct",
    offences: "Lateness (3× in a month), disobedience, insults, etc.",
    sanctions: "A warning letter",
  },
  {
    type: "Severe Misconduct",
    offences:
      "Lateness (5× in a month), absence without permission (1 day), fighting, refusal to perform duty, drinking alcohol during working hours, etc.",
    sanctions: "Suspension without pay for 1 – 7 days",
  },
  {
    type: "Gross Misconduct",
    offences:
      "Theft, smoking, cheating, lies telling, fraud, refusal to sell, uncompleted route plan, absence without permission for more than 5 days, disclosure of company confidential information, sexual harassment, LGBTQ tendencies, etc.",
    sanctions: "8 days suspension without pay; dismissal depending on crime",
  },
] as const;

const articles = [
  {
    number: 1,
    title: "Subject",
    content: (
      <ul className="mt-3 space-y-2">
        <li className="flex items-start gap-2 text-sm text-brand-body">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
          The internal rules and regulations of G3-Biz Ltd are established in compliance with applicable laws and
          regulations in the Republic of Cameroon.
        </li>
        <li className="flex items-start gap-2 text-sm text-brand-body">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
          They describe provisions including recruitment conditions, working conditions, remuneration, rights and
          obligations of workers, leave, compensations and benefits, disciplinary measures, and health and safety
          measures.
        </li>
        <li className="flex items-start gap-2 text-sm text-brand-body">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
          Additional rules and policies may be issued from time to time and communicated to staff and posted on
          noticeboards in the company.
        </li>
      </ul>
    ),
  },
  {
    number: 2,
    title: "Recruitment Policy",
    content: (
      <div className="mt-3 space-y-3 text-sm text-brand-body">
        <p>
          <strong>2.1</strong> All applicants will be assessed through the company&apos;s recruitment process (HRM
          Planning, job analysis, job description, job advertisement and application pool), taking into consideration
          the basic skills required to perform the job.
        </p>
        <p>
          <strong>2.2</strong> Whatever the terms of recruitment and vacancy, the applicant must meet the following
          conditions:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Having intellectual and technical requirements to fill the proposed position.</li>
          <li>
            Providing curriculum vitae, written application, copies of academic qualifications, certificates of previous
            employment, and personal documents (NIC, NSIF, birth certificate, marriage certificate, and any other
            relevant document). All information must be true and correct; falsification may lead to cancellation of
            employment and criminal action.
          </li>
          <li>Accepting to undergo tests and examinations if required (mandatory for managerial positions).</li>
          <li>Providing a medical certificate proving fitness for the assigned post.</li>
          <li>Providing other relevant documents as required by the company.</li>
          <li>An undertaking to respect the company culture and policies if recruited.</li>
          <li>
            Undergoing a selection process which may include written tests, panel interviews, and aptitude tests.
          </li>
        </ol>
      </div>
    ),
  },
  {
    number: 3,
    title: "Probationary Period",
    content: (
      <ul className="mt-3 space-y-2">
        {[
          "All newly recruited workers are placed under a probationary period not exceeding three (03) months, renewable once.",
          "During probation, the worker shall be trained on company vision, culture, ways of working, and rules/regulations, and tested on the job.",
          "Only upon successful completion of probation is the worker confirmed; otherwise employment is terminated.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: 5,
    title: "Overtime",
    content: (
      <p className="mt-3 text-sm text-brand-body">
        Genuine, justified and pre-approved overtime shall be calculated and paid in accordance with legislation in
        force. Where the nature of the job makes this complicated, a fixed overtime pay of 25% of basic salary shall be
        paid monthly to the staff.
      </p>
    ),
  },
  {
    number: 6,
    title: "Remuneration",
    content: (
      <div className="mt-3 space-y-2 text-sm text-brand-body">
        <p>
          <strong>6.1</strong> G3-Biz Ltd shall negotiate remuneration (wage, salary) with the worker at the time of
          hiring.
        </p>
        <p>
          <strong>6.2</strong> Any remuneration will be paid in accordance with the company&apos;s standard payroll
          procedures and labour/tax laws.
        </p>
      </div>
    ),
  },
  {
    number: 9,
    title: "Permission for Unpaid Absence",
    content: (
      <div className="mt-3 space-y-2 text-sm text-brand-body">
        <p>
          <strong>9.1</strong> Requests must be made in writing at least seven (07) working days in advance, except for
          justifiable emergencies.
        </p>
        <p>
          <strong>9.2</strong> Approved in writing, in advance, by the Line Manager prior to taking absence.
        </p>
        <p className="rounded-lg border border-brand-border bg-brand-light p-3">
          <strong>NB:</strong> Permission days requested may be approved, reduced or rejected as determined fairly by
          the Line Manager based on work exigencies and the necessity of the absence.
        </p>
      </div>
    ),
  },
  {
    number: 10,
    title: "Loss or Damage of Company Property",
    content: (
      <p className="mt-3 text-sm text-brand-body">
        Loss or damage to company property due to misconduct or negligence of the worker shall attract disciplinary
        sanctions plus payment for the loss or damage by the worker.
      </p>
    ),
  },
  {
    number: 11,
    title: "Access to the Company's Premises",
    content: (
      <p className="mt-3 text-sm text-brand-body">
        All workers and persons covered by these Internal Regulations must strictly respect access rules. No one should
        be accompanied by an unauthorized person without prior approval from the Depot Manager. Non-respect will be
        subject to disciplinary sanctions.
      </p>
    ),
  },
  {
    number: 12,
    title: "Clocking",
    content: (
      <p className="mt-3 text-sm text-brand-body">
        Registration using the provided system to indicate entry and exit times is obligatory for all workers and
        authorized visitors/customers. Customers and visitors who do not comply will be prohibited from entering depot
        premises; workers will be considered absent for that day.
      </p>
    ),
  },
  {
    number: 13,
    title: "Use of Logistical and Computer Resources",
    content: (
      <p className="mt-3 text-sm text-brand-body">
        Use of G3-Biz Ltd assets for personal interest is not authorized. Use of cars, trucks, internet, computers,
        printers, and all other materials will be monitored; abuse may lead to appropriate disciplinary sanctions.
      </p>
    ),
  },
  {
    number: 14,
    title: "Assiduity",
    content: (
      <div className="mt-3">
        <ul className="space-y-2">
          {["Persistence", "Effort — at work, doing work!", "Commitment", "Attentiveness"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm font-semibold text-brand-heading">
          Loitering or idling during working hours shall be sanctioned.
        </p>
      </div>
    ),
  },
  {
    number: 16,
    title: "Safety / Accident Prevention",
    content: (
      <div className="mt-3 space-y-2 text-sm text-brand-body">
        <p>
          <strong>16.1</strong> Workers must take utmost care for personal security and refrain from carelessness and
          disorder prejudicial to their own and others&apos; safety.
        </p>
        <p>
          <strong>16.2</strong> Workers shall immediately inform the Depot Manager or responsible staff of every
          imminent danger.
        </p>
        <p>
          <strong>16.3</strong> Safety and security guidelines must be respected in and out of the premises.
        </p>
        <p>
          <strong>16.4</strong> Use of PPE is obligatory at all times during working hours. Workers found without
          PPE will be sent home immediately and declared absent for that day.
        </p>
      </div>
    ),
  },
  {
    number: 17,
    title: "Sanitation",
    content: (
      <div className="mt-3 space-y-2 text-sm text-brand-body">
        <p>
          <strong>17.1</strong> Work offices, warehouse, trucks, toilets, clothing, tools, etc. must be kept clean
          daily.
        </p>
        <p>
          <strong>17.2</strong> Remove waste, trash, and garbage first thing every morning to keep the work environment
          free from dirt, disease, and infection.
        </p>
        <p>
          <strong>17.3</strong> Sanitation is the responsibility of every worker.
        </p>
      </div>
    ),
  },
] as const;

export function RulesAndRegulationsPolicyContent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-4xl">
          <span className="top-head">Internal Regulations</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">Rules and Regulations</h2>
          <p className="mt-4 text-brand-body">
            Global Strategic Business Company (G3-Biz Ltd), created on June 22<sup>nd</sup>, 2005, is a limited
            liability company with head office in Mile 2, Limbe – South West Region, P.O. Box 291, Limbe.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-10 card-modern p-6">
          <h3 className="font-serif text-lg font-bold text-brand-heading">Main Objects of G3-Biz Ltd</h3>
          <ul className="mt-3 space-y-2">
            {companyObjects.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Article 4: Working Hours</h3>
              <p className="mt-2 text-sm text-brand-body">Work days: Monday – Saturday (except otherwise stated).</p>
              <div className="mt-4 space-y-2">
                {workingHours.map((row) => (
                  <div
                    key={row.period}
                    className="flex items-center justify-between gap-4 rounded-lg border border-brand-border bg-brand-light px-3 py-2 text-sm"
                  >
                    <span className="text-brand-body">{row.period}</span>
                    <span className="shrink-0 font-semibold text-brand-heading">{row.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-body">
                Beyond working hours and on public holidays, extra work shall earn overtime payment to the employee.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Article 8: Leave &amp; Permissions</h3>
              <div className="mt-3 space-y-3 text-sm text-brand-body">
                <p>
                  <strong>8.1</strong> Paid annual leave at one and a half workdays per month of continuous service for
                  twelve (12) months.
                </p>
                <p>
                  <strong>8.2</strong> Annual leave may be deferred due to company exigencies, not exceeding two (02)
                  years.
                </p>
                <p>
                  <strong>8.3</strong> Paid permission up to ten (10) working days per year:
                </p>
                <ul className="space-y-1 pl-4">
                  {paidPermissionDays.map((row) => (
                    <li key={row.occasion}>
                      {row.occasion} = {row.days}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>8.4</strong> Maternity leave: fourteen (14) weeks including delivery date, plus 1 hour daily
                  to breastfeed for fifteen (15) months.
                </p>
                <p>
                  <strong>8.5</strong> Illness: call Line Manager at least 1 hour before work; provide medical
                  justification on return.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimateIn className="mt-10">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Article 7: Benefits — OOSA Allowance</h3>
          <p className="mt-2 text-sm text-brand-body">
            Out of Station Allowance applies for distance greater than 50km one way. Transport fares are paid separately
            by the company. OOSA duty must be approved in advance by the Line Manager. A brief written report must be
            presented within 24 hours, especially for overnight missions.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-brand-border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Duration</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Junior Staff</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Supervisors</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Management</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">CEO / Founder</th>
                </tr>
              </thead>
              <tbody>
                {oosaRates.map((row) => (
                  <tr key={row.duration} className="border-t border-brand-border">
                    <td className="px-4 py-3 font-medium text-brand-heading">{row.duration}</td>
                    <td className="px-4 py-3 text-brand-body">{row.junior} FCFA</td>
                    <td className="px-4 py-3 text-brand-body">{row.supervisors} FCFA</td>
                    <td className="px-4 py-3 text-brand-body">{row.management} FCFA</td>
                    <td className="px-4 py-3 text-brand-body">{row.ceo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-brand-border bg-brand-light p-4 text-sm text-brand-body">
              <strong>Training:</strong> The company identifies training needs and provides training at its cost.
              Personal development training may be subvented up to 50% if beneficial to the company.
            </div>
            <div className="rounded-lg border border-brand-border bg-brand-light p-4 text-sm text-brand-body">
              <strong>Social Security:</strong> All confirmed workers are registered with the National Social Insurance
              Fund in conformity with applicable laws and regulations.
            </div>
          </div>
        </AnimateIn>

        <AnimateIn className="mt-10 card-modern p-6">
          <h3 className="font-serif text-lg font-bold text-brand-heading">Article 15: Staff Files</h3>
          <p className="mt-2 text-sm text-brand-body">
            Each staff must provide copies of the following documents for filing by the HOD HR/Admin:
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {staffFileDocuments.map((doc) => (
              <div key={doc} className="flex items-start gap-2 text-sm text-brand-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                {doc}
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="mt-12 space-y-5">
          {articles.map((article) => (
            <AnimateIn key={article.number} className="card-modern p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">
                Article {article.number}: {article.title}
              </h3>
              {article.content}
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-12">
          <h3 className="font-serif text-2xl font-bold text-brand-heading-alt">Article 18: Discipline</h3>
          <div className="mt-4 space-y-3 text-sm text-brand-body">
            <p>
              <strong>18.1</strong> All workers are required to behave with the utmost discretion regarding all business
              of the company.
            </p>
            <p>
              <strong>18.2</strong> Workers shall take good and diligent care of materials at their disposal. All workers
              shall respect customers and render courteous and diligent service at all times. Defaulters shall be
              severely sanctioned.
            </p>
            <p>Every worker is expected to perform duties in a disciplined, friendly and collaborative manner.</p>
          </div>
          <div className="mt-6 overflow-x-auto rounded-xl border border-brand-border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Type</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Possible Offences</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Sanctions</th>
                </tr>
              </thead>
              <tbody>
                {disciplinaryMatrix.map((row) => (
                  <tr key={row.type} className="border-t border-brand-border align-top">
                    <td className="px-4 py-3 font-medium text-brand-heading">{row.type}</td>
                    <td className="px-4 py-3 text-brand-body">{row.offences}</td>
                    <td className="px-4 py-3 text-brand-body">{row.sanctions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2 text-sm text-brand-body">
            <p>
              <strong>18.3</strong> Drinking alcohol and smoking cigarettes (and derivatives) during working hours is
              forbidden.
            </p>
            <p>
              <strong>18.4</strong> High moral standards are expected.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
