import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const definitions = [
  {
    term: "Misconduct",
    description:
      "Any act or omission that violates company policies, rules, regulations, or expected standards of conduct.",
  },
  {
    term: "Minor Misconduct",
    description:
      "Relatively minor transgressions such as occasional tardiness, short unauthorized absence, minor insubordination, or low-level policy violations.",
  },
  {
    term: "Serious Misconduct",
    description:
      "More severe offenses including harassment, threats, theft, fraud, violence, serious safety violations, or repeated minor misconduct.",
  },
  {
    term: "Gross Misconduct",
    description:
      "The most serious offenses, including theft, cheating, fraud, refusal to perform duties, disclosure of confidential information, and sexual harassment.",
  },
] as const;

const reportingChannels = [
  "Report directly to your immediate supervisor.",
  "Report to the Human Resources Department.",
  "Submit anonymously through a designated email or message.",
] as const;

const investigationSteps = [
  "Interview the employee who reported the misconduct.",
  "Interview the accused employee.",
  "Gather and review relevant evidence before taking action.",
] as const;

const disciplinaryFlow = [
  {
    title: "5.1 Informal Counseling",
    detail:
      "For minor issues, direct line managers first use verbal counseling for clarification, correction, and performance improvement.",
  },
  {
    title: "5.2 Query Letter",
    detail:
      "For minor misconduct, a formal query letter is issued. The employee has 48 hours to respond in writing.",
  },
  {
    title: "5.3 Warning Letter",
    detail:
      "If improvement is unsatisfactory, or for serious misconduct, a formal warning letter is issued with clear expectations and timelines.",
  },
  {
    title: "5.4 Disciplinary Actions",
    detail:
      "Depending on severity: suspension (1-7 days), probation, demotion, or termination for gross misconduct.",
  },
] as const;

const categoryMatrix = [
  {
    category: "Minor Misconduct",
    examples: [
      "Tardiness (e.g., 3 times within a month)",
      "Short unauthorized absence",
      "Minor insubordination",
      "Low-level policy violations (dress code, misuse of resources)",
    ],
    consequences: ["Verbal counseling", "Written query letter", "Relevant corrective sessions"],
  },
  {
    category: "Serious Misconduct",
    examples: [
      "Repeated tardiness (e.g., 5 times in a month)",
      "Extended unauthorized absence",
      "Fighting or refusal to perform duties",
      "Alcohol use during working hours",
      "Harassment, threats, or serious safety violations",
    ],
    consequences: [
      "Written warning letter",
      "Suspension without pay (1-7 days)",
      "Probation with close monitoring",
      "Mandatory behavior-related training",
    ],
  },
  {
    category: "Gross Misconduct",
    examples: [
      "Theft, fraud, deliberate dishonesty",
      "Unauthorized disclosure of confidential information",
      "Severe or repeated sexual harassment",
      "Excessive unauthorized absence",
    ],
    consequences: ["Immediate termination, subject to due process and applicable labor provisions."],
  },
] as const;

const governanceItems = [
  "Appeals must be submitted in writing to HR within 24 hours of disciplinary notification.",
  "All disciplinary matters are handled with strict confidentiality on a need-to-know basis.",
  "Policy is reviewed at least annually and may be modified as needed.",
  "Employee Assistance Program (EAP) support is available for personal challenges affecting performance.",
  "Training on policy, conduct, and behavior expectations is provided across the company.",
] as const;

export function DisciplinaryPolicyContent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-4xl">
          <span className="top-head">Workplace Conduct</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">Disciplinary Policy</h2>
          <p className="mt-4 text-brand-body">
            G3 Biz Ltd is committed to a respectful and professional workplace. This policy defines misconduct,
            reporting channels, investigation standards, and fair disciplinary actions.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Definitions</h3>
              <div className="mt-3 space-y-3">
                {definitions.map((item) => (
                  <div key={item.term}>
                    <p className="text-sm font-semibold text-brand-heading">{item.term}</p>
                    <p className="mt-1 text-sm text-brand-body">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Reporting Misconduct</h3>
              <ul className="mt-3 space-y-2">
                {reportingChannels.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-brand-body">
                Reports are treated confidentially and investigated thoroughly. Retaliation for reporting is strictly
                prohibited.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Investigative Procedures</h3>
              <ul className="mt-3 space-y-2">
                {investigationSteps.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Progressive Discipline Flow</h3>
              <div className="mt-3 space-y-3">
                {disciplinaryFlow.map((step) => (
                  <div key={step.title} className="rounded-lg border border-brand-border bg-brand-light p-3">
                    <p className="text-sm font-semibold text-brand-heading">{step.title}</p>
                    <p className="mt-1 text-sm text-brand-body">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimateIn className="mt-12">
          <h3 className="font-serif text-2xl font-bold text-brand-heading-alt">Appendix: Misconduct Categories</h3>
          <div className="mt-5 overflow-x-auto rounded-xl border border-brand-border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Category</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Examples</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Consequences</th>
                </tr>
              </thead>
              <tbody>
                {categoryMatrix.map((row) => (
                  <tr key={row.category} className="border-t border-brand-border align-top">
                    <td className="px-4 py-3 font-medium text-brand-heading">{row.category}</td>
                    <td className="px-4 py-3 text-brand-body">
                      <ul className="space-y-1">
                        {row.examples.map((example) => (
                          <li key={example}>- {example}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-3 text-brand-body">
                      <ul className="space-y-1">
                        {row.consequences.map((consequence) => (
                          <li key={consequence}>- {consequence}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        <AnimateIn className="mt-12 card-modern p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Appeals, Confidentiality, and Support</h3>
          <ul className="mt-3 space-y-2">
            {governanceItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-brand-body">
            Disclaimer: This policy serves as a general guideline and does not constitute an employment contract.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
